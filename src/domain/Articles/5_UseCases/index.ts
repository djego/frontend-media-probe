import { articleHttp } from "../4_Infrastructure";
import ListArticleUseCase from "./ListArticlesUseCase";

const listArticlesUseCase = () => new ListArticleUseCase(articleHttp());

const articlesUseCases = {
    'list_articles_use_case': listArticlesUseCase()
};

export {
    articlesUseCases
};