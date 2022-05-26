import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <div className="col">
            <h4>PAKRICORN USA</h4>
            <UL className="list-unstyled"></UL>
            <li>342-420-6969</li>
            <li>Dallas, Texas</li>
            <li>Frisco County North</li>
          </div>
          {/*column2*/}
          <div className="col">
            <h4>PAKRICORN IND</h4>
            <UL className="list-unstyled"></UL>
            <li>040-23745217</li>
            <li>Hyderabad, Telangana</li>
            <li>Jubilee Hills East</li>
          </div>
          {/*column3*/}
          <div className="row">
            <h4>PAKRICORN AUS</h4>
            <ul className="list-unstyled"></ul>
            <li>61-285-564551</li>
            <li>Liverpool,Sydney</li>
            <li>new South Wales West</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
