const loader = document.getElementById("loader")
const imageContainer = document.getElementById("image-container")
let photosList=[]

const count = 10;
const apiKey = "bbFk4bL2xMgfrmjzlcQ15RrWIyKj-Ozm4V4-m38o2_I"
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

let ready=false;
let imagesLoaded=0;
let totalImages;

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded===totalImages){
        ready=true;
        loader.hidden=true
    }
}


function displayPhotos(){
    imagesLoaded=0
    totalImages = photosList.length
    
    photosList.forEach(photo=>{
        const item = document.createElement('a')
        item.setAttribute('href',photo.links.html)
        item.setAttribute('target','_blank')

        const img =document.createElement('img');
        img.setAttribute('src',photo.urls.regular)
        img.setAttribute('alt',photo.alt_description)
        img.setAttribute('title',photo.alt_description)
        img.addEventListener('load',imageLoaded)

        item.appendChild(img)
        imageContainer.appendChild(item)

    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosList = await response.json()
        displayPhotos();
    } catch (error) {
        console.log(error) 
    }
}


window.addEventListener('scroll',()=>{
   if(window.innerHeight+ window.scrollY>=document.body.offsetHeight-1000 && ready){
ready=false;
getPhotos()
   }
})


getPhotos()