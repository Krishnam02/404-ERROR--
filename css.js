document.addEventListener("DOMContentLoaded", function () {
    console.log("CSS Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to CSS",
                content: `
                    <p>CSS (Cascading Style Sheets) is used to style HTML elements and enhance the appearance of web pages.</p>
                    <p>There are three ways to apply CSS:</p>
                    <ul>
                        <li><b>Inline:</b> Using the <code>style</code> attribute inside an HTML tag.</li>
                        <li><b>Internal:</b> Inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</li>
                        <li><b>External:</b> Linking an external CSS file.</li>
                    </ul>
                    <pre><code>
/* Example of External CSS */
body {
    background-color: #222;
    color: white;
    font-family: Arial, sans-serif;
}
                    </code></pre>
                `
            },
            "selectors": {
                title: "CSS Selectors",
                content: `
                    <p>CSS Selectors are used to target HTML elements.</p>
                    <ul>
                        <li><b>Element Selector:</b> <code>p { color: red; }</code></li>
                        <li><b>Class Selector:</b> <code>.button { background: blue; }</code></li>
                        <li><b>ID Selector:</b> <code>#header { font-size: 24px; }</code></li>
                        <li><b>Universal Selector:</b> <code>* { margin: 0; }</code></li>
                        <li><b>Attribute Selector:</b> <code>input[type="text"] { border: 1px solid gray; }</code></li>
                    </ul>
                `
            },
            "box-model": {
                title: "The CSS Box Model",
                content: `
                    <p>Every HTML element is a rectangular box consisting of:</p>
                    <ul>
                        <li><b>Content:</b> The actual content inside the element.</li>
                        <li><b>Padding:</b> Space between content and border.</li>
                        <li><b>Border:</b> Surrounds the element.</li>
                        <li><b>Margin:</b> Space outside the element.</li>
                    </ul>
                    <pre><code>
.box {
    width: 200px;
    padding: 10px;
    border: 2px solid white;
    margin: 20px;
}
                    </code></pre>
                `
            },
            "flexbox": {
                title: "CSS Flexbox",
                content: `
                    <p>Flexbox is a powerful layout tool for aligning and distributing elements.</p>
                    <ul>
                        <li><b>display: flex;</b> – Enables flexbox on an element.</li>
                        <li><b>justify-content:</b> Controls horizontal alignment.</li>
                        <li><b>align-items:</b> Controls vertical alignment.</li>
                        <li><b>flex-direction:</b> Defines row or column layout.</li>
                    </ul>
                    <pre><code>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
                    </code></pre>
                `
            },
            "css-grid": {
                title: "CSS Grid",
                content: `
                    <p>CSS Grid is a two-dimensional layout system.</p>
                    <ul>
                        <li><b>display: grid;</b> – Enables grid on an element.</li>
                        <li><b>grid-template-columns:</b> Defines column structure.</li>
                        <li><b>grid-template-rows:</b> Defines row structure.</li>
                    </ul>
                    <pre><code>
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
}
                    </code></pre>
                `
            },
            "animations": {
                title: "CSS Animations",
                content: `
                    <p>CSS animations allow elements to transition smoothly.</p>
                    <pre><code>
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.box {
    animation: fadeIn 2s ease-in-out;
}
                    </code></pre>
                `
            },
            "responsive-design": {
                title: "Responsive Design",
                content: `
                    <p>Responsive design ensures websites adapt to different screen sizes.</p>
                    <p>Key techniques:</p>
                    <ul>
                        <li><b>Media Queries:</b> Adjust styles based on screen width.</li>
                        <li><b>Fluid Layouts:</b> Use percentages instead of fixed widths.</li>
                        <li><b>Flexbox & Grid:</b> Adjust layouts dynamically.</li>
                    </ul>
                    <pre><code>
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
                    </code></pre>
                `
            }
        };

        if (topics[topic]) {
            lessonTitle.innerHTML = `✨ ${topics[topic].title}`;
            lessonContent.innerHTML = topics[topic].content;
        } else {
            lessonTitle.innerHTML = "Error";
            lessonContent.innerHTML = "<p>Topic not found!</p>";
        }
    }

    window.loadLesson = loadLesson;
});
