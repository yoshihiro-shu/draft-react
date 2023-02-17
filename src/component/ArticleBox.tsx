import { Link, generatePath } from "react-router-dom";

import Article from '../server/types/article'

type Props = { article: Article }

const displayArticleContent: number = 50

function ArticleBox({ article }: Props) {
    const articleDetailPath: string = generatePath("/articles/:id", {id: article.id.toString() })

    return (
      <article className="flex flex-col shadow my-4">
        <Link to={articleDetailPath} className="hover:opacity-75">
          <img src={ article.thumbnailUrl } />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link to="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article.category.name }</Link>
          <Link to={articleDetailPath} className="text-3xl font-bold hover:text-gray-700 pb-4">{ article.title }</Link>
          <p className="text-sm pb-3">
            By <Link to="/" className="font-semibold hover:text-gray-800">{ article.user.name }</Link>
            , Published on <>{ article.createdAt }</>
          </p>
          <p className="pb-6">{ article.content.slice(0, displayArticleContent) }</p>
          <a className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
        </div>
      </article>
    )
}

export default ArticleBox;
