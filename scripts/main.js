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

// const isEmpty = (images.length === 0);
// const isEmpty1 = (images.length == 0);


// //definicja funkcji, mozna ja wywolac kiedy sie chce
// function displayImages() {
//     console.log('liczba obrazków' + images.length);
//     console.log('pierwszy element listy' + images[0]);
//     console.log('drugi element listy' + images[1]);
// }

// function displayLastElement() {
//     console.log('ostatni element z listy' + images[images.length - 1]);
//     console.log(43455234 / 1242);
//     console.log(43455234 * 1242); //asterix
//     console.log(43455234 + 1242);
//     console.log(43455234 - 1242);
// }

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


//renderowanie zdjęcia - wyswietlanie
function renderPhoto(image) {
    const $card = document.createElement('div');//tworzenie obrazu , brak widoczności
    $card.classList.add('card', 'col-3', 'mx-4');


    const $img = document.createElement('img');
    $img.src = image.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = image.description;

    $card.append($img);
    $card.append($body);
    $card.append($title);

    console.log(image.title);

    const main = document.querySelector('main');
    main.append($card);//wyswietlenie utworzonego obrazka do wyświetlenia
}

function displayPhotos(images) {
    // for (const image of images) {
    //     renderPhoto(image);
    // }
    images.forEach(function (image) {
        console.group(image.author);
        console.info(image.title);
        console.groupEnd();
        renderPhoto(image);
    }
    )
}







//  renderPhoto('http://picsum.photos/id/10/300/150');
//  renderPhoto('http://picsum.photos/id/20/300/150');
//  renderPhoto('http://picsum.photos/id/30/300/150');



//displayMessage('ciasteczko');


//const canDisplayPhotos= prompt ('czy chcesz wyswietlic zdjecia?')

function shouldDisplayPhotos() {
    const answer = prompt('czy chcesz wyswietlic zdjeciaaaaaaa');
    return (answer.toLowerCase() === 'tak');
}

function isEmpty(images) {
    return images.length === 0;
}


function main() {
    loader.show();

    fetchPhotosFromLocal()
        .then(function (images) {
            return images.map(function (image) {
                image.imageUrl = image.url;
                image.description = image.url;
                return image;
            });
        })
        .then(function (images) {
            if (!isEmpty(images)) {
                displayPhotos(images);
            } else {
                displayMessage('nie ma zdjęć');
            }
        })
        .catch(function () {
            displayErrorMessage("problem z pobraniem zdjec");
        })
        .finally(function () {
            loader.hide();
        })

}

main();

//długość jeśli jest wieksze od 1 i mniejsze od 10
// if (displayImages.length > 1 && Image.length <10 )

// setTimeout(function () {
//     console.info('chowamy loaderka');
//     loader.hide();
// }, 1500); //1.5s

