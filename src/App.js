

import { MainHeader } from './pages/HomePage/MainHeader';
import { Navbar } from './util/Navbar';
import "./App.css"
import { StudentPage } from './pages/StudentPage';

function App() {
  return (
    <div style={{ background:"#F1F1F1",height:"100vh" }} className="App">
      <Navbar/>
      <StudentPage/>
    </div>
  );
}

export default App;
