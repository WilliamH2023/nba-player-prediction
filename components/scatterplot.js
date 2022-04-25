import React, { Component } from "react";
import { ScatterBoard, Lazy } from "react-scatter-board";

const Scatterplot = () => {
  return (
    <Lazy loading={<div>Loading...</div>}>
      {() =>
        fetch("http://localhost:8080/GSE48968_tSNE_3.json")
          .then((response) => response.json())
          .then((data) => (
            <ScatterBoard
              data={data}
              shapeKey="strain"
              colorKey="description"
              labelKeys={["sample_id"]}
              is3d={true}
            />
          ))
      }
    </Lazy>
  );
};
export default Scatterplot;
