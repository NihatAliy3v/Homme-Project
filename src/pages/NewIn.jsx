import React from "react";
import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
const NewIn = () => {
  return (
    <main className="new-in">
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="head-title">
              <div className="breadcrumb">
                <Link className="prevent-link">Homme</Link>
                <VscChevronRight className="arright-icon"/>
                <span className="lastest">New In</span>
              </div>
              <h1 className="title">New In</h1>
            </div>
            <section className="new-in-side"></section>
            <section className="new-in-main"></section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewIn;
