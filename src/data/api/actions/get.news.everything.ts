import { Article, NewsApiResponse } from "../../interfaces/newsApiResponse.interface";
import { News } from "../../../domain/model/news"
import { newsApi } from "../newsApi";
import { NewsMapper } from "../../../domain/mappers/news.mapper";

export const getNewsEverything = async (): Promise<News[]> => {
    try {
        const { data } = await newsApi.get<NewsApiResponse>('/everything');
        const news = data.articles.map((article: Article) => {
            return NewsMapper.newsApiToNewsModel(article)
        })
        console.log(news[0].title)
        return news;
    } catch (error) {
        console.log(error)
        throw new Error('error in getNewsEverything')
    }
}