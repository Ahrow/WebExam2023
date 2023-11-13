namespace F1API.Interfaces;

public interface ITrack {
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Distance { get; set; }
    public string? Turns { get; set; }
    public string? ImgUrl {get; set;}
    public int? Laps {get; set;}
}