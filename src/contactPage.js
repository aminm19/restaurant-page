function loadContactPage() {
    const pageHeader = document.getElementById('currentPage');
    pageHeader.textContent = 'Contact';
    const content = document.getElementById('content');
    
    // Clear existing content
    content.innerHTML = '';
    
    // Create main form container
    const formContainer = document.createElement('div');
    formContainer.className = 'form';
    
    // Create heading
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    
    // Create description paragraph
    const description = document.createElement('p');
    description.textContent = 'Please fill out the form below to get in touch with us';
    
    // Create form element
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('method', 'post');
    
    // Create name input group
    const nameFormElement = document.createElement('div');
    nameFormElement.className = 'formElement';
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.required = true;
    nameInput.maxLength = 40;
    
    nameFormElement.appendChild(nameLabel);
    nameFormElement.appendChild(nameInput);
    
    // Create email input group
    const emailFormElement = document.createElement('div');
    emailFormElement.className = 'formElement';
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.required = true;
    emailInput.maxLength = 40;

    emailFormElement.appendChild(emailLabel);
    emailFormElement.appendChild(emailInput);
    
    // Create message textarea group
    const messageFormElement = document.createElement('div');
    messageFormElement.className = 'formElement';
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message';
    
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.maxLength = 500;
    
    messageFormElement.appendChild(messageLabel);
    messageFormElement.appendChild(messageTextarea);
    
    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    
    const submitIcon = document.createElement('i');
    submitIcon.id = 'submitBtn';
    submitIcon.className = 'fas fa-paper-plane';
    
    submitButton.appendChild(submitIcon);
    submitButton.appendChild(document.createTextNode(' Submit'));
    
    // Assemble the form
    form.appendChild(nameFormElement);
    form.appendChild(emailFormElement);
    form.appendChild(messageFormElement);
    form.appendChild(submitButton);
    
    // Assemble the form container
    formContainer.appendChild(heading);
    formContainer.appendChild(description);
    formContainer.appendChild(form);
    
    // Add to content
    content.appendChild(formContainer);
}

// Export the function
export { loadContactPage };