import React, {useEffect, useState} from 'react';

import ArticleBox from '../component/ArticleBox';

import Article from '../server/types/article';
import Pager from '../server/types/pager';

type TopPageResponse = {
  status: number
  data: {
    articles: Article[],
    pager: Pager,
  }
}

const GetTopPage: string = "http://localhost/top"


const TopPage: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [pager, setPager] = useState<Pager>();

  useEffect(() => {
    fetch(GetTopPage)
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