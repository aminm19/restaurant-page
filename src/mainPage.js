// Import images so webpack can process them
import restaurant1Image from './assets/restaurant1.jpg';
import restaurant2Image from './assets/restaurant2.jpg';

function loadMainPage() {
    const pageHeader = document.getElementById('currentPage');
    pageHeader.textContent = 'Home';
    const content = document.getElementById('content');
    
    // Clear existing content
    content.innerHTML = '';
    
    // Create first section
    const section1 = document.createElement('div');
    section1.className = 'section';
    
    const section1Content = document.createElement('div');
    section1Content.className = 'section1';
    
    const section1Header = document.createElement('h2');
    section1Header.className = 'sectionHeader';
    section1Header.textContent = 'Welcome to Iran Zamin!';
    
    const section1Description = document.createElement('div');
    section1Description.className = 'description';
    section1Description.textContent = 'Experience the rich flavors and warm hospitality of Iran Zamin, where every meal is a celebration of Persian culture and cuisine. Join us for an unforgettable dining experience!';
    
    section1Content.appendChild(section1Header);
    section1Content.appendChild(section1Description);
    
    const image1Container = document.createElement('div');
    image1Container.className = 'image';
    
    const image1 = document.createElement('img');
    image1.src = restaurant1Image;
    image1.alt = 'Restaurant Interior';
    
    image1Container.appendChild(image1);
    
    section1.appendChild(section1Content);
    section1.appendChild(image1Container);
    
    // Create second section
    const section2 = document.createElement('div');
    section2.className = 'section';
    
    const image2Container = document.createElement('div');
    image2Container.className = 'image';
    
    const image2 = document.createElement('img');
    image2.src = restaurant2Image;
    image2.alt = 'Restaurant Interior';
    
    image2Container.appendChild(image2);
    
    const section2Content = document.createElement('div');
    section2Content.className = 'section2';
    
    const section2Header = document.createElement('h2');
    section2Header.className = 'sectionHeader';
    section2Header.textContent = 'About Us';
    
    const section2Description = document.createElement('div');
    section2Description.className = 'description';
    section2Description.textContent = 'At Iran Zamin, we pride ourselves on offering an authentic Persian dining experience. Our chefs use traditional recipes and the freshest ingredients to create dishes that are both flavorful and memorable. Whether you are joining us for a casual meal or a special occasion, we strive to provide exceptional service and a welcoming atmosphere.';
    
    section2Content.appendChild(section2Header);
    section2Content.appendChild(section2Description);
    
    section2.appendChild(image2Container);
    section2.appendChild(section2Content);
    
    // Append both sections to content
    content.appendChild(section1);
    content.appendChild(section2);
}

// Export the function
export { loadMainPage };
