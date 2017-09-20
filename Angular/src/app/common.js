"use strict";
exports.__esModule = true;
var CommonFunction = (function () {
    function CommonFunction() {
    }
    CommonFunction.prototype.getCurrentDate = function () {
        this.currentDate = new Date('09/03/2010');
        var date = ('0' + this.currentDate.getDate()).slice(-2);
        var month = ('0' + (this.currentDate.getMonth() + 1)).slice(-2);
        var year = this.currentDate.getFullYear();
        return year + "-" + month + "-" + date;
    };
    return CommonFunction;
}());
exports.CommonFunction = CommonFunction;
