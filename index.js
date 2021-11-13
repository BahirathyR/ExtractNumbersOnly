
function extractnumbersonly(str){

    var stringonly=""
    for(var i=0;i<=str.length;i++){
       
     if( str[i]>='0' && str[i]<='9')
    {
        stringonly += str[i]
    }
}
console.log(stringonly)

}

module.exports.extractnumbersonly=extractnumbersonly