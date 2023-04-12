import { Navbar } from './util/Navbar';
import "./App.css"
import { StudentPage } from './pages/StudentPage';
import { Footer } from './components/Footer';

import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

createBrowserRouter([
  { path: ""},
  {}
])

function App() {
  return (
    <>
    
    <div style={{background:"#F1F1F1", minHeight:"100vh" }} className="App">
    <Navbar/>
      <HomePage/>
      {/* <StudentPage/> */}
      <Footer/>
      </div>
      
    </>
  
  );
}

export default App;
