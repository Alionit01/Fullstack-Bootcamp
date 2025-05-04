import React, { useState, useEffect } from 'react';
import { useAddUsersMutation, useUpdateUsersMutation } from './userApi';
import { User } from './user.type';

interface Props {
  selectedUser?: User | null;
  onSuccess: () => void;
}

const UserForm: React.FC<Props> = ({ selectedUser, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addUser] = useAddUsersMutation();
  const [updateUser] = useUpdateUsersMutation();

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setPassword(''); // Don't prefill password
    }
  }, [selectedUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const payload = { name, email, password };

    if (selectedUser) {
      await updateUser({ ...selectedUser, ...payload });
    } else {
      await addUser(payload); // Fixed payload
    }

    setName('');
    setEmail('');
    setPassword('');
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>{selectedUser ? 'Update User' : 'Add User'}</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required
        type="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        type="password"
        required={!selectedUser} // Only required when adding
      />
      <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
