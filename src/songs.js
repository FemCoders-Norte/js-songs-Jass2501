import { songs } from "./data";

//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
    /*let result = array.map((song) => {
        return song.artist;
    });
    //console.log("Exercise 1 ->", result);
    return result;*/
    return [...array].map(song => song.artist);
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
    //Write your code here
    return array.filter(song => song.artist === artist);
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
    //Write your code here
    return array.map(song => song.title).sort().slice(0, 10);
};

//Exercise 4: Order by year, ascending
function orderByYear(array) {
    //Write your code here
    return [...array].sort((a, b) => a.year === b.year ? a.title.toLowerCase().localeCompare(b.title.toLowerCase()) : a.year - b.year);
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    //Write your code here
    return [...array].filter(song => song.genre && song.genre.includes(genre));
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    //Write your code here
    return [...array].map(song => {
        const match = song.duration.match(/(\d+)\s*min\s*(\d+)\s*sec/i);
        const minutes = match ? Number(match[1]) : 0;
        const seconds = match ? Number(match[2]) : 0;

        return {
            ...song,
            duration: minutes * 60 + seconds
        };
    });
};
//Exercise 7: Get the longest song
function getLongestSong(array) {
    //Write your code here
    const callfunction = minutsToSeconds(array);
    const maxDuration = Math.max(...callfunction.map(song => song.duration));
    return callfunction.filter(song => song.duration === maxDuration);

};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function
function getShortestSong(array) {
    //Write your code here
    const callfunction = minutsToSeconds(array);
    const minDuration = Math.min(...callfunction.map(song => song.duration));
    return callfunction.filter(song => song.duration === minDuration);

};

export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong, getShortestSong };