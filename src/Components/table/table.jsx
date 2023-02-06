import './table.css';
import { useState, useEffect } from 'react';
const Info = () => {
    //initialize data in state or local storage!!for viewing!
    const [Posts, setPosts] = useState([]);

    //async-await
    const getPosts = async () => {
        //get response from api
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
        //console.log("get promise pending stage ");
        //extract data using .json()
        //const data = await response.json();
        //console.log(data);//got data
        //-----------------------------------------
        setPosts(await response.json());//data stored in set user!!


    }
    //using use effect!! 
    useEffect(() => { getPosts(); }, [])//<==to stop infinite loop use-"[]"

    return (
        <div className='container col-lg-12'>
            <h3>hello! from data component!!</h3>
            <hr />
            <div className="fetchtab">
                <table>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    {Posts.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{String(val.body)}</td>  
                                {/* display boolean value */}
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    )

}
export default Info;