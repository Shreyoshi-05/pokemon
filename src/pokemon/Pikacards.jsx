import React from "react";
import './Pok.css'

const Pikacards = ({ pok, id }) => {

  return (
    <div key={id} className="pok_card">
      <div className="img">
        <img src={pok.sprites.front_default} alt="" />
        <h3>{pok.name}</h3>
      </div>

      <div className="type">
        {
          pok.types.map((pty)=>pty.type.name).join(", ")
        }
      </div>
      
      <div className="info">
        <div>
        <p>weight : {pok.weight}</p>
        </div>
        <div>
        <p>hight : {pok.height}</p>
        </div>
        <div>
        <p>speed :{pok.stats[5].base_stat}</p>
        </div>
        <div>
        <p>experience : {pok.base_experience}</p>
        </div>
        <div>
          <p>moves:{pok.moves.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Pikacards;
