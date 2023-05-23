import logo from './logo.svg';
import './App.css';
import Landing from './Landing/Landing';
import Isi from './Isisurvey/Isi';
import Dasboard from './Dashboard/Dashboard';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import QuizState from "./context/QuizState";
import About from "./component/About";
import Alert from "./component/Alert";
import Login from "./component/Login";
import PlayQuizEntry from "./component/PlayQuizEntry";
import Signup from "./component/Signup";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert =(message,type)=> { //to show alert messages
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500)
  }

  return (
    // <>
    //   <QuizState>
    //       <Navbar />
    //       <Alert alert={alert}/>
    //       <div className="container">
    //         <Routes>
    //           <Route exact path="/" element={<Home showAlert={showAlert}/>} />
    //           <Route exact path="/about" element={<About />} />
    //           <Route exact path="/playquiz" element={<PlayQuizEntry />} />
    //           <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
    //           <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
    //         </Routes>
    //       </div>

    //   </QuizState>
    // </>
    <Landing />
  );
}

export default App;
