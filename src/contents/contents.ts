import axios from 'axios';
import { Dogs } from '../models/dogs'

document.getElementById('dogLoad').addEventListener('click', loadDogs);

export default function loadDogs() {
  console.log("test");

  axios.get(`https://dog.ceo/api/breeds/image/random/8`).then(response => {
    const dogs: Dogs = response.data;

    dogs.message.forEach((url, index) => {
      const id: string = Date.now().toString() + index;
      document.getElementById('dog-container').insertAdjacentHTML("beforeend", createDogEntry(url, id));
      document.getElementById(`${id}`).addEventListener('click', () => selectDog(url));
    });
  });

  function createDogEntry(url: string, id: string): string {
    return `<div id="${id}" class="group relative"><div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"><img src="${url}" class="w-full h-full object-center object-cover lg:w-full lg:h-full"></div></div>`;
  }

  function selectDog(url: string) {
    const id: string = Date.now().toString();
    document.getElementById('dog-selection').insertAdjacentHTML("beforeend", createDogEntry(url, id));
    document.getElementById(`${id}`).addEventListener('click', () => removeDog(id));
  }

  function removeDog(id: string) {
    document.getElementById(`${id}`).remove();
  }

}