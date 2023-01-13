const getDate = (date) => {
    let newDate = new Date();
    let oldDate = new Date(date);
    let sec = Math.floor((newDate - oldDate) / 1000 - 3600);
    let min = Math.floor(sec / 60);
    let hours = Math.floor(min / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(days / 30);
    let years = Math.floor(days / 365);
    let toReturn =
        (years > 0) ? years + ' years ago' :
            (months > 0) ? months + ' months ago' :
                (weeks > 0) ? weeks + ' weeks ago' :
                    (days > 0) ? days + ' days ago' :
                        (hours > 0) ? hours + ' hours ago' :
                            (min > 0) ? min + ' minutes ago' :
                                (sec > 0) ? sec + ' seconds ago' : 'now';
    return toReturn;
}

export default getDate;