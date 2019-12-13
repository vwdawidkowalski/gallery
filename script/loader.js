//dodanie właściowości obiektu
const loader = {};

loader.show = function () {
    //1. Stworzenie HTMLImageElementu
    const img = document.createElement('img');
    //dodanie klasy CSS do elementu
    img.classList.add('loader');
    //2. ustawienie atrybutu "src"
    img.src = 'images/loader.svg';
    //3. Pobranie referencji do koncetera w ktorym loader sie wyswietli
    const $main = document.querySelector('main');
    //4. Dodanie loadera do powyższego konenera
    $main.append(img);
};

//funkcje anonimowe
//pobrać referencje do 
loader.hide = function () {
    //pobraĆ referencje do loader
    const $loader = document.querySelector('.loader');
    if ($loader)

    //usunąć element z doma
    $loader.remove();
};

console.log(loader);

