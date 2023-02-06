import './fetch.css';
import React, { useEffect, useState } from "react";

const Fetch = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setData(data));

    }


    useEffect(() => { fetchData(); }, [])
    return (
        < div >

            {/* <main>
    <h1>data--</h1>
    <ul>{data && data.length>0 && data.map((dataobj,index)=>(
        <li key={dataobj.userId}>{dataobj.id}>{dataobj.title}>{dataobj.completed}</li>
    ))}</ul>
</main> */}



<h3>hello! from fetch component!!</h3>
<td/>

            <div className="fetchtab">
                <table>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{String(val.completed)}</td>  
                                {/* display boolean value */}
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
export default Fetch;