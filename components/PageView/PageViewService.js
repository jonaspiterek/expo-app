export class PageViewService {
  getPageInfo = async (url) => {
    const urlApi = `${url}/++api++`;

    console.log({ urlApi });

    const response = await fetch(urlApi, {
      headers: { Accept: 'application/json' },
    });

    console.log({ response });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }
    const data = await response.json();

    console.log({ data });
    return data;
  };
}
