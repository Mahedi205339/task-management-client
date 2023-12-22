import { Link } from "react-router-dom";
import Container from "../../components/Container";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard";

const Dashboard = () => {
    const [tasks] = useTasks()
    console.log(tasks);
    return (
        <Container>
            <div className="">
                <div className="flex justify-end my-8">
                    <Link to='/add-task'> <button>Add Task</button></Link>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <div>
                            <h1 className="text-center font-bold text-red-600">To Do</h1>
                        </div>
                        {
                            tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                        }
                    </div>
                    <div className="flex-1">
                        <div>
                            <h1 className="text-center font-bold text-yellow-600">Ongoing</h1>
                        </div>
                        {
                            tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                        }
                    </div>
                    <div className="flex-1">
                        <div>
                            <h1 className="text-center font-bold text-green-600">Complete</h1>
                        </div>
                        {
                            tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                        }
                    </div>

                </div>
            </div>

        </Container>
    );
};

export default Dashboard;