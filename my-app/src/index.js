import ReactDOM from 'react-dom';
import Main from './Main';
import Home from './Home'
import OptimizedMain from './OptimizedMain';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Read from './Read';
import NavBar from './NavBar';
import styles from './index.css';
import Aboutus from './Aboutus';
import Contact from './Contact';
import First from './First';
import Second from './Second';
import Third from './Third';
const myRoutes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Main/>
  },
  {
    path:"/optLogin",
    element:<OptimizedMain/>
  },
  {
    path:"/read",
    element:<Read/>
  },
  {
    path:"/NavBar",
    element:<NavBar/>
  },
  {
    path:"/aboutus",
    element:<Aboutus/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/first",
    element:<First/>
  },
  {
    path:"/second",
    element:<Second/>
  },
  {
    path:"/third",
    element:<Third/>
  }
])
ReactDOM.render(
  <>
  <RouterProvider router={myRoutes}/>
  </>,
  document.getElementById('root'),
  ()=>{console.log("done")}
)