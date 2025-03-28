import React from "react";
import { useState, useEffect } from "react";

const WorkoutLog = () => {
    const [workouts, setWorkouts] = useState([]);
    const [formData, setFormData] = useState({ name: '', duration: '', day: ''});
    const [dailyWorkout, setDailyWorkout] = useState(null);
    const [date, setDate] = useState(new Date().toLocaleDateString());

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
        
        const handleInputChange = (e) => {
            const {name, value} = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const handleFormSubmit = (e) => {
            e.preventDefault();
            setDailyWorkout(formData);
            setFormData({ name: '', duration: '', day: ''});
        };

    return (
        <div>
            <header>
            <h1>Welcome to Your Fitness Journey!</h1>
            <p>Track your workouts and progress effortlessly and effectively.</p>
            <p>Today's Date: {date}</p>

            </header>

            <section>
            <h2>Log Your Workouts</h2>  
            <form onSubmit={handleFormSubmit}>
                <label htmlFor= "workoutName">Workout Name</label>
                <input
                 type="text"
                 id="workoutName"
                 value={formData.name}
                 onChange={handleInputChange}
                 placeholder="Workout Name"
                />

                <label htmlFor= "duration"> Duration</label>
                <input
                 type="number"
                 id="duration"
                 value={formData.duration}
                 onChange={handleInputChange}
                 placeholder="Duration (mins)"
                />

                <label htmlFor= "day">Day of Week</label>
                <input
                 type="text"
                 id="day"
                 value={formData.day}
                 onChange={handleInputChange}
                 placeholder="Day of Week"
                />
                <button type="submit">Submit</button>
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