import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import Article from '../../server/types/article';

import getArticleDetailApi from '../../server/api/articleDetail';


const AritcleDetail: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [article, setArticles] = useState<Article>();
  const id = useParams()["id"] as string

  useEffect(() => {
    fetch(getArticleDetailApi(id))
      .then(res => res.json())
      .then(
        (result) => {
          setArticles(result.data);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    <article className="flex flex-col shadow my-4">
      <Link to="/" className="hover:opacity-75">
        <img src={ article?.thumbnailUrl } />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link to="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article?.category.name }</Link>
        <p className="text-3xl font-bold hover:text-gray-700 pb-4">{ article?.title }</p>
        <p className="text-sm pb-3">
          By <Link to="/" className="font-semibold hover:text-gray-800">{ article?.user.name }</Link>
          , Published on <>{ article?.createdAt }</>
        </p>
        <p className="pb-6">{ article?.content }</p>
      </div>
    </article>
  )
}

export default AritcleDetail;
