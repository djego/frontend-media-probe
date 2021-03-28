import ArticleEntity from "./ArticleEntity";

const articleEntity = (params: any) => {
    return new ArticleEntity({
        published_date: params.published_date,
        title: params.title,
        abstract: params.abstract,
        image: params.media[0]?.["media-metadata"]?.[2]?.["url"] ?? "http://placekitten.com/g/150/150",
        section: params.section,
        byline: params.byline,
        updated: params.updated
    })
};

export {
    articleEntity
}