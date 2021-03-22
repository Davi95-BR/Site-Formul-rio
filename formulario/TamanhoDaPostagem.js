/*HTML
<body>
    <textarea id="corpo-postagem" cols="40" rows="5"></textarea>
    <p>Caracteres: <span id="numero-caracteres">0</span> caracteres.</p>
    <script src="contador.js"></script>
</body>
*/
// contador.js

function atualizaCaracteres() {
    var postagem = document.querySelector("#corpo-postagem").value;
    var caracteres = postagem.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
}

var campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);
