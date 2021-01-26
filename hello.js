var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.Fullname = "";
        this.Fullname = lastName + " " + firstName;
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is " + this.Fullname + ".";
    };
    return Greeter;
}());
var g = new Greeter('István', 'Goóz');
document.body.innerHTML = g.greet();
