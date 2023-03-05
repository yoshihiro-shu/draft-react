import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import ArticleBox from '../../component/ArticleBox';
import Pagination from '../../component/Pager/Pagination'

import Article from '../../server/types/article';
import Pager from '../../server/types/pager';

import getNewArticlesApi from '../../server/api/newArticles';

const NewArticles: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [pager, setPager] = useState<Pager>({"currentPage": 0, "lastPage": 0});

  const page = useParams()["page"] as string

  useEffect(() => {
    fetch(getNewArticlesApi(page))
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticles(result.data.articles);
          setPager(result.data.pager);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [page])

    // TODO refactor
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map(article => (
        <ArticleBox
          key={article.id}
          article={article}
        />
      ))
      }
    <Pagination
      pager={pager}
    />
  </section>
  )
}

export default NewArticles;