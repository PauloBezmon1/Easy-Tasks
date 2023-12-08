import React, { useEffect, useState } from "react";
import useAxios from "../../API/api";
import Data from "../../API/api";

const CardPendente = () => {
  const data = useAxios("task");
  const [Iniciar, setIniciar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await Data();
        apiData.forEach((element) => {
          if (element.status === "Iniciar") {
            setIniciar((prevIniciar) => [...prevIniciar, element]);
          } console.log(Iniciar)
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Iniciar.map((element) => (
        <div className="mt-5">
          <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
            <h1 className="font-medium text-base md:text-xl dark:text-white">{element.titulo}</h1>
            <p className="text-xs font-thin md:text-base text-justify dark:text-white">{element.tarefa}</p>
            <p className="font-thin text-xs dark:text-white">{element.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPendente;


