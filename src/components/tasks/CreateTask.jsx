import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useDeleteTask } from "../../API/tasks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function CreateTask() {

    const {data, error, loading, createTask } = useCreateTask()

    const [openTaskForm, setOpenTaskForm] = useState(false);
    const navigate = useNavigate()  
  
    const [titulo, setTitulo] = useState("Title");
    const handleChange = (event) => {
      setTitulo(event.target.value);
    };
  
    const [description, setDescription] = useState("Task description");
    const handleChange2 = (event2) => {
      setDescription(event2.target.value);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75 z-40"></div>{/* Fundo escuro */}
            <div className="fixed w-4/5 lg:w-2/4 h-3.5/5 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-lg border-4 border-indigo-700 z-50">
                <div id="modal ">
                    <div id="cores" className="flex justify-between">

                        <h2 className="text-right mr-4 text-xl dark:text-white">New Task</h2>
                    </div>

                    <input
                        className="m-4 px-1 py-1 w-11/12 border-2 rounded-xl dark:bg-slate-800 border-indigo-700"
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                    <br />
                    <textarea
                        className="m-4 px-1 py-1 w-11/12 h-60 resize-none rounded-xl dark:bg-slate-800 border-2 border-indigo-700"
                        type="text"
                        placeholder="Task Description"
                        onChange={handleChange2}
                    />
                    <br />
                    <div className="flex justify-end gap-5">
                        <button
                            className="px-5 text-white py-1  bg-indigo-700 rounded-xl hover:bg-indigo-900"
                            onClick={() => createTask()}
                        >
                            Create
                        </button>
                        <button
                            className="px-5 py-1 text-white bg-red-500 rounded-xl hover:bg-red-700"
                            onClick={() => setOpenTaskForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CreateTask