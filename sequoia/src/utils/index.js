export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export const inputRegex = RegExp(`^\\d*$`) // match escaped "." characters via in a non-capturing group
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const shortBalance = (balance, need_length = 6) => {
    const balance_arr = balance.split('.')
    if (balance_arr.length > 1) {
        const integer_part = balance_arr[0]
        const float_part = balance_arr[1].length > need_length ? balance_arr[1].slice(0, need_length) : balance_arr[1]
        return `${integer_part}.${float_part}`
    }
    return balance
}

export async function scrollToElement(event, href, isRedirect = false) {
    if (isRedirect) {
        await sleep(300)
    }
    const id = href.split('#')[1]
    if (id) {
        const element = document.getElementById(id);
        if (element) {
            const top = element.offsetTop;
            window.scrollTo({
                top: top,
                behavior: 'smooth',
            })
        }
    }
}
export const shortAddress = (address) => {
    if (address.length <= 12) return address
    return `${address.slice(0, 6)}...${address.slice(-6)}`
}

export const addZeroForward = (string, needLength = 2) => {
    return `${'0'.repeat(needLength - string.length)}${string}`
}