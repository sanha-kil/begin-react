import React from "react";
import { Link, Route } from "react-router-dom";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>About</p>
      {detail && <p>추가적인 정보</p>}
    </div>
  );
};

export default About;
