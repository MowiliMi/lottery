import { currency } from '../../src/filters/module/currencyFormatter';
import { formatDate, formatShortDate } from '../../src/filters/module/date';

describe('filters', () => {
  it('renders currency ', () => {
    expect(currency(10).replace(/\s/g, '')).toEqual('10,00€');
    expect(currency(100).replace(/\s/g, '')).toEqual('100,00€');
    expect(currency(1000).replace(/\s/g, '')).toEqual('1000,00€');
  });

  it('renders datetime ', () => {
    expect(formatDate(new Date('12.10.2019'))).toEqual('0:0 Tuesday, December 10th, 2019');
    expect(formatDate(new Date('15:40 12.10.2019'))).toEqual('15:40 Tuesday, December 10th, 2019');
    expect(formatDate(new Date('2019-10-12 13:40:02Z'))).toEqual('15:40 Saturday, October 12th, 2019');
  });

  it('renders datetime short ', () => {
    const results = '10.12.2019';
    expect(formatShortDate(new Date('12.10.2019'))).toEqual(results);
    expect(formatShortDate(new Date('15:40 12.10.2019'))).toEqual(results);
    expect(formatShortDate(new Date('2019-10-12 13:40:02Z'))).toEqual('12.10.2019');
  });
});
