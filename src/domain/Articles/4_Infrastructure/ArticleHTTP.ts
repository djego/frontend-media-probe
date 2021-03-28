import { articleEntity } from "../1_Entities";
import ArticleEntity from "../1_Entities/ArticleEntity";
import { IArticleRepository } from "../3_Repository/IArticleRepository";
import { apiKey } from "../../config/const";

export default class ArticleHTTP implements IArticleRepository {
    public async listArticles(today = false, typeList = "byDate"): Promise<ArticleEntity[]> {
        const type = typeList === "byDate" ? 'emailed' : 'viewed';
        const period = today ? 1 : 7;
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/${type}/${period}.json?api-key=${apiKey}`);
        const json = await response.json();
        const articles: ArticleEntity[] = json.results
            .map((item: any) => {
                return articleEntity(item);
            });
        return articles.sort((a: any, b: any) => b.getDate() - a.getDate())
    }
    
    public filterArticles(params: any): Promise<ArticleEntity[]> {
        throw new Error("Method not implemented.");
    }

}