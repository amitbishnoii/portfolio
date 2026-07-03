import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";

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
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
