import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Layout from './Pages/Layout';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
        {
  path: "",
  element: <Home/>
},
{
  path: "blog",
  element: <Blog/>
},
{
  path: "about",
  element: <About/>
},
{
  path: "*",
  element: <NotFound/>
}
    ]
  }
])

function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
