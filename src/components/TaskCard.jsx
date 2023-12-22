
const TaskCard = ({task,handleMakeOngoing} ) => {
    // console.log(task._id);
    return (
        <div className="card w-96 "draggable>
            <div className="card-body">
                <h2 className="card-title">{task.title}!</h2>
                <p>{task.taskDescription}</p>
                <p>Task Priority:{task.priority}</p>
                <p>Last Date of Accomplishment: {task.date}</p>
                {/* <p>Task status : <span className="text-red-600 font-bold">{task.status}</span> </p> */}
                <div className="card-actions justify-end">
                    <button onClick={()=>handleMakeOngoing(task._id)} className="btn btn-primary">Ongoing</button>
                    <button className="btn btn-primary">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;