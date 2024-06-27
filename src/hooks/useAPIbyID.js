export function useAPIbyID() {
  function callAPI(id, setter, setLoaded) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((json) => setter(json.meals[0]))
      .finally(() => setLoaded(true));
  }

  return callAPI;
}
