import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import './Header-Task.css'

function Header() {
  const [openTaskForm, setOpenTaskForm] = useState(false);

  const [titulo, setTitulo] = useState("Title");
  const handleChange = (event) => {
    setTitulo(event.target.value);
  };
  
  const [description, setDescription] = useState("Task description");
  const handleChange2 = (event2) => {
    setDescription(event2.target.value);
  };

  const [status, setStatus] = useState("");
  
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
              <div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                <button
                  className="px-5 py-1 bg-indigo-700 flex item-center justify-center rounded-xl text-white active-button "
                  onClick={() => setOpenTaskForm(true)}
                >
                  Add task +
                </button>
                <Link to="/login">
                  <a
                    className="flex items-center font-medium gap-x-2 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-white"
                    href="#"
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
          <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75"></div>{/* Fundo escuro */}
          <div className="fixed w-4/5 lg:w-2/4 h-3.5/5 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg border-4 border-cyan-800">
            <div id="modal ">
              <div id="cores" className="flex justify-between">
                <div>
                  <input type="radio" className="bt-red"    onClick={() => setStatus("red")}/>
                  <input type="radio" className="bt-yellow" onClick={() => setStatus("yellow")}/>
                  <input type="radio" className="bt-green"  onClick={() => setStatus("green")}/>
                </div>
                
                <h2 className="text-right mr-4 text-xl">New Task</h2>
              </div>
              {/* <input type="radio" className="rounded-xl ml-10 p-2 border-4 border-yellow-500 display fixed hover:bg-yellow-500"onClick={() => ''}></input>
              <input type="radio" className=" ml-20 p-2 rounded-xl border-4 border-red-500 display fixed hover:bg-red-500"onClick={() => ''}/>
              <input type="radio" className=" ml-30 p-2 rounded-xl border-4 border-green-500 display fixed hover:bg-green-500"onClick={() => ''}/> */}
              
              <input
                className="m-4 px-1 py-1 w-11/12 border-2 border-blue-500"
                type="text"
                placeholder={titulo}
                onChange={handleChange}
              />
              <br />
              <textarea
                className="m-4 px-1 py-1 w-11/12 h-60 resize-none border-2 border-blue-500"
                type="text"
                placeholder={description}
                onChange={handleChange2}
              />
              <br />
              <div className="flex justify-end gap-5">
              <button
                className="px-5 py-1  bg-sky-500 rounded-xl hover:bg-sky-700"
                onClick={() => setOpenTaskForm(false)}
              >
                Create
              </button>
              <button
                className="px-5 py-1 bg-red-500 rounded-xl hover:bg-red-700"
                onClick={() => setOpenTaskForm(false)}
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
