# Ally Design System

This design system matches the exact specifications from the Framer site at https://withally.com/

## Typography

### Font Families

```tsx
// Primary text - Inter (100-900 weights)
className="font-inter"

// Tight variant - Inter Tight (400, 700)
className="font-inter-tight"

// Display headings - Inter Display (100-900 weights)
className="font-inter-display"

// Decorative/Editorial - PP Editorial New Ultralight
className="font-editorial"
```

### Font Sizes
Base font size is **12px** (matching Framer). Use Tailwind's scale:

```tsx
text-xs    // 9px
text-sm    // 10.5px
text-base  // 12px (default)
text-lg    // 13.5px
text-xl    // 15px
text-2xl   // 18px
text-3xl   // 22.5px
text-4xl   // 27px
text-5xl   // 36px
text-6xl   // 45px
text-7xl   // 54px
text-8xl   // 72px
```

### Line Heights

```tsx
leading-tight   // 1.2 (for headings, quotes)
leading-normal  // 1.3 (default, matches Framer)
leading-relaxed // 1.5 (for body text)
```

### Letter Spacing

```tsx
tracking-tighter  // -0.05em
tracking-tight    // -0.025em
tracking-normal   // 0 (default)
tracking-wide     // 0.025em
tracking-wider    // 0.05em
```

## Colors

### Primary Brand Colors

```tsx
// Purple (primary brand color)
bg-ally-purple      // #7734b3
text-ally-purple

// Pink (accent)
bg-ally-pink        // #fec9ff
text-ally-pink

// Green (accent - legacy)
bg-ally-green       // #d3ffca
text-ally-green
```

### Background Colors

```tsx
// Primary backgrounds (from darkest to lightest)
bg-ally-near-black  // #111111 (darkest)
bg-ally-charcoal    // #191919
bg-ally-black       // #0f0f0f (main background)

// Purple-tinted backgrounds
bg-ally-purple-dark // #1b0c21
bg-ally-purple-deep // #2e0d17
```

### Gray Scale

```tsx
bg-ally-gray-darker  // #212121
bg-ally-gray-dark    // #424242
```

### Overlays

```tsx
bg-ally-pink-overlay  // rgba(239, 201, 255, 0.25)
```

### Text Colors

```tsx
text-ally-white  // #ffffff (default text color)
text-white       // Alternative
```

## Breakpoints

Exact Framer breakpoints:

```tsx
// Mobile (≤809px)
mobile:hidden     // Hide on mobile
mobile:text-2xl   // Styles for mobile only

// Tablet (810px - 1199px)
tablet:grid-cols-2

// Desktop (1200px - 1439px)
desktop:max-w-6xl

// Desktop Large (≥1440px)
desktop-lg:max-w-7xl
```

### Usage Example

```tsx
<div className="
  text-2xl mobile:text-xl
  tablet:text-3xl
  desktop:text-4xl
  desktop-lg:text-5xl
">
  Responsive text
</div>
```

## Spacing

Standard Tailwind spacing plus custom values:

```tsx
// Custom spacing values
space-18  // 4.5rem (72px)
space-22  // 5.5rem (88px)
space-26  // 6.5rem (104px)
space-30  // 7.5rem (120px)
```

## Border Radius

```tsx
rounded-none  // 0
rounded-sm    // 0.25rem
rounded       // 0.5rem (default)
rounded-md    // 0.75rem
rounded-lg    // 1rem
rounded-xl    // 1.5rem
rounded-2xl   // 2rem
rounded-3xl   // 3rem
```

## Shadows

```tsx
shadow-sm      // 0 1px 2px rgba(0, 0, 0, 0.05)
shadow         // 0 2px 8px rgba(0, 0, 0, 0.1) (default)
shadow-md      // 0 4px 12px rgba(0, 0, 0, 0.15)
shadow-lg      // 0 8px 24px rgba(0, 0, 0, 0.2)
shadow-xl      // 0 12px 48px rgba(0, 0, 0, 0.25)
shadow-inner   // inset 0 2px 4px rgba(0, 0, 0, 0.1)
```

## Animations

Built-in Tailwind animations plus Framer-style:

```tsx
animate-fade-in    // Fade in over 0.6s
animate-slide-up   // Slide up from bottom
animate-slide-down // Slide down from top
```

### Custom Animations with Framer Motion

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

## Component Examples

### Hero Heading

```tsx
<h1 className="
  font-inter-display
  text-6xl desktop-lg:text-8xl
  font-bold
  leading-tight
  tracking-tight
  text-white
">
  Ally — Executive Partners × AI Systems for Leaders
</h1>
```

### Body Text

```tsx
<p className="
  font-inter
  text-base
  leading-normal
  text-white/90
">
  Body content here
</p>
```

### Editorial/Decorative Text

```tsx
<span className="
  font-editorial
  text-4xl
  text-ally-pink
">
  Beautiful decorative text
</span>
```

### Section Container

```tsx
<section className="
  bg-ally-black
  px-6 mobile:px-4
  py-20 mobile:py-12
  tablet:py-16
  desktop-lg:py-30
">
  Content
</section>
```

### Card with Shadow

```tsx
<div className="
  bg-ally-charcoal
  rounded-2xl
  shadow-lg
  p-8
  hover:shadow-xl
  transition-shadow
  duration-300
">
  Card content
</div>
```

### Button with Purple Accent

```tsx
<button className="
  bg-ally-purple
  hover:bg-ally-purple/90
  text-white
  font-inter-tight
  font-semibold
  px-8
  py-4
  rounded-lg
  transition-all
  duration-200
  hover:scale-105
">
  Get Started
</button>
```

## CSS Variables

Available in all components via `globals.css`:

```css
var(--color-pink-light)      /* #fec9ff */
var(--color-purple)          /* #7734b3 */
var(--color-black)           /* #0f0f0f */
var(--color-pink-overlay)    /* rgba(239, 201, 255, 0.25) */
var(--color-gray-dark)       /* #424242 */
var(--color-gray-darker)     /* #212121 */
var(--color-purple-dark)     /* #1b0c21 */
var(--color-purple-deep)     /* #2e0d17 */
var(--color-charcoal)        /* #191919 */
var(--color-near-black)      /* #111111 */
var(--color-white)           /* #ffffff */
```

## Best Practices

1. **Use semantic color names**: Prefer `bg-ally-black` over `bg-[#0f0f0f]`
2. **Stick to the scale**: Use defined font sizes and spacing values
3. **Mobile-first**: Design for mobile, then add tablet/desktop styles
4. **Framer Motion for animations**: Use for complex scroll-triggered effects
5. **Typography hierarchy**:
   - `font-inter-display` for large headings
   - `font-inter` for body text
   - `font-inter-tight` for UI elements (buttons, labels)
   - `font-editorial` sparingly for decorative emphasis

## File Locations

- **Fonts**: `/app/fonts/editorial/pp-editorial-new-ultralight.woff2`
- **Config**: `/tailwind.config.ts`
- **Styles**: `/app/globals.css`
- **Layout**: `/app/layout.tsx`
