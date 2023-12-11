import React from 'react';

const Ajouter = ({title,dis,note,url}) => {

  return (
    <div className='hh' >
        <div className='cc'>
        <div >
        <h3> titre:</h3>
      <input type="text" ref={title} />
      <h3> discription :</h3>
      <input type="text" ref={dis} />
      </div>
      <div  >
      <h3> note/10:</h3>
      <input type="text" ref={note} />
      <h3> PosteUrl:</h3>
      <input type="text" ref={url} />
      </div>
     </div>
     <br></br>
      
    </div>
  );
};

export default Ajouter;
