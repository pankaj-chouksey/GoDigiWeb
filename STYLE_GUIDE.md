# GoDigiWeb Style Guide

## Brand Identity

### Logo
- Place logo at top center or top-left of navigation
- Logo should maintain aspect ratio
- Use mint green accent colors from logo palette

### Color Palette

#### Primary Colors
- **Mint Green (Primary)**: `#A7E8E1` / `rgb(167, 232, 225)`
  - Used for: Primary buttons, accents, highlights, glows
  - Tailwind: `mint-200`

- **Mint Light**: `#CCFBF1` / `rgb(204, 251, 241)`
  - Used for: Hover states, lighter accents
  - Tailwind: `mint-100`

- **Mint Dark**: `#7DD3C7` / `rgb(125, 211, 199)`
  - Used for: Gradients, depth
  - Tailwind: `mint-300`

#### Secondary Colors
- **Dark Background**: `#0A0A0A` / `rgb(10, 10, 10)`
  - Used for: Main background
  - Tailwind: `dark-900`

- **Dark Surface**: `#1A1A1A` / `rgb(26, 26, 26)`
  - Used for: Cards, elevated surfaces
  - Tailwind: `dark-800`

- **Dark Gray**: `#2A2A2A` / `rgb(42, 42, 42)`
  - Used for: Borders, dividers
  - Tailwind: `dark-700`

#### Text Colors
- **White**: `#FFFFFF` - Primary text
- **Gray 300**: `#D1D5DB` - Secondary text
- **Gray 400**: `#9CA3AF` - Tertiary text

## Typography

### Font Families
- **Display Font**: Poppins
  - Weights: 400, 500, 600, 700
  - Usage: Headings, hero text, brand elements
  
- **Body Font**: Inter
  - Weights: 400, 500, 600
  - Usage: Body text, descriptions, paragraphs

### Type Scale
- **Hero Headline**: 5xl (3rem) to 8xl (6rem)
- **Section Headlines**: 4xl (2.25rem) to 5xl (3rem)
- **Card Titles**: xl (1.25rem) to 2xl (1.5rem)
- **Body Text**: base (1rem) to lg (1.125rem)
- **Small Text**: sm (0.875rem) to xs (0.75rem)

## Design Principles

### Spacing
- Use consistent spacing scale: 4px base unit
- Section padding: 96px (py-24) on desktop, 64px on mobile
- Card padding: 24px to 32px
- Element gaps: 16px to 24px

### Border Radius
- **Small**: 8px (rounded-lg)
- **Medium**: 16px (rounded-2xl)
- **Large**: 24px (rounded-3xl)
- **Full**: 9999px (rounded-full)

### Shadows & Glows
- **Soft Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Mint Glow**: `0 0 20px rgba(167, 232, 225, 0.3)`
- **Strong Glow**: `0 0 40px rgba(167, 232, 225, 0.5)`

### Glassmorphism
- Background: `rgba(255, 255, 255, 0.05)`
- Backdrop blur: `blur-md` (12px)
- Border: `1px solid rgba(255, 255, 255, 0.1)`

## Components

### Buttons

#### Primary Button
```tsx
className="px-8 py-4 bg-gradient-to-r from-mint-200 to-mint-400 
           text-dark-900 font-semibold rounded-full glow-mint-strong"
```

#### Secondary Button
```tsx
className="px-8 py-4 glass text-white font-semibold rounded-full 
           border border-mint-200/30"
```

### Cards
- Background: Glass effect or dark surface
- Border: `border-white/10`
- Hover: Scale up 1.02, border color change, glow effect
- Padding: 24px to 32px
- Border radius: `rounded-3xl`

### Icons
- Size: 20px to 24px for standard icons
- Color: Mint green for primary, white/gray for secondary
- Container: Rounded square with gradient background
- Hover: Rotate or scale animations

## Animations

### Entrance Animations
- **Fade In**: `opacity: 0 → 1` over 0.8s
- **Slide Up**: `translateY(30px) → 0` over 0.6s
- **Stagger**: 0.1s delay between items

### Hover Animations
- **Scale**: `scale(1) → scale(1.05)` on hover
- **Lift**: `translateY(0) → translateY(-10px)`
- **Glow**: Increase glow intensity
- **Color**: Transition to mint green

### Continuous Animations
- **Float**: Vertical movement ±20px over 6s
- **Rotate**: 360° rotation over 15-20s
- **Pulse**: Scale 1 → 1.1 → 1 over 2s

## Layout Guidelines

### Grid System
- **Container Max Width**: 1280px (max-w-7xl)
- **Grid Columns**: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns
- **Gap**: 24px (gap-6) between grid items

### Section Spacing
- Vertical spacing: 96px between sections
- Horizontal padding: 16px mobile, 24px tablet, 32px desktop

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Accessibility

- Maintain contrast ratio of at least 4.5:1 for text
- Use semantic HTML elements
- Include ARIA labels for icons
- Ensure keyboard navigation works
- Test with screen readers

## Animation Recommendations

### Framer Motion Patterns

```tsx
// Entrance animation
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Hover animation
whileHover={{ scale: 1.05, y: -5 }}

// Continuous animation
animate={{ 
  y: [0, -20, 0],
  rotate: [0, 360]
}}
transition={{ 
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

## Best Practices

1. **Consistency**: Use design tokens consistently
2. **Performance**: Optimize animations (use `will-change` sparingly)
3. **Accessibility**: Don't rely solely on color for information
4. **Mobile First**: Design for mobile, enhance for desktop
5. **Loading States**: Provide feedback during interactions
6. **Error States**: Design clear error messages

