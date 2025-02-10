// Helper file to get dimesion of the device
import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const heightPer  = percentage => {
    return (percentage * deviceHeight) / 100;
}

export const widthPer  = percentage => {
    return (percentage * deviceWidth) / 100;
}