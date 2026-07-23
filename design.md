# Design Style Guide for کلینیک موبایل

## Design Philosophy

### Color Palette
- **Primary**: Pure Black (#000000) - Headers, text, borders
- **Secondary**: Pure White (#FFFFFF) - Backgrounds, cards, contrast elements
- **Accent**: Charcoal Gray (#333333) - Subtle backgrounds, dividers
- **Light Gray**: #F5F5F5 - Card backgrounds, hover states

### Typography
- **Display Font**: Vazirmatn (Bold) - For headings and hero text
- **Body Font**: Vazirmatn (Regular) - For body text and UI elements
- **Technical Font**: Vazirmatn (Medium) - For specifications and technical details

### Visual Language
- **Minimalist Approach**: Clean, uncluttered layouts with strategic white space
- **High Contrast**: Sharp black and white elements for maximum readability
- **Geometric Precision**: Sharp edges, clean lines, perfect alignment
- **Professional Tone**: Serious, trustworthy, technologically advanced

## Visual Effects

### Used Libraries
- **Anime.js**: Smooth micro-interactions and element animations
- **Splide.js**: Elegant carousel for testimonials and phone gallery
- **ECharts.js**: Clean data visualization for service statistics
- **p5.js**: Subtle particle effects and background animations
- **Pixi.js**: Advanced visual effects for hero section
- **Matter.js**: Physics-based animations for interactive elements

### Animation Effects
- **Text Effects**: 
  - Split-by-letter stagger animations for headings
  - Color cycling emphasis on key phrases
  - Smooth fade-in animations for content sections
- **Image Effects**:
  - Ken Burns pan/zoom on hero images
  - Smooth scale transitions on hover
  - Infinite marquee scroll for phone gallery
- **Background Effects**:
  - Subtle particle system using p5.js
  - Geometric pattern overlays
  - Smooth gradient transitions

### Header Effect
- **Hero Background**: Animated geometric patterns with subtle movement
- **Text Animation**: Large heading with staggered letter appearance
- **Call-to-Action**: Pulsing button with smooth hover transitions

### Scroll Motion
- **Reveal Animations**: Content fades in as user scrolls (opacity 0.9 to 1.0)
- **Parallax Elements**: Subtle background movement (max 8% translateY)
- **Stagger Effects**: Sequential appearance of service cards and phone items
- **Smooth Scrolling**: Enhanced scroll behavior with momentum

### Hover Effects
- **Service Cards**: 3D tilt effect with shadow expansion
- **Phone Cards**: Smooth scale transform with overlay information
- **Buttons**: Color inversion with smooth transition
- **Navigation**: Underline animation with elastic easing

### Mobile Considerations
- **Touch-Friendly**: All interactive elements sized for finger taps
- **Reduced Motion**: Simplified animations on mobile devices
- **Performance**: Optimized animations for smooth 60fps experience
- **Accessibility**: High contrast maintained across all screen sizes

## Layout Principles
- **Grid System**: 12-column responsive grid with consistent gutters
- **Vertical Rhythm**: Consistent spacing using 8px base unit
- **Content Hierarchy**: Clear visual hierarchy through size and weight
- **Responsive Design**: Fluid layouts that adapt to all screen sizes