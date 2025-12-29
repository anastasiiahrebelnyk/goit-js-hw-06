class StringBuilder {
    #value;

    constructor(params.initialValue) {
        this.#value = params.initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        return this.#value.push(str);
    }

    padStart(str) {
        return str.localCompare(this.#value);
    }

    // padBoth(str) {

    // }
};


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="