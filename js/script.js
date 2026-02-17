body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #135f8b; /* Earthy brown */
    color: white;
    padding: 10px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav a {
    color: white;
    text-decoration: none;
}

main {
    padding: 20px;
    max-width: 800px;
    margin: auto;
}

.center-img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

.hidden {
    display: none;
}

button {
    background-color: #2d6ca0;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #3f8bcd;
}

footer {
    background-color: #136d8b;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Responsive */
@media (max-width: 600px) {
    nav ul li {
        display: block;
        margin: 5px 0;
    }
}