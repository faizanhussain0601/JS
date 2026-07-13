const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function(val){
//     console.log(val)
// })

// coding.forEach((items)=>{
//     console.log(items)
// })

// function PrintMe(val){
//     console.log(val)
// }

// coding.forEach(PrintMe)

// coding.forEach((item,index,arr)=>{
//          console.log(item,index,arr)
// })

const myCodingLang = [
                {
                    languageName: "javaScript",
                    languageFileName: "js"
                },
                {
                    languageName: "C++",
                    languageFileName: "cpp"
                },
                {
                    languageName: "Python",
                    languageFileName: "py"
                },
                 {
                    languageName: "Java",
                    languageFileName: "java"
                },
]

myCodingLang.forEach((items)=>{
    console.log(items.languageName)
})