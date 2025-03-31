import React, { useContext } from 'react';
import { WorkoutContext } from './WorkoutContext';

const WorkoutHistory = () => {
  const { workoutHistory } = useContext(WorkoutContext);

  return (
    <div>
      <h1>Workout History</h1>
      <ul>
        {workoutHistory.length > 0 ? (
          workoutHistory.map((workout, index) => (
            <li key={index}>
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
