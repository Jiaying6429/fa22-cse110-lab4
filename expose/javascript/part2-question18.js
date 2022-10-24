function da() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(da, 1000);