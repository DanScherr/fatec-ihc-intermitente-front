export function validaNome(nome) {
    if (nome == null) 
        return "O campo 'nome' deve ser preenchido";
    if (nome.length < 3)
        return "O nome deve ter ao menos 3 caracteres";

    return null;
}

export function validaEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == null) 
        return "O campo 'email' deve ser preenchido";
    if (!regex.test(email))
        return "Você digitou um e-mail inválido"
    
    return null;
}

export function validaSenha(senha) {
    if (senha == null) 
        return "O campo 'senha' deve ser preenchido";
    if (senha.length < 5)
        return "A senha deve ter ao menos 5 caracteres";

    return null;
}

export function validaTelefone(telefone) {
    const numeroLimpo = telefone.replace(/\D/g, '');
    const regexTelefone = /^(?:(?:\d{2}\s?\d{4,5}\d{4})|(?:\d{11})|(?:\d{10})|(?:\d{4}\d{4})|(?:\d{2}\s?\d{2}\s?\d{8})|(?:\d{5}-\d{4})|(?:\d{9}))$/;
    
    if (/[^0-9\s-]/.test(telefone)) {
        return "O telefone contém caracteres inválidos";
    }
    if (telefone == null) 
        return "O campo 'telefone' deve ser preenchido";
    if (!regexTelefone.test(numeroLimpo)) {
        return "Telefone inválido";
    }

    return null;
}

export function validaEndereco(endereco) {   
    if (endereco.length === 0) 
        return "O campo endereço deve ser preenchido";

    return null;
}

export function validaDocumento(documento) {
    // Remover traços, pontos e barras
    const numeroLimpo = documento.replace(/[^\d]/g, '');

    // Verificar se é CPF ou CNPJ
    if (numeroLimpo.length === 11) {
        // CPF
        if (!validaCpf(numeroLimpo)) {
            return "CPF inválido";
        }
    } else if (numeroLimpo.length === 14) {
        // CNPJ
        if (!validaCnpj(numeroLimpo)) {
            return "CNPJ inválido";
        }
    } else {
        // Nenhum dos dois
        return "Documento inválido";
    }

    return null;
}

function validaCpf(cpf) {
    let soma = 0;
    let resto;

    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    return resto === parseInt(cpf.substring(10, 11));
}

function validaCnpj(cnpj) {
    if (cnpj === "00000000000000") return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    return resultado === parseInt(digitos.charAt(1));
}