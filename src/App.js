import React, { useState, useRef } from "react";
import "./App.css";
import film from "./film";
import MovieList from "./MovieList";
import Ajouter from "./Ajouter";

const App = () => {
  const [movies, setMovies] = useState(film);

  const [mtit, setMtit] = useState("");
  const [mnote, setMnote] = useState(0);
  const title = useRef();
  const url = useRef();
  const note = useRef();
  const dis = useRef();
  const notes = useRef();
  const titles = useRef();
  return (
    <div className="App-header">
      {/* ajouter un film  */}
      <Ajouter title={title} url={url} note={note} dis={dis}></Ajouter>
      <div>
        <button
          onClick={() => {
            setMovies([
              ...movies,
              {
                titre: title.current.value,
                description: dis.current.value,
                posterURL: url.current.value,
                note: note.current.value,
              },
            ]);
            console.log(movies);
          }}
        >
          ajouter
        </button>
      </div>
      {/* imput pour recherche ou filter les film   */}
      <h3> titre:</h3>
      <input
        type="text"
        ref={titles}
        onChange={() => {
          setMtit(titles.current.value);
        }}
      />
      <h3> note/10:</h3>
      <input
        type="text"
        ref={notes}
        onChange={() => {
          setMnote(notes.current.value);
        }}
      />
      <MovieList
        className="tt"
        // filter les film  dans  un array
        tt={movies.filter((a) => a.titre.toLocaleLowerCase().trim().includes(mtit.toLocaleLowerCase().trim()) && a.note >= mnote)}
      ></MovieList>
    </div>
  );
};

export default App;
