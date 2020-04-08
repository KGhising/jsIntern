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
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();


// UI controller
const UICtrl = (function(){

    const uiSelector = {
        itemList: '#item-list'
    }
    // public method
    return{
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>
                `;
            });
            // insert list items in ul
            document.querySelector(uiSelector.itemList).innerHTML = html;
        }
    }
})();


// App controler
const AppCtrl = (function(ItemCtrl, UICtrl){
    // public method
    return {
        init: function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // populate list
            UICtrl.populateItemList(items);
        }
    }

})(ItemCtrl, UICtrl);

// Initializing Application
AppCtrl.init();