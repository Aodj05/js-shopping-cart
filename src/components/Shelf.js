import React from "react";

const Shelf = (props) => {
    return(
          <span className="product-card">
            <img src={props.item.image} alt={props.item.name} />
            <div className="card-details">
              <h4>{props.item.name}</h4>
              <h6>{`{props.item.price}caps`}</h6>
            </div>
          </span>
        );
}

export default Shelf;