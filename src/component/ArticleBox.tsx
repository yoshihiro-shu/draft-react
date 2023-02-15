import Article from '../types/article'

type Props = { article: Article }

function ArticleBox({ article }: Props) {
    return (
      <article className="flex flex-col shadow my-4">
        <a href="#" className="hover:opacity-75">
          <img src={ article.thumbnailUrl } />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article.category.name }</a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{ article.title }</a>
          <p className="text-sm pb-3">
            By <a href="#" className="font-semibold hover:text-gray-800">{ article.user.name }</a>
            , Published on <>{ article.createdAt }</>
          </p>
          <a href="#" className="pb-6">{ article.content }</a>
          <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right" /></a>
        </div>
      </article>
    )
}

export default ArticleBox;
