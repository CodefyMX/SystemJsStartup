//==============================================
//Import MyFirstModule class from file sample.js
//==============================================
import { MyFirstModule } from "sample"
export class MainClass {
    start() {
        //==============================================
        //                   Profit!
        //==============================================
        new MyFirstModule().showMessage()

        let customModule1 = new MyFirstModule("Custom message 1")
        let customModule2 = new MyFirstModule("Custom message 2")

        customModule1.showMessage()

        customModule2.showMessage()

        customModule1.message = "Message changed"

        customModule1.showMessage()
    }
}