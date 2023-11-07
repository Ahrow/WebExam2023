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
}