// for (const image of images) {
//     console.log("to jest obrazek" + image);
//     console.log('PK');
// }

// //i++  i = i+1
// //pętla for
// for (let i = 0; i < images.length; i++) {
//     const image = images[i];
//     console.log("to jest obrazek" + image);
//     console.log('PK')
// }

const isEmpty = (images.length === 0);
const isEmpty1 = (images.length == 0);


//definicja funkcji, mozna ja wywolac kiedy sie chce
function displayImages() {
    console.log('liczba obrazków' + images.length);
    console.log('pierwszy element listy' + images[0]);
    console.log('drugi element listy' + images[1]);
}


function displayLastElement() {
    console.log('ostatni element z listy' + images[images.length - 1]);
    console.log(43455234 / 1242);
    console.log(43455234 * 1242); //asterix
    console.log(43455234 + 1242);
    console.log(43455234 - 1242);
}


function renderPhoto(url) {
    const $img = document.createElement('img');
    $img.src = url;

    const $main = document.querySelector('main');
    $main.append($img);

}
//
// function renderPhoto(){
//     const url='https://picsum.photos/300/150';
//     const img= document.createElement('img');
//     img.src = url;

//     const main = document.querySelector('main');
//     main.append(img);

function renderPhoto(url) {
    const img = document.createElement('img');//tworzenie obrazu , brak widoczności
    img.src = url;
    const main = document.querySelector('main');
    main.append(img);//wyswietlenie utworzonego obrazka do wyświetlenia
}

function displayPhotos(images) {
    for (const image of images) {
        renderPhoto(image);
    }
}

//  renderPhoto('http://picsum.photos/id/10/300/150');
//  renderPhoto('http://picsum.photos/id/20/300/150');
//  renderPhoto('http://picsum.photos/id/30/300/150');

function displayMessage(message) {
    const main = document.querySelector('main');
    main.innerHTML = '<p class = "alert alert-info alert-center">' + message + '</p>'
}

//displayMessage('ciasteczko');


//const canDisplayPhotos= prompt ('czy chcesz wyswietlic zdjecia?')

function shouldDisplayPhotos() {
    const answer = prompt('czy chcesz wyswietlic zdjeciaaaaaaa');
    return (answer.toLowerCase() === 'tak');
}

function isEmpty3() {
    return displayImages.length === 0;
}

loader.show();

// if (!isEmpty3()){
if (shouldDisplayPhotos()) {
    console.log('zdjecia istnieja');
    displayPhotos(images);
} else {
    console.log('coś jeszcze uczynic?');
    displayMessage('nie ma zdjec');
}

//długość jeśli jest wieksze od 1 i mniejsze od 10
// if (displayImages.length > 1 && Image.length <10 )

setTimeout(function () {
    console.info('chowamy loaderka');
    loader.hide();
}, 1500); //1.5s
