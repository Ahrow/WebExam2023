namespace F1API;

using F1API.Interfaces;

public class Car : ICar {
     public int Id { get; set; }
    public string? Name { get; set; }
    public int? Speed { get; set; }
    public int? Handling { get; set; }
    public int? Acceleration {get; set;}
    public string? ImgUrl {get; set;}
}