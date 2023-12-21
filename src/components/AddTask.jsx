import { useForm } from "react-hook-form";

const AddTask = () => {
    const { register, handleSubmit } = useForm()
    return (
        <div className="max-w-6xl mx-auto p-5">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Add New Task</h1>
            </div>
            <form onSubmit={handleSubmit} >

                {/* Recipe Name */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Title*</span>
                    </label>
                    <input type="text"
                        {...register('title')}
                        placeholder="Task Title" className="input input-bordered w-full " />

                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                    {/* category */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text"> Priority*</span>
                        </label>
                        <select defaultValue="default" className="select select-bordered w-full " {...register("priority")}>
                            <option value="default" disabled  >Select a Priority</option>
                            <option value="salad">Low</option>
                            <option value="pizza">moderate</option>
                         <option value="pizza">High</option>
                        </select>
                    </div>
                    {/* Price  */}

                    
                </div>
               
                
                {/* Task description*/}
                <label className="label">
                    <span className="label-text"> Task Description*</span>
                </label>
                <textarea {...register('recipe', { required: true })} type="text
                    " placeholder="Task Description" className="input input-bordered input-lg w-full " />

            </form>
        </div>
    );
};

export default AddTask;