import { Link } from "react-router-dom";
import Container from "../../components/Container";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { MdAssignmentAdd } from "react-icons/md";
const Dashboard = () => {
    const [tasks, refetch] = useTasks()
    const axiosPublic = useAxiosPublic()

    const todo = tasks.filter(item => item.status === 'todo')
    const Ongoing = tasks.filter(item => item.status === 'ongoing')
    const Complete = tasks.filter(item => item.status === 'complete')
    // console.log(todo);


    const handleMakeOngoing = id => {
        console.log(id)


        axiosPublic.patch(`/task/ongoing/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('task added to Ongoing')
                }
            })

    }
    const handleMakeComplete = id => {
        console.log(id)

        axiosPublic.patch(`/task/complete/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('task added to complete')
                }
            })

    }
    const handleMakeTodo = id => {
        console.log(id)

        axiosPublic.patch(`/task/todo/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('task added to todo')
                }
            })



    }
    // console.log(tasks.length);
    // console.log(tasks);
    return (
        <Container>
            <div className="">
                <div className="flex justify-between my-8 px-3">
                    <div>
                        {
                            tasks.length === 0 &&
                            <div className="">
                                <h2 className="text-xl font-bold">No Task Added Yet</h2>
                            </div>
                        }
                    </div>
                    <Link to='/add-task'>
                        <button className="text-xl flex items-center gap-2 font-semibold text-white bg-cyan-600 px-2 py-1 rounded-lg my-2">
                            <MdAssignmentAdd />
                            <p> Add Task</p>
                        </button></Link>
                </div>


                <div className="flex flex-col lg:flex-row ">
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-red-600 text-xl lg:text-2xl">To Do</h1>
                        </div>
                        {
                            todo.map(task => <TaskCard
                                handleMakeOngoing={handleMakeOngoing}
                                key={task._id}
                                task={task}
                                handleMakeComplete={handleMakeComplete}
                            ></TaskCard>)
                        }
                    </div>
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-yellow-600 text-xl lg:text-2xl">Ongoing</h1>
                        </div>
                        {
                            Ongoing.map(task => <TaskCard
                                handleMakeComplete={handleMakeComplete}
                                key={task._id}
                                handleMakeTodo={handleMakeTodo}
                                task={task}></TaskCard>)
                        }
                    </div>
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-green-600 text-xl lg:text-2xl">Complete</h1>
                        </div>
                        {
                            Complete.map(task => <TaskCard
                                key={task._id}
                                handleMakeOngoing={handleMakeOngoing}
                                handleMakeTodo={handleMakeTodo}
                                task={task}></TaskCard>)
                        }
                    </div>

                </div>
            </div>

        </Container>
    );
};

export default Dashboard;