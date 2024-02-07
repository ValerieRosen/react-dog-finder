import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";
import "./App.css";

function DogList({ dogs }) {
  return (
    <div className="DogList" align="center">
      <div className="">
        <div className="col">
          <h3 className="" align="center">
            Please click a dog for more info.
          </h3>
        </div>
      </div>
      <div className="row" align="center">
        {dogs.map((d) => (
          <div className="" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
