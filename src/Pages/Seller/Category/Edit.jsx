import React, { useState } from 'react';
import axios from 'axios';

const UpdateCategory = ({ match }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    axios.get(`/categories/${match.params.id}`)
     .then(response => {
        setName(response.data.name);
        setDesc(response.data.desc);
      })
     .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/categories/${match.params.id}`, {
      name,
      desc,
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
      <button type="submit">Update Category</button>
    </form>
  );
};

export default UpdateCategory;