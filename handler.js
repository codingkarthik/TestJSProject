var util = require('./util.js')
var exports = module.exports = {};

exports.baseHandler = function(req,res){
    res.send('Add params m and n on /mul');
}

exports.mulHander = function(req,res){
    var num1 = req.query.operator1
    var num2 = req.query.operator2
    var ans = util.multiply(num1,num2)
    var resp = {ans:ans}
    res.send(resp)
}