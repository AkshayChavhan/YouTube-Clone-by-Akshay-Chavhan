// //this is youtube javascript file
// /*
// need 2 things
// 1]when something is typed in search box
// 2] show/display videos on homepage
// display()
// searchVideo()
// */
// let div = document.getElementById("videodiv");

// // 1]when something is typed in search box
// async function display() {

// }
// display();

// // search item when something is typed in search-box
// //take the "string" typed in search-box and search on the

// async function searchVideos(){
//     document.getElementById("videodiv").innerHTML = ""; //empty
//     let query = document.getElementById("video").value; //search string /query string
//     //search for video
//     let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`)
//     let data = await res.json();

//     for({id:{videoId}}of data.items)
//     {
//     let videodiv= document.createElement("iframe")
//     videodiv.setAttribute("class","mons")
//     videodiv.src = `https://www.youtube.com/embed/${videoId}`;
//     videodiv.allow = 'fullscreen'
//     div.append(videodiv)
//     }  
// }


/*
Need 2 Things:
(1) Show/Display Videos on Homepage
(2) Search When Something is typed in the search-box
display()
- Show/Display Videos on Homepage
- Based Upon Most Popular Videos
- Should be Called Directly WITHOUT Any Event 
(No Hover, No Click , No On Click)
- On Page Load
searchVideo()
- Search When Something is typed in the search-box
- Take the "String" typed in search-box and search on that string 
*/

/*
Need 2 Things:
(1) Show/Display Videos on Homepage
(2) Search When Something is typed in the search-box
display()
- Show/Display Videos on Homepage
- Based Upon Most Popular Videos
- Should be Called Directly WITHOUT Any Event 
(No Hover, No Click , No On Click)
- On Page Load
searchVideo()
- Search When Something is typed in the search-box
- Take the "String" typed in search-box and search on that string 
*/

let div = document.getElementById("videodiv");


// (1) Show/Display Videos on Homepage



async function display(){

    // q = Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();




// (2) Search When Something is typed in the search-box

async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}

