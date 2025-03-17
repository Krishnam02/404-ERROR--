document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to HTML",
                content: `
                    <p>HTML (HyperText Markup Language) is the foundation of web pages. It structures content using elements like headings, paragraphs, images, and links.</p>
                    <p>Every HTML document starts with a basic structure:</p>
                    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </code></pre>
                `
            },
            "basic-tags": {
                title: "Basic HTML Tags",
                content: `
                    <p>HTML consists of various elements (tags) used to structure content:</p>
                    <ul>
                        <li><b>Headings:</b> <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></li>
                        <li><b>Paragraphs:</b> <code>&lt;p&gt;</code></li>
                        <li><b>Links:</b> <code>&lt;a href="url"&gt;</code></li>
                        <li><b>Lists:</b> <code>&lt;ul&gt;</code> (unordered), <code>&lt;ol&gt;</code> (ordered)</li>
                        <li><b>Divs & Spans:</b> <code>&lt;div&gt;</code> (block), <code>&lt;span&gt;</code> (inline)</li>
                    </ul>
                    <pre><code>
&lt;h1&gt;This is a heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;a href="https://example.com"&gt;Click me&lt;/a&gt;
                    </code></pre>
                `
            },
            "forms-inputs": {
                title: "Forms & Inputs",
                content: `
                    <p>Forms allow user input through text fields, buttons, checkboxes, and more.</p>
                    <pre><code>
&lt;form&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" placeholder="Enter your name"&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;

    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
                    </code></pre>
                `
            },
            "tables": {
                title: "HTML Tables",
                content: `
                    <p>Tables organize data in rows and columns using the <code>&lt;table&gt;</code> element.</p>
                    <pre><code>
&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Alice&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
                    </code></pre>
                `
            },
            "media": {
                title: "Adding Media (Images & Videos)",
                content: `
                    <p>HTML supports images and videos using the <code>&lt;img&gt;</code> and <code>&lt;video&gt;</code> elements.</p>
                    <pre><code>
&lt;img src="image.jpg" alt="Description" width="300"&gt;

&lt;video controls width="400"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    Your browser does not support videos.
&lt;/video&gt;
                    </code></pre>
                `
            },
            "semantic-html": {
                title: "Semantic HTML",
                content: `
                    <p>Semantic HTML uses meaningful tags to improve accessibility and SEO.</p>
                    <ul>
                        <li><code>&lt;header&gt;</code> - Represents the top section of a page</li>
                        <li><code>&lt;nav&gt;</code> - Contains navigation links</li>
                        <li><code>&lt;section&gt;</code> - Groups related content</li>
                        <li><code>&lt;article&gt;</code> - Represents self-contained content</li>
                        <li><code>&lt;footer&gt;</code> - Defines the bottom section</li>
                    </ul>
                    <pre><code>
&lt;header&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
&lt;/header&gt;

&lt;nav&gt;
    &lt;a href="#home"&gt;Home&lt;/a&gt;
    &lt;a href="#about"&gt;About&lt;/a&gt;
&lt;/nav&gt;

&lt;section&gt;
    &lt;h2&gt;About Me&lt;/h2&gt;
    &lt;p&gt;I am a web developer...&lt;/p&gt;
&lt;/section&gt;

&lt;footer&gt;
    &lt;p&gt;© 2025 My Website&lt;/p&gt;
&lt;/footer&gt;
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
