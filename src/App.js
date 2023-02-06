import './App.css';
import {  Routes,Route } from 'react-router-dom';

import Info from './Components/table/table';
import Fetch from './Components/fetch/fetch';
import Axiosdata from './Components/axios/axios';
import Async from './Components/async/aasync';

function App() {
  return (
    <div className="App">
      <Fetch/>
      <Info />
      <Axiosdata/>
      <Async/>
      <Routes>
        <Route path='/data' element={<Fetch />}></Route>
        <Route path='/info' element={<Info />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
