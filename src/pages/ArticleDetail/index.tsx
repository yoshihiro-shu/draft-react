import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import Article from '../../server/types/article';

import apiClient from '../../server/client';
import getArticleDetailApi from '../../server/api/articleDetail';

type ArticleDetailesponse = {
  status: number
  data: Article
}

const AritcleDetail: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [article, setArticle] = useState<Article>();
  const id = useParams()["id"] as string

  useEffect(() => {
    (async () => {
     try {
       const res = await apiClient.Get<ArticleDetailesponse>(getArticleDetailApi(id));
       console.log(res)
       setArticle(res.data);
     } catch (err) {
       setError(err)
       console.error(err);
     }
     })();
   }, [id])

  if (error) { return <div>Error: {error.message}</div>; };

  return (
    <article className="flex flex-col shadow my-4">
      <Link to="/" className="hover:opacity-75">
        <img src={ article?.thumbnailUrl } alt={article?.title}/>
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
