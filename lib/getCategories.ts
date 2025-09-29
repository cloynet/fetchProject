export async function getCategories() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
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
    throw new Error(`Kategoriler getirlemedi: ${errorText}`);
  }
  return res.json();
}
