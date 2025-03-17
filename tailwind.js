document.addEventListener("DOMContentLoaded", function () {
    console.log("TailwindCSS Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to TailwindCSS",
                content: `
                    <p>TailwindCSS is a utility-first CSS framework that helps developers build modern, responsive UIs faster.</p>
                    <p>Unlike traditional CSS frameworks like Bootstrap, Tailwind provides low-level utility classes, allowing you to style elements directly in HTML without writing custom CSS.</p>
                    <pre><code>
&lt;button class="bg-blue-500 text-white px-4 py-2 rounded"&gt;
    Click Me
&lt;/button&gt;
                    </code></pre>
                `
            },
            "setup": {
                title: "Setting Up TailwindCSS",
                content: `
                    <p>You can install TailwindCSS in different ways:</p>
                    <ul>
                        <li><b>Using CDN:</b> Quick setup for prototyping.</li>
                        <li><b>Via npm:</b> Recommended for production.</li>
                    </ul>
                    <p>To use Tailwind via CDN, simply add this to your HTML:</p>
                    <pre><code>
&lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"&gt;
                    </code></pre>
                    <p>For npm installation:</p>
                    <pre><code>
npm install -D tailwindcss
npx tailwindcss init
                    </code></pre>
                    <p>Then configure <code>tailwind.config.js</code> and import Tailwind into your CSS file.</p>
                `
            },
            "utility-classes": {
                title: "Utility Classes in TailwindCSS",
                content: `
                    <p>Tailwind provides utility classes to quickly style elements without writing custom CSS.</p>
                    <p>Common utility classes:</p>
                    <ul>
                        <li><b>Background:</b> <code>bg-red-500</code>, <code>bg-green-300</code></li>
                        <li><b>Text:</b> <code>text-lg</code>, <code>text-center</code></li>
                        <li><b>Spacing:</b> <code>p-4</code>, <code>m-2</code></li>
                        <li><b>Borders:</b> <code>border</code>, <code>border-2 border-blue-500</code></li>
                        <li><b>Flex:</b> <code>flex</code>, <code>justify-center</code></li>
                    </ul>
                    <pre><code>
&lt;div class="p-6 bg-gray-200 text-center"&gt;
    This is a Tailwind-styled div
&lt;/div&gt;
                    </code></pre>
                `
            },
            "grid-flexbox": {
                title: "Grid & Flexbox in TailwindCSS",
                content: `
                    <p>Tailwind makes layout design easy with built-in <b>Flexbox</b> and <b>Grid</b> utilities.</p>

                    <h3>Flexbox</h3>
                    <pre><code>
&lt;div class="flex justify-center items-center h-32 bg-blue-200"&gt;
    Centered Content
&lt;/div&gt;
                    </code></pre>

                    <h3>Grid</h3>
                    <pre><code>
&lt;div class="grid grid-cols-3 gap-4"&gt;
    &lt;div class="bg-red-500 p-4"&gt;1&lt;/div&gt;
    &lt;div class="bg-green-500 p-4"&gt;2&lt;/div&gt;
    &lt;div class="bg-blue-500 p-4"&gt;3&lt;/div&gt;
&lt;/div&gt;
                    </code></pre>
                `
            },
            "responsive-design": {
                title: "Responsive Design with TailwindCSS",
                content: `
                    <p>Tailwind uses a mobile-first approach with responsive utility classes.</p>
                    <p>Prefix classes with <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code> for different screen sizes.</p>
                    <pre><code>
&lt;div class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"&gt;
    Responsive Text
&lt;/div&gt;
                    </code></pre>
                `
            },
            "custom-components": {
                title: "Building Custom Components",
                content: `
                    <p>Tailwind lets you build custom components by combining utility classes.</p>
                    <pre><code>
&lt;button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"&gt;
    Click Me
&lt;/button&gt;
                    </code></pre>
                    <p>You can also extract reusable classes into the <code>tailwind.config.js</code> file.</p>
                `
            },
            "animations": {
                title: "Animations in TailwindCSS",
                content: `
                    <p>Tailwind provides built-in transition and animation utilities.</p>
                    <p><b>Example: Hover Effect</b></p>
                    <pre><code>
&lt;button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 transition duration-300"&gt;
    Hover Me
&lt;/button&gt;
                    </code></pre>
                    <p><b>Custom Animations:</b> You can define animations in <code>tailwind.config.js</code>.</p>
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
