import Geolocation from "@react-native-community/geolocation";
import { ILocation } from "../../infraestructure/interfaces/ilocation";

export const getCurrentLocation = async (): Promise<ILocation> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition((info: any) => {
            resolve({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            });
        }, (error: any) => {
            console.log(`Can get the location: ${error}`)
            reject(error);
        }, { enableHighAccuracy: true });
    });
}