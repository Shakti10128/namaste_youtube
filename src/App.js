import './App.css';
import Head from './components/Head';
import Home from './components/Home'
import WatchPage from './components/WatchPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/watch" element={<WatchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
