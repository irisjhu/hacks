import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { ComposableMap, Geographies, Geography, Box } from "react-simple-maps";

const HacksMap = () => {
  const classes = useStyles();

  // url to a valid topojson file
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <div>
      <Typography variant="h1" align="center">
        hacksmap
      </Typography>
      <div>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default HacksMap;
