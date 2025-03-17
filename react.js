document.addEventListener("DOMContentLoaded", function () {
    console.log("React Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to React",
                content: `
                    <p>React is a JavaScript library for building user interfaces, developed by Facebook.</p>
                    <p>It follows a component-based architecture, making UI development modular and efficient.</p>
                    <p>React allows developers to create reusable components, manage state, and handle complex UI updates easily.</p>
                    <pre><code class="language-js">import React from 'react';</code></pre>
                `
            },
            "setup": {
                title: "Setup & Installation",
                content: `
                    <p>To install React, you can use Create React App:</p>
                    <pre><code class="language-bash">npx create-react-app my-app</code></pre>
                    <p>Then, navigate into the project folder and start the development server:</p>
                    <pre><code class="language-bash">cd my-app
npm start</code></pre>
                `
            },
            "components": {
                title: "React Components",
                content: `
                    <p>React apps are built using components. A component is a JavaScript function that returns JSX.</p>
                    <pre><code class="language-js">function Welcome() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</code></pre>
                `
            },
            "props-state": {
                title: "Props & State",
                content: `
                    <p>Props allow data to be passed from one component to another.</p>
                    <pre><code class="language-js">function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}</code></pre>
                    <p>State allows a component to manage and update its data dynamically.</p>
                    <pre><code class="language-js">const [count, setCount] = useState(0);</code></pre>
                `
            },
            "hooks": {
                title: "React Hooks",
                content: `
                    <p>Hooks are special functions that let you use state and lifecycle features in functional components.</p>
                    <pre><code class="language-js">import { useState } from 'react';</code></pre>
                    <p>The most commonly used hooks are:</p>
                    <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useContext</li>
                    </ul>
                `
            },
            "routing": {
                title: "React Router",
                content: `
                    <p>React Router is a library that enables navigation between pages in a React app.</p>
                    <pre><code class="language-js">import { BrowserRouter, Route, Routes } from "react-router-dom";</code></pre>
                `
            },
            "context-api": {
                title: "Context API",
                content: `
                    <p>The Context API allows you to manage global state without prop drilling.</p>
                    <pre><code class="language-js">const MyContext = React.createContext();</code></pre>
                `
            },
            "advanced": {
                title: "Advanced React Concepts",
                content: `
                    <p>Some important advanced topics in React:</p>
                    <ul>
                        <li>Higher-Order Components (HOC)</li>
                        <li>Performance Optimization with Memoization</li>
                        <li>Server-Side Rendering (SSR)</li>
                        <li>React Suspense & Concurrent Mode</li>
                    </ul>
                `
            }
        };

        if (topics[topic]) {
            lessonTitle.innerHTML = `⚛️ ${topics[topic].title}`;
            lessonContent.innerHTML = topics[topic].content;
        } else {
            lessonTitle.innerHTML = "Error";
            lessonContent.innerHTML = "<p>Topic not found!</p>";
        }
    }

    window.loadLesson = loadLesson;
});
