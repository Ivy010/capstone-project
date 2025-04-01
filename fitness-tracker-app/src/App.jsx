import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';

function App() {



  return (
    
    <Router>
      <div className='flex h-screen'>
        <nav className="w-1/5 bg-gray-800 text-white p-4 flex flex-col">
          <h1 className="text-xl font-bold mb-8">Fitness Tracker</h1>
          <Link to = "/" className="mb-4 hover:underline">WorkoutLog</Link>
          <Link to = "/workoutHistory" className="mb-4hover:underline">WorkoutHistory</Link>
          <Link to = "/progressChart" className="hover:underline">ProgressChart</Link>
        </nav>

        <main className="w-4/5 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<WorkoutLog />} />
            <Route path="/workoutHistory" element={<WorkoutHistory />} />
            <Route path="/progressChart" element={<ProgressChart />} />
          </Routes>
        </main>
      </div>
    
    </Router>
  
  );
};

export default App;
