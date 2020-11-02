const parse = require ("./parser")
const evolver_1 = require("./ga")
//evolve(p1, p2, auto =true, stepSize = 0.25,   interpolate=true))
// p2>>pluck(degree=[2,5,8],amp=[1,1,1,1],dur=[3,4,3,2])
// j2>>pluck(degree=[1,0,6,7], chop=0.8, tremolo=0.9)


let code = `j1>>pluck(degree=[12,0,3,-1],chop=0.4, tremolo=0.2)
evolve(j1, stepSize=0.1, evolutions=100, skipGenerations=25, mutationAmount=0.01)`

let lines =code.split('\n');
let players = []
let func = {}
lines.forEach((line, i) => {
    line = line.replace(/\s/g, '');
    if (line.length > 0) {
        let result = parse(line)
        if(result.hasOwnProperty('pname'))
            players.push(result)
        if(result.hasOwnProperty('options'))
            func = result
    }
});

console.log(players[1], func)