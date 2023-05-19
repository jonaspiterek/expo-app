export class PageViewService {
  getPageInfo = async (url) => {
    const urlApi = `${url}/++api++`;

    const response = await fetch(urlApi, {
      headers: { Accept: 'application/json' },
    });

    const data = await response.json();

    return data;
  };
}
