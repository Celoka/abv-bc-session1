function HumanBeing() {
    console.log('An abstraction for this concept. Humans occupy the world');
}

// Parent class method
HumanBeing.prototype.method = function method() {};

// Child class constructor
function african() {
    console.log ('I am an African')
}

// Inherit from the parent class

african.prototype = new HumanBeing();

african.prototype.constructor = african;

// Child class method
african.prototype.method = function method() {
    HumanBeing.prototype.method.call(this);
};

// Instantiate
this.instance = new african();


function myObjectCreate(human) {
    function F(){}
    F.prototype = human;
    return new F();
}