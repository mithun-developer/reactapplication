import React, { useState, useEffect, useRef } from "react";
import "../components/Styles.css";
import Data from "../components/person.json";

function Searchper() {
  const [data, setdata] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        editMode &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setEditMode(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [editMode]);

  const skillSelectionHandler = (person) => {
    setdata(person);
    setDropdownSearchValue("");
    setEditMode(false);
  };

  return (
    <div>
      <h3>Employee Search</h3>

      {editMode ? (
        <div className="dropdown-wrapper">
          <input
            className="dropdown-input"
            name="dropdown-input"
            autoFocus
            onChange={(e) => setDropdownSearchValue(e.target.value)}
            value={data}
          />
          <div className="dropdown-list">
            <ul>
              {Data.filter((person) => person.name.includes(data)).map(
                (person) => {
                  return (
                    <li
                      key={person.id}
                      onClick={() => skillSelectionHandler(person.name)}
                    >
                      {person.name}{" "}
                    </li>
                  );
                }
              )}
              {Data.length === 0 && (
                <li className="no-result">No results found</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <input
          // Grey out the text when "Select Primary skill" input hint is shown
          className={`dropdown-search ${
            !(dropdownSearchValue || data) && "default"
          }`}
          onFocus={() => setEditMode(true)}
          // Display the selected skill or "Select Primary skill" input hint
          value={dropdownSearchValue || "Select Person"}
        />
      )}
    </div>
  );
}

export default Searchper;
