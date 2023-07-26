import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root/RootLayout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/HomePage";
import CardDetailPage from "./pages/CardDetailPage";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import CardRecipes from "./pages/CardRecipes";

function App() {
  const rounte = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "card+detail", element: <CardDetailPage /> },
        { path: "cardRecipe", element: <CardRecipes /> },
      ],
    },
  ]);

  return <RouterProvider router={rounte} />;
}

export default App;
