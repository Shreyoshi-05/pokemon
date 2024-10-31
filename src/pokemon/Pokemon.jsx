import React, { useEffect, useState, useTransition } from "react";
import Pikacards from "./Pikacards";
import "./Pok.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  async function fetchData() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=124");
      const data = await res.json();

      const rowData = data.results.map(async (item) => {
        const res = await fetch(item.url);
        const data = await res.json();
        return data;
      });
      const gotinfo = await Promise.all(rowData);
      setPokemon(gotinfo);
      setLoding(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoding(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  let newData = pokemon.filter((pok) =>
    pok.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="pok_page">
      <h1>Lets Catch Pokémon</h1>

      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search pokemon..."
        />
      </div>

      <div className="pok_container">
        {newData.map((pok) => {
          return <Pikacards id={pok.id} pok={pok} />;
        })}
      </div>
    </div>
  );
};

export default Pokemon;
