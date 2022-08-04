import React from "react";

export const SingleCard = (props) => {
  const { image, bankName, streetNum, branch } = props;
  // console.log(props);
  let name = "Oluwaseun";
  return (
    <section>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body cardBody">
          <h5 className="card-title" style={{ textDecoration: "underline" }}>
            {bankName}
          </h5>
          <p>{streetNum}</p>
          {/* <p
            className="card-text"
            style={{ backgroundColor: "aqua", fontWeight: 900 }}
          > */}
          <p className="card-text" style={cardStyle}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <a href="#" className="btn btn-primary">
            {branch}
          </a>
        </div>
      </div>
    </section>
  );
};

let cardStyle = {
  backgroundColor: "yellow",
  fontWeight: 900,
};
