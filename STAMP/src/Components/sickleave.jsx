import React from "react";
import { useNavigate, Link } from "react-router-dom";

function SickLeave() {
  return (
    <div
      style={{ backgroundColor: "rgb(161, 192, 254) ", minHeight: " 100vh" }}
    >
      <form>
        <center>
          <h3 style={{ fontFamily: "fantasy" }}>Sick Leaves</h3>
          <p>
            You will be entitled to twelve (12) days sick leaves for every year
            of service; Leave should be arranged through your department
            manager. You will be entitled to take the public holidays as
            applicable in the state and city of Hyderabad, Telengana and such
            number of additional holidays as may be decided, from time to time,
            by the Company. For further general guidance regarding leave
            entitlements, please refer to the Company’s corporate policies on
            leave which are available on the Company’s corporate policy centre
            site.
          </p>
        </center>
      </form>

      <div className="row">
        <p className="col-small">
          <center>
            &copy;{new Date().getFullYear()} PAKRICORN TECHNO SOLUTIONS | All
            Rights Reserved | <Link to="/terms">Terms Of Service</Link> |
            <Link to="/privacy"> Privacy </Link>
          </center>
        </p>
      </div>
    </div>
  );
}

export default SickLeave;
