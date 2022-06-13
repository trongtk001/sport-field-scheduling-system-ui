import callApi from "../util/api";


function searchService(searchValue) {
  callApi(
    "field/search",
    "GET",
    { q: searchValue, page: "1", size: "6" },
    null
  ).then((res) => {
    return res.data;
  });
}

export default searchService;
