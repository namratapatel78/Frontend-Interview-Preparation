process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var count;
var arr;
var min;

process.stdin.on("data", function (input) {
    count = input.split('\n')[0]
    arr = input.split('\n')[1].split(' ')
    min = Number(arr[0])
    for (let num of arr) {
        if(Number(num) < min) {
            min = num
        }
    }
    console.log(min)                               // Reading input from STDIN
});