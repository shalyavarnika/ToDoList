//jshint esversion:6

//method 1
exports.getdate = function(){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US",options);
}

//method 2
module.exports.getday = getday;
function getday(){
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US",options);
}