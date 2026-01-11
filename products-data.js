// Extended Product Data with full details
const productsData = [
    {
        id: 1,
        slug: 'premium-laptop-bags',
        name: 'Premium Laptop Bags',
        category: 'Accessories',
        shortDescription: 'Elegant bags crafted with premium materials and meticulous attention to detail.',
        fullDescription: 'Our Premium Laptop Bags are designed for the modern professional. Made from high-quality materials, these bags offer exceptional durability and style. Perfect for business travelers and daily commuters, featuring multiple compartments for organization and padded protection for your devices.',
        price: '$299',
        originalPrice: '$349',
        image: '💼',
        images: ['💼', '🎒', '🧳'],
        inStock: true,
        stockCount: 25,
        specifications: [
            { label: 'Material', value: 'Premium Leather & Canvas' },
            { label: 'Dimensions', value: '15" x 12" x 5"' },
            { label: 'Weight', value: '2.5 lbs' },
            { label: 'Compartments', value: 'Multiple pockets and dividers' },
            { label: 'Padding', value: 'Padded laptop compartment' },
            { label: 'Warranty', value: '2 years' }
        ],
        features: [
            'Water-resistant material',
            'Ergonomic shoulder strap',
            'Multiple interior pockets',
            'Padded laptop compartment',
            'Professional design',
            'Durable construction'
        ],
        catalogPdf: '/public/catalogs/products/premium-laptop-bags.pdf'
    },
    {
        id: 2,
        slug: 'leather-diary',
        name: 'Leather Diary',
        category: 'Office Supplies',
        shortDescription: 'Premium leather diaries crafted for durability and timeless elegance.',
        fullDescription: 'Handcrafted from genuine leather, our premium diaries combine classic elegance with modern functionality. Perfect for journaling, note-taking, or planning, these diaries feature high-quality paper and a timeless design that improves with age.',
        price: '$199',
        originalPrice: '$249',
        image: '📔',
        images: ['📔', '📝', '📖'],
        inStock: true,
        stockCount: 40,
        specifications: [
            { label: 'Material', value: 'Genuine Leather' },
            { label: 'Pages', value: '240 pages' },
            { label: 'Paper Type', value: 'Premium Bond Paper' },
            { label: 'Binding', value: 'Thread-bound' },
            { label: 'Cover', value: 'Hardcover with elastic closure' },
            { label: 'Size', value: 'A5 (5.8" x 8.3")' }
        ],
        features: [
            'Genuine leather cover',
            'Premium quality paper',
            'Elastic closure band',
            'Ribbon bookmark',
            'Lay-flat binding',
            'Timeless design'
        ],
        catalogPdf: '/public/catalogs/products/leather-diary.pdf'
    },
    {
        id: 3,
        slug: 'premium-t-shirts',
        name: 'Premium T-Shirts',
        category: 'Clothing',
        shortDescription: 'Premium T-shirts crafted with quality fabric and precise stitching.',
        fullDescription: 'Our premium T-shirts are made from the finest cotton blends, offering exceptional comfort and durability. Perfect for both casual and business-casual settings, these shirts feature meticulous attention to detail and a fit that flatters every body type.',
        price: '$149',
        originalPrice: '$179',
        image: '👕',
        images: ['👕', '👔', '🧥'],
        inStock: true,
        stockCount: 60,
        specifications: [
            { label: 'Material', value: 'Premium Cotton Blend' },
            { label: 'Fit', value: 'Regular Fit' },
            { label: 'Sizes', value: 'S, M, L, XL, XXL' },
            { label: 'Care Instructions', value: 'Machine washable' },
            { label: 'Color Options', value: 'Multiple colors available' },
            { label: 'Country of Origin', value: 'Made with care' }
        ],
        features: [
            'Premium cotton blend',
            'Breathable fabric',
            'Reinforced seams',
            'Colorfast dye',
            'Comfortable fit',
            'Professional appearance'
        ],
        catalogPdf: '/public/catalogs/products/premium-t-shirts.pdf'
    },
    {
        id: 4,
        slug: 'premium-writing-pen',
        name: 'Premium Writing Pen',
        category: 'Office Supplies',
        shortDescription: 'High-quality pens crafted for precision and comfort.',
        fullDescription: 'Experience the perfect balance of form and function with our premium writing pens. Engineered for smooth writing and elegant design, these pens are a must-have for professionals who appreciate fine craftsmanship and superior writing instruments.',
        price: '$449',
        originalPrice: '$499',
        image: '✒️',
        images: ['✒️', '🖊️', '📝'],
        inStock: true,
        stockCount: 15,
        specifications: [
            { label: 'Type', value: 'Ballpoint Pen' },
            { label: 'Ink Color', value: 'Black, Blue, Red' },
            { label: 'Material', value: 'Stainless Steel & Premium Resin' },
            { label: 'Refillable', value: 'Yes' },
            { label: 'Weight', value: '1.2 oz' },
            { label: 'Warranty', value: 'Lifetime' }
        ],
        features: [
            'Smooth writing experience',
            'Premium metal construction',
            'Refillable design',
            'Elegant appearance',
            'Comfortable grip',
            'Professional grade'
        ],
        catalogPdf: '/public/catalogs/products/premium-writing-pen.pdf'
    },
    {
        id: 5,
        slug: 'laptop-stand',
        name: 'Laptop Stand',
        category: 'Accessories',
        shortDescription: 'Ergonomic stand designed for comfort and productivity.',
        fullDescription: 'Transform your workspace with our ergonomic laptop stand. Designed to improve posture and reduce neck strain, this stand elevates your laptop to the perfect viewing angle while improving airflow and keeping your device cool.',
        price: '$79',
        originalPrice: '$99',
        image: '💻',
        images: ['💻', '🖥️', '⌨️'],
        inStock: true,
        stockCount: 50,
        specifications: [
            { label: 'Material', value: 'Aluminum Alloy' },
            { label: 'Max Weight', value: '10 lbs' },
            { label: 'Adjustable Height', value: '3.5" - 6.5"' },
            { label: 'Compatibility', value: 'All laptop sizes' },
            { label: 'Weight', value: '1.8 lbs' },
            { label: 'Warranty', value: '1 year' }
        ],
        features: [
            'Ergonomic design',
            'Aluminum construction',
            'Adjustable height',
            'Improved airflow',
            'Non-slip surface',
            'Portable and lightweight'
        ],
        catalogPdf: '/public/catalogs/products/laptop-stand.pdf'
    },
    {
        id: 6,
        slug: 'ear-buds',
        name: 'High-Fidelity Wireless Earbuds',
        category: 'Audio',
        shortDescription: 'High-Fidelity Wireless Earbuds with premium sound quality.',
        fullDescription: 'Immerse yourself in crystal-clear audio with our high-fidelity wireless earbuds. Featuring advanced noise cancellation, exceptional battery life, and a comfortable fit, these earbuds deliver an unparalleled listening experience for music, calls, and more.',
        price: '$129',
        originalPrice: '$159',
        image: '🎧',
        images: ['🎧', '🎵', '📱'],
        inStock: true,
        stockCount: 35,
        specifications: [
            { label: 'Battery Life', value: 'Up to 8 hours' },
            { label: 'Charging Case', value: 'Additional 24 hours' },
            { label: 'Noise Cancellation', value: 'Active Noise Cancellation' },
            { label: 'Connectivity', value: 'Bluetooth 5.0' },
            { label: 'Water Resistance', value: 'IPX5' },
            { label: 'Warranty', value: '1 year' }
        ],
        features: [
            'Active noise cancellation',
            'Premium sound quality',
            'Long battery life',
            'Comfortable fit',
            'Quick charge',
            'Touch controls'
        ],
        catalogPdf: '/public/catalogs/products/high-fidelity-wireless-earbuds.pdf'
    }
];

// Function to get product by ID
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// Function to get product by slug
function getProductBySlug(slug) {
    return productsData.find(product => product.slug === slug);
}
