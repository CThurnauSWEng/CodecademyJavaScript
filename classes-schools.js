class School {
    constructor(nameIn, levelIn, numberOfStudentsIn){
      this._name = nameIn;
      this._level = levelIn;
      if (isNaN(numberOfStudentsIn)){
        console.log("Error: numberOfStudents is NaN")
      } else {
          this._numberOfStudents = numberOfStudentsIn;
      }  }
    
    get name(){
      return this._name;
    } 
    
    get level(){
      return this._level;
    }
    
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    
    set numberOfStudents(num){
      if (isNaN(num)){
        console.log("Error: numberOfStudents is NaN")
      } else {
          this._numberOfStudents = num;
      }
    }
    
    quickFacts(){
      let myStr = this._name + " educates";
      if (!isNaN(this._numberOfStudents)){
        myStr += " " + this._numberOfStudents;
      }
      myStr += " students at the " + this._level + " level";
      console.log(myStr);
      
     }
    
    static pickSubstituteTeacher(substituteTeachers){
      let randNum = Math.floor(Math.random() * (substituteTeachers.length));
      return substituteTeachers[randNum];
    }
  }
  
  class PrimarySchool extends School{
    constructor(nameIn, numberOfStudentsIn, pickupPolicyIn){
      super(nameIn, "primary school", numberOfStudentsIn);
      this._pickupPolicy = pickupPolicyIn;
    }
    
    get pickupPolicy(){
      this._pickupPolicy;
    }
    
    primaryQuickFacts(){
      this.quickFacts();
      console.log("The pickup policy is: ", this._pickupPolicy);
    }
  }
  
  class HighSchool extends School{
    constructor(nameIn, numberOfStudentsIn, sportsTeamsIn){
      super (nameIn, "high school", numberOfStudentsIn);
      this._sportsTeams = sportsTeamsIn;
    }
    
       get sportsTeams(){
      console.log("The sports teams at ", this._name, "are",this._sportsTeams);
      return this._sportsTeams;
    }
    
      highSchoolQuickFacts(){
      this.quickFacts();
      console.log("The sports teams are: ", this._sportsTeams)
    }
  }
  
  // test logic for detecting NaN for number of students
  /*
  let myschool = new School("Jacoby Creek","primary","hello");
  myschool.quickFacts();
  myschool.numberOfStudents = "goodbye";
  myschool.quickFacts();
  
  // note: both "16000" and 18000 are accepted as numbers
  myschool.numberOfStudents = "16000";
  myschool.quickFacts();
  
  myschool.numberOfStudents = 18000;
  myschool.quickFacts();
  
  let substituteTeachers = ['Mr. Smith', 'Ms. Jones', 'Ms. Stein', 'Mr. Chavez'];
  */
  
  // test random seletion of teacher
  /*
  for (var i = 0; i<20; i++){
    console.log(School.pickSubstituteTeacher(substituteTeachers));  
  }
  */
  
  let sunnyBrae = new PrimarySchool("Sunny Brae", 200,"allowed");
  sunnyBrae.quickFacts();
  sunnyBrae.primaryQuickFacts();
  
  let AHS = new HighSchool("Aracta High School", 400, "['Tigers','Lions']");
  AHS.sportsTeams;
  AHS.quickFacts();
  AHS.highSchoolQuickFacts();
  
  
  
  