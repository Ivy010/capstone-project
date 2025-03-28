import React from "react";

const WorkoutLog = () => {
    return (
        <div>
            <h2>Log a Workout</h2>  
            <form>
                <label for workoutName>Workout Name</label>
                <input
                 type="text"
                 placeholder="Workout Name"
                />

                <label for duration> Duration</label>
                <input
                 type="number"
                 placeholder="Duration (mins)"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default WorkoutLog;