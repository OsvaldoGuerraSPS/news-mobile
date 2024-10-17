import { Article } from "../../data/interfaces/newsApiResponse.interface";
import { News } from "../model/news";

export class NewsMapper {
    static newsApiToNewsModel(news: Article): News {
        return {
            title: news.title,
            description: news.description ? news.description.substring(0, 120).replaceAll('\n', ' ') : 'sin descripcion',
            urlImage: news.urlToImage ? news.urlToImage : 'https://img.freepik.com/vector-gratis/fondo-estudio-noticias-realista_23-2149985600.jpg'
        }
    }
}