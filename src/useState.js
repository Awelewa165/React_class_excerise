import React, { useState } from "react";
import { data } from "./data";

const Update = () => {
  //   const [name, setName] = useState("john");
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [people, setPeople] = useState(data);
  console.log(people);
  //   console.log(data);

  //   const handleUpdate = () => {
  //     // console.log(name);
  //     // setName("mary");
  //     //     if (name === "john") {
  //     //       setName("mary");
  //     //     } else {
  //     //       setName("john");
  //     //     }
  //     setCounter(counter + 1);
  //   };

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleChange = (e) => {
    let currentVal = e.target.value;
    setValue(currentVal);
  };
  return (
    <div>
      <h1> useState Example</h1>
      <p>{counter}</p>
      {/* <button className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button> */}
      <button className="btn btn-primary me-2" onClick={handleIncrease}>
        Increase
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>

      <input type="text" placeholder="type here" onChange={handleChange} />
      <h3>{value}</h3>
    </div>
  );
};

export default Update;
