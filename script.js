// Product Data
const products = [
    {
        id: 1,
        name: 'Premium Laptop Bags',
        category: 'Accessories',
        description: 'Elegant bags crafted with premium materials and meticulous attention to detail.',
        price: '$299',
        image: '⌚'
    },
    {
        id: 2,
        name: 'Leather Dairy',
        category: 'Audio',
        description: 'Premium leather diaries crafted for durability and timeless elegance.',
        price: '$199',
        image: '🎧'
    },
    {
        id: 3,
        name: 'Premium T-Shirts',
        category: 'Clothing',
        description: 'Premium T-shirts crafted with quality fabric and precise stitching.',
        price: '$149',
        image: '🔊'
    },
    {
        id: 4,
        name: 'Premium Writing Pen',
        category: 'Office Supplies',
        description: 'High-quality pens crafted for precision and comfort.',
        price: '$449',
        image: '📷'
    },
    {
        id: 5,
        name: 'Laptop Stand',
        category: 'Accessories',
        description: 'Ergonomic stand designed for comfort and productivity.',
        price: '$79',
        image: '💻'
    },
    {
        id: 6,
        name: 'High-Fidelity Wireless Earbuds',
        category: 'Audio',
        description: 'High-Fidelity Wireless Earbuds',
        price: '$129',
        image: '⌨️'
    }
];

// Slider State
let currentSlide = 0;
let itemsPerView = 3;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    setupEventListeners();
    updateCartDisplay();
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
});

// Update items per view based on screen size
function updateItemsPerView() {
    const width = window.innerWidth;
    if (width <= 480) {
        itemsPerView = 1;
    } else if (width <= 768) {
        itemsPerView = 2;
    } else {
        itemsPerView = 3;
    }
    renderProducts();
    updateSliderPosition();
}

// Initialize the slider
function initializeSlider() {
    renderProducts();
    renderIndicators();
    updateSliderPosition();
}

// Render product cards
function renderProducts() {
    const sliderTrack = document.getElementById('sliderTrack');
    sliderTrack.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        sliderTrack.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-index', index);

    card.innerHTML = `
        <div class="product-image" style="background: linear-gradient(135deg, ${getGradientColor(index)} 0%, ${getGradientColor(index, true)} 100%);">
            <span style="font-size: 5rem; z-index: 1; position: relative;">${product.image}</span>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    // Add click event to card for navigation
    card.addEventListener('click', (e) => {
        // Don't navigate if clicking the button
        if (!e.target.closest('.add-to-cart-btn')) {
            window.location.href = `product.html?id=${product.id}`;
        }
    });

    // Add click event to add to cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });

    return card;
}

// Get gradient colors for product images
function getGradientColor(index, isEnd = false) {
    const colors = [
        ['#667eea', '#764ba2'],
        ['#f093fb', '#f5576c'],
        ['#4facfe', '#00f2fe'],
        ['#43e97b', '#38f9d7'],
        ['#fa709a', '#fee140'],
        ['#30cfd0', '#330867'],
        ['#a8edea', '#fed6e3'],
        ['#ff9a9e', '#fecfef']
    ];
    const colorPair = colors[index % colors.length];
    return isEnd ? colorPair[1] : colorPair[0];
}

// Render slider indicators
function renderIndicators() {
    const indicatorsContainer = document.getElementById('sliderIndicators');
    indicatorsContainer.innerHTML = '';

    const totalSlides = Math.ceil(products.length / itemsPerView);

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.setAttribute('data-slide', i);
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

// Update slider position
function updateSliderPosition() {
    const sliderTrack = document.getElementById('sliderTrack');
    const cardWidth = sliderTrack.children[0]?.offsetWidth || 300;
    const gap = 32; // 2rem gap
    const offset = -(currentSlide * (cardWidth + gap) * itemsPerView);
    sliderTrack.style.transform = `translateX(${offset}px)`;

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });

    // Update button states
    updateButtonStates();
}

// Update button states (enable/disable)
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalSlides = Math.ceil(products.length / itemsPerView);

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= totalSlides - 1;

    if (prevBtn.disabled) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }

    if (nextBtn.disabled) {
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// Go to specific slide
function goToSlide(slideIndex) {
    const totalSlides = Math.ceil(products.length / itemsPerView);
    if (slideIndex >= 0 && slideIndex < totalSlides) {
        currentSlide = slideIndex;
        updateSliderPosition();
    }
}

// Next slide
function nextSlide() {
    const totalSlides = Math.ceil(products.length / itemsPerView);
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSliderPosition();
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
}

// Setup event listeners
function setupEventListeners() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const ctaButton = document.querySelector('.cta-button');

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Smooth scroll to products section (500ms duration)
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('products');
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 500; // 500 milliseconds
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                // Easing function (ease-in-out)
                const ease = percentage < 0.5 
                    ? 2 * percentage * percentage 
                    : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            }
            
            requestAnimationFrame(step);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const sliderWrapper = document.querySelector('.slider-wrapper');
    
    sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}

// Add to cart functionality
function addToCart(productId) {
    cartCount++;
    updateCartDisplay();
    
    // Visual feedback
    const button = document.querySelector(`[data-product-id="${productId}"]`);
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 1000);

    // Optional: Add animation or notification
    showCartNotification();
}

// Update cart display
function updateCartDisplay() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

// Show cart notification
function showCartNotification() {
    // Create a simple toast notification
    const notification = document.createElement('div');
    notification.textContent = 'Item added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    // Add animation keyframes if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}
