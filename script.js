// Sample data (replace with your own)
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const projects = [
    { name: 'Project 1', description: 'A brief description of Project 1' },
    { name: 'Project 2', description: 'A brief description of Project 2' },
    { name: 'Project 3', description: 'A brief description of Project 3' }
];

// Populate skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Populate projects
const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectsContainer.appendChild(projectCard);
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});