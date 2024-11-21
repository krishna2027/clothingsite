 // Example JavaScript to confirm social media button click
 const socialLinks = document.querySelectorAll('.social-buttons a');
    
 socialLinks.forEach(link => {
   link.addEventListener('click', (e) => {
     const platform = e.target.closest('a').textContent.trim();
     alert(`You are being redirected to our ${platform} page!`);
   });
 });