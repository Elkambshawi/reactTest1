import { createBrowserRouter , RouterProvider } from 'react-router-dom';
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
function App() {

  let routes = createBrowserRouter([

    {path:"/",element: <Layout />,
      

      },
  ])

  return (<>

  <Provider store={store}>

        <RouterProvider  router={routes}/>
  
  </Provider>
  
  </>

  );
}

export default App;
