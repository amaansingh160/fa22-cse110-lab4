function upDate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);

}
setInterval(upDate, 1000);