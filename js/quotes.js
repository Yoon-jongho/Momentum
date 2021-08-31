const quotes = [
    {
        quote:"The unexamined life is not worth living.",
        author:"Socrates"
    },
    {
        quote:"If youth only knew: if age only could.",
        author:"Henri Estienne"
    },   
    {
        quote:"The unexamined life is not worth living.",
        author:"Socrates"
    },
    {
        quote:"To be mature means to face, and not evade, every fresh crisis that comes.",
        author:"Fritz Kunkel"
    },
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:"Confucius"
    },
    {
        quote:"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        author:"Bill Gates"
    },
    {
        quote:"Kites rise highest against the wind - not with it.",
        author:"Sir Winston Churchill"
    },
    {
        quote:"There is no 'i' in team but there is in win.",
        author:"Michael Jordan"
    },
    {
        quote:"I never think of the future - it comes soon enough.",
        author:"Albert Einstein"
    },
    {
        quote:"No great genius has ever existed without some touch of madness.",
        author:"Aristotle"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
