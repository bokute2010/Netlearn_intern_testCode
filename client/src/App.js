
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // window.onload = function () {
  //   const cookie = document.cookie;
  //   if (cookie.includes("userVoted")) {
  //     document.cookie = "userVoted= 1234"
  //   }
  // }



  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
