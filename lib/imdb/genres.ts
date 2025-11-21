export async function getGenres() {
  const url = "https://api.imdbapi.dev/interests";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await res.json();
  return data;
}
