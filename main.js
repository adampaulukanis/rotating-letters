const text = document.querySelector('input[type="text"]');
const output = document.querySelector("#output");
const form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
    let myText = text.value;
    output.innerHTML += "<br>";
    [...myText].forEach((letter) => {
        let span = document.createElement("span");
        span.classList.add("letter");
        span.innerHTML = letter;
        output.appendChild(span);
    });
};
