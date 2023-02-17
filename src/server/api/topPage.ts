const getTopPageApi = ():string => {
  return process.env.REACT_APP_BASE_URL + "/top"
}

export default getTopPageApi;