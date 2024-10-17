import { StyleSheet, Text, View } from "react-native"
import { MySafeArea } from "../../components/ui/MySafeArea"
import { FadeInImage } from "../../components/ui/FadeInImage"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../../navigator/StackNavigator"

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}
export const DetailScreen = ({ route }: Props) => {

    const { news } = route.params;

    return (
        <MySafeArea>
            <Text style={ styles.title }>{ news.title }</Text>
            <Text style={ styles.author }>{ news.author }</Text>
            <Text style={ styles.description }>{ news.description }</Text>
            <FadeInImage uri={ news.urlImage } style = { styles.image }/>
        </MySafeArea>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
    author: {
        paddingVertical: 10,
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        paddingBottom: 24
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 18
    }
})