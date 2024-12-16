// Função para exibir o formulário
function aparecerFormulario() {
    const formulario = document.querySelector('.formulario');
    formulario.style.left = '50%'; // Posiciona o formulário no centro da tela
}

// Função para esconder o formulário
function desaparecerFormulario() {
    const formulario = document.querySelector('.formulario');
    formulario.style.left = '-100%'; // Coloca o formulário fora da tela
}
