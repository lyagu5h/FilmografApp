import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import FilmPage from "../pages/FilmPage";
import AddFilm from "../pages/AddFilm";
import EditFilm from "../pages/EditFilm";
import Error from "../pages/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: (
            <Layout>
                <Error />
            </Layout>
        ),
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "favorites",
                Component: Favourites,
            },
            {
                path: "film/:id",
                Component: FilmPage,
            },
            {
                path: "addFilm",
                Component: AddFilm,
            },
            {
                path: "film/:id/edit",
                Component: EditFilm,
            },
        ],
    },
]);