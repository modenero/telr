import React, { useRef, useState } from 'react'

import {
    Button,
    Dimensions,
    PermissionsAndroid,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MapboxGL, { Logger } from '@rnmapbox/maps'
import Geolocation from 'react-native-geolocation-service'

/* Set access token. */
MapboxGL.setAccessToken('pk.eyJ1IjoibW9kZW5lcm8iLCJhIjoiY2xmZGExenoxMDBzeDNxbThtNTlibWh0MiJ9.X-pBzRXifDeW1a6_wI8dZQ')

/* Set tile server. */
// NOTE: setAccessToken requires setWellKnownTileServer for MapLibre
MapboxGL.setWellKnownTileServer(MapboxGL.TileServers.Mapbox)

// edit logging messages
Logger.setLogCallback(log => {
    const { message } = log

    // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
    if (
        message.match('Request failed due to a permanent error: Canceled') ||
        message.match('Request failed due to a permanent error: Socket Closed') ||
        message.match('setAccessToken requires setWellKnownTileServer for MapLibre, see setWellKnownTileServer docs for implications')
    ) {
        return true
    }

    return false
})

const Tab = createMaterialTopTabNavigator()

const ExplorerScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'

    /* Disable (Mapbox) Telemetry. */
    MapboxGL.setTelemetryEnabled(false)

    /* Initialize map handler. */
    let _map = useRef(null)

    /* Initialize camera handler. */
    const _camera = useRef(null)

    /* Set starting position. */
    // NOTE: Georgia Tech Square, Atlanta, GA USA
    const DEFAULT_LOCATION = [ -84.3934053, 33.7767082 ]

    /* Set default zoom level. */
    const DEFAULT_ZOOM = 16

    /* Initialize holders. */
    let latitude
    let longitude

    /**
     * Geolocation Permission
     */
    const _getGeoPermission = () => {
        if (Platform.OS === 'android') {
            /* Request Android permission. */
            PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                ],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.',
                }
            ).then(granted => {
                console.log('GRANTED', granted)

                /* Handle user location. */
                _handleUserLocation()
            }).catch(err => {
                console.warn('LOCATION ERROR:', err)
            })
        } else {
            // TODO
        }
    }

    /**
     * User Location
     */
    const _handleUserLocation = () => {
        Geolocation.getCurrentPosition(_position => {
            console.log('POSITION', JSON.stringify(_position, null, 4))

            latitude = _position.coords.latitude
            longitude = _position.coords.longitude

            _camera.current.moveTo([ longitude, latitude ])
            _camera.current.zoomTo(DEFAULT_ZOOM)
        }, (error) => {
            // See error code charts below.
            // GEOLOCATION ERROR 1 Location permission not granted.
            console.log('GEOLOCATION ERROR', error.code, error.message)

            /* Validate (permissions) error. */
            if (error.code === 1) {
                _getGeoPermission()
            } else {
                /* Move to (default) location. */
                _camera.current.moveTo(DEFAULT_LOCATION)

                /* Set (default) zoom. */
                _camera.current.zoomTo(DEFAULT_ZOOM)
            }
        }, {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000
        })
    }

    const MapView = () => {
        return (
            <MapboxGL.MapView
                ref={_map}
                className="h-screen w-screen"
                style={styles.map}
                zoomEnabled={true}
                compassEnabled={false}
                pitchEnabled={false}
                rotateEnabled={false}
                onDidFinishLoadingMap={_handleUserLocation}
            >
                <MapboxGL.Camera
                    ref={_camera}
                    maxZoomLevel={20}
                    minZoomLevel={4}
                    zoomLevel={14}
                    centerCoordinate={DEFAULT_LOCATION}
                />
            </MapboxGL.MapView>
        )
    }

    const ListView = () => {
        return (
            <View>
                <Text>List View</Text>
            </View>
        )
    }

    return (
        <View className="h-full flex">
            <Tab.Navigator
                className="w-full"
                initialLayout={{
                    width: Dimensions.get('window').width
                }}
                initialRouteName="MapView"
            >
                <Tab.Screen
                    name="MapView"
                    component={MapView}
                    options={{
                        tabBarLabel: 'Map View',
                    }}
                />

                <Tab.Screen
                    name="ListView"
                    component={ListView}
                    options={{
                        tabBarLabel: 'List View',
                    }}
                />
            </Tab.Navigator>
        </View>
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
