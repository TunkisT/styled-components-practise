import React from "react";
import PropTypes from "prop-types";
import * as S from "./Tag.style";

const colors = [
  {
    name: "red",
    background: "#ffd7d9",
    hover: "#ffb3b8",
    color: "#750e13",
  },
  {
    name: "magenta",
    background: "#ffd6e8",
    hover: "#ffafd2",
    color: "#740937",
  },
  {
    name: "purple",
    background: "#e8daff",
    hover: "#d4bbff",
    color: "#491d8b",
  },
  {
    name: "blue",
    background: "#d0e2ff",
    hover: "#a6c8ff",
    color: "#002d9c",
  },
  {
    name: "cyan",
    background: "#bae6ff",
    hover: "#82cfff",
    color: "#003a6d",
  },
  {
    name: "teal",
    background: "#9ef0f0",
    hover: "#3ddbd9",
    color: "#004144",
  },
  {
    name: "green",
    background: "#a7f0ba",
    hover: "#6fdc8c",
    color: "#044317",
  },
  {
    name: "gray",
    background: "#e0e0e0",
    hover: "#c6c6c6",
    color: "#393939",
  },
  {
    name: "cool",
    background: "#dde1e6",
    hover: "#c1c7cd",
    color: "#343a3f",
  },
  {
    name: "warm",
    background: "#e5e0df",
    hover: "#cac5c4",
    color: "#3c3838",
  },
];

const Tag = ({ color, children }) => {
  const theme = colors.find((c) => c.name === color);

  return (
    <S.Tag
      color={theme.color}
      background={theme.background}
      hoverColor={theme.hover}
    >
      {children}
    </S.Tag>
  );
};

Tag.propTypes = {
  color: PropTypes.oneOf(colors.map((color) => color.name)),
  children: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  color: "red",
};

export default Tag;