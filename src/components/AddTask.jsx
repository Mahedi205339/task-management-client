
import { useForm } from "react-hook-form";

const AddTask = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        // const newTasks = {
        //     title: data.title ,
        // }
    }


    return (
        <div className="max-w-2xl mx-auto p-5 bg-cyan-600 h-[calc(100vh-200px)]">
            <div>
                <h1 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold text-center">Add New Task</h1>
            </div>
            <div  >
                <form onSubmit={handleSubmit(onSubmit)} >

                    {/* Recipe Name */}
                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text font-bold text-white ">Task Title*</span>
                        </label>
                        <input type="text"
                            {...register('title')}
                            placeholder="Task Title" className="input input-bordered w-full h-10 mt-3 " />

                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        {/* category */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold text-white"> Priority*</span>
                            </label>
                            <select defaultValue="default" className="select select-bordered w-full h-11 my-3" {...register("priority")}>
                                <option value="default" disabled  >Select a Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Price  */}


                    </div>


                    {/* Task description*/}
                    <label className="label">
                        <span className="label-text font-bold text-white"> Task Description*</span>
                    </label>
                    <textarea {...register('taskDescription', { required: true })} type="text
                    " placeholder="Task Description" className="input input-bordered input-lg w-full my-3" />
                    <button type="submit" className="flex items-center gap-2 bg-[#E8E8E8] text-cyan-800 hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold border-b-4 border-cyan-800 my-6 mx-auto">
                        Add Items
                    </button>
                </form>
            </div>


        </div>
    );
};

export default AddTask;