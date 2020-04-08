// Storage Controller

// Item Controller
const ItemCtrl = (function(){
    // Items constructor
    const Items = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure state
    const data = {
        items: [
            {id: 0, name: 'steak dinner', calories: 500},
            {id: 1, name: 'cookie', calories: 300},
            {id: 2, name: 'eggs', calories: 600},
        ],
        currentItem: null,
        totalCalories: 0
    }
    // public method
    return {
        logData: function(){
            return data;
        }
    }
})();


// UI controller
const UICtrl = (function(){
    // public method
    return{

    }
})();


// App controler
const AppCtrl = (function(ItemCtrl, UICtrl){
    // public method
    return {
        init: function(){
            console.log('Init')
        }
    }

})(ItemCtrl, UICtrl);

// Initializing Application
AppCtrl.init();