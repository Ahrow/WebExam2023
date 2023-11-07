namespace F1API.Contexts;

using F1API.Interfaces;
using Microsoft.EntityFrameworkCore;

public class F1APIContext : DbContext
{
    public F1APIContext(DbContextOptions<F1APIContext> options):base(options){}   

    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Race> Races {get; set;}
    public DbSet<Team> Teams {get; set;}
}