import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FilmCard= (props) => {
 
  return (
    // Création une carte  à l'aide de React-bootstrap , contenant tous des informations d'un film  
    <div   className=' ino'>

      <Link to={`/movies/${props.pr.titre}`}             >
        <Card style={{ width: 300 }}>
       
      <Card.Img variant="top"    src={props.pr.posterURL} alt={props.pr.titre} style={{width:300 ,height:300}} />      
      <Card.Body style={{ backgroundColor:'rgb(106, 106, 104,0.5)' }}>
        <Card.Title>{props.pr.titre}</Card.Title>
        <Card.Text>
        
       <p>description: {props.pr.description}</p>

        
        <p>Note: {props.pr.note}</p>
      
        </Card.Text>
        
      </Card.Body>
    </Card>
       





    </Link>



    </div>
  )
}




export default FilmCard
