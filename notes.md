# les bases de JS
 * Ces notes on été réalisée en suivant le [README](https://github.com/le-campus-numerique/JS_bases-decouverte-du-langage?tab=readme-ov-file#introduction) du cours sur JS
 * Doc [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
 * Doc [W3C](https://www.w3schools.com/js/default.asp)
 * Tuto [Scimba](https://scrimba.com/learn/learnjavascript/debugging-online-co71b4b4e8cf997a4f54bc169)
 * [Environnement de test](https://jsbin.com/?html,output)

## créer de la doc
il existe un format de base pour les commentaires en JS : [JS doc](https://jsdoc.app/)
## les variables
### la déclaration
Il existe plusieurs [mots clefs pour déclarer les variable en JS](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).
* `var` permet de déclarer des **variables globale** ou des variable au sain de fonction. La variable peut être mise à jour ou redéclarée.

    Mais i ly a un problème :

    dans le bloc de code ci-dessous , la variable *greeter* est écrasée et non contenue dans le bloc `if`
```js
var greeter = "hey hi";

if (true) {
    var greeter = "say Hello instead";
}

console.log(greeter);
```

* `let` une variable déclarée avec `let` est **block scoped** , elle ne peut pas être globale. La vairable peut être mise à jour mais pas redéclarée.
* `const` une variable déclarée avec `const` ne peut pas varier, c'est une **block scoped constante**. 
```js
// integers
var a = 38
let b = 38
const c = 12
// Strings
var name = "Joe";
var city = 'London';
// Booleans
var isRed = true;
var isOld = age > 80;

```
### le typage

### les tableaux
* doc [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
## les objets
* doc [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
### l'instenciation
```js
const myDate= new Date()
```
### l'héritage
```js
class Player {
    name;
    constructor(name) {
        this.name=name;
    }
    toString() {
        return this.name
    }
}
class Computer extends Player {
    
    constructor() {
        super(name);
        this.name="computer"
    }
}
```
### les fonctions implicites ou la magie noire de JS
* [toString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 
```js
class Player {
    name;
    constructor(name) {
        this.name=name;
    }
    toString() {
        return this.name
    }
}
```
Si une instance de player est appelée là où un String est attendu alors JS appelle par défaut la fonction toString si elle est présente.
### les objets globaux
#### [les dates](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
#### [la bilbiothèque Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
## les intéractions avec la console
* print dans la console
```js
console.log("coucou")
```
## les interaction avec le DOM
* Doc & Ref
    * [DOM-JS tuto](https://dom-tutorials.appspot.com/static/index.html)
    * [TUTO public](https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-manipulation.php)
    * [MDN](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
    * [W3C](https://www.w3schools.com/js/js_htmldom.asp)
### Field by Id
* capter la valeur d'un champ
```js
let a = document.getElementById("monId")
```
* set le contenu d'un champ
```js
let a = document.getElementById("monId") // capte la valeur
a.innerText = "coucou" // set la valeur
```
* set src attribute
```js
let a = document.getElementById("monId") // capte la valeur
a.src = "img.png" // set la source
```
#### go up, down and sideWays
* get Nth child of the targeted node
```js
document.getElementById('monId').childNodes[1]
```
* get last/first child of the targeted node
```js
document.getElementById('phrase').lastChild
document.getElementById('phrase').firstChild
```
* get previous or next on the same level
```js
document.getElementById('phrase').previousSibling
document.getElementById('phrase').nextSibling
```
* get parent
```js
document.getElementById('start_here').parentNode
```
### event listener

#### attribut `onclick= "fonction()"`

#### la propriété '.addEventListener("event", event => function() )

## les intéractions avec l'utilisateur
* boite modale
    * avec input
```js
let a =  prompt("hey hey question ?")
```
* * message seul
```js
alert("coucou")
```