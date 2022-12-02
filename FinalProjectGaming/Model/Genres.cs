
public class Genres
{
    public int count { get; set; }
    public Result[] results { get; set; }
}

public class Result
{
    public int id { get; set; }
    public string name { get; set; }
    public string slug { get; set; }
    public int games_count { get; set; }
    public string image_background { get; set; }
    public Game[] games { get; set; }
}

public class Game
{
    public int id { get; set; }
    public string slug { get; set; }
    public string name { get; set; }
    public int added { get; set; }
}
