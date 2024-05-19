import { AdminUserInfo,  } from "@/interface/UserInfoInterface";
import { NextPage } from "next";
import React from "react";

const UserRow:NextPage<{user:AdminUserInfo; index:Number}> = ({user,index}) => {

  return (
    <tr>
      <th>{index}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.createdAt}</td>
      <td>
        <button className="btn btn-circle">Edit Role</button>
      </td>
    </tr>
  );
};

export default UserRow;
