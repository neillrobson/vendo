export const gaussian = () => Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());

export function boundedBell(min = 0, max = 1) {
    let num = -1;
    while (num < 0 || num >= 1) num = gaussian() / 10 + 0.5;

    num *= max - min;
    num += min;
    return num;
}
