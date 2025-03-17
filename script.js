document.addEventListener("scroll", function () {
    let heroText = document.querySelector(".glitch-text");
    let scrollY = window.scrollY;
    
    heroText.style.transform = `translateY(${scrollY * 0.2}px)`;
});

// Custom Cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Code Rain Effect
const codeRainContainer = document.createElement("div");
codeRainContainer.classList.add("code-rain");
document.body.appendChild(codeRainContainer);

function createCodeRain() {
    for (let i = 0; i < 30; i++) {
        let span = document.createElement("span");
        span.innerText = Math.random() > 0.5 ? "1" : "0";
        span.style.left = `${Math.random() * 100}vw`;
        span.style.animationDuration = `${Math.random() * 3 + 2}s`;
        span.style.animationDelay = `${Math.random() * 2}s`;
        codeRainContainer.appendChild(span);
    }
}
createCodeRain();

// Pre-defined templates for challenges
const challenges = {
    loop: {
        title: "🔢 Loop Basics",
        template: `// Print numbers 1 to 10\nfor (let i = 1; i <= 10; i++) {\n    console.log(i);\n}`
    },
    fibonacci: {
        title: "📊 Fibonacci Generator",
        template: `// Generate Fibonacci sequence\nfunction fibonacci(n) {\n    let seq = [0, 1];\n    for (let i = 2; i < n; i++) {\n        seq.push(seq[i - 1] + seq[i - 2]);\n    }\n    return seq;\n}`
    },
    chatbot: {
        title: "🤖 AI Chatbot",
        template: `// Simple chatbot\nfunction chatbot(input) {\n    if (input.toLowerCase() === 'hello') {\n        return 'Hi there! How can I help you?';\n    } else {\n        return 'I am still learning!';\n    }\n}`
    }
};

// Open Code Editor with pre-filled code
function openEditor(challengeKey) {
    document.getElementById("challengeTitle").innerText = challenges[challengeKey].title;
    document.getElementById("codeEditor").value = challenges[challengeKey].template;
    document.getElementById("codeModal").style.display = "block";
}

// Close Editor
function closeEditor() {
    document.getElementById("codeModal").style.display = "none";
}

// Run Code
function runCode() {
    const code = document.getElementById("codeEditor").value;
    let output;
    try {
        output = eval(code); // Runs the code
        document.getElementById("output").innerText = "✅ Output:\n" + output;
    } catch (error) {
        document.getElementById("output").innerText = "❌ Error:\n" + error;
    }
}

// Filtering challenges based on difficulty
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const level = this.getAttribute("data-level");
        document.querySelectorAll(".challenge-card").forEach(card => {
            card.style.display = (level === "all" || card.getAttribute("data-level") === level) ? "block" : "none";
        });
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

// 🌧️ Cyber Rain Effect
const rainContainer = document.createElement("div");
rainContainer.classList.add("rain-container");
document.body.appendChild(rainContainer);

function createRaindrop() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = Math.random() * 1 + 0.5 + "s"; 
    rainContainer.appendChild(drop);
    
    setTimeout(() => {
        drop.remove();
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    const hireBtn = document.getElementById("hireBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    // Show Popup on Click
    hireBtn.addEventListener("click", function() {
        popup.style.display = "block";

        // Auto-close after 5 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 5000);
    });

    // Close on Click
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});


setInterval(createRaindrop, 100);
