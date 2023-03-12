class ApiClient {
  backendAPI: string

  constructor(backendAPI: string) {
    this.backendAPI = backendAPI;
  }

  public async Get<T>(api: string): Promise<T> {
    const endpoint: string = this.backendAPI + api
    return await fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json() as Promise<T>
      })
  }

  public async Post<T>(api: string, data: { [key: string]: any }): Promise<T> {
    const endpoint: string = this.backendAPI + api
    return fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json() as Promise<T>
    })
  }
}

const BackendAPI: string = process.env.REACT_APP_BASE_URL || ""

const apiClient: ApiClient = new ApiClient(BackendAPI)


export default apiClient;
