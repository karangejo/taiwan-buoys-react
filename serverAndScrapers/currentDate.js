module.exports.getCurrentDate = function() {

    const padIfSingle = function(num){
        number = parseInt(num);
        if(number<10){
            return("0"+num);
        }
        return(num)
    }

    let ts = Date.now();

    let date_ob = new Date(ts);
    let year = date_ob.getUTCFullYear();
    let date = padIfSingle(date_ob.getUTCDate());
    let month = padIfSingle(date_ob.getUTCMonth() + 1);
    let hour = padIfSingle(date_ob.getUTCHours());

    return(year + "-" + month + "-" + date + " " + hour);
}
