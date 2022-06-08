const capitalize = (word) => {
    const w = word.toLowerCase()

    return `${w.charAt(0).toUpperCase()}${w.slice(1)}`
}

export {
    capitalize
}