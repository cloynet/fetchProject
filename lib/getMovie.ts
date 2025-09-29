export async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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
    throw new Error(`Film detayları getirilemedi: ${errorText} `);
  }
  return res.json();
}
