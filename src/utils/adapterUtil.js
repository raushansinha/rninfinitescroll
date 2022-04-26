import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';

const designWidth = 375;
const designHeight = 667;

const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export function adapter(pt) {
    return (pt / designWidth) * deviceWidth;
}
