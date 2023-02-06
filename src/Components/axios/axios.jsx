import axios from "axios";
import { useEffect, useState } from "react";
function Axiosdata() {
    const [list, setList] = useState([]);
    useEffect(() => {
        //   axios({
        //     url: "https://jsonplaceholder.typicode.com/posts"
        //   })
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setList]);

    return (
        <div>
            <h3>hello! from Axios component!!</h3>
            <td />
            <div className="fetchtab">
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>user name</th>
                        <th>email</th>
                        <th>address</th>
                        
                    </tr>
                    {list.map(item => (<tr key={item}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <tr>
                            <td>{item.address.street}</td>
                            <td>{item.address.suite}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                            <tr>
                                <td>{item.address.geo.lat}</td>
                                <td>{item.address.geo.lng}</td>
                            </tr>
                        </tr>
                    </tr>
                    ),)}
                </table>
            </div>
        </div >
    );
}

export default Axiosdata;
