function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
                          // challenge 1
//height= (height/100);
//const bmi = weight / (height*height) ;
const bmi = weight/ (height / 100) ** 2;
  //alert(bmi);
     let bmis;

   if (bmi< 18.5){bmis= "Underweight";

  } else if (bmi >=18.5 && bmi <= 24.9){ bmis= "HealthyWeight";

}else if (bmi >= 25 && bmi <= 29.9){ bmis="Overwheight";

}else if (bmi>30) { bmis = "AboveObesity";
  }


  



  let gender = male ? "male" : "Female";
// result
alert(`
Age:${age}
Height: ${height}cm
weight: ${weight}kg
My BMI is ${bmi}
My BMI state is ${bmis}
`)


}
