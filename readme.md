# JS to CSS

## Explications et objectif
L'objectif de cet exercice est de créer une fonction qui permet d'appliquer des règles CSS écrites sous la forme d'un objet javascript.

Par exemple:
```javascript
const css = {
    "color": "#222",
    "font-family": "Arial",
    "font-size": "48px",
}

appliquer_css(balise, css)
```

Donnerais l'équivalent du CSS:
```css
balise {
    color: #222;
    font-family: Arial;
    font-size: 48px;
}
```

Mais ces règles doivent être appliquées en JS, donc les vraies lignes serait:

```javascript
balise.style.color = "#222"
balise.style.fontFamily = "Arial"
balise.style.fontSize = "48px"
```

Le tout doit toutefois être fait dynamiquement afin de pouvoir supporte l'ensemble des propriétés CSS.

## `appliquer_css(balise, css_obj)`
- `balise`: Cette fonction reçoit en paramètre la balise sur laquelle appliquer les règles CSS
- `css_obj`: Objet Javascript content la liste de règles CSS

**Bonus:** Une fois que ça fonctionne, essayez de pouvoir passer une liste de balise plutôt qu'une seule avec querySelectorAll. Idéalement, la fonction devrait trouvé par elle même si c'est une seule balise ou bien plusieurs et faire la bonne action selon le cas.



<style type="text/css">
body { font-size: 22px;}
h1 { font-weight: bold; text-align: center; margin-bottom: 50px; border: none; }
h2 { margin-top: 30px; border-bottom: 1px dotted rgba(255,255,255,0.2); font-weight: bold;}
h3 {font-weight: bold;}
</style>