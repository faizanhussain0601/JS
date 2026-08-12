class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return '123'
    }
}

const faizan = new User("Er faizan")

// console.log(faizan.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@apple.com')

console.log(iphone.createId())