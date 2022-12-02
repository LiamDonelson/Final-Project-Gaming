using RestSharp;

namespace FinalProjectGaming.Model
{
    public class GameDAL
    {
        public Genres GetAllGenres()
        {
            RestClient client = new RestClient($"https://api.rawg.io/api/genres?key=393c9451fd3b4d60af2a350a4ff3c9af");
            RestRequest request = new RestRequest();
            var response = client.GetAsync<Genres>(request);
            Genres gg = response.Result;

            return gg;

        }

        /*public SWHomeWorld GetPlanet(int id)
        {
            RestClient client = new RestClient($"https://swapi.dev/api/planets/{id}/");
            RestRequest request = new RestRequest();
            var response = client.GetAsync<SWHomeWorld>(request);
            SWHomeWorld hw = response.Result;

            return hw;
        }*/

    }
}
