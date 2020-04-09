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
            // {id: 0, name: 'steak dinner', calories: 500},
            // {id: 1, name: 'cookie', calories: 300},
            // {id: 2, name: 'eggs', calories: 600},
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
        getTotalCalories: function(){
            let total = 0;
            // loop through items and add calories
            data.items.forEach(function(item){
                total += item.calories;
            });
            // Set total calories in database
            data.totalCalories = total;
            // return total
            return data.totalCalories;

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
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
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
        addListItem: function(item){
            // show list
            document.querySelector(uiSelector.itemList).style.display = 'block';
            // create li element
            const li = document.createElement('li');
            // add className
            li.className = 'collection-item';
            // add ID
            li.id = `item-${item.id}`;
            // add html
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                </a>
            `;
            // insert Items
            document.querySelector(uiSelector.itemList).insertAdjacentElement('beforeend', li)
        },
        clearInput: function(){
            document.querySelector(uiSelector.itemNameInput).value = '';
            document.querySelector(uiSelector.itemCaloriesInput).value = '';
        },
        hideList: function(){
            document.querySelector(uiSelector.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(uiSelector.totalCalories).textContent = totalCalories; 
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

            // add items to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories =   ItemCtrl.getTotalCalories();
             // addd total calories in UI
            UICtrl.showTotalCalories(totalCalories);

            // clear fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }
    // public method
    return {
        init: function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // check if any items
            if(items.length === 0){
                UICtrl.hideList();
            }else{
                // populate list
                UICtrl.populateItemList(items);
            }
            // Get total calories
            const totalCalories =   ItemCtrl.getTotalCalories();
             // addd total calories in UI
            UICtrl.showTotalCalories(totalCalories);

            // load event listerner
            loadEventListener();
        }
    }

})(ItemCtrl, UICtrl);

// Initializing Application
AppCtrl.init();