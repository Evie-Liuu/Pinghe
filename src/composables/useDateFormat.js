export function useDateFormat() {
    /**
     * 將 timestamp 轉成 YYYY/MM/DD
     * @param {number|string|Date} input
     * @returns {string} 例如 2025/12/01
     */
    const formatDate = (input, separator = '/') => {
        if (!input) return '';

        const date = input instanceof Date ? input : new Date(Number(input));
        if (isNaN(date)) return '';

        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return [y, m, d].join(separator);
    };

    return { formatDate };
}