import React, { useContext } from 'react';
import { WorkoutContext } from './WorkoutContext';

const WorkoutHistory = () => {
  const { workoutHistory } = useContext(WorkoutContext);

  return (

    <div className="w-4/5 bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Workout History</h1>
      <ul className="space-y-4">
        {workoutHistory.length > 0 ? (
          workoutHistory.map((workout, index) => (
            <li key={index} className="bg-white shadow-md p-4 rounded">
              <p><strong>Name:</strong> {workout.name}</p>
              <p><strong>Duration:</strong> {workout.duration} minutes</p>
              <p><strong>Day:</strong> {workout.day}</p>
            </li>
          ))
        ) : (
          <p>No workouts logged yet.</p>
        )}
      </ul>
    </div>
    
  );
};

export default WorkoutHistory;
