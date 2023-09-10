import {
  createBrowserRouter, RouterProvider, createRoutesFromElements, Route,
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import './App.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import Details from '../Details/Details';
import Shop from '../Shop/Shop'
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import Cart from '../Cart/Cart';
import User from '../User/User';
import Contact from '../Contact/Contact';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path="shop" element = {<Shop />} />
        <Route path="about" element = {<About />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="details/:id" element = {<Details />} />
        <Route path="cart" element = {<Cart />} />
        <Route path="user" element = {<User />} />
      </Route>
    )
  )
function App() {
  
  // const router = createBrowserRouter([

  //   {path:"/",element: <Layout />,
  //     children: [
  //       {index:true,element:<Home/>},
  //       {path:"shop",element:<Shop/> },
  //       {path:"about",element:<About/> },
  //       {path:"contact",element:<Contact/> },
  //       {path:"details/:id", element: <Details /> },
  //       {path:"cart", element: <Cart/> },
  //       {path:"user", element: <User/> },

  //       ]

  //     },
  // ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
