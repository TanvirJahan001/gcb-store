# GCB Store Animation Guide

This document provides an overview of the animation system implemented in the GCB Store website.

## Animation Components and Hooks

### Components

1. **AnimatedElement**
   - A reusable component for adding GSAP animations to any element
   - Usage: Wrap any element to apply animations
   ```jsx
   <AnimatedElement animation="fadeIn" delay={0.2}>
     <h1>Your Content</h1>
   </AnimatedElement>
   ```
   - Props:
     - `animation`: Type of animation ('fadeIn', 'slideUp', 'slideIn', 'scale', 'stagger')
     - `delay`: Delay before animation starts (in seconds)
     - `duration`: Duration of animation (in seconds)
     - `from`: Direction for slide animations ('left', 'right', 'top', 'bottom')
     - `distance`: Distance to animate from (in pixels)
     - `staggerSelector`: CSS selector for staggered children (for 'stagger' animation)
     - `staggerDelay`: Delay between staggered animations (in seconds)
     - `scrollTrigger`: Whether to trigger animation on scroll
     - `start`: ScrollTrigger start position (e.g., 'top 80%')

2. **AnimationProvider**
   - A component that sets up global animations and scroll effects
   - Already integrated in the root layout
   - Provides automatic animations for common elements like headings, images, and sections

### Hooks

1. **useAnimations.js**
   - Contains several animation hooks:
     - `useFadeInAnimation`: For fade-in animation on scroll
     - `useStaggerAnimation`: For staggered animation of multiple elements
     - `useAccordionAnimation`: For animating accordion items
     - `useParallaxEffect`: For parallax scroll effect

2. **useParallax.js**
   - Custom hook for creating parallax scrolling effects
   - Usage:
   ```jsx
   const parallaxRef = useParallax({ speed: 0.5 });
   return <div ref={parallaxRef}>Content</div>;
   ```
   - Options:
     - `speed`: Parallax speed (negative values move opposite to scroll direction)
     - `direction`: Direction of parallax effect ('vertical' or 'horizontal')
     - `reverse`: Whether to reverse the direction
     - `start`: Start position as percentage (0-100)
     - `end`: End position as percentage (0-100)

## Parallax Backgrounds

The site uses `react-parallax` for full-screen parallax backgrounds:

```jsx
<Parallax
  bgImage="/images/bg-2.jpg"
  strength={300}
  className={styles.parallaxContainer}
>
  {/* Your content */}
</Parallax>
```

## Best Practices

1. **Performance**
   - Use `scrollTrigger: true` to only animate elements when they come into view
   - Clean up animations when components unmount

2. **Accessibility**
   - The AnimationProvider respects the user's motion preferences
   - Animations won't run if the user has enabled 'prefers-reduced-motion'

3. **Consistency**
   - Use the AnimatedElement component for consistent animations across the site
   - For custom animations, use the provided hooks

## Examples

### Fade In Element
```jsx
<AnimatedElement animation="fadeIn" delay={0.2}>
  <h1>Your Content</h1>
</AnimatedElement>
```

### Staggered List Items
```jsx
<AnimatedElement animation="stagger" staggerDelay={0.1}>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</AnimatedElement>
```

### Parallax Effect
```jsx
const parallaxRef = useParallax({ speed: -0.2 });
return <div ref={parallaxRef}>This moves at a different speed when scrolling</div>;
```