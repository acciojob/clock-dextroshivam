let ele=document.getElementById("timer");
const timestamp = Date.now();
const currentDate = new Date(timestamp);
const formattedDate = currentDate.toLocaleString();
ele.innerText= formattedDate;