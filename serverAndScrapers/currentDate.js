const getCurrentDate = function() {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getUTCDate();
    let month = date_ob.getUTCMonth() + 1;
    let year = date_ob.getUTCFullYear();
    let hour = date_ob.getUTCHours();

    return(year + "-" + month + "-" + date + " " + hour);
}
