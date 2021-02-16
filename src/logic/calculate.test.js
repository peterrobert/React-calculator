import calculate from "./calculate";
import operate from "./operate";

describe('Calculate', () => {
    it('should return an object with total, button name, and null for next', () => {

        let dataObj = {
            total: operate(10, 5, '+'),
            operation: '+',
            next: null
        }

        let ans = calculate( dataObj, '+')

        expect(ans).toEqual({
            'total': '15',
            'operation': '+',
            'next': null
        })
        
    });

    it('should return an Array with total as empty string, button name, and next as empty string', () => {

        let dataObj = {
            total:'',
            operation: '+',
            next:''
        }

        let ans = calculate( dataObj, '+')

        expect(ans.length).toEqual(3)
        
    }); 
    

    it('should return an object with total as the same value given', () => {
    
        let dataObj = {
            total: 10,
            operation: '+',
            next:null
        }

        let ans = calculate( dataObj, '+')

        expect(ans).toEqual({
            'total': 10,
            'operation': '+',
            'next': null
        })
        
    }); 


    it('should return an empty object if the total is an error', () => {
    
        let dataObj = {
            total: 'ERROR',
            operation: '+',
            next:null
        }

        let ans = calculate( dataObj, '+')

        expect(ans).toEqual({
            total: 'ERROR',
            operation: '+',
            next:null
        })
        
    }); 
});
