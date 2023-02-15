import React, {useEffect, useState} from 'react';
import './App.css';
import ArticleBox from './component/ArticleBox';

import Article from "./types/article"
import Pager from "./types/pager"

type TopPageResponse = {
  status: number
  data: {
    articles: Article[],
    pager: Pager,
  }
}

const GetTopPage: string = "http://localhost/top"

const App: React.FC = () => {
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
    <div className="App">
      {articles.map(article => (
        <ArticleBox
          key={article.id}
          article={article}
        />
      ))
      }
    </div>
  );
}

export default App;
