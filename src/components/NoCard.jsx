import React from "react";
import { HeadTitle } from "./HeadTitle";

export const NoCard = ({ name }) => {
  return (
    <div className="no-card">
      <div className="container">
        <div className="row">
          <HeadTitle name={name} title={true} />
        </div>
      </div>
      <h2 className="no-card-title">Your {name} is empty</h2>
    </div>
  );
};
