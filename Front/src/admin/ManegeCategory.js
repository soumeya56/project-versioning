import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategorie } from './ApiAdmin';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const destroy = (categorieId) => {
    deleteCategorie(categorieId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadCategories();
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Layout
      title='Manage Categories'
      description='Perform CRUD on products'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center'>Total {categories.length} categories</h2>
          <hr />
          <ul className='list-group'>
            {categories.map((c, i) => (
              <li
                key={i}
                className='list-group-item d-flex justify-content-between align-items-center'
              >
               <div className='col-md-1'>
                <strong>{c.name}</strong>
                </div>
                <div className='col-md-1'>
                <Link to={`/admin/category/${c._id}`}>
                  <span className='badge badge-warning badge-pill'>Update</span>
                </Link>
                </div>
                <div className='col-md-1'>
                <Link>
                  <span
                    onClick={() => destroy(c._id)}
                    className='badge badge-danger badge-pill'
                  >
                    Delete
                  </span>
                </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
       
      </div>
    </Layout>
  );
};

export default ManageCategories;
