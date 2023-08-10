let stepCounter = {
    steps: 0,
    increase: function() {
        this.steps++;
        return this; 
    },
    decrease: function() {
        this.steps--;
        return this;
    },
    reset: function() {
        this.steps = 0;
        return this;
    },
    read: function() {
        console.log(this.steps);
        return this;
    },
}
stepCounter.increase().increase().read();
stepCounter.decrease().reset().read();
stepCounter.increase().decrease().increase().read();