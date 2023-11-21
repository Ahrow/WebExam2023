namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{

    private readonly F1APIContext context;

    public DriversController(F1APIContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        { 
            List<Driver> drivers = await context.Drivers.ToListAsync();
            if( drivers != null )
            {
                return Ok(drivers);
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
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
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

    [HttpGet]
    [Route("[action]")]
    public async Task<ActionResult<List<Driver>>> Get(string name)
    {
        try
        {
            List<Driver> drivers = await context.Drivers.Where(d => d.Name.Contains(name)).ToListAsync();
            if (drivers != null)
            {
                return Ok(drivers);
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
public async Task<ActionResult<Driver>> Post(Driver driver)
{
    try
    {
        context.Drivers.Add(driver);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = driver.Id }, driver);
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
        Driver? driver = await context.Drivers.FindAsync(id);
        if (driver != null) {
            context.Drivers.Remove(driver);
            await context.SaveChangesAsync();
        }
        return NoContent();
    } catch {
        return StatusCode(500);
    }
}



    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Driver editedDriver)
    {
        if (id != editedDriver.Id)
        {
            return BadRequest();
        }
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);
            if (driver != null)
            {
                context.Entry(driver).CurrentValues.SetValues(editedDriver);
                await context.SaveChangesAsync();
            }
            return NoContent();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.ToString());
            return StatusCode(500);
        }
    }
}



  
