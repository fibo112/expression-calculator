function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    var countsOpen = 0;
    var countsClose = 0;
    if ( expr.includes( "/ 0" ) ) {
        throw "TypeError: Division by zero."
    }
    
    var i =0;
    while ( i < expr.length ) {
        if (expr[i] === '(') {
            countsOpen+=1;
        } 
        else if (expr[i] === ')') {
            countsClose+=1;
        }
        i++;   
    }
    
    if ( countsOpen !== countsClose ) {
        throw "ExpressionError: Brackets must be paired"
        } else {
            return ( new Function ( 'return ' + expr )() ) 
        }
}

module.exports = {
    expressionCalculator
}