export function currencyFormater(money) {
    return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
};