export function nomeVerifica(input) {
    const regex = /^\w{3,16}/
    return regex.test(input.value)
}