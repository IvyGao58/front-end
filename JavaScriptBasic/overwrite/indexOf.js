Array.prototype.indexOfOrigin = function(item) {
    for(let i = 0; i<this.length; i++) {
        if(item === this[i]) {
            return i;
        }
    }
    return -1;
};

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOfOrigin('giraffe'));
