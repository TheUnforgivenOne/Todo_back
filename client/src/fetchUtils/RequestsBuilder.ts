type RequestParamsWithMethod = {
  endpoint: string;
  method: string;
  query?: { [key: string]: any };
  body?: { [key: string]: any };
};
export type RequestParams = Omit<RequestParamsWithMethod, 'method'>;

type AddQueryParams = {
  endpoint: string;
  query?: { [key: string]: any };
};

class RequestsBuilder {
  private addQuery({ endpoint, query }: AddQueryParams): string {
    let url = endpoint;
    if (query && Object.keys(query).length) {
      url += `?${new URLSearchParams(query).toString()}`;
    }

    return url;
  }

  private async request({
    endpoint,
    method,
    query,
    body,
  }: RequestParamsWithMethod) {
    const url = this.addQuery({ endpoint, query });

    return await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    }).then((response) => response.json());
  }

  public async get(params: RequestParams) {
    return await this.request({ ...params, method: 'GET' });
  }

  public async post(params: RequestParams) {
    return await this.request({ ...params, method: 'POST' });
  }

  public async put(params: RequestParams) {
    return await this.request({ ...params, method: 'PUT' });
  }

  public async delete(params: RequestParams) {
    return await this.request({ ...params, method: 'DELETE' });
  }
}

export default new RequestsBuilder();
