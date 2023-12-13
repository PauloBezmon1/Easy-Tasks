import "./Header-Task.css"
import Aside from "../tasks/Aside";
import DeleteTask from "./DeleteTask";
import { useState, useEffect } from "react"
import useAxios from "../../API/api";
import { Link } from "react-router-dom";

function MainTasks() {
    const { data, error, loading } = useAxios("task")
    const [Iniciar, setIniciar] = useState([]);
    const [Produzindo, setProduzindo] = useState([]);
    const [Finalizado, setFinalizado] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (data) {
                const iniciarArray = [];
                const produzindoArray = [];
                const finalizadoArray = [];

                data.forEach((element) => {
                    if (element.status === "Iniciar") {
                        iniciarArray.push(element);
                    } else if (element.status === "Produzindo") {
                        produzindoArray.push(element);
                    } else if (element.status === "Finalizado") {
                        finalizadoArray.push(element);
                    }
                });

                setIniciar(iniciarArray);
                setProduzindo(produzindoArray);
                setFinalizado(finalizadoArray);
            }
        };

        fetchData();
    }, [data]);

    return (
        <main className="flex w-full justify-end h-max">
            <div className="flex md:flex-row w-full flex-col mx-2 xl:mx-auto h-full personalized-height">
                <Aside />
                <div className="bg-gray-200 dark:bg-slate-950 h-full flex flex-col items-center xl:items-start flex-nowrap justify-center px-4 md:px-20 py-10 gap-14 xl:gap-7 w-full xl:flex-row rounded-r">
                    <div className="flex flex-col gap-0 justify-center">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-red-600 h-3.5 w-3.5"></div>
                            <p className="md:font-thin text-xs dark:text-white">Pendente</p>
                        </div>

                        {Iniciar.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900 relative">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-left dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt[8] + element.createdAt[9] + "/" + element.createdAt[5] + element.createdAt[6] + "/" + element.createdAt[0] + element.createdAt[1] + element.createdAt[2] + element.createdAt[3]}</p>

                                    <button className="absolute bottom-4 right-7 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/update`}>
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <button className="absolute bottom-4 right-14 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/delete`}>
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-yellow-400 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Em progresso</p>
                        </div>

                        {Produzindo.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white dark:bg-slate-900 relative">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-left dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt[8] + element.createdAt[9] + "/" + element.createdAt[5] + element.createdAt[6] + "/" + element.createdAt[0] + element.createdAt[1] + element.createdAt[2] + element.createdAt[3]}</p>

                                    <button className="absolute bottom-4 right-7 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/update`}>
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <button className="absolute bottom-4 right-14 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/delete`}>
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-green-600 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Finalizado</p>
                        </div>

                        {Finalizado.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white dark:bg-slate-900 relative">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-left dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt[8] + element.createdAt[9] + "/" + element.createdAt[5] + element.createdAt[6] + "/" + element.createdAt[0] + element.createdAt[1] + element.createdAt[2] + element.createdAt[3]}</p>

                                    <button className="absolute bottom-4 right-7 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/update`}>

                                            
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <button className="absolute bottom-4 right-14 dark:hover:bg-zinc-800 hover:bg-slate-300 rounded-full p-1">
                                        <Link to={`/tasks/${element._id}/delete`}>
                                            <svg opacity={0.8} className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#fff" />
                                            </svg>

                                            <svg opacity={0.8} className="dark:hidden" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainTasks;