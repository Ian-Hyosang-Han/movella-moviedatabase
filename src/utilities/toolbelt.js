// Get Dates
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

// Format for movie Release Date
function formatReleaseDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

// Format and get color for movie rating
function formatRating(rating) {
    return {
        value: Math.round(rating * 10),
        color: getRatingColor(rating),
    };
}

// Format for movie run time
function formatRuntime(movieRuntime) {
    let hours = Math.floor(movieRuntime / 60);
    let minutes = Math.floor(movieRuntime % 60);

    if (hours) {
        return `${hours}h ${minutes}m`;
    } else {
        return `${minutes}m`;
    }
}

export { 
    getYear, 
    formatReleaseDate, 
    formatRating, 
    formatRuntime 
};

// const getTrailerKey = (videos) => {
//     for (let index = 0; index < videos.length; index++) {
//         const video = videos[index];
//         if (video.site === "YouTube" && video.type === "Trailer") {
//             return video.key;
//         }
//     }
// };

