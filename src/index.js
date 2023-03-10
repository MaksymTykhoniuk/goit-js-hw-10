import './css/styles.css';
import { refs } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { makeCardMarkup, makeListMarkup, clearMarkup } from './js/creatMarkup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const name = event.target.value.trim();
  if (name) {
    fetchCountries(name)
      .then(data => {
        if (data.length === 1) {
          refs.card.innerHTML = makeCardMarkup(data[0]);
        } else if (data.length > 1 && data.length < 11) {
          refs.list.innerHTML = makeListMarkup(data);
        } else {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
        clearMarkup();
      });
  } else {
    Notify.warning('Please start typing.');
    clearMarkup();
  }
}
