// class studentHogwarts {
//     #privateScore = 0;
//     #name = null;

//     #changeScoreBy(points){
//         this.#privateScore += points;
//     }

//     setName(newName){
//         this.#name = newName;
//     }
//     rewardStudent(){
//         this.#changeScoreBy(1);
//     }
//     penalizeStudent(){
//         this.#changeScoreBy(-1);
//     }
//     getScore(){
//         return `${this.#name}: ${this.#privateScore}`; 
//     }

// }
// // Creation of an instance named harry
// const Harry = new studentHogwarts();

// // Setting name to Harry
// Harry.setName('Harry');

// // Reward student 4 times

// Harry.rewardStudent();
// Harry.rewardStudent();
// Harry.rewardStudent();
// Harry.rewardStudent();

// // Log to the console the name and score

// console.log(Harry.getScore());

// const draco = new studentHogwarts();
// draco.setName('Draco');
// draco.rewardStudent();
// draco.penalizeStudent();
// draco.penalizeStudent();
// draco.penalizeStudent();

// console.log(draco.getScore());

//Methode Twooooooo --------------------------------

function studentHogwarts() {
    var privateScore = 0;
    var name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1);
        },
        getScore: function () {
            return name + ': ' + privateScore;
        }
    };
}

var harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); 

var draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());