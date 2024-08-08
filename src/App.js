import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import NotFound from './components/Notfound/Notfound';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/categories', element: <Categories /> },
      { path: '/brands', element: <Brands /> },
      { path: '/cart', element: <Cart /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
