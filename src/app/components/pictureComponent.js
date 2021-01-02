import {  } from "";

const generatePicture = (category, pictureNumber) =>{
   const category= "people";
   const pictureNumber= 1;

   const picture = document.createElement("img");
   img.src=`./src/static/assets/img/modes/${category}/${pictureNumber}.jpg`;
}

export{generatePicture};