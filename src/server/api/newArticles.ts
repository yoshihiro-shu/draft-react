const getNewArticlesApi = (page: string):string => {
  return "http://localhost" + "/new" + "/" + page
  // return process.env.BASE_URL + "new" + "?page=" + page
}

export default getNewArticlesApi;
