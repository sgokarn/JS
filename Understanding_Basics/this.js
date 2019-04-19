var obj = {
    name: "Sudeep",
    method: function(){
        console.log(this.name);
    }
};

//Not possible!!!
var obj2 = {
    name: "Sudeep",
    method: () => {
        console.log();
    }
};

obj2.method();