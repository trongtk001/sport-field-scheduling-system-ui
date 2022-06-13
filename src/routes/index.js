import Home from "../Page/Home/home.js";
import SearchPage from "../Page/Search/index.js";
import searchService from "../Service/searchService.js";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: SearchPage,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
