namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{

    private readonly F1APIContext context;

    public CarsController(F1APIContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Car>>> Get()
    {
        try
        { 
            List<Car> cars = await context.Cars.ToListAsync();
            if( cars!= null )
            {
                return Ok(cars);
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
    public async Task<ActionResult<Car>> Get(int id)
    {
        try
        {
            Car? car = await context.Cars.FindAsync(id);
            if (car != null)
            {
                return Ok(car);
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

}



  
