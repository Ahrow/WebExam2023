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
}