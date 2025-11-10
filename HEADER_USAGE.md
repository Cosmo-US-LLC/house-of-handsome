# Header Component Usage

## Files Created

1. **`src/components/Header/Header.jsx`** - Complete responsive header component
2. **`src/hooks/useScrolled.js`** - Scroll detection hook for shadow effect
3. **Updated `src/pages/Home.jsx`** - Using new Header component

---

## Features Implemented

### ✅ Layout & Design
- Sticky top navbar with white background and subtle bottom border
- Max container width: 1280px
- Responsive padding: `px-8` desktop, `px-4` mobile
- Logo from Figma + "Handsome" text
- Compact height: `min-h-[64px]`

### ✅ Navigation Items
All 8 navigation items in order:
- Home
- About Us
- Adult
- Teen
- Kids
- Services
- Franchise
- Locations

### ✅ Interactions & States
- **Active link**: Brand red (#d82028) with 2px bottom indicator
- **Hover**: Text changes to neutral-900
- **Default**: Text in neutral-600
- **Keyboard focus**: Visible ring-2 with offset
- **Scroll effect**: Adds shadow when scrolled > 4px

### ✅ Mobile Responsive
- Hamburger menu on small screens
- Full-screen slide-down menu with large tap targets
- Closes on link click
- Accessible with ARIA attributes

### ✅ Accessibility
- `<nav aria-label="Main">`
- `aria-expanded`, `aria-controls` on mobile button
- `role="menu"` for mobile panel
- Keyboard navigation with visible focus states
- Screen reader friendly

---

## Usage Examples

### Basic Usage (Current)
```jsx
import Header from "../components/Header/Header";

function Home() {
  return (
    <div>
      <Header currentPath="/" />
      {/* Your page content */}
    </div>
  );
}
```

### With React Router
```jsx
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";

function App() {
  const location = useLocation();
  
  return (
    <div>
      <Header currentPath={location.pathname} />
      {/* Your routes */}
    </div>
  );
}
```

### With Custom Logo
Replace the Figma image URL in Header.jsx:
```jsx
<img
  src="/path/to/your/logo.png"  // Your logo path
  alt="House of Handsome Logo"
  className="w-12 h-8 object-contain"
/>
```

---

## Component Props

### Header Component
```typescript
interface HeaderProps {
  currentPath?: string;  // Default: "/"
}
```

**Example:**
```jsx
<Header currentPath="/about" />  // Highlights "About Us" link
<Header currentPath="/services" />  // Highlights "Services" link
```

---

## Customization

### Change Brand Color
In `Header.jsx`, update:
```jsx
const BRAND_RED = "#d82028";  // Your brand color
```

### Modify Navigation Items
In `Header.jsx`, edit the `NAV_ITEMS` array:
```jsx
const NAV_ITEMS = [
  { label: "Home", href: "/", slug: "/" },
  { label: "New Page", href: "/new", slug: "/new" },
  // Add or remove items
];
```

### Adjust Scroll Threshold
In `useScrolled` hook call:
```jsx
const scrolled = useScrolled(10);  // Shadow appears after 10px scroll
```

---

## Browser Support
- Modern browsers with backdrop-filter support
- Graceful fallback for older browsers
- Mobile-first responsive design
- Touch-friendly tap targets (min 44px)

---

## Testing Checklist

- [ ] Navigation works on desktop
- [ ] Mobile menu toggles properly
- [ ] Active link highlighted correctly
- [ ] Scroll shadow appears/disappears
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Logo loads correctly
- [ ] Contact button clickable
- [ ] Responsive on all screen sizes
- [ ] Accessible with screen readers

