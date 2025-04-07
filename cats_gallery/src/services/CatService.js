const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=6';

export const fetchCats = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.slice(0, 6);
  };

