document.addEventListener("DOMContentLoaded", function () {
    console.log("Python Course Loaded!");

    function loadLesson(topic) {
        const lessonTitle = document.getElementById("lesson-title");
        const lessonContent = document.getElementById("lesson-content");

        const topics = {
            "intro": {
                title: "Introduction to Python",
                content: `
                    <p>Python is a high-level, interpreted programming language known for its simplicity and readability. 
                    It was created by Guido van Rossum and released in 1991. Python is widely used in web development, 
                    data science, artificial intelligence, automation, and more.</p>
                    <p>Python follows an easy-to-learn syntax, making it a great choice for beginners and professionals alike.</p>
                    <pre><code>
# Your first Python program
print("Hello, Python!")  
                    </code></pre>
                    <p>Python is dynamically typed, meaning you don't have to declare variable types explicitly.</p>
                `
            },
            "syntax": {
                title: "Python Syntax",
                content: `
                    <p>Python uses indentation instead of curly braces to define code blocks. This makes the code more readable.</p>
                    <p>Each block must have the same level of indentation, usually four spaces.</p>
                    <pre><code>
# Correct Syntax
if 5 > 2:
    print("Five is greater than two!")

# Incorrect Syntax (Missing Indentation)
if 5 > 2:
print("This will cause an error")
                    </code></pre>
                    <p>Python scripts can be executed directly in the terminal or saved in a <code>.py</code> file.</p>
                `
            },
            "variables": {
                title: "Variables in Python",
                content: `
                    <p>Variables store data and do not require explicit type declaration in Python.</p>
                    <p>You can assign values to variables using the equals sign (<code>=</code>).</p>
                    <pre><code>
x = 5          # Integer
y = "Hello"    # String
z = 3.14       # Float
is_active = True  # Boolean

print(x, y, z, is_active)
                    </code></pre>
                    <p>Python allows multiple variable assignments:</p>
                    <pre><code>
a, b, c = 10, 20, "Python"
print(a, b, c)
                    </code></pre>
                `
            },
            "datatypes": {
                title: "Python Data Types",
                content: `
                    <p>Python supports various built-in data types:</p>
                    <ul>
                        <li><b>Integer:</b> Whole numbers (<code>int</code>)</li>
                        <li><b>Float:</b> Decimal numbers (<code>float</code>)</li>
                        <li><b>String:</b> Text data (<code>str</code>)</li>
                        <li><b>Boolean:</b> True/False values (<code>bool</code>)</li>
                        <li><b>List:</b> Ordered, mutable collection</li>
                        <li><b>Tuple:</b> Ordered, immutable collection</li>
                        <li><b>Set:</b> Unordered, unique elements</li>
                        <li><b>Dictionary:</b> Key-value pairs</li>
                    </ul>
                    <pre><code>
x = 10        # Integer
y = 10.5      # Float
z = "Python"  # String
a = [1, 2, 3] # List
b = (4, 5, 6) # Tuple
c = {"name": "John", "age": 30} # Dictionary

print(type(x), type(y), type(z), type(a), type(b), type(c))
                    </code></pre>
                `
            },
            "operators": {
                title: "Python Operators",
                content: `
                    <p>Python provides different types of operators:</p>
                    <ul>
                        <li><b>Arithmetic Operators:</b> <code>+, -, *, /, %, **, //</code></li>
                        <li><b>Comparison Operators:</b> <code>==, !=, >, <, >=, <=</code></li>
                        <li><b>Logical Operators:</b> <code>and, or, not</code></li>
                    </ul>
                    <pre><code>
a = 10
b = 5

print(a + b)  # Addition
print(a > b)  # Comparison
print(a == 10 and b == 5) # Logical
                    </code></pre>
                `
            },
            "conditions": {
                title: "Conditional Statements",
                content: `
                    <p>Python supports <code>if</code>, <code>elif</code>, and <code>else</code> for decision-making.</p>
                    <pre><code>
x = 10

if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")
                    </code></pre>
                `
            },
            "loops": {
                title: "Loops in Python",
                content: `
                    <p>Loops allow executing a block of code multiple times.</p>
                    <p>Python supports <b>for</b> and <b>while</b> loops:</p>
                    <pre><code>
# For loop
for i in range(5):
    print(i)

# While loop
x = 0
while x < 5:
    print(x)
    x += 1
                    </code></pre>
                `
            },
            "functions": {
                title: "Functions in Python",
                content: `
                    <p>Functions help in reusing code.</p>
                    <pre><code>
def greet(name):
    return "Hello, " + name

print(greet("Python"))
                    </code></pre>
                    <p>Functions can also have default arguments:</p>
                    <pre><code>
def greet(name="Guest"):
    print("Hello, " + name)

greet()  # Default argument
greet("John")
                    </code></pre>
                `
            },
            "classes": {
                title: "Object-Oriented Programming (OOP)",
                content: `
                    <p>Python supports OOP with classes and objects.</p>
                    <pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 25)
print(p1.name, p1.age)
                    </code></pre>
                `
            },
            "filehandling": {
                title: "File Handling in Python",
                content: `
                    <p>Python allows reading and writing files.</p>
                    <pre><code>
# Writing to a file
with open("test.txt", "w") as f:
    f.write("Hello, file!")

# Reading a file
with open("test.txt", "r") as f:
    print(f.read())
                    </code></pre>
                `
            },
            "modules": {
                title: "Modules & Packages",
                content: `
                    <p>Python allows code reuse with modules.</p>
                    <pre><code>
import math
print(math.sqrt(16))
                    </code></pre>
                `
            },
            "advanced": {
                title: "Advanced Python Topics",
                content: `
                    <p>Advanced Python topics include:</p>
                    <ul>
                        <li><b>Decorators:</b> Modify functions dynamically.</li>
                        <li><b>Multithreading:</b> Run tasks concurrently.</li>
                        <li><b>Generators:</b> Yield values instead of returning.</li>
                    </ul>
                    <pre><code>
def decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@decorator
def say_hello():
    print("Hello, Python!")

say_hello()
                    </code></pre>
                `
            }
        };

        if (topics[topic]) {
            lessonTitle.innerHTML = `🐍 ${topics[topic].title}`;
            lessonContent.innerHTML = topics[topic].content;
        } else {
            lessonTitle.innerHTML = "Error";
            lessonContent.innerHTML = "<p>Topic not found!</p>";
        }
    }

    window.loadLesson = loadLesson;
});
