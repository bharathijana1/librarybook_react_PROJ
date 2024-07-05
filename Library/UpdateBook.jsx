import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Container, Form, Button} from 'react-bootstrap'
import "../App.css"
import { Validation } from './Validation';
import "./styling.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const UpdateBook = () => {
    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        genre: ''
    })

    useEffect(()=> {
        axios.get('https://formic.onrender.com/books/'+id)
        .then((res)=>{
            setValues({...values, title: res.data.title, genre: res.data.genre});
        })
        .catch(err=> console.log(err))
    },[])

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('https://formic.onrender.com/books/'+id, values)
        .then((res)=>{
            console.log("Successfully updated");
            navigate('/');
        })
        .catch(err=> console.log(err))
    }
   
    return (
        <Container
          fluid
          className="p-0">
          <div className="p-0 w-100 d-flex justify-content-center align-itmes-center">
            <Form onSubmit={handleSubmit}
              className="w-50 p-5 d-flex flex-column"
              autoComplete="off">

              <label htmlFor="title">Title</label>
              <input type="text" placeholder="title" value={values.title} 
              onChange={(e) => setValues({...values, title: e.target.value})}
              />
              <label htmlFor="genre">Genre</label>
              <input type="text" placeholder="genre" value={values.genre} 
              onChange={(e) => setValues({...values, genre: e.target.value})}
              />
              
            
              <Button
                type="submit"
                className="py-2 w-100 mt-2 navbgcolor">
                update
              </Button>
            </Form>
          </div>
        </Container>
      );
}
