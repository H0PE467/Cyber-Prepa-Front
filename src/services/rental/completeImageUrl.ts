export function completeImageUrl(value: string | undefined) {
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g;
    // If the string is a valid URL, return it
    if (!value) {
        return undefined
    } else if (value && value.match(regex)) {
        return value;
    } else if (value[0] === '/') {
        return `${import.meta.env.VITE_API_BASE_URL}${value.slice(1)}`;
    } else {
        const url = `${import.meta.env.VITE_API_BASE_URL}${value}`
        if (url.match(regex)) {
            return url;
        } else {
            return undefined;
        }
    }
}