const twitterBtn = document.querySelector(".twitter-btn");
const newQuoteBTn = document.querySelector(".newquote-btn");
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");


let apiQuotes=[];



const newQuote= ()=>{

    quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];

    if(!quote.author)
    {
        author.textContent="UnKnown";
    }
    else
    {
        author.textContent = quote.author;
    }

    if(quoteText.length > 120)
    {
        quoteText.classList.add(".long-quote");
    }
    else
    {
        quoteText.classList.remove(".long-quote");
    }
    quoteText.textContent = quote.text;
}



const getQuote = async()=>{

  const ApiURL = `https://type.fit/api/quotes`;
  try{

    const res= await fetch(ApiURL);
    apiQuotes = await res.json();
    newQuote();


  }catch(err)
  {
    alert(new Error(`${err.message} : ${err.status}`));
  }
}
getQuote();



const tweetQuote =()=>{

    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterURL,"_blank");
}


newQuoteBTn.addEventListener('click',newQuote)

twitterBtn.addEventListener('click',tweetQuote)