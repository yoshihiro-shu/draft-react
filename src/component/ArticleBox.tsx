import { Link } from "react-router-dom";

import Article from '../types/article'

type Props = { article: Article }

function ArticleBox({ article }: Props) {
    return (
      <article className="flex flex-col shadow my-4">
        <Link to="/" className="hover:opacity-75">
          <img src={ article.thumbnailUrl } />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link to="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article.category.name }</Link>
          <Link to="/" className="text-3xl font-bold hover:text-gray-700 pb-4">{ article.title }</Link>
          <p className="text-sm pb-3">
            By <Link to="/" className="font-semibold hover:text-gray-800">{ article.user.name }</Link>
            , Published on <>{ article.createdAt }</>
          </p>
          <Link to="/" className="pb-6">{ article.content }</Link>
          <Link to="/" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right" /></Link>
        </div>
      </article>
    )
}

export default ArticleBox;
