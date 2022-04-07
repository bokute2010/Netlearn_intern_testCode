
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
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
