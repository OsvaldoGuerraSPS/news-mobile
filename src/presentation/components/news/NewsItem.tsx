import { StyleSheet, Text, View } from "react-native"
import { News } from "../../../domain/model/news"
import { FadeInImage } from "../ui/FadeInImage"
import { newsStyles } from "./newsStyles"
import { InfoView} from "./InfoView"
import { Divider } from "../ui/Divider"

interface Props {
    news: News
}

export const NewsItem = ({ news }: Props) => {
    return (
        <View style={newsStyles.container}>
            <View style={newsStyles.image}>
                <FadeInImage uri={news.urlImage} style={{width: '100%', height: '100%'}}/>
            </View>
            <Divider width={ 8 }/>
            <View style={newsStyles.infoView}>
                <InfoView title={news.title} description={news.description}/>
                <Divider height={ 1 } width={ '100%'} color="gray"/>
                <View style={ styles.seeMoreContainer }>
                    <Text style={ styles.seeMore }>Ver más</Text>
                </View>
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

