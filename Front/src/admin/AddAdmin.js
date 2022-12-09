import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../core/Copyright';

import Layout from '../core/Layout';
import { signup } from '../auth';
import { isAuthenticated } from './../auth/index';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignupAdmin() { 
  const [role , setrole] = useState (1) ;
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role : '' ,
    error: '',
    success: false,
  });

  const { name, email, password,  success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault(); // so that browser does not reload
    setValues({ ...values, error: false });
    signup({ name, email, password , role}).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          role : 1 ,
          error: '',
          success: true,
        });
      }
    }); // sending js object
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: success ? '' : 'none' }}
    >
      New admin is created
    </div>
  );

  const classes = useStyles();

  const newAdminForm = () => (
    <Container component='main' maxWidth='xs'>
      {showSuccess()}
      {showError()}
      <CssBaseline />
      <div className={classes.paper}>
       
        
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='off'
                onChange={handleChange('name')}
                type='text'
                name='name'
                value={name}
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Full Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={handleChange('email')}
                type='email'
                value={email}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='text'
                id='password'
                onChange={handleChange('password')}
           
                value={password}
               
              />
            </Grid>
           
          
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={clickSubmit}
          >
            Add New Admin
          </Button>
        
        </form>
      </div>
    </Container>
  );

  const goBack = () => (
    <div className='mt-5'>
      <Link to='/admin/dashboard' className='text-warning'>
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title='Add a new admin'
      description={`Hey ${name}, ready to add a new admin?`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {showSuccess()}
          {showError()}
          {newAdminForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
}
