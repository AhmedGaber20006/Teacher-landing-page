const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.onclick = function () {
  nav.classList.toggle("active");
};


const infoItems = document.querySelectorAll('.info-item');

infoItems.forEach(item => {
    item.addEventListener('click', function() {
        const link = this.querySelector('a');
        
        if (link) {
            const url = link.getAttribute('href');
            const target = link.getAttribute('target') || '_self';
            
          
            if (url !== "#" && url !== "") {
                window.open(url, target);
            }
        }
    });
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const message = document.getElementById('userMessage').value;

    const emailTo = "ahmedgaber200615@gmail.com";
    const subject = encodeURIComponent("طلب استفسار - المحرر التعليمي");
    
    const bodyText = `الاسم: ${name}%0D%0A` + 
                     `رقم الهاتف: ${phone}%0D%0A` + 
                     `الرسالة: %0D%0A${message}`;

    const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${bodyText}`;

    if(name.trim() !== "" && message.trim() !== "") {
        window.open(mailtoLink, '_blank');
    } else {
        alert("يرجى ملء الاسم والرسالة أولاً");
    }
});

function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";
  element.classList.add('typing-cursor');
  
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
   element.style.borderLeft = "none";
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const p2 = document.querySelector(".containeroftext p:nth-child(1)");
  if(p2) {
    typeEffect(p2, 120); 
  }
});