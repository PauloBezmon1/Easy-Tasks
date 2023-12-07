import axios from "axios";
import { useEffect, useState } from "react";

//link da api: http://localhost:3000/

const Data = () => {

    const [data, setData] = useState([])

    useEffect (() => {
        axios.get("http://localhost:3000/")
          .then(async(res) => {
                await setData(res.data)
          })
          .catch(err => console.log(err))

    }, [])

    return data
}

export default Data