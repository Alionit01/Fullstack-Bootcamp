import { User } from './user.type';
import { useState } from 'react';
import { useGetUsersQuery } from './userApi';

const UserList = () => {

  const { data, error, isLoading, isFetching } = useGetUsersQuery();
  
  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts!</p>;

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((usr: User) => (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFetching && <p>Updating...</p>}
    </div>
  );
};
export default UserList;