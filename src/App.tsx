import Home from "./pages/Home.js";
import Layout from "./components/Layout.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.js";
import ProjectPage from "./pages/ProjectPage.js";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "projects",
                    element: <ProjectPage />,
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
