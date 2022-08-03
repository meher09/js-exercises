var marks = [85, 66, 95, 56, 40]





// console.log(number.length)
for (var i = 0; i < marks.length; i++){
    if (marks[i] >= 80){
        console.log("A grade")
    }
    else if(marks[i]>= 70){
        console.log("B grade")
    }
    else if(marks[i] >= 60){
        console.log("C grade")
    }
    else if (marks[i] >= 50){
        console.log("D grade")
    }
    else {console.log("F grade")
    }
}
    