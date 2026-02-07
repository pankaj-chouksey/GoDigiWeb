# Animation Guide for GoDigiWeb

This guide provides detailed information about the animations used throughout the GoDigiWeb website, implemented with Framer Motion.

## Animation Philosophy

The animations follow these principles:
- **Smooth & Subtle**: Never jarring or distracting
- **Purposeful**: Each animation serves a purpose (feedback, hierarchy, engagement)
- **Performance**: Optimized for 60fps
- **Accessible**: Respects `prefers-reduced-motion`

## Animation Types

### 1. Entrance Animations

#### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
```

#### Slide Up
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

#### Staggered Children
```tsx
// Parent
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}}

// Child
variants={{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}}
```

### 2. Hover Animations

#### Button Hover
```tsx
whileHover={{ 
  scale: 1.05, 
  boxShadow: "0 0 30px rgba(167, 232, 225, 0.5)" 
}}
whileTap={{ scale: 0.95 }}
```

#### Card Hover
```tsx
whileHover={{ 
  y: -10, 
  scale: 1.02 
}}
```

#### Icon Hover
```tsx
whileHover={{ 
  rotate: 360, 
  scale: 1.1 
}}
transition={{ duration: 0.6 }}
```

### 3. Continuous Animations

#### Floating
```tsx
animate={{
  y: [0, -20, 0],
  x: [0, 10, 0]
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

#### Rotating
```tsx
animate={{ rotate: 360 }}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: "linear"
}}
```

#### Pulsing Glow
```tsx
animate={{
  boxShadow: [
    "0 0 20px rgba(167, 232, 225, 0.3)",
    "0 0 40px rgba(167, 232, 225, 0.6)",
    "0 0 20px rgba(167, 232, 225, 0.3)"
  ]
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

### 4. Scroll Animations

#### Viewport-Based
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

#### Parallax Effect
```tsx
useMotionValueEvent(useScroll(), "scroll", ({ scrollY }) => {
  y.set(scrollY * 0.5)
})
```

## Component-Specific Animations

### Hero Section
- **Background Blobs**: Slow floating animation (20-25s duration)
- **Headline**: Staggered fade-in with slide-up
- **Buttons**: Scale and glow on hover
- **Scroll Indicator**: Continuous bounce animation

### Services Section
- **Cards**: Staggered entrance, lift on hover
- **Icons**: Rotate 360° on hover
- **Background**: Subtle blob animation

### Portfolio Section
- **Grid Items**: Staggered entrance
- **Images**: Scale on hover
- **Overlay**: Fade in on hover
- **Glow**: Appear on hover

### Why Choose Us
- **Feature Cards**: Staggered entrance
- **Icons**: Shake animation on hover
- **Sparkles**: Continuous pulse animation

### About Section
- **Content**: Slide in from left
- **Illustration**: Slide in from right
- **Background Blobs**: Slow continuous movement

### CTA Section
- **Background**: Animated gradient blobs
- **Content**: Fade in with scale
- **Button**: Strong glow on hover

### Footer
- **Social Icons**: Scale and lift on hover
- **Background**: Subtle blob shape

## Performance Optimization

### Best Practices

1. **Use `transform` and `opacity`**: These properties are GPU-accelerated
   ```tsx
   // ✅ Good
   animate={{ x: 100, opacity: 0.5 }}
   
   // ❌ Avoid
   animate={{ left: '100px', visibility: 'hidden' }}
   ```

2. **Limit Simultaneous Animations**: Don't animate too many elements at once

3. **Use `will-change` Sparingly**: Only for elements that will animate
   ```tsx
   className="will-change-transform"
   ```

4. **Lazy Load Animations**: Use `whileInView` for scroll animations
   ```tsx
   whileInView={{ opacity: 1 }}
   viewport={{ once: true }}
   ```

5. **Reduce Motion**: Respect user preferences
   ```tsx
   const prefersReducedMotion = useReducedMotion()
   const animation = prefersReducedMotion 
     ? {} 
     : { animate: { ... } }
   ```

## Animation Timing

### Duration Guidelines
- **Micro-interactions**: 0.2s - 0.3s (button clicks, icon hovers)
- **Standard Animations**: 0.6s - 0.8s (entrances, transitions)
- **Slow Animations**: 1s - 1.5s (complex entrances)
- **Continuous**: 6s - 25s (floating, rotating)

### Easing Functions
- **ease-out**: Default for entrances
- **ease-in-out**: For continuous animations
- **linear**: For rotations
- **spring**: For bouncy interactions

## Custom Animation Variants

### Reusable Variants

```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
}
```

## Testing Animations

1. **Performance**: Check FPS in browser DevTools
2. **Accessibility**: Test with `prefers-reduced-motion`
3. **Mobile**: Test on actual devices for smoothness
4. **Browser**: Test across Chrome, Firefox, Safari

## Troubleshooting

### Animation Not Working
- Check if component is client-side (`'use client'`)
- Verify Framer Motion is installed
- Check for CSS conflicts

### Janky Animations
- Reduce number of animated properties
- Use `transform` instead of `top/left`
- Check for layout shifts

### Performance Issues
- Reduce animation duration
- Limit number of simultaneous animations
- Use `will-change` carefully
- Consider `useReducedMotion()` hook

## Future Enhancements

Potential animation additions:
- Page transitions
- Loading animations
- Scroll-triggered reveals
- Interactive cursor effects
- Particle effects
- 3D transforms

