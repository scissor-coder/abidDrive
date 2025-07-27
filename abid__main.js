
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or respect OS preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Set initial theme
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            body.classList.add('dark-mode');
        }
        
        // Toggle theme
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Save user preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        
        
        // Add download functionality to buttons
        document.querySelectorAll('.download-btn').forEach(button => {
            button.addEventListener('click', function() {
                const fileName = this.closest('.file-card').querySelector('.file-name').textContent;
                
                // Show a loading effect
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
                this.disabled = true;
                
                // Simulate download process
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    
                    // Show download complete message
                    alert(`"${fileName}" downloaded successfully!`);
                }, 1500);
            });
        });
        
        // Horizontal scroll indicators
        const filesContainer = document.getElementById('filesContainer');
        const scrollDots = document.querySelectorAll('.scroll-dot');
        
        // Update active dot based on scroll position
        filesContainer.addEventListener('scroll', () => {
            const scrollPos = filesContainer.scrollLeft;
            const containerWidth = filesContainer.clientWidth;
            const scrollWidth = filesContainer.scrollWidth;
            
            // Calculate active section
            const sectionIndex = Math.round(scrollPos / (scrollWidth / 3));
            
            // Update dots
            scrollDots.forEach((dot, index) => {
                if (index === sectionIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
        
        // Click on dots to scroll to section
        scrollDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                const containerWidth = filesContainer.clientWidth;
                filesContainer.scrollTo({
                    left: index * containerWidth,
                    behavior: 'smooth'
                });
            });
        });