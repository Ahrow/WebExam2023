namespace F1API.Interfaces;

public interface IDriver {
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Nationality { get; set; }
    public string? ImgUrl {get; set;}
    public int? Skill {get; set;}
    public int? Aggression {get; set;}
    public int? Experience {get; set;}
}