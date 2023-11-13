namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TracksController : ControllerBase
{

    private readonly F1APIContext context;

    public TracksController(F1APIContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Track>>> Get()
    {
        try
        { 
            List<Track> tracks = await context.Tracks.ToListAsync();
            if( tracks != null )
            {
                return Ok(tracks);
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
    public async Task<ActionResult<Track>> Get(int id)
    {
        try
        {
            Track? track = await context.Tracks.FindAsync(id);
            if (track != null)
            {
                return Ok(track);
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