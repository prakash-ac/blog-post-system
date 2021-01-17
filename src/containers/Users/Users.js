import React, { useEffect, useState } from 'react';
import User from '../../components/User/User';
import './Users.css';

const Users = (props) => {
   const [users, setUsers] = useState([]);

   useEffect(()=>{
       getUsers();
   }, [])

   const getUsers = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users/');
       const responseJson = await response.json();
       setUsers(responseJson);
   }

   const usersArray = [...users];
   const userComponents = usersArray.map((user) => {
       return (
            <User
                key={user.id}
                name={user.name}
                city={user.address.city}
                website={user.website}
                email={user.email}
            />
       )
   })
    return (
        <div className="Users">
            <h3>All Users</h3>
            {userComponents}
        </div>
    )
}

export default Users;