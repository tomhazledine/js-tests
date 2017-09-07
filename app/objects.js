exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
    callContext: function(toCall, context) {
        return toCall.call(context);
    },

    inheritObject: function(parent, name) {
        
        // Using jQuery
        // var newObject = $.extend(true,{},parent);

        // ES5
        // var newObject = Object.create(parent);
        // newObject.name = name;
        // newObject.speak = function(){
        //     return this.name + ' says "Roar!"';
        // }

        // ES6
        let newObject = Object.create(parent);
        // let newObject = {...parent};
        newObject.name = name;
        newObject.speak = function(){
            return `${this.name} says "Roar!"`;
        }
        /**
         * N.B.: Don't use an arrow-function in this scenario, as
         *     newObject.speak = () => `${this.name} says "Roar!"`;
         * will use the parent scope for `this`, so `this.name` returns `undefined`.
         */

        return newObject;
    }
};
