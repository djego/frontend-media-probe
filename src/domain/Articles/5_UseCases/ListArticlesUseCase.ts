import { IArticleRepository } from "../3_Repository/IArticleRepository";

export default class ListArticleUseCase {
    private _repository: IArticleRepository;

    constructor(repository: IArticleRepository) {
        this._repository = repository;
    }

    public async execute(today?: boolean, typeList?: string) {
        const articles = await this._repository.listArticles(!!today, typeList);
        return articles.map(article => article.toJSON());
    }
}