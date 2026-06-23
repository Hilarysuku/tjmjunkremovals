// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample Services
    const services = [
        {
            name: "Residential Junk Removal",
            desc: "Furniture, appliances, garage cleanouts & more",
            price: "From $129",
            img: "https://picsum.photos/id/237/600/400"
        },
        {
            name: "Commercial Cleanouts",
            desc: "Office, retail & warehouse junk removal",
            price: "From $249",
            img: "https://picsum.photos/id/201/600/400"
        },
        {
            name: "Construction Debris",
            desc: "Builders waste, renovation cleanups",
            price: "From $179",
            img: "https://picsum.photos/id/1015/600/400"
        }
    ];

    // Render Services
    function renderServices() {
        const container = document.getElementById('services-grid');
        container.innerHTML = '';
        
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <img src="${service.img}" alt="${service.name}">
                <div class="service-info">
                    <h3>${service.name}</h3>
                    <p>${service.desc}</p>
                    <div class="price">${service.price}</div>
                    <button onclick="bookThisService('${service.name}')" class="btn btn-primary" style="width:100%; margin-top:1rem;">Book This Service</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Sample Reviews
    const reviews = [
        {
            name: "Sarah Thompson",
            text: "TJM removed a whole house worth of junk in under 3 hours. Professional, friendly and great price!",
            stars: 5,
            location: "Sydney NSW"
        },
        {
            name: "Michael Chen",
            text: "Best junk removal service I've used. They even helped carry heavy items down the stairs.",
            stars: 5,
            location: "Melbourne VIC"
        }
    ];

    function renderReviews() {
        const container = document.getElementById('reviews-grid');
        container.innerHTML = '';
        
        reviews.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';
            let starsHTML = '★'.repeat(review.stars);
            
            card.innerHTML = `
                <div class="stars">${starsHTML}</div>
                <p>"${review.text}"</p>
                <div style="margin-top:1.5rem; display:flex; align-items:center; gap:12px;">
                    <div style="width:48px;height:48px;background:#e2e8f0;border-radius:50%;"></div>
                    <div>
                        <strong>${review.name}</strong><br>
                        <small>${review.location}</small>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Add New Service (Owner feature)
    window.addNewService = function() {
        const name = document.getElementById('new-service-name').value;
        const desc = document.getElementById('new-service-desc').value;
        const price = document.getElementById('new-service-price').value;
        
        if (!name || !desc || !price) {
            alert("Please fill all fields");
            return;
        }
        
        services.push({
            name: name,
            desc: desc,
            price: price,
            img: "https://picsum.photos/id/180/600/400"
        });
        
        renderServices();
        
        // Clear form
        document.getElementById('new-service-name').value = '';
        document.getElementById('new-service-desc').value = '';
        document.getElementById('new-service-price').value = '';
        
        alert("New service added successfully!");
    };

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate sending email to owner
        console.log('%c📧 Booking email would be sent to owner@tjmjunkremovals.com.au', 'color:#10b981; font-size:14px;');
        
        document.getElementById('success-modal').style.display = 'flex';
        
        // Reset form
        bookingForm.reset();
    });

    window.closeModal = function() {
        document.getElementById('success-modal').style.display = 'none';
    };

    window.bookThisService = function(serviceName) {
        document.getElementById('description').value = `Request for: ${serviceName}`;
        document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
    };

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });

    // Initialize everything
    renderServices();
    renderReviews();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').style.padding = '0.7rem 0';
        } else {
            document.querySelector('.navbar').style.padding = '1rem 0';
        }
    });

    console.log('%c✅ TJM Junk Removals website loaded successfully!', 'color:#10b981; font-size:16px; font-weight:bold;');
});