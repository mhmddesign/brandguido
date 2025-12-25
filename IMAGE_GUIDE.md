# 📸 Image Guide for Vitalora Brand Guidelines

This guide shows you exactly where to add your images and how they're used.

---

## 📁 Folder Structure

Place your images in the `public/images/` folder:

```
public/
└── images/
    ├── logo/           # Logo variations
    ├── mood/           # Mood grid images
    ├── sketches/       # Process/sketch images
    └── mockups/        # Product mockups
```

---

## 🎨 Image Locations by Component

### 1. Logo Images (`public/images/logo/`)

| File Name             | Usage                            | Recommended Size |
| --------------------- | -------------------------------- | ---------------- |
| `logo-full.svg`       | Full logo with symbol + wordmark | 400x500px        |
| `logo-horizontal.svg` | Horizontal lockup                | 400x100px        |
| `logo-icon.svg`       | Just the "O" symbol              | 200x200px        |

**Update in:** `src/components/LogoDeepDive.tsx` and `src/components/LogoSuite.tsx`

---

### 2. Mood Grid Images (`public/images/mood/`)

| File Name              | Grid Position       | Recommended Size |
| ---------------------- | ------------------- | ---------------- |
| `leaf-texture.jpg`     | Large left (2x2)    | 800x800px        |
| `sofia-persona.jpg`    | Medium top right    | 600x500px        |
| `copper-foil.jpg`      | Small mid right     | 400x400px        |
| `amber-bottle.jpg`     | Wide bottom right   | 800x400px        |
| `sun-illustration.svg` | Small bottom center | 400x400px        |

**Update in:** `src/components/MoodGrid.tsx`

---

### 3. Sketch Images (`public/images/sketches/`)

| File Name          | Description        |
| ------------------ | ------------------ |
| `sketch-1.jpg`     | Initial concepts   |
| `sketch-2.jpg`     | Symbol studies     |
| `sketch-3.jpg`     | Typography tests   |
| `rejected-1.jpg`   | Rejected direction |
| `sketch-4.jpg`     | Color studies      |
| `rejected-2.jpg`   | Rejected concept   |
| `sketch-final.jpg` | Final direction    |

**Update in:** `src/components/ProcessStudio.tsx`

---

### 4. Video Cover (`public/images/`)

| File Name              | Usage                    |
| ---------------------- | ------------------------ |
| `brand-film-cover.jpg` | Video player cover image |

**Update in:** `src/components/ProcessStudio.tsx`

---

## 🔧 How to Update Each Component

### Updating MoodGrid.tsx

```tsx
const moodItems = [
  {
    id: 1,
    title: "Organic Textures",
    image: "/images/mood/leaf-texture.jpg", // ← Change this
    span: "col-span-2 row-span-2",
    aspectClass: "aspect-square",
  },
  // ... etc
];
```

### Updating ProcessStudio.tsx

```tsx
const sketches = [
  { id: 1, image: "/images/sketches/sketch-1.jpg", label: "Initial Concepts" },
  { id: 2, image: "/images/sketches/sketch-2.jpg", label: "Symbol Studies" },
  // ... etc
];
```

### Updating LogoSuite.tsx (if you have actual logo images)

Replace the placeholder geometric shapes with actual `<img>` tags pointing to your logo files.

---

## ⚡ Quick Reference

Once you add an image to `public/images/`, reference it with:

```tsx
// In any component:
<img src="/images/mood/your-image.jpg" alt="Description" />

// With the Lightbox component:
<LightboxImage
  src="/images/mood/your-image.jpg"
  alt="Description"
  layoutId="unique-id"
/>
```

---

## 📝 Notes

1. **File format**: Use `.jpg` for photos, `.png` for transparency, `.svg` for logos/icons
2. **Optimization**: Compress images before adding (use tinypng.com or similar)
3. **Naming**: Use lowercase with hyphens (e.g., `leaf-texture.jpg`)
4. **Hot reload**: After adding images, the dev server will automatically pick them up
