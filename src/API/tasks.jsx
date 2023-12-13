import { useState } from "react";
import axios from "axios";

export const useDeleteTask = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const deleteTask = async (id) => {
        
        try {
            setLoading(true);
            const response = await axios.delete(`https://gentle-umbrella-ant.cyclic.app/EasyTask/task/${id}`, { headers });
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, deleteTask };
};

export const useCreateTask = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const createTask = async (titulo, description) => {
        const body = {
            titulo: titulo,
            tarefa: description,
            status: 'Iniciar'
        };

        try {
            setLoading(true);
            const response = await axios.post(`https://gentle-umbrella-ant.cyclic.app/EasyTask/task`, body, { headers });
            setData(response.data);
            setError(null);
        } catch (error) {
            console.log(error)
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, createTask };
}

export const useUpdateTask = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const updateTask = async (titulo, description, status, id) => {
        const body = {
            titulo: titulo,
            tarefa: description,
            status
        };

        try {
            setLoading(true);
            const response = await axios.put(`https://gentle-umbrella-ant.cyclic.app/EasyTask/task/${id}`, body, { headers });
            setData(response.data);
            setError(null);
        } catch (error) {
            console.log(error)
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, updateTask };
}