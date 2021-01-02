import {  } from "";

const questionCategory= "people";
const pictureNumber= 1;

const generatePicture = (Questioncategory, pictureNumber) =>{
   
   const picture = document.createElement("img");
   img.src=`./src/static/assets/img/modes/${Questioncategory}/${pictureNumber}.jpg`;
}

export{generatePicture};