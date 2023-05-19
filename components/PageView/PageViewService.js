export class PageViewService {
  getPageInfo = async (url) => {
    const urlApi = `${url}/++api++`;

    console.log({ urlApi });

    const response = await fetch(urlApi);

    const data = await response.json();

    return data;
  };
}
