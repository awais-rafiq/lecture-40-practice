class animal {
    constructor(legs){
        this.legs = 4;
    }
    
    showAge(){
        console.log(`this animal have ${this.legs}`)
    }
}

class dog extends animal { // extens used for creating child class of parent class.
    constructor(color, height, dogAge, legs){
        super( legs);      // super method calls constructor function of parent class
        this.color = green;
        this.height = 9;
        this.dogAge = 88;
    }

    showDogDetail(){
        console.log(`This dog have ${this.height} height and ${this.color} color and ${this.dogAge} years old`);
    }

}

// class dogChild extends dog {
//     constructor(childEyes, color, height, childAge,dogAge, legs){
//         super(color, height, legs,dogAge);      // super method calls constructor function of parent class
//         this.childEyes = childEyes;
//         this.childAge = childAge;
//     }

//     showDogChildDetail(){
        
//         console.log(`This dog have ${this.height} height and ${this.color} color and ${this.childAge} years old and have ${this.childEyes} eyes`);
//     }

// }



// // let animalObject1 = new animal( 4, 4);


// // let dogObject1 = new dog("brown", "2 feet", 4, 4);


// let dogChildObject1 = new dogChild("black", "brown", "2 feet", 4, 4, 4);
// dogChildObject1.showDogChildDetail()