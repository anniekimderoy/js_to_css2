const css_h1 = {
    "color": "#222",
    "font-family": "Arial",
    "font-size": `48px`,
    "padding": "30px",
    "background-color": `rgb(${aleatoire_entier(100, 255)}, ${aleatoire_entier(100, 255)}, ${aleatoire_entier(100, 255)})`,
}

const css_divs = {
    "float": "left",
    "width": "25px",
    "height": "25px",
    "margin-left": "5px",
    "background-color": `rgb(${aleatoire_entier(100, 255)}, ${aleatoire_entier(100, 255)}, ${aleatoire_entier(100, 255)})`,
}

const balise_h1 = document.querySelector("h1")
const balises_divs = document.querySelectorAll("div")

appliquer_css(balise_h1, css_h1)
// En bonus: appliquer_css(balises_divs, css_divs)

function appliquer_css(balises, css_obj) {

}