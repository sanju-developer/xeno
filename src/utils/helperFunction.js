export const getParseTime = (date) => {
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}${new Date(date).getHours() >= 12 ? 'pm' : 'am'}`
}

export const getDateBasedText = date => {
    return new Date(date).getDate() === new Date().getDate() ? 'Today' : new Date().getDate() - new Date(date).getDate() === 1 ? 'Tommorrow' : getDayText(date)
}

export const getColor = date => {
    return new Date(date).getDate() === new Date().getDate() ? 'green' : new Date().getDate() - new Date(date).getDate() === 1 ? 'yellow' : 'red'
}

export const getDayText = date => {
    const day = new Date(date).getDay()
    switch (day) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default: return ''
    }
}

export const getDateWithSuffix = (date) => {
    const dateCount = new Date(date).getDate()
    if (dateCount === 1) {
        return '1st'
    } else if (dateCount === 2) {
        return '2nd'
    } else if (dateCount === 3) {
        return '3rd'
    } else return dateCount + 'th'
}