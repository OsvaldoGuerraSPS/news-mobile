import { Article } from "../../data/interfaces/newsApiResponse.interface";
import { News } from "../model/news";

export class NewsMapper {
    static newsApiToNewsModel(news: Article): News {
        return {
            title: news.title,
            description: news.description ? news.description : 'sin descripcion',
            urlImage: news.urlToImage ? news.urlToImage : ''
        }
    }
}