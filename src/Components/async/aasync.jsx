import axios from "axios";
import { useState,useEffect } from "react";
function Async(){
    const [Comments,setComments]=useState([])

    async function fetchData() {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
          setComments(response.data)
          console.log(response.stringifiy);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      },[]) 

return(<div>
    <h2>hello from async await!</h2>
    <hr/>
    <div className="fetchtab">
                <table>
                    <tr>
                        <th>postid</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                    {Comments.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.postId}</td>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.body}</td>
                               
                            </tr>
                        )
                    })}
                </table>
            </div>
   

</div>)
}
export default Async;