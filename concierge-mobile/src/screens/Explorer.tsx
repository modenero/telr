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

import MapboxGL, { Logger } from '@rnmapbox/maps'
MapboxGL.setAccessToken('pk.eyJ1IjoibW9kZW5lcm8iLCJhIjoiY2xmZGExenoxMDBzeDNxbThtNTlibWh0MiJ9.X-pBzRXifDeW1a6_wI8dZQ')

/* Set Tile server. */
// NOTE: setAccessToken requires setWellKnownTileServer for MapLibre
MapboxGL.setWellKnownTileServer(MapboxGL.TileServers.Mapbox)

// edit logging messages
Logger.setLogCallback(log => {
    const { message } = log

    // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
    if (
        message.match('Request failed due to a permanent error: Canceled') ||
        message.match('Request failed due to a permanent error: Socket Closed')
    ) {
        return true
    }

    return false
})

const ExplorerScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'

    /* Disable (Mapbox) Telemetry. */
    MapboxGL.setTelemetryEnabled(false)

    let _map = useRef(null)

    const _camera = useRef(null)

    return (
        <MapboxGL.MapView
            ref={_map}
            className="h-screen w-screen"
            style={styles.map}
            zoomEnabled={true}
            compassEnabled={true}
            scaleBarEnabled={true}
        >
            <MapboxGL.Camera
                ref={_camera}
                maxZoomLevel={20}
                minZoomLevel={4}
                zoomLevel={14}
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
