    // Dark theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
      body.classList.add('dark-theme');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
      themeToggle.classList.add('animate');
      
      setTimeout(() => {
        themeToggle.classList.remove('animate');
      }, 600);
      
      body.classList.toggle('dark-theme');
      
      if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Add to cart functionality
    document.querySelectorAll('.book-card .btn:nth-child(2)').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const bookTitle = this.closest('.book-card').querySelector('h3').textContent;
        const bookPrice = this.closest('.book-card').querySelector('.book-price').textContent;
        
        // Create notification
        const notification = document.createElement('div');
        notification.innerHTML = `
          <div style="position: fixed; bottom: 20px; right: 20px; background: #27ae60; color: white; padding: 15px; border-radius: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; display: flex; align-items: center;">
            <i class="fas fa-check-circle" style="margin-right: 10px; font-size: 1.2rem;"></i>
            <div>
              <strong>${bookTitle}</strong> səbətə əlavə edildi!
              <div style="font-size: 0.9rem; margin-top: 5px;">${bookPrice}</div>
            </div>
          </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
          notification.remove();
        }, 3000);
      });
    });

    // Search functionality
    document.querySelector('.search button').addEventListener('click', function() {
      const searchTerm = document.querySelector('.search input').value;
      if(searchTerm.trim() !== '') {
        alert(`"${searchTerm}" axtarışı aparılır...`);
      }
    });

    // Hero button animation
    document.querySelector('.hero .btn').addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    document.querySelector('.hero .btn').addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
