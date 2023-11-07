namespace F1API;

public interface IRace {
    public int Id { get; set; }
    public string? WinnerName { get; set; }
    public string? WinnerTime { get; set; }
    public string? GrandPrix { get; set; }
    public int NumberOfLaps { get; set; }
}