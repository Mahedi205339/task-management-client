import { Link } from "react-router-dom";

const TaskCard = ({ task, handleMakeOngoing, handleMakeComplete, handleMakeTodo }) => {
    // console.log(task._id);

    
    return (
        <div className="card w-96 h-[300px] " draggable>
            <div className="card-body">
                <h2 className="card-title">{task.title}!</h2>
                <p>{task.taskDescription}</p>
                <p>Task Priority: <span className="font-bold">{task.priority}</span> </p>
                <p>Last Date of Accomplishment: <span className="font-bold">{task.date}</span> </p>
                {/* <p>Task status : <span className="text-red-600 font-bold">{task.status}</span> </p> */}
                <div className="card-actions justify-end">
                    {
                        task.status === 'todo' && <>
                            <button onClick={() => handleMakeOngoing(task._id)} className="bg-yellow-600 px-2 py-1 text-white rounded">Ongoing</button>
                            <button onClick={() => handleMakeComplete(task._id)} className="bg-green-600 px-2 py-1 text-white rounded">Complete</button>
                        </>

                    
                    }
                    {
                        task.status === 'ongoing' &&
                            <>

                                <button onClick={() => handleMakeTodo(task._id)} className="bg-red-600 px-2 py-1 text-white rounded">Todo</button>
                                <button onClick={() => handleMakeComplete(task._id)} className="bg-green-600 px-2 py-1 text-white rounded">Complete</button>
                            </> 
                    }
                    {
                        task.status === 'complete'&&
                        <>
                       <button onClick={() => handleMakeTodo(task._id)} className="bg-red-600 px-2 py-1 text-white rounded">Todo</button>
                        <button onClick={() => handleMakeOngoing(task._id)} className="bg-yellow-600 px-2 py-1 text-white rounded">Ongoing</button>
                        </>
                    }
                    <Link to={`/updateTask/${task._id}`}>
                    <button className="bg-black px-2 py-1 text-white rounded">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;