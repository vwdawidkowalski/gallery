
const groupByPrice = images.reduce(function(memory, image){
    memory[image.price]= image;
    return memory
})


images.map(function (image) {
    return image.url;
})