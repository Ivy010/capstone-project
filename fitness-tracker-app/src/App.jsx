import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';

function App() {
  return (
    <>
    <Router>
      <nav>
        <Link to = "/">WorkoutLog</Link>
        <Link to = "/workoutHistory">WorkoutHistory</Link>
        <Link to = "/progressChart">ProgressChart</Link>

      </nav>
      <Routes>
        <Route path="/" element={<WorkoutLog />} />
        <Route path="/workoutHistory" element={<WorkoutHistory />} />
        <Route path="/progressChart" element={<ProgressChart />} />
      </Routes>
    </Router>

    </>
  )
}

export default App;
