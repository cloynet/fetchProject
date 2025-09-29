export async function getSingleCategory(genreId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1&sort_by=popularity.desc`,
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
    throw new Error(`Kategori Getirilemedi: ${errorText}`);
  }
  return res.json();
}
