class Media {
    constructor(titleIn){
      this._title = titleIn;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title(){
      return this._title;
    }
    
    set title(titleIn){
      this._title = titleIn;
    }
    
    toggleCheckoutStatus(){
      if (this._isCheckedOut){
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
    
    get checkedOut(){
      return this._isCheckedOut;
    }
    
    get getAverageRating(){
      let sum = 0;
      for (let i = 0; i < this._ratings.length; i++){
        sum += this._ratings[i];
      }
      return Math.floor(sum/this._ratings.length);
    }
    
    addRating(ratingIn){
      this._ratings.push(ratingIn);
    }
  }
  
  class Book extends Media{
    constructor(titleIn, authorIn ,pagesIn){
      super(titleIn);
      this._author = authorIn;
      this._pages = pagesIn;
    }
    
    get author(){
      return this._author;
    }
    
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(titleIn, directorIn, runTimeIn){
      super(titleIn);
      this._director = directorIn;
      this._runTime = runTimeIn;
    }
      
    get director(){
      return this._director;
    }
      
    get runTime(){
      return this._runTime;
    }
  }
  
  LOTR = new Book("Lord of the Rings","Tolkien",1500);
  console.log(LOTR.title);
  console.log("isCheckedout: ",LOTR.checkedOut);
  LOTR.toggleCheckoutStatus();
  console.log("isCheckedout: ",LOTR.checkedOut);
  LOTR.addRating(1);
  LOTR.addRating(3);
  console.log(LOTR.getAverageRating);
  console.log(LOTR.author);
  console.log(LOTR.pages);
  
  Gump = new Movie("Forrest Gump", "Zemekis", 100);
  console.log(Gump);
  
  
  