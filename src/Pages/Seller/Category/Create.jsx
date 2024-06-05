import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/categories', {
      name,
      desc,
    },{
        withCredentials: true, 
    },{
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
    })
     .then(response => {
        console.log(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CreateCategory;