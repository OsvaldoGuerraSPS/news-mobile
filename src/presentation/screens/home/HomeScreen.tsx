import React, { useEffect, useState } from "react"
import { Text, FlatList } from "react-native"
import { getNewsEverything } from "../../../data/api/actions/get.news.everything";
import { News } from "../../../domain/model/news";
import { MySafeArea } from "../../components/ui/MySafeArea";
import { NewsItem } from "../../components/news/NewsItem";
import { globalStyles } from "../../../config/theme/global-styles";

export const HomeScreen = () => {

    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        getNews()
    },[]);

    const getNews = async () => {
        const news = await getNewsEverything();
        setNews(news);
    }

    return (
        <MySafeArea>
            <Text style={globalStyles.title}>Noticias del Mundo</Text>
            <FlatList
                data={news}
                renderItem={({item}) => <NewsItem news={item}/>}
                keyExtractor={(item) => item.title}
            />
        </MySafeArea>
    )
}