import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useUpdateTask } from "../../API/tasks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

function UpdateTask() {

    const { id } = useParams(); 
    const navigate = useNavigate();
    const {data, error, loading, updateTask } = useUpdateTask();
    const [openTaskForm, setOpenTaskForm] = useState(true);
    const [titulo, setTitulo] = useState("");
    const handleChange = (event) => {
      setTitulo(event.target.value);
    };
  
    const [description, setDescription] = useState("");
    const handleChange2 = (event2) => {
      setDescription(event2.target.value);
    };

    const [status, setStatus] = useState("");
    const handleStatus = (event) => {
      setStatus(event.target.value);
    };

    const handleSubmit = () =>{
        if(status !== 'Iniciar' && status !=='Produzindo' && status !=='Finalizado'){
            toast.error("Invalid Status!")
        }else{
            updateTask(titulo, description, status, id)
        }
    } 

    useEffect(() =>{
        if(openTaskForm === false){
            navigate("/tasks")
        }
    }, [openTaskForm])

    useEffect(() => {
        if (data) {
            console.log(data)
            if (data.message == "Task succesfully updated") {
                toast.success("Task succesfully updated!")
                setTimeout(() => {
                    navigate("/tasks")
                    window.location.reload();
                }, 2500)
            }
            else {
                toast.error("Couldn't update the task")
                navigate("/tasks")
            }
        }
    }, [data])

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75 z-40"></div>{/* Fundo escuro */}
            <div className="fixed w-4/5 lg:w-2/4 h-3.5/5 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-lg border-4 border-indigo-700 z-50">
                <div id="modal ">
                    <div id="cores" className="flex justify-between">

                        <h2 className="text-right mr-4 text-xl dark:text-white">Edit Task</h2>
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
                    <input
                        className="m-4 px-1 py-1 w-11/12 border-2 rounded-xl dark:bg-slate-800 border-indigo-700"
                        type="text"
                        placeholder="Iniciar, Produzindo ou Finalizado"
                        onChange={handleStatus}
                    />
                    <br />
                    <div className="flex justify-end gap-5">
                        <button
                            className="px-5 text-white py-1  bg-indigo-700 rounded-xl hover:bg-indigo-900"
                            onClick={() => handleSubmit()}
                        >
                            Update
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


export default UpdateTask