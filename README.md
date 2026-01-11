# Product Slider Landing Page

A modern, responsive landing page featuring an interactive product slider/carousel built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎠 **Interactive Product Slider**: Smooth carousel with navigation buttons and indicators
- 🛒 **Shopping Cart**: Add products to cart with visual feedback
- ⌨️ **Keyboard Navigation**: Use arrow keys to navigate the slider
- 👆 **Touch Support**: Swipe gestures for mobile devices
- 🎯 **Smooth Scrolling**: Elegant scroll behavior between sections

## Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Slider functionality and interactivity
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (optional, for development server)
- Or use Python's built-in server
- Or open HTML files directly in browser

### Installation

1. Clone or download this repository
2. (Optional) Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

**Option 1: Using npm scripts (Recommended)**
```bash
# Start development server (opens in browser)
npm run dev

# Or just start server
npm run serve

# Or use start alias
npm start
```

**Option 2: Using Python (if installed)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then navigate to `http://localhost:8000`

**Option 3: Direct File Open**
- Double-click `index.html` to open in your default browser
- Note: Some features may not work with file:// protocol (use a server for full functionality)

### Building

```bash
# Run build script (validates files)
npm run build
```

## Customization

### Changing Products

Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Your Product Name',
        category: 'Category',
        description: 'Product description',
        price: '$99',
        image: '🎨' // Emoji or you can replace with image URLs
    },
    // Add more products...
];
```

### Changing Colors

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1d4ed8;       /* Darker shade */
    --accent-color: #f59e0b;       /* Accent color */
    /* ... other colors */
}
```

### Adding Real Images

Replace the emoji icons in the product cards with actual images:

1. Add image files to an `images/` folder
2. Update the product data to include image paths:
   ```javascript
   image: 'images/product1.jpg'
   ```
3. Modify the `createProductCard` function in `script.js` to use `<img>` tags instead of emoji

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Navigation Bar
- Sticky header that stays visible while scrolling
- Responsive menu (hides on mobile)
- Shopping cart indicator

### Hero Section
- Eye-catching gradient background
- Call-to-action button
- Smooth scroll to products section

### Product Slider
- Multiple products displayed in a carousel
- Navigation buttons (previous/next)
- Dot indicators for current slide
- Keyboard navigation (arrow keys)
- Touch/swipe support for mobile
- Responsive item count (1-3 items based on screen size)

### Features Section
- Three feature cards with icons
- Hover effects

### Footer
- Multi-column layout
- Social media links
- Quick navigation links

## License

This project is open source and available for personal and commercial use.

## Notes

- The design uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- All animations use CSS transitions for smooth performance
- The slider is fully accessible with keyboard navigation
- Product images currently use emoji icons - replace with actual product images as needed
