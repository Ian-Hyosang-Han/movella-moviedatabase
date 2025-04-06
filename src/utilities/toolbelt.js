// Get current year
function getYear() {
    const d = new Date();
    return d.getFullYear();
  }
  
  // Format movie release date
  function formatReleaseDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  
  // Format movie runtime
  function formatRuntime(movieRuntime) {
    const hours = Math.floor(movieRuntime / 60);
    const minutes = movieRuntime % 60;
  
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
  }
  
  export {
    getYear,
    formatReleaseDate,
    formatRuntime
  };
