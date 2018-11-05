/**
    Looping a Triangle
    Write a loop that makes seven calls to console.log to output the following
    triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let text = "";
while (text.length < 7) {
    text += "#";
    console.log(text);
}