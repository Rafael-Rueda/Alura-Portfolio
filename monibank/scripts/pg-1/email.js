export function emailVerifica(input) {
    const regex = /((\w+\.?)\w+)+@\w+\.\w{1,3}(\.\w{2})?/
    if (regex.test(input.value)) {
        return true;
    } else {
        return false;
    }
}