import React, {useState,useEffect} from "react";
import BigContainer from "./BigContainer";
import Spacer from "../../Utilities/Spacer";
import picture from "../../media/pic.jpeg";
import Description from "./Description";
import Tablet from "./Tablet";
import HeadingPrimary from "./HeadingPrimary";
import Button from "../Home/Button";

function Projects(children) {
    const [data,setData] = useState([])
    const url = "http://portfolio-backend1432.herokuapp.com/api/projects"
    useEffect(()=> {fetch(url)
        .then((response) => response.json())
        .then(({data}) => setData(data))}   , [])
  return data.map((t)=>(
    <BigContainer close >

        <div className="column">

            <HeadingPrimary title={t.title} />
        <Description  description={t.desc}/>
      </div>

      <Tablet img={picture} />
    </BigContainer>
  ));
}

export default Projects;
