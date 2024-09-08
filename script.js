// Fetch the header and footer
window.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    fetch("header.html").then(response => response.text()).then(data => document.querySelector('header').innerHTML = data),
    fetch("bottom-nav.html").then(response => response.text()).then(data => document.querySelector('footer').innerHTML = data)
  ]).then(() => {
    setActiveLink();
    // Manually add the 'visible' class to sections to ensure they show
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('visible');
    });
  });
});

// Function to add 'active' class to the current page's link
function setActiveLink() {
  const currentPath = window.location.pathname.split("/").pop(); // Get current page name
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href').split("/").pop(); // Get link's href file name
    // Remove active class from all links
    link.classList.remove('active');
    // Add active class only to the matching link
    if (linkHref === currentPath || (currentPath === "" && linkHref === "index.html")) {
      link.classList.add('active');
    }
  });
}
