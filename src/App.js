import { Navbar } from './util/Navbar';
import "./App.css"
import { StudentPage } from './pages/StudentPage';
import { Footer } from './components/Footer';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RootLayout } from './pages/Root';
import { useSelector } from 'react-redux';




function App() {

  const auth =useSelector(state=>state.auth);

  const router=createBrowserRouter([
    { path: "/",
      element: <RootLayout/>,
      children:[
       {index:true ,element:!auth?<HomePage/>:<StudentPage/>}
      ]
    },
    {}
  ]);
  

  return (
    <>
    
    <RouterProvider router={router}/>
      
    </>
  
  );
}

export default App;
