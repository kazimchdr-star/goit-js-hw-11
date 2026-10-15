const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY?.trim();

export function searchImages(query, signal) {
  if (!API_KEY || API_KEY === 'your_pixabay_api_key') {
    return Promise.reject(
      new Error(
        'Image search is not configured yet. Please add a Pixabay API key.',
      ),
    );
  }

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to load images. Please try again later.');
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data.hits)) {
        throw new Error(
          'An unexpected response was received. Please try again.',
        );
      }
      return data.hits;
    });
}
