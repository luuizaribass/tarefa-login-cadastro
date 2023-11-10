//Seleciona o formulário de login
const form = document.querySelector('.login-form');

//Seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']");
//Dessa forma indentificamos a tag pelo tipo do input dela, usamos o form ao invés do documento para indicar onde o código deve procurar esse input

const senhaInput = form.querySelector("input[type='password']");
//Seleciona o campo de entrada da senha

//Aciciona um ouvintede eventos ao formulário para detectar quando o usuario clicar no botão
form.addEventListener('submit', (event) => {
    //Adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    //Obtém os valores dos campos de entrada do usuario e senha e o trim() remove os espaços em branco tanto no começo quanto no final de cada campo
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    //Verifica se os campos de usuario e senha estão preechidos
    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos");
    } else if (usuario === 'usuario' && senha === 'senha') {
        //Verifica se as informações de login es senha estão corretas
        alert("Bem vindo!")
        location.replace("/tarefa/index.html", "_self")
    } else {
        //Exibe uma mensagem de erro se as informações estiverem erradas
        alert("Usuário ou senha incorreto, tente novamente")
    }
})