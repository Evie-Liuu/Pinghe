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

    const formatISO = (ts, useUTC = false) => {
        const date = new Date(ts * 1000); // 轉毫秒
        console.log(date);

        const y = useUTC ? date.getUTCFullYear() : date.getFullYear();
        const m = String((useUTC ? date.getUTCMonth() : date.getMonth()) + 1).padStart(2, '0');
        const d = String(useUTC ? date.getUTCDate() : date.getDate()).padStart(2, '0');
        const hh = String(useUTC ? date.getUTCHours() : date.getHours()).padStart(2, '0');
        const mm = String(useUTC ? date.getUTCMinutes() : date.getMinutes()).padStart(2, '0');
        const ss = String(useUTC ? date.getUTCSeconds() : date.getSeconds()).padStart(2, '0');
        return `${y}-${m}-${d}T${hh}:${mm}:${ss}${useUTC ? 'Z' : ''}`;
    };
    // ISO → timestamp (毫秒)
    const formatTimestamp = (isoStr) => {
        return Math.floor(new Date(isoStr).getTime());
    };

    return { formatDate, formatISO, formatTimestamp };
}