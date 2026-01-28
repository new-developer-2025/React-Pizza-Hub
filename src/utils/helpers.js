export function formatCurrency(value) {
  if (typeof value !== 'number') return '€0.00';

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return '';

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function calcMinutesLeft(dateStr) {
  const now = Date.now();
  const target = new Date(dateStr).getTime();

  if (isNaN(target)) return 0;

  const diff = Math.floor((target - now) / 60000);
  return diff > 0 ? diff : 0;
}


