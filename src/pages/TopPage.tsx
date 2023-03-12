import React, {useEffect, useState} from 'react';

import ArticleBox from '../component/ArticleBox';

import Article from '../server/types/article';
import Pager from '../server/types/pager';

import getTopPageApi from '../server/api/topPage';
import apiClient from '../server/client';

type TopPageData = {
  articles: Article[],
  pager: Pager,
}

const TopPage: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
   (async () => {
    try {
      const res = await apiClient.Get<TopPageData>(getTopPageApi());
      setIsLoaded(true);
      setArticles(res.data.articles);
    } catch (err) {
      setError(err)
      console.error(err);
    }
    })();
  }, [])

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
    </section>
  );
}

export default TopPage;