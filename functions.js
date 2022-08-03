
var mark = [85, 66, 95, 56, 40]


function gpa(marks){
    
    if (marks >= 80){
        return "A grade"
    }
    else if(marks>= 70){
        return "B grade"
    }
    else if(marks >= 60){
        return "C grade"
    }
    else if (marks >= 50){
        return "D grade"
    }
    else {return "F grade"
    }
}

for (var i = 0; i <= mark.length; i++){
    var marks = mark[i]
    console.log(gpa(marks))
}



