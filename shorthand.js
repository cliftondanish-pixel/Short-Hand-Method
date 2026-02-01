//Longhand Method
// let year1 = prompt("enter your bday year")
// let month1 =prompt("enter your bday month using number")
// let date11 = prompt("enter your bday date")

// let orgin = new Date()

// orgin.setFullYear(year1)
// orgin.setMonth(month1-1)
// orgin.setDate(date11)

// let day1 = orgin.getDay()

// let dayData = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// alert(dayData[day1])

//---------------------------------------------------------------------------------------

//Shorthand Method
let year = +prompt("Enter your birth year:")
let month = +prompt("Enter your birth month (1-12):")
let day = +prompt("Enter your birth day (1-31):")
alert(
    ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    [new Date(year,month-1,day).getDay()]   
)
