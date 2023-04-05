import React, { useState } from "react";

const ClassToggle = ({toggls, setToggles}) => {
  const [toggle, setToggle] = React.useState(null);
  setToggle(toggle ? "18rem" : "16rem");
  return <></>;
};

export default ClassToggle;
