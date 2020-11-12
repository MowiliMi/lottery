import Vue from 'vue';
import { currency } from './module/currencyFormatter';
import { formatDate, formatShortDate } from './module/date';

Vue.filter('currency', currency);
Vue.filter('formatDate', formatDate);
Vue.filter('formatShortDate', formatShortDate);
