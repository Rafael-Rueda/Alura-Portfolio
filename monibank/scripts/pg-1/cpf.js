export function cpfVerifica(input) {
    const $cpf = input.value.replace(/\.|-|\s/g,"");
    const $cpfrepetido = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    
    function cpfValido() {
        let soma = 0
        let soma2 = 0
        let nums = [10,9,8,7,6,5,4,3,2];
    
        for(let c=0;c < 9;c++ ){
           soma += parseInt($cpf[c]) * nums[c];
        }
        
        nums = [11,10,9,8,7,6,5,4,3,2];

        for(let c=0;c < 10;c++ ){
           soma2 += parseInt($cpf[c]) * nums[c];
        }

        if (((soma * 10) % 11 == $cpf[9] || (soma * 10) % 11 == 10 && $cpf[9] == 0) && ((soma2 * 10) % 11 == $cpf[10])) {
            return true
        } else {
            return false
        }
    }
    

    if (($cpf.toString()).length == 11 && !$cpfrepetido.includes($cpf.toString()) && cpfValido()) {
        return true;
    } else {
        return false;
    }
};
