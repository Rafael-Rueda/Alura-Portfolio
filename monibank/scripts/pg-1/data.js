export function dataVerifica(input) {
    const $data = new Date(input.value);
    function datavalida(data){
        const $data = new Date()
        const $data_18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

        return $data >= $data_18;
    }
    if ($data.getTime() && datavalida($data)) {
        return true
    } else {
        return false;
    }
}