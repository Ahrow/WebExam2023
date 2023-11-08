namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{

    private readonly F1APIContext context;

    public RacesController(F1APIContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try
        { 
            List<Race> races = await context.Races.ToListAsync();
            if( races != null )
            {
                return Ok(races);
            }
            else
            {
                return NotFound();
            }            
        }
        catch
        {
            return StatusCode(500); 
        }
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> Get(int id)
    {
        try
        {
            Race? race = await context.Races.FindAsync(id);
            if (race != null)
            {
                return Ok(race);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
public async Task<ActionResult<Race>> Post(Race race)
{
    try
    {
        context.Races.Add(race);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = race.Id }, race);
    }
    catch
    {
        return StatusCode(500);
    }
    
}
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    try {
        Race? race = await context.Races.FindAsync(id);
        if (race != null) {
            context.Races.Remove(race);
            await context.SaveChangesAsync();
        }
        return NoContent();
    } catch {
        return StatusCode(500);
    }
}

[HttpPut]
public async Task<IActionResult> Put(Driver editedRace) {
    context.Entry(editedRace).State = EntityState.Modified;
    await context.SaveChangesAsync();
    return NoContent();
}
}