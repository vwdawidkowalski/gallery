const image1 = 'https://picsum.photos/id/40/300/150';
const image2 = 'https://picsum.photos/id/90/300/150';
const image3 = 'https://picsum.photos/id/56/300/150';

const images = [image1, image2, image3];

//images.push(image1);
//images.push(image2);
//images.push(image3);


 for (const image of images) {
 console.log("to jest obrazek"+ image); 
 console.log('PK'); 
 }

 //i++  i = i+1
 //pętla for
 for (let i = 0; i < images.length; i++){
     const image = images[i];
     console.log("to jest obrazek"+ image);
     console.log('PK')
 }

 const isEmpty = (images.length===0);
 const isEmpty1 = (images.length==0);


 //definicja funkcji, mozna ja ja wywolac kiedy sie chce
 function displayImages() {
    console.log('liczba obrazków' + images.length);
    console.log('pierwszy element listy' + images[0]);
    console.log('drugi element listy' + images[1]);
}

//wywolanie funkcji
displayImages();

function displayLastElement (){
    console.log('ostatni element z listy' + images[images.length-1]);
    console.log(43455234 / 1242);
    console.log(43455234 * 1242); //asterix
    console.log(43455234 + 1242);
    console.log(43455234 - 1242);
}


function renderPhoto(){
    const url='https://picsum.photos/300/150';
    const img= document.createElement('img');
    img.src = url;

    const main = document.querySelector('main');
    main.append(img);
    
}
//
// function renderPhoto(){
//     const url='https://picsum.photos/300/150';
//     const img= document.createElement('img');
//     img.src = url;

//     const main = document.querySelector('main');
//     main.append(img);

function renderPhoto(url){
    const img= document.createElement('img');//tworzenie obrazu , brak widoczności
    img.src = url;
    const main = document.querySelector('main');
    main.append(img);//wyswietlenie utworzonego obrazka do wyświetlenia
}

function displayPhoto(photos){
    console.log(photos);
    for (const photo of photos){
    renderPhoto(photo);
    }
}
displayPhoto(images);

//  renderPhoto('http://picsum.photos/id/10/300/150');
//  renderPhoto('http://picsum.photos/id/20/300/150');
//  renderPhoto('http://picsum.photos/id/30/300/150');