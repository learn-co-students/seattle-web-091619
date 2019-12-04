import React from "react";
import { Redirect } from "react-router-dom";

// need to match specific glasses based on url
// glasses is all the glasses

const Details = ({ glasses, match }) => {
  const getGlasses = () => {
    let thisId = match.params.id;
    let output = { style: "NOT FOUND", image: "", maker: "" };
    glasses.forEach(glass => {
      if (glass.id == thisId) {
        output = glass;
      }
    });
    return output;
  };

  const { image, style, maker, id } = getGlasses();

  return (
    <>
      {id != 1 ? (
        <>
          <img className="card-img-top" src={image} />
          <div className="card-body">
            <h3>{style}</h3>
            <h4>{maker}</h4>
          </div>
        </>
      ) : (
        <Redirect to="/manager" />
      )}
    </>
  );
};

export default Details;
