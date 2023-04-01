import { useParams } from 'react-router-dom';

function UserDetails({ users }) {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{user.website}</td>
                    </tr>
                    <tr>
                        <td>Company Name</td>
                        <td>{user.company.name}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{user.address.city}</td>
                    </tr>
                    <tr>
                        <td>Catchphrase</td>
                        <td>{user.company.catchPhrase}</td>
                    </tr>
                    <tr>
                        <td>BS</td>
                        <td>{user.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserDetails;
