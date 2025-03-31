import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const addWorkout = (workout) => {
    setWorkoutHistory((prevHistory) => [...prevHistory, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workoutHistory, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
