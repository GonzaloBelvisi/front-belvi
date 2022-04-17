import { PreciosCard } from "../common/PreciosCard"
import React from 'react';
import Intel from "../../assets/Images/intel.png";
import Amd from "../../assets/Images/amd.png";
import Qualcomm from "../../assets/Images/qualcomm.png";
import axios from "axios"
import { useEffect, useState } from "react";
export default function Precios() {
  const [builds, setBuilds] = useState([]);

  //Efecto secundario
  useEffect(() => {
    axios.get("http://localhost:4000/precios").then((response) => {
      console.log(response)
    setBuilds(response.data);
    });
  }, []);
  const buildsList = builds.map(function (build) {
    return (
      <PreciosCard title={build.name} img={ResolveImg(build.name)} precio={build.price} infopc={build.description + " " + build.components.join(" ")} />
    );
  });
  return (
    <>
      <div>
        <main>
          <div className="contenedor-precios">
            {buildsList}
          </div>
        </main>
      </div>
    </>
  );
}

function ResolveImg(name) {
  if (name === "Intel")
    return Intel
  if (name === "Amd")
    return Amd
  if (name === "Qualcomm")
    return Qualcomm
}


