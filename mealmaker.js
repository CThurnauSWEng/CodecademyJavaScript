const menu = {
    _courses : {
      appetizers : [],
      mains : [],
      desserts : [],
    },
      get appetizers() {
        return this.appetizers;
      },
      get mains() {
        return `${this._courses.mains}`
      },
      get desserts() {
          return `${this._courses.desserts}`
        },
      set appetizers(appetizer) {
        this._courses.appetizers.push(appetizer);
      },
      set mains(main){
        this._courses.mains.push(main);
      },
      set desserts(dessert){
        this._courses.desserts.push(desert);
      },
    get courses(){
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    addDishToCourse(courseName, name, price){
      const dish = {name: name, price: price};
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      let randIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
  
      let total = appetizer.price + main.price + dessert.price;
      
      return {appetizer : appetizer.name,
              main: main.name,
              dessert: dessert.name,
              price: total};
    }
  }
  
  menu.addDishToCourse('appetizers','shrimp',10);
  menu.addDishToCourse('appetizers','salad',5);
  menu.addDishToCourse('appetizers','escargot',20);
  menu.addDishToCourse('mains','salmon',10);
  menu.addDishToCourse('mains','steak',13);
  menu.addDishToCourse('mains','chicken',8);
  
  menu.addDishToCourse('desserts','carrot cake',5);
  menu.addDishToCourse('desserts','chocolate cake',6);
  menu.addDishToCourse('desserts','ice cream',5);
  
  console.log("menu: ", menu._courses)
  
  const meal1 = menu.generateRandomMeal();
  const meal2 = menu.generateRandomMeal();
  const meal3 = menu.generateRandomMeal();
  
  
  console.log("meal1: ", meal1);
  console.log("meal2: ", meal2);
  console.log("meal3: ", meal3);
  
  
  