 class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
 class Student extends User {
     constructor(name, surname, year){
        super(name, surname);
        this.year = year;

     }
          getCourse(){
         let date = new Date;
         let admission = date.getFullYear();
         return admission - this.year;
    }
 }

 let worker = new Student('Иван', "Иванов", 2019);


 console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
console.log(worker.year);
console.log(worker.getCourse());