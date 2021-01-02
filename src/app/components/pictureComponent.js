import {  } from "";

   const pictureNumber= Questionx.index;
   const category= Questionx.category;

const generatePicture = (category, pictureNumber) =>{
   const picture = document.createElement("img");
   img.src=`./src/static/assets/img/modes/${category}/${pictureNumber}.jpg`;
}

export(generatePicture);