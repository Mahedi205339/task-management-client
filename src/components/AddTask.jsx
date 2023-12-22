
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const handleSubmit =async (e) => {
        e.preventDefault()
        const form = e.target
        const date = form.date.value;
        const title = form.title.value;
        const taskDescription = form.taskDescription.value;
        const priority = form.priority.value;
        // console.log(date,title , taskDescription , priority);
        const data = {
            title: title, date: date, email: user?.email, name: user?.displayName,
            taskDescription: taskDescription, priority: priority , status: 'todo'
        }
        console.log(data);
        const addTask = await axiosPublic.post('/tasks' , data)
        
            console.log(addTask.data);

        }
    




    return (
        <div className="max-w-2xl mx-auto p-5 bg-cyan-600 h-[calc(100vh-200px)]">
            <div>
                <h1 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold text-center">Add New Task</h1>
            </div>
            <div  >
                <form onSubmit={handleSubmit} >

                    {/* Recipe Name */}
                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text font-bold text-white ">Task Title*</span>
                        </label>
                        <input type="text"
                            name="title"
                            placeholder="Task Title" className="input input-bordered w-full h-10 mt-3 " />

                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        {/* category */}
                        <div className="w-full flex-1">
                            <label className="label">
                                <span className="label-text font-bold text-white"> Priority*</span>
                            </label>
                            <select defaultValue="default" className="select select-bordered w-full h-11 my-3" name="priority" required>
                                <option value="default" disabled  >Select a Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Price  */}
                        <  div className="form-control  my-7 flex-1 ">
                            <label className="label">
                                <span className="label-text font-bold text-white">Last Date of Accomplishment*</span>
                            </label>
                            <DatePicker name="date" minDate={new Date()} selected={startDate} onChange={(date) => setStartDate(date)}
                                placeholderText="Chose date"
                            ></DatePicker>
                        </div>

                    </div>


                    {/* Task description*/}
                    <label className="label">
                        <span className="label-text font-bold text-white"> Task Description*</span>
                    </label>
                    <textarea name="taskDescription" type="text
                    " placeholder="Task Description" className="input input-bordered input-lg w-full my-3" />
                    <button type="submit" className="flex items-center gap-2 bg-[#E8E8E8] text-cyan-800 hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold border-b-4 border-cyan-800 my-6 mx-auto">
                        Add Items
                    </button>

                </form>
            </div >


        </div >
    );
};

export default AddTask;