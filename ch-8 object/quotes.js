console.log("Quotes");

let quotes = [
    {
        "id": 1,
        "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
        "author": "Rumi"
    },
    {
        "id": 2,
        "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
        "author": "Abdul Kalam"
    },
    {
        "id": 3,
        "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
        "author": "Abdul Kalam"
    },
    {
        "id": 4,
        "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
        "author": "Bill Gates"
    },
    {
        "id": 5,
        "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
        "author": "Rumi"
    },
    {
        "id": 6,
        "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
        "author": "Abu Bakr (R.A)"
    },
    {
        "id": 7,
        "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
        "author": "Albert Einstein"
    },
    {
        "id": 8,
        "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
        "author": "Abu Bakr (R.A)"
    },
    {
        "id": 9,
        "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
        "author": "Abdul Kalam"
    },
    {
        "id": 10,
        "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
        "author": "Abraham Lincoln"
    },
    {
        "id": 11,
        "quote": "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
        "author": "Oprah Winfrey"
    },
    {
        "id": 12,
        "quote": "Do not get elated at any victory, for all such victory is subject to the will of God.",
        "author": "Abu Bakr (R.A)"
    },
    {
        "id": 13,
        "quote": "Wear gratitude like a cloak and it will feed every corner of your life.",
        "author": "Rumi"
    },
    {
        "id": 14,
        "quote": "If you even dream of beating me you'd better wake up and apologize.",
        "author": "Muhammad Ali"
    }
]

document.writeln("<h1 align='center'>Quotes</h1>");

// For Loop use...

// for (let i = 0; i < quotes.length; i++) {
//     document.writeln(`<p><strong>ID : </strong> ${i + 1} </p>`)
//     document.writeln(`<p><strong>Quotes : </strong> ${quotes[i].quote}</p>`)
//     document.writeln(`<p><strong>Author : </strong> ${quotes[i].author}</p><hr>`)
// }

// For Of use...
// for (const quote of quotes) {
//     document.writeln(`<p><strong>ID : </strong> ${quotes.indexOf(quote) + 1} </p>`);
//     document.writeln(`<p><strong>Quotes : </strong> ${quote.quote}</p>`);
//     document.writeln(`<p><strong>Author : </strong> ${quote.author}</p><hr>`);
// }

// For Each use...
quotes.forEach((quote, index) => {
    document.writeln(`<div class='card'><p><strong>ID : </strong> ${index + 1}</p>`);
    document.writeln(`<p><strong>Quote : </strong> ${quote.quote}</p>`);
    document.writeln(`<p><strong>Author : </strong> ${quote.author}</p></div>`);
});