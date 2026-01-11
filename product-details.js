// Product Details Page Handler
(function() {
    'use strict';

    // Get product ID or slug from URL
    function getProductParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const slug = urlParams.get('slug');
        return { id, slug };
    }

    // Show loading state
    function showLoading() {
        document.getElementById('loading-state').style.display = 'flex';
        document.getElementById('error-state').style.display = 'none';
        document.getElementById('product-container').style.display = 'none';
    }

    // Show error state
    function showError() {
        document.getElementById('loading-state').style.display = 'none';
        document.getElementById('error-state').style.display = 'flex';
        document.getElementById('product-container').style.display = 'none';
    }

    // Show product
    function showProduct(product) {
        document.getElementById('loading-state').style.display = 'none';
        document.getElementById('error-state').style.display = 'none';
        document.getElementById('product-container').style.display = 'block';
        
        // Update page title and meta description
        document.getElementById('page-title').textContent = `${product.name} - CORVEX`;
        document.getElementById('page-description').setAttribute('content', product.shortDescription);
        
        renderProduct(product);
    }

    // Render product details
    function renderProduct(product) {
        // Breadcrumb
        document.getElementById('breadcrumb-product-name').textContent = product.name;
        
        // Category
        document.getElementById('product-category').textContent = product.category;
        
        // Title
        document.getElementById('product-title').textContent = product.name;
        
        // Short description
        document.getElementById('product-short-description').textContent = product.shortDescription;
        
        // Price
        const priceElement = document.getElementById('product-price');
        priceElement.textContent = product.price;
        
        // Original price (if available)
        const originalPriceElement = document.getElementById('product-original-price');
        if (product.originalPrice && product.originalPrice !== product.price) {
            originalPriceElement.textContent = product.originalPrice;
            originalPriceElement.style.display = 'inline-block';
        } else {
            originalPriceElement.style.display = 'none';
        }
        
        // Stock status
        const stockElement = document.getElementById('product-stock-status');
        if (product.inStock) {
            stockElement.innerHTML = `
                <span class="stock-badge in-stock">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    In Stock${product.stockCount ? ` (${product.stockCount} available)` : ''}
                </span>
            `;
        } else {
            stockElement.innerHTML = `
                <span class="stock-badge out-of-stock">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Out of Stock
                </span>
            `;
            const addToCartBtn = document.getElementById('add-to-cart-btn');
            addToCartBtn.disabled = true;
            addToCartBtn.textContent = 'Out of Stock';
            addToCartBtn.style.opacity = '0.6';
            addToCartBtn.style.cursor = 'not-allowed';
        }
        
        // Images
        renderImages(product);
        
        // Specifications
        renderSpecifications(product);
        
        // Full description
        document.getElementById('product-full-description').textContent = product.fullDescription;
        
        // Features
        renderFeatures(product);
        
        // Add to cart button
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        addToCartBtn.setAttribute('data-product-id', product.id);
        addToCartBtn.addEventListener('click', function() {
            addToCart(product.id);
        });
        
        // Download catalog button
        const downloadCatalogBtn = document.getElementById('download-catalog-btn');
        if (product.catalogPdf) {
            downloadCatalogBtn.disabled = false;
            downloadCatalogBtn.addEventListener('click', function() {
                downloadCatalog(product.catalogPdf);
            });
        } else {
            downloadCatalogBtn.disabled = true;
        }
    }

    // Render product images
    function renderImages(product) {
        const images = product.images || [product.image];
        const mainImageContainer = document.getElementById('main-image');
        const galleryContainer = document.getElementById('image-gallery');
        
        // Main image
        const mainImageIndex = 0;
        mainImageContainer.innerHTML = `
            <div class="main-image-wrapper" style="background: linear-gradient(135deg, ${getGradientColor(product.id - 1)} 0%, ${getGradientColor(product.id - 1, true)} 100%);">
                <span style="font-size: 12rem; display: block; text-align: center; line-height: 1;">${images[mainImageIndex]}</span>
            </div>
        `;
        
        // Gallery thumbnails
        galleryContainer.innerHTML = '';
        images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'gallery-thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.innerHTML = `<span style="font-size: 3rem;">${image}</span>`;
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImageContainer.innerHTML = `
                    <div class="main-image-wrapper" style="background: linear-gradient(135deg, ${getGradientColor(product.id - 1)} 0%, ${getGradientColor(product.id - 1, true)} 100%);">
                        <span style="font-size: 12rem; display: block; text-align: center; line-height: 1;">${image}</span>
                    </div>
                `;
                // Update active thumbnail
                document.querySelectorAll('.gallery-thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            galleryContainer.appendChild(thumbnail);
        });
    }

    // Render specifications
    function renderSpecifications(product) {
        const specsList = document.getElementById('specs-list');
        specsList.innerHTML = '';
        
        if (product.specifications && product.specifications.length > 0) {
            product.specifications.forEach(spec => {
                const dt = document.createElement('dt');
                dt.textContent = spec.label;
                
                const dd = document.createElement('dd');
                dd.textContent = spec.value;
                
                specsList.appendChild(dt);
                specsList.appendChild(dd);
            });
        }
    }

    // Render features
    function renderFeatures(product) {
        const featuresList = document.getElementById('features-list');
        featuresList.innerHTML = '';
        
        if (product.features && product.features.length > 0) {
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    ${feature}
                `;
                featuresList.appendChild(li);
            });
        }
    }

    // Get gradient colors (reuse from script.js logic)
    function getGradientColor(index, isEnd = false) {
        const colors = [
            ['#667eea', '#764ba2'],
            ['#f093fb', '#f5576c'],
            ['#4facfe', '#00f2fe'],
            ['#43e97b', '#38f9d7'],
            ['#fa709a', '#fee140'],
            ['#30cfd0', '#330867']
        ];
        const colorPair = colors[index % colors.length];
        return isEnd ? colorPair[1] : colorPair[0];
    }

    // Add to cart function (simplified version)
    function addToCart(productId) {
        // This would integrate with your existing cart system
        const button = document.getElementById('add-to-cart-btn');
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.backgroundColor = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 1000);
    }

    // Download catalog function
    function downloadCatalog(pdfPath) {
        try {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = pdfPath.split('/').pop();
            link.setAttribute('download', pdfPath.split('/').pop());
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            
            // Clean up after a short delay
            setTimeout(function() {
                document.body.removeChild(link);
            }, 100);
        } catch (error) {
            console.error('Error downloading catalog:', error);
            // Fallback: open in new window
            window.open(pdfPath, '_blank');
        }
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
        showLoading();
        
        // Simulate loading delay (remove in production or use actual API call)
        setTimeout(function() {
            const params = getProductParam();
            let product = null;
            
            if (params.id) {
                product = getProductById(params.id);
            } else if (params.slug) {
                product = getProductBySlug(params.slug);
            }
            
            if (product) {
                showProduct(product);
            } else {
                showError();
            }
        }, 500); // Simulate API delay
    });
})();
