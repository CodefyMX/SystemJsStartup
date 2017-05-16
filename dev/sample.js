//============================
//Export class MyFirstModule
//============================
export class MyFirstModule {
    //=====================
    //   ES6 IS AWESOME
    //=====================
    message
    constructor(message = "Hello from my module") {
        this.message = message
    }
    showMessage() {
        console.log(this.message)
    }
}