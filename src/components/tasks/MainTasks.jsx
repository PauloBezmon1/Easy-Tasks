import "./Header-Task.css"
import Aside from "../tasks/Aside";
import Data from "../../API/api"
import react from "react"
import { useState, useEffect } from "react"
import useAxios from "../../API/api";

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
                <div className="bg-gray-100 dark:bg-slate-950 h-max flex flex-col items-center xl:items-start flex-nowrap justify-center px-4 md:px-20 py-10 gap-14 xl:gap-7 w-full xl:flex-row rounded-r">
                    <div className="flex flex-col gap-0 justify-center">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-red-600 h-3.5 w-3.5"></div>
                            <p className="md:font-thin text-xs dark:text-white">Pending</p>
                        </div>

                        {Iniciar.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-justify dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt}</p>
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-yellow-400 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Progress</p>
                        </div>

                        {Produzindo.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white dark:bg-slate-900">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-justify dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-green-600 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Completed</p>
                        </div>

                        {Finalizado.map((element, index) => (
                            <div className="mt-5" key={index}> {/* Main */}
                                <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white dark:bg-slate-900">
                                    <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
                                    <p className="text-xs font-thin md:text-base text-justify dark:text-white">{element.tarefa}</p>
                                    <p className="font-thin text-xs dark:text-white">{element.createdAt}</p>
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