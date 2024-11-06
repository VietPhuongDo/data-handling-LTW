import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApiExample from './components/ApiExample/ApiExample';
import DisplayData from './components/DisplayData/DisplayData';
import UpdateData from './components/UpdateData/UpdateData';
import CreateData from './components/CreateData/CreateData';
import DeleteData from './components/DeleteData/DeleteData';
import './App.css';

export default function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/api-example">API Example</Link></li>
            <li><Link to="/display-data">Display Data</Link></li>
            <li><Link to="/create-data">Create Data</Link></li>
            <li><Link to="/update-data">Update Data</Link></li>
            <li><Link to="/delete-data">Delete Data</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/api-example" element={<ApiExample />} />
            <Route path="/display-data" element={<DisplayData />} />
            <Route path="/create-data" element={<CreateData />} />
            <Route path="/update-data" element={<UpdateData />} />
            <Route path="/delete-data" element={<DeleteData />} />
          </Routes>
        </div>
      </Router>
  );
}
