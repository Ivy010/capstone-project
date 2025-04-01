import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { WorkoutContext } from "./WorkoutContext";

const WorkoutLog = () => {
    const [workouts, setWorkouts] = useState([]);
    const [inputs, setInputs] = useState({});
    const [dailyWorkout, setDailyWorkout] = useState(null);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const { addWorkout } = useContext(WorkoutContext);



    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('https://wger.de/api/v2/exercise/');
                const data = await response.json();
                setWorkouts(data.results.slice(0, 5));
            } catch (error) {
                console.error('Error fetching workouts:', error);

            }
            };
            fetchWorkouts();
        }, []);
        

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
          }

        const handleFormSubmit = (e) => {
            e.preventDefault();
            addWorkout(inputs);
            setDailyWorkout(inputs);
            setInputs({ name: '', duration: '', day: ''});
     };

    return (


        <div className="w-4/5 bg-gray-100 p-8">
            <header>
            <h1 className="text-2xl font-bold text-green-700 mb-4">Welcome to Your Fitness Journey!</h1>
            <p className="text-gray-700 mb-6">Track your workouts and progress effortlessly and effectively.</p>
            <p>Today's Date: {date}</p>

            </header>

            <section>
            <h2>Log Your Workouts</h2>  
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md p-6 rounded space-y-4">
                <label>Workout Name</label>
                <input
                 type="text"
                 name="name"
                 value={inputs.name || ""}
                 onChange={handleChange}
                 placeholder="Workout Name"
                 className="border p-2 rounded w-full"
                />

                <label> Duration</label>
                <input
                 type="number"
                 name="duration"
                 value={inputs.duration}
                 onChange={handleChange}
                 placeholder="Duration (mins)"
                 className="border p-2 rounded w-full"
                />

                <label>Day of Week</label>
                <input
                 type="text"
                 name="day"
                 value={inputs.day}
                 onChange={handleChange}
                 placeholder="Day of Week"
                 className="border p-2 rounded w-full"
                />

                <button 
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                Log Workout
                </button>
            </form>

            </section>

            <section>
                <h2>Your Workout for Today.</h2>
                {dailyWorkout ? (
                    <div>
                        <p><strong>Name:</strong> {dailyWorkout.name}</p>
                        <p><strong>Duration:</strong> {dailyWorkout.duration}</p>
                        <p><strong>Day:</strong> {dailyWorkout.day}</p>
                    </div>
                ) : (
                    <p>No workout logged yet.</p>
                )}
            </section>

            <section>
                <h2>Best Picks for You!</h2>
                <ul>
                    {workouts.map((workout) => (
                        <li key={workout.id} onClick={() => alert(workout.description || 'Description not available.')}>
                            {workout.name}
                        </li>
                    ))}
                </ul>
            </section>

      
        </div>
        
    );
};

export default WorkoutLog;