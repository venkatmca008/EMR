import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Auth from "../views/Auth/Auth.jsx";
import Unauth from "../views/Unauth/Unauth.jsx";
import Search from "../views/Search/Search.jsx";

var indexRoutes = [
    {
        path: "/auth",
        name: "Auth",
        component: Auth
    },
    {
        path: "/unauth",
        name: "Unauth",
        component: Unauth
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    { path: "/", name: "Home", component: Dashboard },
];

export default indexRoutes;
