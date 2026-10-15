import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './styles.css';
import { searchImages } from './pixabay-api';
import { clearGallery, renderGallery, setLoading } from './render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
let currentRequest;

iziToast.settings({ position: 'topRight', timeout: 5000, closeOnClick: true });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term.' });
    input.focus();
    return;
  }

  currentRequest?.abort();
  const controller = new AbortController();
  currentRequest = controller;
  clearGallery();
  setLoading(true);

  searchImages(query, controller.signal)
    .then((images) => {
      if (controller !== currentRequest) return;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderGallery(images);
    })
    .catch((error) => {
      if (controller !== currentRequest || error.name === 'AbortError') return;
      iziToast.error({
        message:
          error instanceof TypeError
            ? 'Unable to connect. Please check your internet connection and try again.'
            : error.message,
      });
    })
    .finally(() => {
      if (controller === currentRequest) setLoading(false);
    });
});
