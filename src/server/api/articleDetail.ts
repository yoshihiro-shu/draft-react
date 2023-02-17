const getArticleDetailApi = (id: string):string => {
  return process.env.REACT_APP_BASE_URL + "/articles" + "/" + id
}

export default getArticleDetailApi;
