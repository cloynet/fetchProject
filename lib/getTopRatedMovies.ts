export async function getTopRatedMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN3}`,
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`En çok oy alan filmler getirilemedi: ${errorText}`);
  }

  const data = await res.json();
  return data.results;
}
