// sticky header 

window.onscroll =()=>{


    let header = document.querySelector("header");
    header.classList.toggle('sticky' ,window.scrollY > 100);
    }
    function btn(){
         let name = document.getElementById("name").value;
         let email = document.getElementById("email").value;
         let Email = document.getElementById("Email").value;
         let num = document.getElementById("num").value;
         
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const Email = document.getElementById("Email").value;
        const num = document.getElementById("num").value;
        const message = document.getElementById('message').value;
        
        // Validate the inputs (basic validation)
        if (name && email && message && Email && num) {
          // Example action - show success message
          document.getElementById('formResult').innerHTML = `<p>Thank you, ${name}! Your message has been received.</p>`;
          document.getElementById('contactForm').reset();
        } else {
          document.getElementById('formResult').innerHTML = `<p>Please fill out all fields.</p>`;
        }
      });