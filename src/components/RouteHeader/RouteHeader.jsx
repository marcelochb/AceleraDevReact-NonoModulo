import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { RiArrowLeftLine } from "react-icons/ri";

import "./RouteHeader.scss";

export const RouteHeader = ({ categoryName, path }) => (
  <div className="route-header" data-testid="route-header">
    <div className="route-header__title-group">
      <Link to={path} className="back-button">
        <RiArrowLeftLine />
      </Link>

      <span className="route-header__title">{categoryName}</span>
    </div>
  </div>
);

RouteHeader.defaultProps = {
  path: "/dashboard",
};

RouteHeader.propTypes = {
  categoryName: PropTypes.string.isRequired,
  path: PropTypes.string,
};
