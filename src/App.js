

import { MainHeader } from './pages/HomePage/MainHeader';
import { Navbar } from './util/Navbar';
import "./App.css"
import { StudentPage } from './pages/StudentPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{  background:"#F1F1F1",minHeight:"100vh" }} className="App">
      <Navbar/>
      <StudentPage/>
     <Footer/>
    </div>
  );
}

export default App;
