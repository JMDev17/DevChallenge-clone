const id = document.querySelector('#text-running');
const text = 'Melhore suas habilidades';
const interval = 100;

function showText(id, text, interval) {
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        id.innerHTML += next;

    }, interval);
}

showText(id, text, interval)