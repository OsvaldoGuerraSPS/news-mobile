import { StyleSheet, Text, View } from "react-native"
import { newsStyles } from "./newsStyles";

interface Props {
    title: string;
    description: string;
}

export const InfoView = ({ title, description }: Props) => {
    return (
        <View style={ newsStyles.infoView }>
            <Text style={ styles.newsTitle }>
                { title }
            </Text>
            <Text style={ styles.newsDescription }>
                { description.substring(0, 120).replaceAll('\n', ' ') }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    newsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 3
    },
    newsDescription: {
        fontSize: 12,
        marginBottom: 3
    }
})