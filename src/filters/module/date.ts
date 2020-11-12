import { format } from 'date-fns';

const formatDate = (date: Date) => format(date, 'H:m PPPP');
const formatShortDate = (date: Date) => format(date, 'dd.MM.yyyy');

export { formatDate, formatShortDate };
