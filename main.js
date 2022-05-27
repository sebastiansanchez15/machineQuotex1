var endpoint = 'https://animechan.vercel.app/api/quotes/anime?title=naruto&page=2';



function getNewQuote() {
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
                var randomQuote = data[Math.floor(Math.random() * data.length)];
                displayQuote(randomQuote.quote);
                
                
                
               
                console.log(randomQuote);
            })
        .catch(() => {
                console.log('An Error Has Ocurred');
            });
}

function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}



//target button class
var getQuoteButton = document.querySelector('.new-quote');

getQuoteButton.addEventListener('click', getNewQuote);

getNewQuote();