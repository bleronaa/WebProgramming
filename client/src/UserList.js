import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UserList = () => {
    const [tasks,
        setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async() => {
            const result = await axios.get('http://localhost:5001/api/tasks');

            console.log(result.data)
            setTasks(result.data)
        }
        fetchTasks();
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.name}>    
                            <td>{task.name}</td>
                            <td>{task.description}</td>

                        </tr>
                        
                    ))}
                </tbody>
            </table>

        </div>
    )
}

// {users.map(task => (
//     <tr key={user.name}>    
//         <td>{user.name}</td>
//         <td>{user.gender}</td>

//     </tr>
    
// ))}

export default UserList