import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, nomeFuncionario, email, password) => {
        const role = "col"
        const body = {
            nomeFuncionario,
            email,
            password,
            role
        };

        try {
            setLoading(true);
            const response = await axios.post(`https://gentle-umbrella-ant.cyclic.app/EasyTask/${url}`, body);
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};

export default useRegister;

