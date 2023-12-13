import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom Hook para Requisições de API
const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://gentle-umbrella-ant.cyclic.app/EasyTask/${url}`, { headers });
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useAxios;
