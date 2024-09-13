const coding = ["js","python","java","c++","swift"]

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((item) => {
    console.log(item);
}) 

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})