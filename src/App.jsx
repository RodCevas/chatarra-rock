import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import "./App.css";
import InicioPage from "./pages/InicioPage";
import DiscografiaPage from "./pages/DiscografiaPage";
import VideosPage from "./pages/VideosPage";
import BiografiaPage from "./pages/BiografiaPage";
import EventosPage from "./pages/EventosPage";
import ContactoPage from "./pages/ContactoPage";
import RiderPage from "./pages/RiderPage";
import CachePage from "./pages/CachePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: async () => redirect("/inicio"),
        },
        { path: "/inicio", element: <InicioPage /> },
        { path: "/discografia", element: <DiscografiaPage /> },
        { path: "/videos", element: <VideosPage /> },
        { path: "/biografia", element: <BiografiaPage /> },
        { path: "/eventos", element: <EventosPage /> },
        { path: "/contacto", element: <ContactoPage /> },
        { path: "/rider", element: <RiderPage /> },
        { path: "/cache", element: <CachePage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ""),
  }
);

function App() {
  return (
    <div className="container-fluid">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
