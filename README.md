<div align="center">
  <h1>BrandGuido Platform</h1>
  <p>
    <strong>The Universal Brand Guidelines Template.</strong><br/>
    An open-source, interactive platform for designers to showcase brand identity systems with immersive storytelling.
  </p>
  
  [![Vercel App](https://therealsujitk-vercel-badge.vercel.app/?app=brandguido)](https://vitalora.mhmd.design/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

<br />

![Platform Hero Preview](/Users/mohel/.gemini/antigravity/brain/8f188b56-a5b5-496c-9600-3249fc928d12/hero_platform_1766698122047.png)

## 🚀 Overview

**BrandGuido** is a Next.js 14 template designed to transform static brand PDFs into living, breathing digital experiences. Built with **Framer Motion** and **Tailwind CSS**, it offers a premium, magazine-like interface for presenting logos, typography, color palettes, and brand philosophy.

Stop sending PDFs. Send an experience.

## ✨ Key Features

- **Interactive Logo Analysis**: A dedicated "Deep Dive" section that deconstructs logo anatomy with SVG consistency and animation.
- ** immersive Storytelling**: Parallax scroll effects and staggered text reveals that guide the user through the brand narrative.
- **Dynamic Asset Library**: "The Mood Board" serves as a lightbox gallery for brand imagery.
- **Floating Designer Widget**: A subtle, insistent tool for clients to download assets (SVG, AI, PDF) and contact the designer.
- **Responsive & Accessible**: Fully optimized for all devices, ensuring your brand looks perfect on mobile and desktop.

![Logo Analysis Preview](/Users/mohel/.gemini/antigravity/brain/8f188b56-a5b5-496c-9600-3249fc928d12/narrative_platform_1766698171595.png)

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Default) / Configurable

## 📦 Installation

Clone the repository and install dependencies to start customizing your own brand guidelines.

```bash
git clone https://github.com/mhmddesign/brandguido.git
cd brandguido
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template in action.

## 🎨 Customization Guide

### 1. Logo & Branding

Replace the SVG files in `src/components/ui/` with your own brand assets. Update the `InteractiveLogo.tsx` component to animate your specific paths.

### 2. Colors & Typography

Customize the `tailwind.config.ts` file to match your brand's color palette and font stack.

```typescript
// tailwind.config.ts
colors: {
  'brand-primary': '#YourColor',
  'brand-accent': '#YourAccent',
}
```

![Color Palette Preview](/Users/mohel/.gemini/antigravity/brain/8f188b56-a5b5-496c-9600-3249fc928d12/colors_platform_1766698495303.png)

### 3. Content

Update the text and narrative in `src/components/` files. The content is structured comfortably within React components for easy editing.

### 4. Gallery

Add your brand imagery to `public/images/` and update the `IMAGES` constant in `MoodGrid.tsx`.

![Gallery Preview](/Users/mohel/.gemini/antigravity/brain/8f188b56-a5b5-496c-9600-3249fc928d12/gallery_platform_1766698303212.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Created By

**Mohammed El Maachi**  
_Brand & Digital Designer_

- [Portfolio](https://mhmd.design)
- [Twitter](https://twitter.com/mhmd_design)
