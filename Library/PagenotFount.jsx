import React from 'react'
import { Link} from "react-router-dom";
import { Button } from 'react-bootstrap'



export const PagenotFount = () => {
  return (
    <div style={{height:"500px"}} className='d-flex justify-content-center 
    align-items-center text-dark pagenotfound'>
          <div>Page Not Found</div>
          <br />
          <div>
          <Button className='bg-dark py-2'>
            <Link to="/" className='text-white text-decoration-none '>back to Home </Link></Button>
          </div>

    </div>
  )
}
