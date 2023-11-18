import React from "react";
import "./Navigation.css";

function Navigation({ locations, onLocationsChange }) {
  function getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === "dots") {
      if (isLast(index)) {
        classes += " hidden";
      }
    } else {
      classes += isLast(index) ? " small" : " x-small";
      if (index === 0) {
        classes += " first";
      }
    }
    return classes;
  }

  function isLast(index) {
    return index === locations.length - 1;
  }

  function isFirst(index) {
    return index === 0;
  }

  function moveUp(index) {
    let allLocations = locations;
    let currentLocation = allLocations[index];
    allLocations[index] = allLocations[index - 1];
    allLocations[index - 1] = currentLocation;
    onLocationsChange(allLocations);
  }

  function moveDown(index) {
    let allLocations = locations;
    let currentLocation = allLocations[index];
    allLocations[index] = allLocations[index + 1];
    allLocations[index + 1] = currentLocation;
    onLocationsChange(allLocations);
  }

  return (
    <div className="layout-row align-items-center justify-content-center navigation-screen">
      <div className="card layout-row flat map-card">
        <section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
          <ul className="pl-0" data-testid="location-list">
            {locations.map((location, index) => (
              <li
                key={"row" + index}
                data-testid={"location-" + index}
                className="layout-row justify-content-between align-items-center mr-8 pl-40 relative"
              >
                <div className="layout-column justify-content-start align-items-center handle">
                  <i className={getClasses("marker", index)}>
                    {isLast(index) ? "room" : "radio_button_checked"}
                  </i>
                  <i className={getClasses("dots", index)}>more_vert</i>
                </div>
                <div className="location-name">
                  <p className="caption text-start mb-4" data-testid="location">
                    {location}
                  </p>
                </div>
                <div>
                  {!isFirst(index) && (
                    <button
                      onClick={() => moveUp(index)}
                      className="icon-only small mx-0"
                      data-testid="up-button"
                    >
                      <i className="material-icons">arrow_upward</i>
                    </button>
                  )}
                  {!isLast(index) && (
                    <button
                      onClick={() => moveDown(index)}
                      className="icon-only small mx-0"
                      data-testid="down-button"
                    >
                      <i className="material-icons">arrow_downward</i>
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-auto">
          <img src="images/map.svg" className="fill" alt="map" />
        </section>
      </div>
    </div>
  );
}

export default Navigation;
