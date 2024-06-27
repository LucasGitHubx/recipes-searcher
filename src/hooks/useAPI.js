export function useAPI() {
  function callAPI(meal, setter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((res) => res.json())
      .then((json) => setter(json));
  }

  return callAPI;
}
