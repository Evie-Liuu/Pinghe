export function useDateTime() {
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

    return { formatISO, formatTimestamp };
}