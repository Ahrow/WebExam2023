namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;
using F1API.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class teamsController : ControllerBase
{

    private readonly F1APIContext context;

    public teamsController(F1APIContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Team>>> Get()
    {
        try
        { 
            List<Team> teams = await context.Teams.ToListAsync();
            if( teams != null )
            {
                return Ok(teams);
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
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? team = await context.Teams.FindAsync(id);
            if (team != null)
            {
                return Ok(team);
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
public async Task<ActionResult<Team>> Post(Team team)
{
    try
    {
        context.Teams.Add(team);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = team.Id }, team);
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
        Team? team = await context.Teams.FindAsync(id);
        if (team != null) {
            context.Teams.Remove(team);
            await context.SaveChangesAsync();
        }
        return NoContent();
    } catch {
        return StatusCode(500);
    }
}
[HttpPut]
public async Task<IActionResult> Put(Team editedTeam) {
    context.Entry(editedTeam).State = EntityState.Modified;
    await context.SaveChangesAsync();
    return NoContent();
}
}