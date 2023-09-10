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

const router = createBrowserRouter([

  {path:"/",element: <Layout />,
    children: [
      {index:true,element:<Home/>},
      {path:"shop",element:<Shop/> },
      {path:"about",element:<About/> },
      {path:"contact",element:<Contact/> },
      {path:"details/:id", element: <Details /> },
      {path:"cart", element: <Cart/> },
      {path:"user", element: <User/> },

      ]

    },
])
function App() {
  

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>

  );
}

export default App;
