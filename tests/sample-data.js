// Sample decks data to inject into localStorage for testing

const sampleDecks = [
    {
        id: "1686939245000",
        title: "JavaScript Basics",
        description: "Core concepts of JavaScript programming language",
        cards: [
            {
                front: "What is a closure in JavaScript?",
                back: "A closure is a function that has access to its outer function's scope even after the outer function has returned.",
                imageLink: ""
            },
            {
                front: "What is the difference between let and var?",
                back: "var is function-scoped while let is block-scoped. Variables declared with var are hoisted to the top of their scope.",
                imageLink: ""
            },
            {
                front: "What is a Promise?",
                back: "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
                imageLink: ""
            },
            {
                front: "What is the event loop?",
                back: "The event loop is a programming construct that waits for and dispatches events in a program.",
                imageLink: ""
            },
            {
                front: "What are arrow functions?",
                back: "Arrow functions are a more concise syntax for writing function expressions. They don't have their own this, arguments, super, or new.target.",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687025645000",
        title: "Spanish Vocabulary",
        description: "Basic Spanish words and phrases for beginners",
        cards: [
            {
                front: "Hola",
                back: "Hello",
                imageLink: ""
            },
            {
                front: "Gracias",
                back: "Thank you",
                imageLink: ""
            },
            {
                front: "Por favor",
                back: "Please",
                imageLink: ""
            },
            {
                front: "¿Cómo estás?",
                back: "How are you?",
                imageLink: ""
            },
            {
                front: "Buenos días",
                back: "Good morning",
                imageLink: ""
            },
            {
                front: "Buenas noches",
                back: "Good night",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687112045000",
        title: "World Capitals",
        description: "Test your knowledge of world capitals",
        cards: [
            {
                front: "France",
                back: "Paris",
                imageLink: ""
            },
            {
                front: "Japan",
                back: "Tokyo",
                imageLink: ""
            },
            {
                front: "Australia",
                back: "Canberra",
                imageLink: ""
            },
            {
                front: "Brazil",
                back: "Brasília",
                imageLink: ""
            },
            {
                front: "Canada",
                back: "Ottawa",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687198445000",
        title: "Chemistry Elements",
        description: "Common chemical elements and their symbols",
        cards: [
            {
                front: "H",
                back: "Hydrogen",
                imageLink: ""
            },
            {
                front: "O",
                back: "Oxygen",
                imageLink: ""
            },
            {
                front: "C",
                back: "Carbon",
                imageLink: ""
            },
            {
                front: "Na",
                back: "Sodium",
                imageLink: ""
            },
            {
                front: "Fe",
                back: "Iron",
                imageLink: ""
            },
            {
                front: "Au",
                back: "Gold",
                imageLink: ""
            },
            {
                front: "Ag",
                back: "Silver",
                imageLink: ""
            }
        ]
    }
];

// Save to localStorage
localStorage.setItem('decks', JSON.stringify(sampleDecks));
