export function sleep(fn, delay = 200) {
    return new Promise((resolve) => {
        setTimeout(() => { fn(); resolve() }, delay);
    })
}
