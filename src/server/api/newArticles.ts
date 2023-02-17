const getNewArticlesApi = (page: string):string => {
  return process.env.REACT_APP_BASE_URL + "/new" + "/" + page
}

export default getNewArticlesApi;
