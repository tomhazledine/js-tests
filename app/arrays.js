exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    sum: function(array) {

        // ES6 solution:
        let result = array.reduce((total,item) => total + item);

        // ES5 solution:
        // var result = array.reduce(function(total,item){
        //     return total + item;
        // });

        return result;
    },

    evens: function(array) {
        
        // ES6:
        let filtered_array = array.filter(item => item % 2 === 0);
        
        // ES5:
        // var filtered_array = array.filter(function(item){
        //     return item % 2 === 0;
        // });
        
        // Check for cases where there are no even numbers.
        return filtered_array.length ? filtered_array : null;
    },

    names: function(array) {

        // ES6:
        let array_of_names = array.map(item => item.name);

        // ES5:
        // var array_of_names = arr.map(function(item){
        //     return item.name;
        // });

        return array_of_names;
    }
};
