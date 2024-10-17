import { DimensionValue, View } from "react-native";

interface Props {
    width?: DimensionValue,
    height?: DimensionValue,
    color?: string,
}

export const Divider = ({ width, height, color }: Props) => {
    return (
        <View style={{ width: width, height: height, backgroundColor: color, opacity: 0.8 }}/>
    )
}