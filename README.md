routing
npm install react-router-dom

index.js
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



app.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      
    </div>
  );
};

export default App;

