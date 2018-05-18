// import * as React from "react";
// import FontAwesome from "react-fontawesome";

// const navColorScheme = {
//   color: "#9faecb",
//   marginLeft: ".50em",
//   width: "20px",
//   height: "20px",
//   paddingRight: ".5em"
// };

// export const getIcon = (name: string) => {
//   return <FontAwesome name={name} style={navColorScheme} />;
// };

export const getFontSize = (props: any) =>
  props.font ? `font-size: ${props.font}rem;` : "";

export const getColor = (props: any) =>
  props.color ? `color: ${props.color};` : "";

export default { getFontSize, getColor };
