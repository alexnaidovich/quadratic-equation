module.exports = function solveEquation(equation) {
    var input = equation.split(' '),
        result = [],
        a = +input[0],
        b = +(input[3] + input[4]),
        c = +(input[7] + input[8]),
        d = Math.sqrt((b * b) - 4 * a * c);
    result.push(Math.round((-b - d) / (a * 2)));
    result.push(Math.round((-b + d) / (a * 2)));
    
    if (result[0] > result[1]) {
        return result.reverse();
    } else {
        return result;
    }
}
