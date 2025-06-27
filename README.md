# 🎨 Lhyann - Digital Character Artist Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.149.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-4.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.2.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-9.0.7-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

<div align="center">
  <h3>✨ An immersive 3D portfolio showcasing original character designs and digital art ✨</h3>
  <p>A modern, responsive web portfolio featuring interactive 3D models, character databases, and animated galleries</p>
</div>

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🚀 Demo](#-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [🎨 Customization](#-customization)
- [📁 Project Structure](#-project-structure)
- [🎯 Key Components](#-key-components)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## 🌟 Features

### 🎭 **Character Portfolio System**
- **Interactive Character Database** - Searchable library with filtering by category and element
- **Character Cards** - Interactive cards with hover effects and modal previews
- **Detailed Character Profiles** - Complete backstories, abilities, and gallery images
- **Category Organization** - Organized by series (Ethereal Guardians, Urban Legends, etc.)

### 🎪 **3D Interactive Experience**
- **3D Forest House Model** - Stunning hero section with interactive 3D environment
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Responsive 3D** - Optimized for all device sizes
- **Ambient Lighting** - Realistic lighting system with shadows

### 🎨 **Modern Portfolio Features**
- **Animated Gallery** - Tilt effects and smooth transitions
- **Professional Timeline** - Career journey with interactive timeline
- **Client Testimonials** - Rotating testimonial cards
- **Contact Form** - Integrated email functionality with EmailJS
- **Skills Showcase** - Animated technology stack display

### 🌐 **Technical Excellence**
- **Single Page Application** - React Router for smooth navigation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Lazy loading and optimized assets
- **Modern Development** - Vite for lightning-fast development

---

## 🚀 Demo

🔗 **Live Demo**: [View Portfolio](https://your-portfolio-url.com)

### 📱 Preview Screenshots

| Desktop | Mobile | Character Library |
|---------|---------|-------------------|
| ![Desktop](docs/desktop-preview.png) | ![Mobile](docs/mobile-preview.png) | ![Characters](docs/characters-preview.png) |

---

## 🛠️ Tech Stack

### **Frontend Core**
- **React 18.2.0** - Component-based UI library
- **Vite 4.1.0** - Next-generation frontend tooling
- **React Router DOM 6.8.1** - Client-side routing

### **3D Graphics & Animation**
- **Three.js 0.149.0** - 3D graphics library
- **@react-three/fiber 8.11.1** - React renderer for Three.js
- **@react-three/drei 9.56.24** - Useful helpers for react-three-fiber
- **Framer Motion 9.0.7** - Production-ready motion library

### **Styling & UI**
- **Tailwind CSS 3.2.6** - Utility-first CSS framework
- **React Parallax Tilt 1.7.299** - Tilt effect for cards
- **React Vertical Timeline 3.6.0** - Vertical timeline component

### **Additional Libraries**
- **EmailJS Browser 3.10.0** - Email functionality
- **Maath 0.5.2** - Math utilities for 3D
- **PostCSS & Autoprefixer** - CSS processing

---

## 📦 Installation

### **Prerequisites**
- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- Git

### **Clone Repository**
```bash
git clone https://github.com/your-username/lhyann-portfolio.git
cd lhyann-portfolio
```

### **Install Dependencies**
```bash
npm install
# or
yarn install
```

### **Environment Setup**
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

### **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the application.

---

## 💻 Usage

### **Development Commands**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### **Adding 3D Models**
1. Place `.gltf` or `.glb` files in `public/` directory
2. Update the model path in the component:
```javascript
const model = useGLTF("./your-model/scene.gltf");
```

---

## 🎨 Customization

### **Quick Customization Guide**

For detailed customization instructions, see [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

#### **1. Add Your Characters**
```javascript
// src/constants/characters.js
{
  id: 7,
  name: "Your Character Name",
  title: "Character Title",
  category: "Your Category",
  element: "Your Element",
  // ... character details
  image: yourCharacterImage,
  gallery: [image1, image2, image3],
}
```

#### **2. Update Portfolio Projects**
```javascript
// src/constants/index.js
const projects = [
  {
    name: "Your Project",
    description: "Project description...",
    image: projectImage,
    source_code_link: "https://your-link.com",
  }
];
```

#### **3. Customize Personal Information**
- Update `src/components/About.jsx` with your story
- Modify `src/constants/index.js` for experiences and testimonials
- Edit `src/components/Contact.jsx` for contact details

---

## 📁 Project Structure

```
lhyann-portfolio/
├── 📁 public/                   # Static assets
│   ├── 📁 forest_house/         # 3D model files
│   ├── 📁 desktop_pc/           # Alternative 3D model
│   └── 📄 favicon.ico           # Site favicon
├── 📁 src/
│   ├── 📁 assets/               # Images and icons
│   │   ├── 📁 company/          # Company logos
│   │   ├── 📁 tech/             # Technology icons
│   │   └── 📄 index.js          # Asset exports
│   ├── 📁 components/           # React components
│   │   ├── 📁 canvas/           # 3D components
│   │   │   ├── 📄 Computers.jsx # Hero 3D model
│   │   │   ├── 📄 Earth.jsx     # Earth model
│   │   │   ├── 📄 Ball.jsx      # Tech ball
│   │   │   └── 📄 Stars.jsx     # Background stars
│   │   ├── 📄 About.jsx         # About section
│   │   ├── 📄 Contact.jsx       # Contact form
│   │   ├── 📄 Experience.jsx    # Timeline
│   │   ├── 📄 Feedbacks.jsx     # Testimonials
│   │   ├── 📄 Hero.jsx          # Hero section
│   │   ├── 📄 Navbar.jsx        # Navigation
│   │   ├── 📄 Tech.jsx          # Tech stack
│   │   ├── 📄 Works.jsx         # Portfolio gallery
│   │   ├── 📄 Characters.jsx    # Character library
│   │   └── 📄 index.js          # Component exports
│   ├── 📁 constants/            # Data and configuration
│   │   ├── 📄 index.js          # Main portfolio data
│   │   └── 📄 characters.js     # Character database
│   ├── 📁 hoc/                  # Higher-order components
│   │   └── 📄 SectionWrapper.jsx # Section wrapper
│   ├── 📁 utils/                # Utility functions
│   │   └── 📄 motion.js         # Animation variants
│   ├── 📄 App.jsx               # Main app component
│   ├── 📄 index.css             # Global styles
│   ├── 📄 main.jsx              # App entry point
│   └── 📄 styles.js             # Style constants
├── 📄 index.html                # HTML template
├── 📄 package.json              # Dependencies
├── 📄 tailwind.config.cjs       # Tailwind configuration
├── 📄 postcss.config.cjs        # PostCSS configuration
├── 📄 vite.config.js            # Vite configuration
├── 📄 README.md                 # This file
└── 📄 CUSTOMIZATION_GUIDE.md    # Customization guide
```

---

## 🎯 Key Components

### **🏠 Hero Section (`Hero.jsx` + `Computers.jsx`)**
- 3D forest house model with interactive controls
- Animated typography with typewriter effect
- Responsive scaling for mobile devices
- Custom lighting and shadow effects

### **👤 About Section (`About.jsx`)**
- Service cards with tilt effects
- Animated text reveals
- Skill highlighting system

### **🎨 Character Library (`Characters.jsx`)**
- Searchable character database
- Category and element filtering
- Interactive character cards
- Modal character details
- Gallery image viewer

### **💼 Portfolio Gallery (`Works.jsx`)**
- Project showcase with descriptions
- Tag-based categorization
- External link integration
- Animated card interactions

### **📞 Contact Form (`Contact.jsx`)**
- EmailJS integration
- Form validation
- 3D Earth background
- Success/error feedback

---

## 🔧 Configuration

### **Tailwind CSS Customization**
```javascript
// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      // Custom configurations...
    },
  },
};
```

### **Vite Configuration**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
});
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Key Responsive Features**
- Adaptive 3D model scaling
- Mobile-optimized navigation
- Responsive grid layouts
- Touch-friendly interactions
- Optimized image loading

---

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deployment Platforms**

#### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Import project to Vercel
3. Configure environment variables
4. Deploy automatically

#### **Netlify**
1. Build the project locally
2. Drag and drop `dist` folder to Netlify
3. Configure redirects for SPA

#### **GitHub Pages**
```bash
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

### **Environment Variables for Production**
```env
VITE_EMAILJS_SERVICE_ID=your_production_service_id
VITE_EMAILJS_TEMPLATE_ID=your_production_template_id
VITE_EMAILJS_USER_ID=your_production_user_id
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow React best practices
- Use meaningful commit messages
- Add comments for complex logic
- Test on multiple devices
- Optimize performance

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Lhyann Portfolio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

### **Portfolio Owner**
- **Artist**: Lhyann
- **Email**: lhyann.art@example.com
- **Portfolio**: [lhyann-portfolio.com](https://your-portfolio-url.com)
- **Social**: [@lhyann_art](https://twitter.com/lhyann_art)

### **Developer**
- **GitHub**: [@your-github](https://github.com/your-username)
- **Email**: your.email@example.com

---

<div align="center">
  <h3>🌟 Thank you for checking out Lhyann's Portfolio! 🌟</h3>
  <p>If you found this project helpful, please consider giving it a ⭐</p>
  
  <br />
  
  <img src="https://img.shields.io/github/stars/your-username/lhyann-portfolio?style=social" alt="GitHub stars" />
  <img src="https://img.shields.io/github/forks/your-username/lhyann-portfolio?style=social" alt="GitHub forks" />
  <img src="https://img.shields.io/github/watchers/your-username/lhyann-portfolio?style=social" alt="GitHub watchers" />
</div>

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/your-username">Your Name</a> for the amazing artist Lhyann</sub>
</div>