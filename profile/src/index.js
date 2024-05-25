import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Profile';
import Maintenance from './Maintenance';
import Nopage from './Nopage';
import Projects from './Projects';
import AiToolList from './AiToolList';
import { Fragment } from 'react';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<><Profile /><Projects /></>} />
		  <Route path="maintenance" element={<Maintenance />} />
		  <Route path="ai" element={<AiToolList />} />
		  
		  <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);