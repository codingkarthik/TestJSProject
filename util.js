module.exports =  {

    multiply: function(num1,num2){
        var op1 = num1 instanceof Number? num1 : parseInt(num1)
        var op2 = num2 instanceof Number? num2 : parseInt(num2)
        return op1 * op2
    }

}