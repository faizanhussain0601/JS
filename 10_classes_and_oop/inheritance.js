class User{
    constructor(username,email,password){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@teache.com","1234")

chai.addCourse()
chai.logMe()

const masalaChai = new User('Masala chai')

masalaChai.logMe()

console.log(chai instanceof User)
