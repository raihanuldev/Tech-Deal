import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const AllUsers = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/api/v1/syestem-users')
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Join at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user,index)=> <UserRow key={index} user={user} index={index+1}/>)
          }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
