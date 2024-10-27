import './style.css'
import { horoskop } from './data';

const inputMonth = document.querySelector('#inputMonth') as HTMLInputElement;
const showBtn = document.querySelector('.showBtn') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;

showBtn.addEventListener('click', () => {
  const userMonth = inputMonth.value.toLowerCase();
  horoskop.forEach((elt) => {
    if(userMonth === elt.month.toLowerCase()) {
      showResults.innerHTML = `
        <div class="card">
          <img src="${elt.image}" alt="Horoskop-card">
          <h3>Your horoscope is ${elt.sign}</h3>
          <p>${elt.description}</p>
        </div>
      `;
    }
  })
});