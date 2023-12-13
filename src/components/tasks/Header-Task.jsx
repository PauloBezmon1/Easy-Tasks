import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../../API/tasks";
import { toast } from "react-toastify";
import './Header-Task.css'

function Header() {
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const navigate = useNavigate()  

  const [titulo, setTitulo] = useState("Title");
  const handleChange = (event) => {
    setTitulo(event.target.value);
  };

  const {data, error, loading, createTask} = useCreateTask()

  const [description, setDescription] = useState("Task description");
  const handleChange2 = (event2) => {
    setDescription(event2.target.value);
  };

  const date = new Date();
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();
  const dataCreate = `${dia}/${mes}/${ano}`;

  const handleSubmit = () => {
    createTask(titulo, description);
  }

  useEffect(() => {
    if (data){
      if (data.message === "News succesfully created"){
        toast.success("Task succesfuly created!")
        setTimeout(() => {
          window.location.reload()
          navigate('/tasks')
        }, 2500)
        console.log(data, error)
      } else {
        toast.error("Error creating the task.")
        navigate('/tasks')
      }
    }
  }, [data])

  const logout = () => localStorage.removeItem("token");  

  const [status, setStatus] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-wrap w-full text-sm md:justify-start md:flex-nowrap ">
        <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-md mx-2 py-1.5 px-1  md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto h-full dark:bg-slate-900">
          <Fade cascade damping={1e-1} direction="down" triggerOnce={true}>
            <div className="flex items-center justify-between">
              <svg
                className="mr-2 w-4 md:w-5 dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 1L26 22.9699L22.3226 26L15.3108 21.0762H19.3784L13.5 10.4699L7.6402 21.0762H11.6639L4.67737 26L1 22.9699L13.5 1Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="mr-2 w-4 md:w-5 hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 1L26 22.9699L22.3226 26L15.3108 21.0762H19.3784L13.5 10.4699L7.6402 21.0762H11.6639L4.67737 26L1 22.9699L13.5 1Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>

              <a
                className="flex text-base md:text-xl font-bold dark:text-white"
                href="#"
              >
                EasyTask
              </a>

              <p className="pl-5 ml-5 border-l border-gray-300 font-medium text-xs md:text-lg dark:text-white">
                Overview Tasks
              </p>

              {/* BOTÃO DO MENU QUE APARECE ABAIXO DOS 768PX */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-gray-800 border border-gray-200 rounded-full hs-collapse-toggle hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 hs-collapse-open:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="flex-shrink-0 hidden w-4 h-4 hs-collapse-open:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block">
              <div className="gap-2 flex-wrap flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <button
                  className=" px-5 py-1 bg-indigo-700 flex item-center justify-center rounded-xl text-white active-button "
                  onClick={() => setOpenTaskForm(true)}
                >
                  Add task +
                </button>
                <Link to="/login" onClick={logout}>
                  <a
                    className="flex items-center font-medium gap-x-2 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-white"
                    href="/"
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </Fade>
        </nav>
      </header>

      {openTaskForm && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75 z-40"></div>{/* Fundo escuro */}
          <div className="fixed w-4/5 lg:w-2/4 h-3.5/5 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-lg border-4 border-indigo-700 z-50">
            <div id="modal ">
              <div id="cores" className="flex justify-between">

                <h2 className="text-center mr-4 text-xl font-medium dark:text-white">New Task</h2>
              </div>
              <input
                className="dark:text-white m-4 px-1 py-1 w-11/12 border-2 rounded-xl dark:bg-slate-800 border-indigo-700"
                type="text"
                placeholder="Title"
                onChange={handleChange}
              />
              <br />
              <textarea
                className="dark:text-white m-4 px-1 py-1 w-11/12 h-60 resize-none rounded-xl dark:bg-slate-800 border-2 border-indigo-700"
                type="text"
                placeholder="Task Description"
                onChange={handleChange2}
              />
              <br />
              <div className="flex justify-between gap-5">
                <h3 className="dark:text-white">Criação:{dataCreate}</h3>
                <div className="flex gap-5 flex-wrap">
                <button
                  className="px-5 text-white py-1  bg-indigo-700 rounded-xl hover:bg-indigo-900"
                  onClick={() => handleSubmit()}
                >
                  Create
                </button>
                <button
                  className="px-5 py-1 text-white bg-red-700 rounded-xl hover:bg-red-900"
                  onClick={() => setOpenTaskForm(false)}
                >
                  Cancel
                </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
