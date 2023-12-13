import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, email, password) => {
        const body = {
            email,
            password
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

export default useAuth;
