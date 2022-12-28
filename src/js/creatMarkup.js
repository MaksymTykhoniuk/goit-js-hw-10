export { makeCardMarkup, makeListMarkup, clearMarkup };
import { refs } from './refs';

function makeCardMarkup({ languages, flags, name, capital, population }) {
  refs.list.innerHTML = '';

  return `
        <div class="header-wrapper">
        <img class="countryCard__image" src="${flags.svg}" width="45px" alt="${
    name.official
  }">
        <h2 class="countryCard__title">${name.official}</h2> 
        </div>
        <div class="info-weapper">
        <p class="countryCard__text"> Capital: <span>${capital}</span></p>
        <p class="countryCard__text"> Population: <span>${population}</span></p>
        <p class="countryCard__text"> Languages: <span>${Object.values(
          languages
        )}</span></p>
        </div>`;
}

function makeListMarkup(data) {
  refs.card.innerHTML = '';

  return data
    .map(
      ({ flags, name }) => `
        <li class="country-list__item">
            <img src="${flags.svg}" class="country-list__image" width="50" alt="flag ${name.official}">
            <p class="country-list__name">${name.official}</p>
        </li>`
    )
    .join('');
}

function clearMarkup() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
}
