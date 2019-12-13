
function fetchPhotos(url){
    return fetch(url)
        .then(function (response){
            console.log('success');
            return response.json();
        })

}

function fetchPhotosFromRemote(){
    return fetchPhotos('https://fakes.herokuapp.com/photos')

}

function fetchPhotosFromLocal(){
    return fetchPhotos('data/images.json')

}