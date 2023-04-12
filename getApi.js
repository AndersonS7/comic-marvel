const publicKey = "efb22b58ab642fabb5e7e0ea8fb67c45";
const privateKey = "30c0e62f8bd2eaa2d620b21444e0b94c6a76e416";
const time = 1565045589;

axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=8da0078cb66a3cf087bbc80d9cc00e5b`)
    .then(response => console.log(response.data.data))
    .catch(err => console.log(err));
