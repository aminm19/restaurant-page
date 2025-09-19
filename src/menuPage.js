function loadMenuPage() {
    const currentPage = document.getElementById('currentPage');
    currentPage.textContent = 'Menu';
    const content = document.getElementById('content');
    
    // Clear existing content
    content.innerHTML = '';
    
    // Create main menu container
    const menu = document.createElement('div');
    menu.className = 'menu';
    
    // Create Appetizers section
    const appetizersSection = document.createElement('div');
    appetizersSection.className = 'menuSection';
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.className = 'sectionTitle';
    appetizersTitle.textContent = 'Appetizers';
    appetizersSection.appendChild(appetizersTitle);
    
    // Appetizer items
    const appetizerItems = [
        {
            name: 'Zeytoon Parvardeh (Marinated Olives)',
            description: 'Marinated olives with pomegranate molasses, walnuts, and herbs.',
            price: '$8.99'
        },
        {
            name: 'Torshi (Pickled Vegetables)',
            description: 'Assorted pickled vegetables with a tangy and slightly spicy flavor.',
            price: '$9.99'
        },
        {
            name: 'Sambuseh (Stuffed Pastry)',
            description: 'Pastry filled with a savory mixture of meat, herbs, and spices.',
            price: '$7.99'
        }
    ];
    
    appetizerItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menuItem';
        
        const itemName = document.createElement('h3');
        itemName.className = 'itemName';
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.className = 'itemDescription';
        itemDescription.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.className = 'itemPrice';
        itemPrice.textContent = item.price;
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        
        appetizersSection.appendChild(menuItem);
    });
    
    // Create Main Courses section
    const mainCoursesSection = document.createElement('div');
    mainCoursesSection.className = 'menuSection';
    
    const mainCoursesTitle = document.createElement('h2');
    mainCoursesTitle.className = 'sectionTitle';
    mainCoursesTitle.textContent = 'Main Courses';
    mainCoursesSection.appendChild(mainCoursesTitle);
    
    // Main course items
    const mainCourseItems = [
        {
            name: 'Khoresht Fesenjan (Pomegranate Walnut Stew)',
            description: 'A rich and flavorful Persian stew made with ground walnuts, pomegranate molasses, and tender chicken.',
            price: '$21.99'
        },
        {
            name: 'Joojeh Kabab (Grilled Saffron Chicken)',
            description: 'Tender chicken marinated in saffron and grilled to perfection, served with basmati rice.',
            price: '$24.99'
        },
        {
            name: 'Kabab Koobideh (Ground Beef Kabab)',
            description: 'Seasoned ground beef grilled on skewers, served with grilled tomatoes and basmati rice.',
            price: '$24.99'
        },
        {
            name: 'Khoresh Gheymeh (Split Pea Stew)',
            description: 'A traditional Persian stew made with yellow split peas, tomatoes, and dried lime, served with saffron rice.',
            price: '$21.99'
        }
    ];
    
    mainCourseItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menuItem';
        
        const itemName = document.createElement('h3');
        itemName.className = 'itemName';
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.className = 'itemDescription';
        itemDescription.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.className = 'itemPrice';
        itemPrice.textContent = item.price;
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        
        mainCoursesSection.appendChild(menuItem);
    });
    
    // Create Desserts section
    const dessertsSection = document.createElement('div');
    dessertsSection.className = 'menuSection';
    
    const dessertsTitle = document.createElement('h2');
    dessertsTitle.className = 'sectionTitle';
    dessertsTitle.textContent = 'Desserts';
    dessertsSection.appendChild(dessertsTitle);
    
    // Dessert items
    const dessertItems = [
        {
            name: 'Bastani Sonnati (Traditional Persian Ice Cream)',
            description: 'Saffron and rosewater ice cream with pistachios and chunks of frozen cream.',
            price: '$6.99'
        },
        {
            name: 'Baklava',
            description: 'Sweet layers of filo pastry filled with chopped nuts and honey syrup.',
            price: '$5.99'
        },
        {
            name: 'Shirini (Persian pastry of the Day)',
            description: 'Traditional Persian pastries, usually made with almonds, cardamom, and rosewater.',
            price: '$6.49'
        }
    ];
    
    dessertItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menuItem';
        
        const itemName = document.createElement('h3');
        itemName.className = 'itemName';
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.className = 'itemDescription';
        itemDescription.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.className = 'itemPrice';
        itemPrice.textContent = item.price;
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        
        dessertsSection.appendChild(menuItem);
    });
    
    // Assemble the menu
    menu.appendChild(appetizersSection);
    menu.appendChild(mainCoursesSection);
    menu.appendChild(dessertsSection);
    
    // Add to content
    content.appendChild(menu);
}

// Export the function
export { loadMenuPage };