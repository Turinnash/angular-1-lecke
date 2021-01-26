class Greeter{
    Fullname: string = "";
    skills: Array<string> = [
        "programming",
        "constructing",
    ]

    constructor(firstName: string, lastName: string){
        this.Fullname = `${lastName} ${firstName}`;
    }

    greet(){
        return `Hello, my name is ${this.Fullname}.`;
    }
}
let g: Greeter = new Greeter('István', 'Goóz');
document.body.innerHTML = g.greet();