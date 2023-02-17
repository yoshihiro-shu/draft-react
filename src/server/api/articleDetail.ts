const getArticleDetailApi = (id: string):string => {
  return "http://localhost" + "/articles" + "/" + id
  // return process.env.BASE_URL + "new" + "?page=" + page
}

export default getArticleDetailApi;