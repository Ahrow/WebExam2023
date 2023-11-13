namespace F1API.Interfaces;

public interface ICar {
    public int Id { get; set; }
    public string? Name { get; set; }
    public int? Speed { get; set; }
    public int? Handling { get; set; }
    public int? Acceleration {get; set;}
    public string? ImgUrl {get; set;}
}