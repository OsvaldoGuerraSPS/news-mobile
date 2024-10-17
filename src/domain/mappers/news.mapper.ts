import { Article } from "../../data/interfaces/newsApiResponse.interface";
import { News } from "../model/news";

export class NewsMapper {
    static newsApiToNewsModel(news: Article): News {
        return {
            title: news.title,
            author: news.author ? news.author : 'sin autor',
            description: news.description ? news.description : 'sin descripcion',
            urlImage: news.urlToImage ? news.urlToImage : 'https://img.freepik.com/vector-gratis/fondo-estudio-noticias-realista_23-2149985600.jpg'
        }
    }
}