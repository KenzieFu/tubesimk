

import { MainHeader } from './pages/HomePage/MainHeader';
import { Navbar } from './util/Navbar';
import "./App.css"
import { StudentPage } from './pages/StudentPage';
import { Footer } from './components/Footer';
import { Route } from 'react-router-dom';
import Form from './pages/FormRegistrasi/regristrationForm'
import LoginForm from './pages/Login/LoginForm';
import Contact from './pages/ContactPage';
import BookDetail from './pages/BookDetails';
import { useState } from 'react';

function App() {

  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (

    <div style={{ background: "#F1F1F1", minHeight: "100vh" }} className="App">
      {loginIsShown && <LoginForm onClose={hideLoginHandler} />}
      <Navbar onClickLogin={showLoginHandler} />
      <main>
        <Route path="/homepage">
          <StudentPage />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/details">
          <BookDetail />
        </Route>
      </main>
      <Footer />
    </div>

  );
}

export default App;
