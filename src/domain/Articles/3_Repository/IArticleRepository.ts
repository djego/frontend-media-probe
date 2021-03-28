import ArticleEntity from "../1_Entities/ArticleEntity";

export interface IArticleRepository {
    listArticles(today: boolean, mostViewed?: string): Promise<ArticleEntity[]>;
    filterArticles(params: any): Promise<ArticleEntity[]>;
}