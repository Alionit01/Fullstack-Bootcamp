import { User } from './user.type';
import { useState } from 'react';
import { useDeleteUsersMutation, useGetUsersQuery } from './userApi';
import UserForm from './UserForm';

const UserList = () => {

  const { data, error, isLoading, isFetching } = useGetUsersQuery();
  const [deleteUser]  = useDeleteUsersMutation();

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts!</p>;

  return (
    <div>
         <UserForm 
         selectedUser={selectedUser}
         onSuccess={() => setSelectedUser(null)}
       />

      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((usr: User) => (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
              <td>
              <button onClick={() => setSelectedUser(usr)}>
                edit
              </button>('|')
              <button onClick={() => deleteUser(usr.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFetching && <p>Updating...</p>}
    </div>
  );
};
export default UserList;