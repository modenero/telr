import React, { useRef, useState } from 'react'

import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import MapboxGL from '@rnmapbox/maps'
MapboxGL.setAccessToken('pk.eyJ1IjoibW9kZW5lcm8iLCJhIjoiY2xmZGExenoxMDBzeDNxbThtNTlibWh0MiJ9.X-pBzRXifDeW1a6_wI8dZQ')

/* Set Tile server. */
// NOTE: setAccessToken requires setWellKnownTileServer for MapLibre
MapboxGL.setWellKnownTileServer('Mapbox')

const ExplorerScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'

    /* Disable (Mapbox) Telemetry. */
    MapboxGL.setTelemetryEnabled(false)

    let _map = useRef(null)

    const camera = useRef(null)

    const defaultCamera = {
        centerCoordinate: [46.6254765922189, 24.942461593578678],
        zoomLevel: 8,
      };

    const defaultStyle = {
        version: 8,
        name: 'Land',
        sources: {
            map: {
                type: 'raster',
                tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                minzoom: 1,
                maxzoom: 19,
            },
        },
        layers: [
            {
                id: 'background',
                type: 'background',
                paint: {
                    'background-color': '#f2efea',
                },
            },
            {
                id: 'map',
                type: 'raster',
                source: 'map',
                paint: {
                    'raster-fade-duration': 100,
                },
            },
        ],
    }

    return (
        <MapboxGL.MapView
            ref={_map}
            className="h-screen w-screen"
            style={styles.map}
            styleJSON={JSON.stringify(defaultStyle)}
            zoomEnabled={true}
            compassEnabled={true}
            scaleBarEnabled={true}
        >
            <MapboxGL.Camera
                ref={camera}
                maxZoomLevel={20}
                minZoomLevel={4}
                zoomLevel={15}
                centerCoordinate={[-84.3934053, 33.7767082]}
            />
        </MapboxGL.MapView>
    )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default ExplorerScreen
