const getNewArticlesApi = (page: string):string => {
  console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL)
  return process.env.REACT_APP_BASE_URL + "/new" + "/" + page
}

export default getNewArticlesApi;
