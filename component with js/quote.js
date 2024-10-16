const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  try {
    const responce = await fetch(url);
    var data =  await responce.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

getquote(api_url);
