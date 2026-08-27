/**
 * Format date string into Indonesian localized date format.
 * @param {string|Date} date 
 * @returns {string} Formatted date (e.g. "Senin, 25 Agustus 2026")
 */
export const formatDateIndonesian = (date) => {
  if (!date) return '-';
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format time range (e.g. "07:00 - 12:00 WIB")
 * @param {string} start 
 * @param {string} end 
 * @returns {string}
 */
export const formatTimeRange = (start, end) => {
  if (!start && !end) return '-';
  return `${start || ''} - ${end || ''} WIB`;
};

/**
 * Clean and normalize NIM / ID Peserta input
 * @param {string} nim 
 * @returns {string}
 */
export const normalizeNIM = (nim) => {
  return (nim || '').trim().toUpperCase();
};
