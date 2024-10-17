import { Pressable, StyleSheet, Text, View } from "react-native"
import { News } from "../../../domain/model/news"
import { FadeInImage } from "../ui/FadeInImage"
import { newsStyles } from "./newsStyles"
import { InfoView} from "./InfoView"
import { Divider } from "../ui/Divider"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../../navigator/StackNavigator"

interface Props {
    news: News
}

export const NewsItem = ({ news }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={newsStyles.container}>
            <View style={newsStyles.image}>
                <FadeInImage uri={news.urlImage} style={{width: '100%', height: '100%'}}/>
            </View>
            <Divider width={ 8 }/>
            <View style={newsStyles.infoView}>
                <InfoView title={news.title} description={news.description}/>
                <Divider height={ 1 } width={ '100%'} color="gray"/>
                <Pressable 
                    onPress={() => navigation.navigate('DetailScreen', { news: news })}
                    style={ styles.seeMoreContainer }>
                    <Text style={ styles.seeMore }>Ver más</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    seeMoreContainer: {
        alignItems: 'flex-end',
        paddingVertical: 2
    },
    seeMore: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    }
})

