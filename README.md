# Portfolio Sketchbook - DaphneColleen Goliat

A creative, interactive portfolio website designed like a physical sketchbook with an immersive page-turning experience.

## 📁 Project Structure

```
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # Interactive functionality
└── README.md        # This file
```

## 🎨 Features

- **3D Book Animation**: Realistic book cover with 3D flip effect
- **Interactive Navigation**: Click to open, use arrows or keyboard to navigate
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full keyboard navigation and ARIA labels
- **Touch Support**: Swipe gestures for mobile devices
- **Custom Animations**: Smooth page transitions and hover effects

## 🚀 Getting Started

Simply open `index.html` in a modern web browser. No build process or dependencies required!

## ⌨️ Keyboard Controls

- **Click cover** or **Press Enter/Space**: Open/Close the book
- **Arrow Left**: Previous page
- **Arrow Right**: Next page
- **Escape**: Close the book

## 🎯 Customization

### Adding Pages

To add more content pages, edit `index.html`:

1. Add new `.spread` div with two `.page` elements inside the `.book` container
2. Update `totalPages` variable in `script.js`
3. Add your content with the existing classes for consistent styling

### Styling

All styles are organized in `styles.css` with clear sections:
- CSS Variables (colors)
- Layout & Structure
- Animations
- Responsive breakpoints

### Colors

Edit CSS variables at the top of `styles.css`:
```css
:root {
  --ink: #1b1a18;
  --paper: #f1ead9;
  --paper2: #e6dcc3;
  --cover: #26241f;
  --label: #f4f0e6;
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with touch support

## 🎨 Design Elements

- **Fonts**: Google Fonts (Permanent Marker, Special Elite, Caveat, Anton)
- **SVG Filters**: Procedural textures for realistic paper and wood effects
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: For easy theming
- **3D Transforms**: Hardware-accelerated animations

## 📄 License

Feel free to use and modify for your own portfolio projects!

---

**Live Site**: https://daphnecolin.github.io/Sketch-port/

Created with ❤️ by DaphneColleen Goliat
