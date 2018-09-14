// Examples from codecademy javaScript lesson on advanced objects

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return "I am " + this.model + " and my energy level is " + this.energyLevel;
    }
  };
  
  console.log(robot.provideInfo());

  const robot2 = {
    energyLevel: 100,
    checkEnergy(){
      console.log(`Energy is currently at ${this.energyLevel}%.`)
      console.log(this.energyLevel,"%") // output is 100 '%'
      console.log(`${this.energyLevel}%`) // output is 100%
      // note use of ` ` above
  
     }
  }
  
  robot2.checkEnergy();

  /*
  Certain languages have privacy built-in for objects, but 
  JavaScript does not have this feature. Rather, JavaScript 
  developers follow naming conventions that signal to other 
  developers how to interact with a property. One common 
  convention is to place an underscore _ before the name of 
  a property to mean that the property should not be altered. 
  */

 const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    },
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  console.log(person.fullName); // 'John Doe'
  
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return "Sensors are currently down."
      }
    },
    set numOfSensors(num){
      if((typeof num === 'number') &&
         (num >= 0)){
        this._numOfSensors = num;
      } else {
        console.log("Pass in a number that is greater than or equal to 0");
      }
    },
    get energyLevel() {
      if (typeof(this._energyLevel) == 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'Undefined energyLevel';
      }
    }
  };
  
console.log(robot.energyLevel);
  
console.log(robot.numOfSensors);

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

// Factory Function Example

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


const robotFactory = (model, mobile) => {
    return {
      model: model,     // shortcut - could just say: model, (a.k.a. destructuring)
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const tinCan = robotFactory('P-500',true);
  
  tinCan.beep();
  
  console.log(tinCan);

  // destructured assignment

  const robot3 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  // destructured assignment
  
  const { functionality } = robot3;
  
  functionality.beep();
  
  // built-in object methods: assign and entries

  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log("robotKeys: ", robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot);
console.log("robotEntries: ", robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

console.log(robot);