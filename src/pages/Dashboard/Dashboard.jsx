import { Link } from "react-router-dom";
import Container from "../../components/Container";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Dashboard = () => {
    const [tasks] = useTasks()
    const axiosPublic = useAxiosPublic()

    const todo = tasks.filter(item => item.status === 'todo')
    const Ongoing = tasks.filter(item => item.status === 'ongoing')
    const Complete = tasks.filter(item => item.status === 'complete')
    // console.log(todo);


    const handleMakeOngoing = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make HR"
        }).then(async (result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/task/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "!",
                                text: "He is HR Now",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }

        });
    }

    // console.log(tasks);
    return (
        <Container>
            <div className="">
                <div className="flex justify-end my-8">
                    <Link to='/add-task'> <button>Add Task</button></Link>
                </div>
                <div className="flex flex-col lg:flex-row ">
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-red-600 text-xl lg:text-2xl">To Do</h1>
                        </div>
                        {
                            todo.map(task => <TaskCard handleMakeOngoing={handleMakeOngoing} key={task._id} task={task}></TaskCard>)
                        }
                    </div>
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-yellow-600 text-xl lg:text-2xl">Ongoing</h1>
                        </div>
                        {
                            Ongoing.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                        }
                    </div>
                    <div className="flex-1 border-r-2">
                        <div>
                            <h1 className="text-center font-bold text-green-600 text-xl lg:text-2xl">Complete</h1>
                        </div>
                        {
                            Complete.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                        }
                    </div>

                </div>
            </div>

        </Container>
    );
};

export default Dashboard;