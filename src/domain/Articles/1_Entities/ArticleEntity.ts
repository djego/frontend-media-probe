export default class ArticleEntity {
    private _publishedDate: string;
    private _title: string;
    private _abstract: string;
    private _image: string;
    private _section: string;
    private _author: string;
    private _updatedDate: string;

    constructor(params: any) {
        this._publishedDate = params.published_date;
        this._title = params.title;
        this._abstract = params.abstract;
        this._image = params.image;
        this._section = params.section;
        this._author = params.byline;
        this._updatedDate = params.updated;
    }

    public getDate(): Date {
        return new Date(`ISO ${this._publishedDate}`);
    }

    public toJSON() {
        return {
            title: this._title,
            publishedDate: this._publishedDate,
            abstract: this._abstract,
            image: this._image,
            section: this._section,
            author: this._author,
            updatedDate: this._updatedDate
        }
    }
}