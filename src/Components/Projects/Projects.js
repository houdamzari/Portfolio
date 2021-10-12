import React, { useState, useEffect } from "react";
import BigContainer from "./BigContainer";
import picture from "../../media/pic.jpeg";
import Description from "./Description";
import Fade from "react-reveal/Fade";
import Tablet from "./Tablet";
import HeadingPrimary from "./HeadingPrimary";

function Projects() {
  const [data, setData] = useState([]);
  const url = "https://portfolio-backend1432.herokuapp.com/api/projects";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);
  return data.map((t) => (
    <Fade top>
      <BigContainer close>
        <div className="column">
          <HeadingPrimary title={t.title} />
          <Description description={t.desc} tags={t.tags} />
        </div>

        <Tablet img={picture} />
      </BigContainer>
    </Fade>
  ));
}

export default Projects;
