//Exercise 3
let john = {
  firstName: "John",
  weight: 60,
  height: 170,
  calculateBMI: function () {
    let hasilHitung = this.weight/((this.height/100)**2)
    if (hasilHitung < 16.0){
        return "Severely Underweight"
    }
    else if(hasilHitung >= 16.0 && hasilHitung <= 18.4){
        return "Underweight"
    }
    else if(hasilHitung >= 18.5 && hasilHitung <= 24.9){
        return "Normal"
    }
    else if(hasilHitung >= 25.0 && hasilHitung <= 29.9){
        return "Overweight"
    }
    else if(hasilHitung >= 30.0 && hasilHitung <= 34.9){
        return "Moderately Obese"
    }
    else if(hasilHitung >= 35.0 && hasilHitung <= 39.9){
        return "Severely Obese"
    }
    else if(hasilHitung >= 40.0){
        return "Morbidly Obese"
    }
  },
};

john.BMI=john.calculateBMI()
console.log(john)

