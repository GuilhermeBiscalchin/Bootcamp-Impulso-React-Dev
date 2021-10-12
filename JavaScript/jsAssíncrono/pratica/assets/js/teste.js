const BASE_URL = "https://api.github.com/"

const get = async () =>{
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e))
    return data
}

console.log(get())