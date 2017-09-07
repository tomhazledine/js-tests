exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    // ES6:
    exampleAnswer: (...strings) => strings.join(' '),
    
    // ES5:
    // exampleAnswer: function(string1, string2) {
    //     return string1 + ' ' + string2;
    // },


    charPositions: function(char, string) {

        // ES6:
        let array_of_characters = [...string].map(
            (item,index) => item === char ? index : false
        );
        let filtered_array = array_of_characters.filter(item => item !== false);

        // ES5:
        // var array_of_characters = string.split('').map(function(item,index){return item === char ? index : false;});
        // var filtered_array = array_of_characters.filter(function(item){return item !== false;});
        
        return filtered_array.length ? filtered_array : null;

    },

    replaceDigits: function(string) {

        // ES6:
        let array_of_characters = [...string].map(item => isNaN(item) ? item : false);
        let filtered_array = array_of_characters.filter(item => item !== false);

        // ES5:
        // var array_of_characters = string.split('').map(function(item) {return isNaN(item) ? item : false;});
        // var filtered_array = array_of_characters.filter(function(item){return item !== false;});
        
        return filtered_array.join('');

    },

    extract: function(string, position) {
        
        var words = string.split(' ');
        var index = position < 0 ? words.length + position : position;
        
        return position >= words.length ? '' : words[index];
    }
};
