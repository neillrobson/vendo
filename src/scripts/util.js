export const gaussian = () =>
    Math.sqrt(-2 * Math.log(1 - Math.random())) *
    Math.cos(2 * Math.PI * Math.random());

export function boundedBell(min = 0, max = 1) {
    let num = -1;
    while (num < 0 || num >= 1) num = gaussian() / 10 + 0.5;

    num *= max - min;
    num += min;
    return num;
}

/**
 * Returns a 32-bit signed integer hash of the input string
 *
 * @param {String} str The input to hash
 * @returns {Number} The 32-bit signed integer hash
 */
export function hashCode(str) {
    let hash = 0;
    let i;
    let chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export const mod = (n, m) => ((n % m) + m) % m;
