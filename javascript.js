document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to JavaScript",
                content: `
                    <p>JavaScript is a versatile, high-level programming language primarily used for web development. 
                    It allows developers to create interactive and dynamic web pages.</p>
                    <p>JavaScript runs in the browser and is essential for modern web development.</p>
                    <pre><code>
// Your first JavaScript program
console.log("Hello, JavaScript!");
                    </code></pre>
                    <p>It can be used for client-side scripting, manipulating HTML and CSS, making API requests, and much more.</p>
                `
            },
            "syntax": {
                title: "JavaScript Syntax",
                content: `
                    <p>JavaScript syntax is simple and follows a structured format.</p>
                    <ul>
                        <li>Statements are terminated with a semicolon (<code>;</code>).</li>
                        <li>Blocks are defined using curly braces (<code>{}</code>).</li>
                        <li>Comments are written using <code>//</code> for single-line and <code>/* */</code> for multi-line.</li>
                    </ul>
                    <pre><code>
// This is a single-line comment
/*
   This is a multi-line comment
*/
                    </code></pre>
                `
            },
            "variables": {
                title: "Variables in JavaScript",
                content: `
                    <p>Variables are used to store data. JavaScript provides three ways to declare variables:</p>
                    <ul>
                        <li><code>var</code> (Old method, avoid using it)</li>
                        <li><code>let</code> (Block-scoped, recommended)</li>
                        <li><code>const</code> (Constant value, cannot be reassigned)</li>
                    </ul>
                    <pre><code>
var oldVar = "I am a var"; // Avoid using var
let modernVariable = "I am let"; // Preferred way
const constantValue = 42; // Cannot be changed
                    </code></pre>
                `
            },
            "datatypes": {
                title: "JavaScript Data Types",
                content: `
                    <p>JavaScript has different data types:</p>
                    <ul>
                        <li><b>Primitive Types:</b> Number, String, Boolean, Null, Undefined, Symbol</li>
                        <li><b>Reference Types:</b> Object, Array, Function</li>
                    </ul>
                    <pre><code>
let number = 10; // Number
let text = "JavaScript"; // String
let isActive = true; // Boolean
let data = null; // Null
let notDefined; // Undefined

let arr = [1, 2, 3]; // Array
let obj = { name: "John", age: 30 }; // Object
                    </code></pre>
                `
            },
            "operators": {
                title: "JavaScript Operators",
                content: `
                    <p>JavaScript provides different types of operators:</p>
                    <ul>
                        <li><b>Arithmetic Operators:</b> <code>+, -, *, /, %, **</code></li>
                        <li><b>Comparison Operators:</b> <code>==, ===, !=, !==, >, <, >=, <=</code></li>
                        <li><b>Logical Operators:</b> <code>&& (AND), || (OR), ! (NOT)</code></li>
                    </ul>
                    <pre><code>
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a == 10); // true
console.log(a === "10"); // false (Strict comparison)
                    </code></pre>
                `
            },
            "conditions": {
                title: "Conditional Statements",
                content: `
                    <p>JavaScript supports <code>if</code>, <code>else if</code>, and <code>else</code> for decision-making.</p>
                    <pre><code>
let score = 85;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good Job!");
} else {
    console.log("Keep Practicing!");
}
                    </code></pre>
                `
            },
            "loops": {
                title: "Loops in JavaScript",
                content: `
                    <p>Loops allow executing a block of code multiple times.</p>
                    <pre><code>
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let x = 0;
while (x < 5) {
    console.log(x);
    x++;
}
                    </code></pre>
                `
            },
            "functions": {
                title: "Functions in JavaScript",
                content: `
                    <p>Functions are blocks of reusable code.</p>
                    <pre><code>
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("JavaScript"));
                    </code></pre>
                    <p>Arrow functions provide a concise syntax:</p>
                    <pre><code>
const greet = (name) => "Hello, " + name;
console.log(greet("JS"));
                    </code></pre>
                `
            },
            "objects": {
                title: "Objects in JavaScript",
                content: `
                    <p>Objects store data as key-value pairs.</p>
                    <pre><code>
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello " + this.name;
    }
};

console.log(person.greet());
                    </code></pre>
                `
            },
            "dom": {
                title: "DOM Manipulation",
                content: `
                    <p>JavaScript can manipulate HTML elements using the DOM (Document Object Model).</p>
                    <pre><code>
// Change the text of an element
document.getElementById("demo").innerHTML = "Hello JavaScript!";
                    </code></pre>
                `
            },
            "events": {
                title: "JavaScript Events",
                content: `
                    <p>JavaScript responds to user interactions via events.</p>
                    <pre><code>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
                    </code></pre>
                `
            },
            "advanced": {
                title: "Advanced JavaScript Topics",
                content: `
                    <p>Advanced topics include:</p>
                    <ul>
                        <li><b>Asynchronous JavaScript:</b> Callbacks, Promises, Async/Await</li>
                        <li><b>Closures:</b> Functions inside functions</li>
                        <li><b>ES6+ Features:</b> Destructuring, Spread Operator, Template Literals</li>
                    </ul>
                    <pre><code>
// Example of Async/Await
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}

fetchData();
                    </code></pre>
                `
            }
        };

        if (topics[topic]) {
            lessonTitle.innerHTML = `⚡ ${topics[topic].title}`;
            lessonContent.innerHTML = topics[topic].content;
        } else {
            lessonTitle.innerHTML = "Error";
            lessonContent.innerHTML = "<p>Topic not found!</p>";
        }
    }

    window.loadLesson = loadLesson;
});
