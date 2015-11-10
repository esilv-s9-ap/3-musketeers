var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
    describe('is.arguments', function () {
        it('should return true if passed parameter type is arguments', function () {
            var getArguments = function () {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.arguments(arguments)).to.be.true;
        });
        it("should return false if passed parameter type is not arguments", function () {
            var notArguments = ['test'];
            expect(is.arguments(notArguments)).to.be.false;
        });
    });
    describe('is.array', function () {
        it('should return true if passed parameter type is Array', function () {
            expect(is.array(['value1', 'value2'])).to.be.true;
        });
        it("should return false if passed parameter type is not Array", function () {
            expect(is.array('test')).to.be.false;
        });
    });
    describe('is.boolean', function () {
        it('should return true if passed parameter type is Boolean', function () {
            expect(is.boolean(true)&&is.boolean(false)).to.be.true;
        });
        it("should return false if passed parameter type is not Boolean", function () {
            expect(is.boolean("1")).to.be.false;
        });
    });
    describe('is.date', function () {
        it('should return true if passed parameter type is Date', function () {
            expect(is.date(new Date(1992,05,13))&&is.date(new Date("December 18, 1993 23:23:23"))).to.be.true;
        });
        it("should return false if passed parameter type is not Date", function () {
            expect(is.date("1")).to.be.false;
        });
    });
    describe('is.error', function () {
        it('should return true if passed parameter type is Error', function () {
            expect(is.error(new Error('ERROR!'))).to.be.true;
        });
        it("should return false if passed parameter type is not Error", function () {
            expect(is.error("1")).to.be.false;
        });
    });
    describe('is.function', function () {
        it('should return true if passed parameter type is Function', function () {
            expect(is.function(function(a,b){return a+b;})).to.be.true;
        });
        it("should return false if passed parameter type is not Function", function () {
            expect(is.function("1")).to.be.false;
        });
    });
    describe('is.nan', function () {
        it('should return true if passed parameter type is NaN', function () {
            expect(is.nan(NaN)).to.be.true;
        });
        it("should return false if passed parameter type is not NaN", function () {
            expect(is.nan("1")).to.be.false;
        });
    });
    describe('is.null', function () {
        it('should return true if passed parameter type is null', function () {
            expect(is.null(null)).to.be.true;
        });
        it("should return false if passed parameter type is not null", function () {
            expect(is.null("1")).to.be.false;
        });
    });
    describe('is.number', function () {
        it('should return true if passed parameter type is Number', function () {
            expect(is.number(1)).to.be.true;
        });
        it("should return false if passed parameter type is not Number", function () {
            expect(is.number("1")).to.be.false;
        });
    });
    describe('is.object', function () {
        it('should return true if passed parameter type is Object', function () {
            expect(is.object({})&&is.object(function(a,b){return a+b})).to.be.true;
        });
        it("should return false if passed parameter type is not Object", function () {
            expect(is.object(null)||is.object(undefined)||is.object(null)).to.be.false;
        });
    });
    describe('is.json', function () {
        it('should return true if passed parameter type is Json', function () {
            expect(is.json({})).to.be.true;
        });
        it("should return false if passed parameter type is not Json", function () {
            expect(is.json(null)||is.json(undefined)||is.json(function(a,b){return a+b})).to.be.false;
        });
    });
    describe('is.regexp', function () {
        it('should return true if passed parameter type is Regexp', function () {
            expect(is.regexp(/regexp/gim)&&is.regexp(new RegExp('test','gim'))).to.be.true;
        });
        it("should return false if passed parameter type is not Regexp", function () {
            expect(is.regexp(null)||is.regexp(undefined)||is.regexp(function(a,b){return a+b})).to.be.false;
        });
    });
    describe('is.sameType', function () {
        it('should return true if passed parameters do have the same type', function () {
            expect(is.sameType(/regexp/gim,new RegExp('test','gim'))&&is.sameType(1,2)).to.be.true;
        });
        it("should return false if passed parameters do not have the same types", function () {
            expect(is.sameType(null,undefined)||is.sameType("a",function(a,b){return a+b})).to.be.false;
        });
    });
    describe('is.string', function () {
        it('should return true if passed parameter type is String', function () {
            expect(is.string((1).toString())&&is.string("a")).to.be.true;
        });
        it("should return false if passed parameter type is not String", function () {
            expect(is.string(null)||is.string(undefined)||is.string(function(a,b){return a+b})).to.be.false;
        });
    });
    describe('is.char', function () {
        it('should return true if passed parameter type is Char', function () {
            expect(is.char((1).toString())).to.be.true;
        });
        it("should return false if passed parameter type is not Char", function () {
            expect(is.char(null)||is.char(undefined)||is.char("ab")).to.be.false;
        });
    });
    describe('is.undefined', function () {
        it('should return true if passed parameter type is Undefined', function () {
            expect(is.undefined(undefined)).to.be.true;
        });
        it("should return false if passed parameter type is not Undefined", function () {
            expect(is.undefined(null)||is.undefined("ab")).to.be.false;
        });
    });
    describe('is.empty', function () {
        it('should return true if passed parameter is Empty', function () {
            expect(is.empty([])).to.be.true;
        });
        it("should return false if passed parameter is not Empty", function () {
            expect(is.undefined([1])||is.undefined("ab")).to.be.false;
        });
    });
    describe('is.existy', function () {
        it('should return true if passed parameter exists', function () {
            expect(is.existy([])).to.be.true;
        });
        it("should return false if passed parameter does not exist", function () {
            expect(is.existy(undefined)).to.be.false;
        });
    });
    describe('is.truthy', function () {
        it('should return true if passed parameter is True', function () {
            expect(is.truthy(true)).to.be.true;
        });
        it("should return false if passed parameter is not True", function () {
            expect(is.truthy(false)||is.truthy(undefined)).to.be.false;
        });
    });
    describe('is.falsy', function () {
        it('should return true if passed parameter is False', function () {
            expect(is.falsy(false)).to.be.true;
        });
        it("should return false if passed parameter is not False", function () {
            expect(is.falsy(true)).to.be.false;
        });
    });
    describe('is.space', function () {
        it('should return true if passed parameter is Space', function () {
            expect(is.space(" ")).to.be.true;
        });
        it("should return false if passed parameter is not Space", function () {
            expect(is.space("a")||is.space(undefined)).to.be.false;
        });
    });   
    describe('is.equal', function () {
        it('should return true if passed parameters are equal', function () {
            expect(is.equal("a","a")).to.be.true;
        });
        it("should return false if passed parameters are not equal", function () {
            expect(is.equal("a","b")).to.be.false;
        });
    });  
    describe('is.even', function () {
        it('should return true if passed parameter is Even', function () {
            expect(is.even(2)).to.be.true;
        });
        it("should return false if passed parameter is not Even", function () {
            expect(is.even(1)||is.even(undefined)).to.be.false;
        });
    });  
    describe('is.odd', function () {
        it('should return true if passed parameter is Odd', function () {
            expect(is.odd(1)).to.be.true;
        });
        it("should return false if passed parameter is not Odd", function () {
            expect(is.odd(2)||is.odd(undefined)).to.be.false;
        });
    });  
    describe('is.positive', function () {
        it('should return true if passed parameter is Positive', function () {
            expect(is.positive(1)).to.be.true;
        });
        it("should return false if passed parameter is not Positive", function () {
            expect(is.positive(-1)||is.positive(undefined)).to.be.false;
        });
    }); 
    describe('is.negative', function () {
        it('should return true if passed parameter is Negative', function () {
            expect(is.negative(-1)).to.be.true;
        });
        it("should return false if passed parameter is not Negative", function () {
            expect(is.negative(1)||is.negative(undefined)).to.be.false;
        });
    }); 
    describe('is.above', function () {
        it('should return true if first passed parameter is above second passed parameter', function () {
            expect(is.above(2,1)).to.be.true;
        });
        it("should return false if first passed parameter is not above second passed parameter", function () {
            expect(is.above(1,2)).to.be.false;
        });
    });
    describe('is.under', function () {
        it('should return true if first passed parameter is under second passed parameter', function () {
            expect(is.under(1,2)).to.be.true;
        });
        it("should return false if first passed parameter is not under second passed parameter", function () {
            expect(is.under(2,1)).to.be.false;
        });
    }); 
    describe('is.decimal', function () {
        it('should return true if passed parameter is Decimal', function () {
            expect(is.decimal(1.5)).to.be.true;
        });
        it("should return false if passed parameter is not Decimal", function () {
            expect(is.decimal(1)||is.decimal(undefined)).to.be.false;
        });
    }); 
    describe('is.integer', function () {
        it('should return true if passed parameter is Integer', function () {
            expect(is.integer(1)).to.be.true;
        });
        it("should return false if passed parameter is not Integer", function () {
            expect(is.integer(1.5)||is.integer(undefined)).to.be.false;
        });
    });
    describe('is.capitalized', function () {
        it('should return true if passed parameter is Capitalized', function () {
            expect(is.capitalized("ABC")).to.be.true;
        });
        it("should return false if passed parameter is not Capitalized", function () {
            expect(is.capitalized("abc")||is.capitalized(undefined)).to.be.false;
        });
    });
    describe('is.palindrome', function () {
        it('should return true if passed parameter is a palindrome', function () {
            expect(is.palindrome("aba")).to.be.true;
        });
        it("should return false if passed parameter is not a palindrome", function () {
            expect(is.palindrome("abc")||is.palindrome(undefined)).to.be.false;
        });
    });
});
