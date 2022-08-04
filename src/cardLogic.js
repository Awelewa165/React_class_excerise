import React from "react";
import { bankDBs, data } from "./data";
import { SingleCard } from "./card";

const Card = () => {
  return (
    <div>
      <h2>Our Cards</h2>
      <div className="row">
        {data.map((bank) => {
          return (
            <div className="col-md-4 col-sm-12" key={bank.id}>
              <SingleCard {...bank}></SingleCard>;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
