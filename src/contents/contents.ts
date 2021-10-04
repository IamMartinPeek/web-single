import axios from 'axios';

document.getElementById('catload').addEventListener('click', loadCat);

export default function loadCat() {
    console.log("test");

    axios.get(`https://http.cat/100`).then(response => {
      const cat: string = response.data;
      console.log(cat);
     
  });

  
}