import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./root/RootLayout"
import ErrorPage from "./pages/error/ErrorPage"
import HomePage from "./pages/HomePage"

function App() {
  const rounte = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
    {index: true, element: <HomePage /> }]
  }])

  return <RouterProvider router={rounte} />
}

export default App
