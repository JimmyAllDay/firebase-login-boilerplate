import React from "react";
import { Link } from "react-router-dom";

export default function LogInSignInToggle({ linkPath, label, path }) {
  const convertLabel = (lab) =>
    (lab =
      "/" +
      lab
        .toLowerCase()
        .split("")
        .filter((letter) => letter !== " ")
        .join(""));

  const convertPath = (path) =>
    path === "/login" ? path : path.substring(0, path.length - 2);

  const styles = {
    active: {
      width: "90px",
      pointerEvents: "none", //! this isn't working
    },
    inactive: {
      width: "90px",
      borderBottom: "1px black solid",
      backgroundColor: "gainsboro",
    },
  };

  return (
    <Link to={linkPath}>
      <div
        className="d-flex justify-content-center border-top border-dark border-start"
        style={
          convertLabel(label) === convertPath(path)
            ? styles.active
            : styles.inactive
        }
      >
        {label}
      </div>
    </Link>
  );
}
