import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom Hook para Requisições de API
const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzI1OGMxNmEyNTcxNjViZjQ4NjViNiIsImlhdCI6MTcwMTk5MjY2NiwiZXhwIjoxNzAyMDc5MDY2fQ.OOoey8gUcGpQrPHC8BxrYd-MC0oOtu5qCjcz7wxW3QY'
        };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/EasyTask/${url}`, { headers });
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