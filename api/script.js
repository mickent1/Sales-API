function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('outputImage').src = data.message;
            document.getElementById('outputImage').style.display = 'block';
            document.getElementById('outputText').style.display = 'none';
        });
}

function fetchCat() {
    document.getElementById('outputImage').src = `https://cataas.com/cat?random=${Math.random()}`;
    document.getElementById('outputImage').style.display = 'block';
    document.getElementById('outputText').style.display = 'none';
}

function fetchQuote() {
    document.getElementById('outputImage').src = `https://zenquotes.io/api/image?${new Date().getTime()}`;
    document.getElementById('outputImage').style.display = 'block';
    document.getElementById('outputText').style.display = 'none';
}
