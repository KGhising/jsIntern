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

        addItem: function(name, calories){
        let ID;
        //create ID
        if(data.items.length > 0){
            ID = data.items[data.items.length - 1].id + 1;
        }else{
            ID = 0;
        }
        // Calories to number
        calories = parseInt(calories);
        // Create new Items
        newItem = new Items(ID, name, calories);
        // add to items array
        data.items.push(newItem);
        
        return newItem;

        },

        logData: function(){
            return data;
        }
    }
})();


// UI controller
const UICtrl = (function(){

    const uiSelector = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
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
        },
        getItemInput: function(){
            return{
                name: document.querySelector(uiSelector.itemNameInput).value,
                calories: document.querySelector(uiSelector.itemCaloriesInput).value
            }
        },
        getSelectors: function(){
            return uiSelector;
        }
    }
})();


// App controler
const AppCtrl = (function(ItemCtrl, UICtrl){
    // load event listerers
    const loadEventListener = function(){
        // get ui selector
        const uiSelector = UICtrl.getSelectors();
        // Add event items
        document.querySelector(uiSelector.addBtn).addEventListener('click', itemAddSubmit);
    }
    // add items submit
    const itemAddSubmit = function(e){
        // get form input from ui controller
        const input = UICtrl.getItemInput();
        // check forname and calories input
        if (input.name !== '' && input.calories !== '') {
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
        }

        e.preventDefault();
    }
    // public method
    return {
        init: function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // populate list
            UICtrl.populateItemList(items);

            // load event listerner
            loadEventListener();
        }
    }

})(ItemCtrl, UICtrl);

// Initializing Application
AppCtrl.init();