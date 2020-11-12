import * as currencyFormatter from 'currency-formatter';

const currency = (value: number) => currencyFormatter.format(value, { code: 'EUR' });

export { currency };
