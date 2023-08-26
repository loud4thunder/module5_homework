let nums = new Map();
nums.set("1", "one");
nums.set("2", "two");
nums.set("3", "three");
nums.set("4", "four");
nums.set("5", "five");

for (let num of nums.keys()){
    console.log(num + " is " + nums.get(num));
}