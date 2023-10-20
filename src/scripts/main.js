// import humanize from "./utils/humanize.js";

import humanize from "./utils/humanize";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function humanizeDate($date) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime);
    $date.textContent = capitalize(humanizedDate);
}

function sortByDate($a, $b) {
    const dateA = new Date($a.querySelector("time").getAttribute("datetime"));
    const dateB = new Date($b.querySelector("time").getAttribute("datetime"));
    return dateB - dateA;
}

function humanizeArticleDates() {
    const $dates = document.querySelectorAll("time");
    $dates.forEach(humanizeDate);
}


function sortArticlesByDate() {
    const $cards = document.querySelectorAll(".post-list .card"); 
    const $cardsSorted = [...$cards].sort(sortByDate);
    const $postList = document.querySelector(".post-list");
    
    [...$postList.children].forEach($child => $child.remove());
    $postList.append(...$cardsSorted);
    

}


function main() {
    humanizeArticleDates();
    sortArticlesByDate();
}

main();
