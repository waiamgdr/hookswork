import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Description = (props) => {
  const param = useParams();
 const navigate=useNavigate();
  var x = props.movies.filter((el) => el.titre == param.titre);

  return (
    <div>
      <h1>{x[0].titre}</h1>
      <iframe
        width="560"
        height="315"
        src={x[0].trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay;
   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{x[0].description}</p>
      <button  onClick={()=>navigate('/')}> retour</button>
    </div>
  );
};

export default Description;
