import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Container, Form, Button} from 'react-bootstrap'
import "../App.css"
import { Validation } from './Validation';
import "./styling.css";
import { useNavigate } from 'react-router-dom';



export const AddtoBook = () => {
  const navigate = useNavigate();

    const {values, handleBlur, isSubmitting, touched, handleChange, errors, handleSubmit,} = 
    useFormik({
        initialValues:{
            title: "",
            author:{
                name: "",
                
                birthYear: "",
                nationality: "",
                biography: "",
            },
            genre: "",
            publicationYear: "",
            isbn: "",
        },
        validationSchema: Validation,
        onSubmit:async (values)=>{
            try{
                const res = await axios.post("https://formic.onrender.com/books",values)
                navigate('/');
                console.log("Sucessfully added");


            }
            catch(err){
                console.log(err);   
            }
        }
    });

    return (
        <Container
          fluid
          className="p-0">
          <div className="p-0 w-100 d-flex justify-content-center align-itmes-center">
            <Form
              onSubmit={handleSubmit}
              className="w-50 p-5 d-flex flex-column"
              autoComplete="off">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter your title"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.title && touched.title ? "input-error" : ""}
              />
              {errors.title && touched.title && (
                <p className="error">{errors.title}</p>
              )}
              <label htmlFor="author.name">Author Name</label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                id="author.name"
                placeholder='Enter author name'
                value={values.author.name}
                className={
                  errors.author &&
                  errors.author.name &&
                  touched.author &&
                  touched.author.name
                    ? "input-error"
                    : ""
                }
              />
              {errors.author &&
                errors.author.name &&
                touched.author &&
                touched.author.name && (
                  <p className="error">{errors.author.name}</p>
                )}
              <label htmlFor="author.birthYear">BirthYear</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="author.birthYear"
                value={values.author.birthYear}
                type="number"
                className={
                  errors.author &&
                  errors.author.birthYear &&
                  touched.author &&
                  touched.author.birthYear
                    ? "input-error"
                    : ""
                }
                placeholder="Enter birth year"
              />
              {errors.author &&
                errors.author.birthYear &&
                touched.author &&
                touched.author.birthYear && (
                  <p className="error">{errors.author.birthYear}</p>
                )}
              <label htmlFor="author.nationality">Nationality</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="author.nationality"
                value={values.author.nationality}
                type="text"
                className={
                  errors.author &&
                  errors.author.nationality &&
                  touched.author &&
                  touched.author.nationality
                    ? "input-error"
                    : ""
                }
                placeholder="Enter nationality"
              />
              {errors.author &&
                errors.author.nationality &&
                touched.author &&
                touched.author.nationality && (
                  <p className="error">{errors.author.nationality}</p>
                )}
              <label htmlFor="author.biography">Biography</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="author.biography"
                value={values.author.biography}
                type="text"
                className={
                  errors.author &&
                  errors.author.biography &&
                  touched.author &&
                  touched.author.biography
                    ? "input-error"
                    : ""
                }
                placeholder="Enter biography"
              />
              {errors.author &&
                errors.author.biography &&
                touched.author &&
                touched.author.biography && (
                  <p className="error">{errors.author.biography}</p>
                )}
              <label htmlFor="genre">Genre</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="genre"
                value={values.genre}
                type="text"
                className={errors.genre && touched.genre ? "input-error" : ""}
                placeholder="Enter your genre"
              />
              {errors.genre && touched.genre && (
                <p className="error">{errors.genre}</p>
              )}
              <label htmlFor="publicationYear">publicationYear</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="publicationYear"
                value={values.publicationYear}
                type="number"
                className={
                  errors.publicationYear && touched.publicationYear
                    ? "input-error"
                    : ""
                }
                placeholder="Enter your publicationYear"
              />
              {errors.publicationYear && touched.publicationYear && (
                <p className="error">{errors.publicationYear}</p>
              )}
              <label htmlFor="isbn">isbn</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="isbn"
                value={values.isbn}
                type="text"
                className={errors.isbn && touched.isbn ? "input-error" : ""}
                placeholder="Enter your isbn"
              />
              {errors.isbn && touched.isbn && (
                <p className="error">{errors.isbn}</p>
              )}
              <Button
                type="submit"
                className="py-2 w-100 mt-2 navbgcolor"
                disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      );
}
