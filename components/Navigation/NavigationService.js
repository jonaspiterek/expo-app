export class NavigationService {
  getNavigation = async () => {
    const url = `http://192.168.1.140:8080/Plone/++api++/@navigation`;

    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    const data = await response.json();

    return data.items;
  };
}
