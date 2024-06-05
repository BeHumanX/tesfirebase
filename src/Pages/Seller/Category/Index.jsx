import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error(
            "Expected an array of categories, but got:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleDeleteCategory = (id) => {
    axios
      .delete(`http://localhost:8000/api/categories/${id}`)
      .then(() => {
        const newCategories = { ...categories };
        delete newCategories[id];
        setCategories(newCategories);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Link to="/seller-dashboard/category/create">
        <button>Create Category</button>
      </Link>
      {Array.isArray(categories) ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.desc}</td>
                <td>
                  <button onClick={() => handleDeleteCategory(category.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndexCategory;
