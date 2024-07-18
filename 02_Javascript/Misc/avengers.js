const thanos = {
    name: "THANOS",
    snap: function () {
        return `${this.name} snapped the finger and half of the universe ${this.name == "THANOS" ? "disappeared" : "came back"}`;
    }
}

const ironman = {
    name: "IRON MAN"
}

console.log(thanos.snap());

function main() {
    //write your code here ===============================================
    let bindedFunction = thanos.snap.bind(ironman);;
    return bindedFunction;
}

let fn = main();
console.log(fn());