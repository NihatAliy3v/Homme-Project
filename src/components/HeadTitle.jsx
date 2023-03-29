import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const HeadTitle = ({ name, title }) => {
  return (
    <div className="head-title">
      <div className="breadcrumb">
        <Link to="/" className="prevent-link">
          Homme
        </Link>
        <VscChevronRight className="arright-icon" />
        <span className="lastest">{name}</span>
      </div>
      {title && <h1 className="title">{name}</h1>}
    </div>
  );
};
