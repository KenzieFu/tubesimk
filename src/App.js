
import "./App.css"


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RootLayout } from './pages/Root';

import {StudentPage} from './pages/StudentPage'



function App() {

  


  const router=createBrowserRouter([
    { path: "/",
      element: <RootLayout/>,
      children:[
       {index:true ,element:<HomePage/>}
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
