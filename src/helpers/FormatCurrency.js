const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: "VND", style: "currency" })

export function FormatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}