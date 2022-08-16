import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// const geoUrl =
//   "https://gist.githubusercontent.com/diegovalle/5129746/raw/c1c35e439b1d5e688bca20b79f0e53a1fc12bf9e/mx_tj.json";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChart = () => {
  return (
    // <ComposableMap
    //   //   style={{ backgroundColor: "gray" }}
    //   projection="geoAlbers"
    //   //   projectionConfig={{
    //   //     center: [-5, 25],
    //   //   }}
    // >
    //   <Geographies
    //     style={{ backgroundColor: "green", bottom: 100 }}
    //     geography={geoUrl}
    //   >
    //     {({ geographies }) =>
    //       geographies.map((geo) => (
    //         <Geography key={geo.rsmKey} geography={geo} />
    //       ))
    //     }
    //   </Geographies>
    // </ComposableMap>
    <ComposableMap>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(`${geo.properties.name}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
  //   return (
  //     <Geographies geography={geoUrl}>
  //       {({ geographies }) =>
  //         geographies.map((geo) => {
  //           return (
  //             <Geography
  //               key={geo.rsmKey}
  //               geography={geo}
  //               style={{
  //                 default: {
  //                   fill: "#EEE",
  //                 },
  //                 hover: {
  //                   fill: "#F53",
  //                 },
  //                 pressed: {
  //                   fill: "#E42",
  //                 },
  //               }}
  //             />
  //           );
  //         })
  //       }
  //     </Geographies>
  //   );
};

export default MapChart;
