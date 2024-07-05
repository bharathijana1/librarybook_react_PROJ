import axios from "axios"
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AddtoBook } from "./AddtoBook";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from "react-router-dom";
import "./styling.css";




function MainBookList() {
  const [data,setData] = useState();
  console.log(data);

  useEffect(()=>{
    axios 
    .get('https://formic.onrender.com/books')
    .then(res=> {
      setData(res.data);
      console.log(res)
        })
    .catch((err)=> console.error(err));
  },[])

  const handlingDelete = (id) =>{
    const confirmdelete = window.confirm("would you like to delete a book");
    if(confirmdelete){
      axios
      .delete(`https://formic.onrender.com/books/${id}`)
      .then(()=>{
        setData((prevData)=> prevData.filter((item)=> item.id !== id));
        console.log("sucessfully Deleted")
      })
      .catch((err)=> console.log(err));
    }
  };


  return(
    <div className="m-3 p-3">  

    <Button className=" m-3 navbgcolor " style={{backgroundColor:"rgba(105, 7, 81, 0.849)"}}>
              <Link to="/addbook" className="text-white text-decoration-none link">Add Book</Link>
    </Button>

    <div className="d-flex flex-wrap justify-content-center gap-4">
    {
    data &&
    data.map((book,index)=> (
        <Card key={index} style={{ width: '18rem' }} className="p-2">
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.author.name}</Card.Subtitle>
                <Card.Text>
                    <strong>Genre:</strong>{book.genre} <br/>
                    <strong>Publication year:</strong>{book.publicationYear} <br/>
                    {/* <strong>ISBN:</strong>{book.isbn}  */}
                </Card.Text>

                <Card.Text>
                    <strong>Author Details:</strong>{book.author.name} was born in {book.author.birthYear} in 
                    {book.author.nationality} <br/>
                </Card.Text>

      <Card.Text>
        <strong>Author biography:</strong>{book.author.biography}
      </Card.Text>
      
    </Card.Body>

    <div>
      <Button variant="success" className="mx-3">
              <Link to={`/updatebook/${book.id}`} className="text-white text-decoration-none">Edit</Link>
      </Button>

      <Button onClick={()=> handlingDelete(book.id)} variant="danger">Delete</Button>
    </div>
        </Card>
))
    }
    </div>
    </div>

  );
 
}

export default MainBookList;
