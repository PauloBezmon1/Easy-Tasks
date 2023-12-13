import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useDeleteTask } from "../../API/tasks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function DeleteTask() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, loading, deleteTask} = useDeleteTask();
    const handleSubmit = (id) => {
        deleteTask(id);
    }

    useEffect(() => {
        if (data) {
            if (data.message == "Task succesfully deleted") {
                toast.success('Task succesfully deleted!')
                setTimeout(() => {
                    navigate("/tasks")
                    window.location.reload();
                }, 2500)
            }
            else {
                toast.error("Couldn't delete the task")
                navigate("/tasks")
            }
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75 z-40"></div>{/* Fundo escuro */}
            <div className="max-w-5xl  fixed w-2/5 lg:w-2/4 h-3.5/5 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg border-2 border-indigo-700 z-50 dark:bg-black">
                <div id="modal" className="flex flex-col items-center justify-center gap-3 p-5">
                    <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#fff" />
                    </svg>

                    <svg className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#4338ca" />
                    </svg>
                    <h1 className="text-2xl font-medium text-center dark:text-white">Are you sure?</h1>
                    <p className="text-sm opacity-80 max-w-[350px] text-center dark:text-white">Do you really want to delete this tasks? This process cannot be undone.</p>
                    <div className="flex gap-5 mt-5">
                        <Link to="/tasks">
                            <button className="bg-gray-300 px-2 py-1 rounded">Cancel</button>
                        </Link>

                        <button className="bg-indigo-700 px-2 py-1 rounded text-white" onClick={() => handleSubmit(id)}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteTask