import React from "react";
import GoogleMapReact from 'google-map-react';
import { Box } from "@mui/material";
import styles from './ContactForm.module.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <Box className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDLDsPjHArDgR0UNIf13r56TC3mydGBMJ0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </Box>
  );
}
export default MapContainer;