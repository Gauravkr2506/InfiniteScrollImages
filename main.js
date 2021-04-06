const count = 10;
const apiKey = "bbFk4bL2xMgfrmjzlcQ15RrWIyKj-Ozm4V4-m38o2_I"
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error) 
    }
}
getPhotos()