# 🎨 Lhyann - Digital Character Artist Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.149.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-4.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.2.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-9.0.7-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/LocalStorage_CRUD-✅-brightgreen?style=for-the-badge" alt="CRUD System" />
</div>

<br />

<div align="center">
  <h3>✨ An immersive 3D portfolio with full character management system ✨</h3>
  <p>A modern, responsive web portfolio featuring interactive 3D models, searchable character databases, admin panel, and user authentication</p>
</div>

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🔐 Authentication System](#-authentication-system)
- [�️ CRUD Management](#️-crud-management)
- [🀽� Demo](#-demo)
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

### 🔐 **Advanced Authentication System**

- **Dual Login System** - Admin and User authentication with role-based access
- **Admin Access** - Full character management with hardcoded credentials (`lhyan@gmail.com` / `1234`)
- **User Registration** - Automatic account creation for commission clients
- **Persistent Sessions** - localStorage-based authentication with welcome messages
- **Protected Routes** - Admin panel accessible only to authenticated admins
- **Dynamic Navigation** - Context-aware navbar showing login status and user info

### 🗃️ **Complete CRUD Management System**

- **Character Database** - Full Create, Read, Update, Delete operations
- **Image Upload System** - Local file handling with base64 storage
- **Data Export** - Automatic export to `characters.js` for deployment
- **Admin Panel** - Professional interface for content management
- **Real-time Updates** - Instant reflection of changes across the portfolio
- **Data Persistence** - localStorage-based with export capabilities

### 🎭 **Advanced Character Portfolio System**

- **Interactive Character Database** - Searchable library with filtering by category and element
- **Character Detail Pages** - Complete profiles with image carousels and detailed information
- **Dynamic Gallery** - Shows 3 random characters from the database on home page
- **Modal Previews** - Quick character overviews with smooth animations
- **Category Organization** - Organized by series (Ethereal Guardians, Urban Legends, etc.)
- **Real Character Data** - Features actual OCs: Reinay, Moon, Coffee, Lilith with complete backstories

### 🎪 **Enhanced 3D Interactive Experience**

- **3D Forest House Model** - Stunning hero section with interactive 3D environment
- **Desktop PC Alternative** - Multiple 3D model options with seamless switching
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Responsive 3D** - Optimized for all device sizes with dynamic scaling
- **Ambient Lighting** - Realistic lighting system with shadows and reflections

### 🎨 **Modern Portfolio Features**

- **Animated Gallery** - Tilt effects and smooth transitions with real artwork
- **Professional Timeline** - Digital art career journey with interactive timeline
- **Client Testimonials** - Art commission testimonials and reviews
- **Contact Form** - Integrated email functionality with EmailJS
- **Skills Showcase** - Digital art tools and software display (Photoshop, Procreate, etc.)

### 🌐 **Technical Excellence**

- **Single Page Application** - React Router for smooth navigation between all pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Lazy loading and optimized assets
- **Modern Development** - Vite for lightning-fast development
- **Local-First Architecture** - Complete offline functionality with export capabilities

---

## 🔐 Authentication System

### **Admin Login**

```
Email: lhyan@gmail.com
Password: 1234
Access: Full character CRUD management
```

### **User Registration**

- **Automatic Account Creation** - Enter any email/password to create account
- **Credential Storage** - Information saved for future commission requests
- **Welcome Messages** - Personalized greetings throughout the site
- **Commission Ready** - User data structured for future commission system

### **Authentication Features**

- **Role-Based Access Control** - Different experiences for admin vs users
- **Persistent Sessions** - Login state maintained across browser sessions
- **Dynamic UI** - Navbar and hero section adapt to authentication status
- **Protected Admin Panel** - Redirects non-admin users to login page

---

## 🗃️ CRUD Management

### **Character Management**

- **Create Characters** - Add new OCs with complete information and images
- **Read/View** - Browse all characters in organized lists and detailed views
- **Update Characters** - Edit existing character information and images
- **Delete Characters** - Remove characters with confirmation prompts

### **Data Handling**

- **Image Upload** - Local file upload with base64 encoding
- **Data Export** - Automatic generation of `characters.js` for deployment
- **localStorage Persistence** - All data stored locally for offline access
- **Real-time Updates** - Changes instantly reflected across all pages

### **Admin Panel Features**

- **Professional Interface** - Clean, intuitive character management UI
- **Form Validation** - Comprehensive input validation and error handling
- **Image Preview** - Real-time image preview during upload
- **Category Management** - Organized character categories and elements
- **Bulk Operations** - Efficient management of multiple characters

For detailed CRUD system usage, see [CRUD_SYSTEM_GUIDE.md](./CRUD_SYSTEM_GUIDE.md)

---

## 🚀 Demo

🔗 **Live Demo**: [View Portfolio](https://your-portfolio-url.com)

### 📱 Preview Screenshots

| Desktop                            | Mobile                           | Character Library                        | Admin Panel                    |
| ---------------------------------- | -------------------------------- | ---------------------------------------- | ------------------------------ |
| ![Desktop](docs/desktop-preview.png) | ![Mobile](docs/mobile-preview.png) | ![Characters](docs/characters-preview.png) | ![Admin](docs/admin-preview.png) |

### 🎮 **Try the Demo**

- **Browse Characters**: Visit `/characters` to explore the searchable character database
- **Admin Access**: Login at `/login` with `lhyan@gmail.com` / `1234` to access the admin panel
- **User Registration**: Create a user account to experience the commission client flow
- **CRUD Operations**: Add, edit, or delete characters through the admin interface

---

## 🛠️ Tech Stack

### **Frontend Core**

- **React 18.2.0** - Component-based UI library with hooks and context
- **Vite 4.1.0** - Next-generation frontend tooling with HMR
- **React Router DOM 6.8.1** - Client-side routing with protected routes

### **3D Graphics & Animation**

- **Three.js 0.149.0** - 3D graphics library with WebGL rendering
- **@react-three/fiber 8.11.1** - React renderer for Three.js
- **@react-three/drei 9.56.24** - Useful helpers for react-three-fiber
- **Framer Motion 9.0.7** - Production-ready motion library with layout animations

### **State Management & Storage**

- **React Context API** - Authentication and user state management
- **localStorage API** - Client-side data persistence for characters and users
- **Custom Hooks** - Reusable logic for authentication and data management

### **Styling & UI**

- **Tailwind CSS 3.2.6** - Utility-first CSS framework with custom themes
- **React Parallax Tilt 1.7.299** - Tilt effect for interactive cards
- **React Vertical Timeline 3.6.0** - Vertical timeline component
- **Custom Animations** - Framer Motion variants for smooth transitions

### **Additional Libraries**

- **EmailJS Browser 3.10.0** - Email functionality for contact forms
- **Maath 0.5.2** - Math utilities for 3D transformations
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### **Development Tools**

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformations and optimizations
- **Vite Plugins** - React support and build optimizations

---

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

### **Authentication System**

```bash
# Admin Login
Email: lhyan@gmail.com
Password: 1234
Access: /admin panel for character management

# User Registration
Any email/password combination creates a new user account
Credentials saved for future commission features
```

### **CRUD Operations**

```bash
# Access Admin Panel
1. Login as admin at /login
2. Navigate to /admin or click "Admin" in navbar
3. Use "Add Character" to create new OCs
4. Edit existing characters from the character list
5. Delete characters with confirmation prompts
6. Export data automatically updates characters.js
```

### **Adding 3D Models**

1. Place `.gltf` or `.glb` files in `public/` directory
2. Update the model path in the component:

```javascript
const model = useGLTF("./your-model/scene.gltf");
```

### **Character Management Workflow**

1. **Login as Admin** - Use hardcoded credentials to access admin panel
2. **Create Characters** - Add new OCs with images and complete information
3. **Organize Content** - Use categories and elements for proper organization
4. **Export Data** - System automatically updates the character database file
5. **Deploy Changes** - Export includes all images as base64 for easy deployment

---

## 🎨 Customization

### **Quick Customization Guide**

For detailed customization instructions, see [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
For CRUD system usage, see [CRUD_SYSTEM_GUIDE.md](./CRUD_SYSTEM_GUIDE.md)

#### **1. Add Characters via Admin Panel** (Recommended)

```bash
# Using the CRUD System
1. Login as admin (/login)
2. Access admin panel (/admin)
3. Click "Add Character"
4. Fill in character information
5. Upload character images
6. Save and export automatically
```

#### **2. Add Characters Manually** (Advanced)

```javascript
// src/constants/characters.js
{
  id: 7,
  name: "Your Character Name",
  title: "Character Title",
  category: "Your Category",
  element: "Your Element",
  description: "Character description...",
  abilities: ["Ability 1", "Ability 2"],
  personality: "Character personality...",
  backstory: "Character backstory...",
  image: yourCharacterImage,
  gallery: [image1, image2, image3],
}
```

#### **3. Update Authentication Credentials**

```javascript
// src/contexts/AuthContext.jsx
// Admin credentials (line 35)
if (email === "your-new-email@domain.com" && password === "your-new-password") {
  // Admin login logic
}
```

#### **4. Customize Portfolio Content**

```javascript
// src/constants/index.js
const projects = [
  {
    name: "Your Artwork",
    description: "Artwork description...",
    image: artworkImage,
    source_code_link: "https://your-link.com",
  }
];
```

#### **5. Update Personal Information**

- **About Section**: Edit `src/components/About.jsx` with your artistic journey
- **Experience Timeline**: Modify `src/constants/index.js` for career milestones
- **Contact Details**: Update `src/components/Contact.jsx` for contact information
- **Skills & Tools**: Edit technology stack in `src/constants/index.js`

---

## 📁 Project Structure

```
lhyann-portfolio/
├── 📁 public/                   # Static assets and 3D models
│   ├── 📁 desktop_pc/           # Desktop PC 3D model with textures
│   ├── 📁 planet/               # Planet 3D model
│   ├── 📁 ship_in_clouds/       # Ship 3D model
│   ├── 📄 logo.svg              # Site logo
│   └── 📄 favicon.ico           # Site favicon
├── 📁 src/
│   ├── 📁 assets/               # Images, icons, and character assets
│   │   ├── 📁 company/          # Company/client logos
│   │   ├── 📁 tech/             # Technology and tool icons
│   │   ├── 📁 Reinay/           # Reinay character images
│   │   ├── 📁 Moon/             # Moon character images
│   │   ├── 📁 Coffee/           # Coffee character images
│   │   ├── 📁 Lilith/           # Lilith character images
│   │   └── 📄 index.js          # Asset exports
│   ├── 📁 components/           # React components
│   │   ├── 📁 canvas/           # 3D components
│   │   │   ├── 📄 Computers.jsx # Hero 3D model (desktop PC)
│   │   │   ├── 📄 Earth.jsx     # Contact section Earth model
│   │   │   ├── 📄 Ball.jsx      # Technology ball animations
│   │   │   └── 📄 Stars.jsx     # Background stars
│   │   ├── � admin/            # Admin panel components
│   │   │   ├── 📄 CharacterForm.jsx  # Character create/edit form
│   │   │   └── 🀽� CharacterList.jsx  # Character management list
│   │   ├── 📄 About.jsx         # About section
│   │   ├── 📄 Contact.jsx       # Contact form with EmailJS
│   │   ├── 📄 Experience.jsx    # Career timeline
│   │   ├── 📄 Feedbacks.jsx     # Client testimonials
│   │   ├── 📄 Hero.jsx          # Hero section with welcome messages
│   │   ├── 📄 Navbar.jsx        # Navigation with auth status
│   │   ├── 📄 Tech.jsx          # Skills and tools showcase
│   │   ├── 📄 Works.jsx         # Portfolio gallery
│   │   ├── 📄 Characters.jsx    # Character library with search/filter
│   │   ├── 📄 CharacterDetail.jsx # Individual character pages
│   │   ├── 📄 AdminPanel.jsx    # Admin dashboard
│   │   ├── 📄 Login.jsx         # Authentication page
│   │   ├── 📄 Loader.jsx        # Loading animation
│   │   └── 📄 index.js          # Component exports
│   ├── 📁 constants/            # Data and configuration
│   │   ├── 📄 index.js          # Portfolio data, testimonials, timeline
│   │   └── 📄 characters.js     # Character database with all OCs
│   ├── 📁 contexts/             # React Context providers
│   │   └── 📄 AuthContext.jsx   # Authentication context and logic
│   ├── 📁 hoc/                  # Higher-order components
│   │   ├── 📄 SectionWrapper.jsx # Section wrapper with animations
│   │   └── 📄 index.js          # HOC exports
│   ├── 📁 utils/                # Utility functions
│   │   ├── 📄 motion.js         # Framer Motion animation variants
│   │   └── 📄 characterStorage.js # localStorage CRUD utilities
│   ├── 📄 App.jsx               # Main app with routing and AuthProvider
│   ├── 📄 index.css             # Global styles and Tailwind imports
│   ├── 📄 main.jsx              # App entry point
│   └── 📄 styles.js             # Style constants and themes
├── 📄 index.html                # HTML template
├── 📄 package.json              # Dependencies and scripts
├── 📄 tailwind.config.cjs       # Tailwind CSS configuration
├── 📄 postcss.config.cjs        # PostCSS configuration
├── 📄 vite.config.js            # Vite build configuration
├── 📄 README.md                 # This documentation file
├── 📄 CRUD_SYSTEM_GUIDE.md      # CRUD system documentation
└── 📄 CUSTOMIZATION_GUIDE.md    # Detailed customization guide
```

---

## 🎯 Key Components

### **🔐 Authentication System (`AuthContext.jsx` + `Login.jsx`)**

- **Dual Login Types** - Admin and user authentication with different access levels
- **Persistent Sessions** - localStorage-based session management
- **Role-Based Access** - Different UI and functionality for admin vs users
- **Protected Routes** - Admin panel protection with redirect to login

### **🗃️ CRUD System (`AdminPanel.jsx` + `admin/` components)**

- **Character Management** - Complete CRUD operations for character database
- **Image Upload** - Local file handling with base64 storage
- **Data Export** - Automatic generation of deployable character database
- **Form Validation** - Comprehensive input validation and error handling

### **🏠 Hero Section (`Hero.jsx` + `Computers.jsx`)**

- **3D Desktop PC Model** - Interactive 3D environment with realistic lighting
- **Welcome Messages** - Personalized greetings for authenticated users
- **Animated Typography** - Smooth text animations with Framer Motion
- **Responsive Scaling** - Adaptive 3D model scaling for all devices

### **� Character System (`Characters.jsx` + `CharacterDetail.jsx`)**

- **Searchable Database** - Real-time search and filtering capabilities
- **Character Cards** - Interactive cards with hover effects and modals
- **Detail Pages** - Complete character profiles with image carousels
- **Dynamic Content** - Content loaded from localStorage with fallback to static data

### **👤 About Section (`About.jsx`)**

- **Service Cards** - Digital art services with tilt effects
- **Animated Reveals** - Scroll-triggered text and image animations
- **Skill Highlighting** - Interactive showcase of artistic abilities

### **💼 Portfolio Gallery (`Works.jsx`)**

- **Dynamic Gallery** - Shows 3 random characters from database
- **Project Showcase** - Featured artwork with descriptions and links
- **Tag Categorization** - Organized by art style and technique
- **Interactive Cards** - Smooth hover effects and animations

### **📞 Contact Form (`Contact.jsx` + `Earth.jsx`)**

- **EmailJS Integration** - Functional contact form with email delivery
- **3D Earth Background** - Rotating Earth model with realistic textures
- **Form Validation** - Client-side validation with success/error feedback
- **Responsive Design** - Mobile-optimized form layout

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

### **Pre-Deployment Checklist**

- [ ] Test admin login functionality (`lhyan@gmail.com` / `1234`)
- [ ] Verify character CRUD operations work properly
- [ ] Ensure all character images are properly exported
- [ ] Test user registration and authentication flow
- [ ] Confirm localStorage data persistence
- [ ] Validate responsive design on all devices
- [ ] Check 3D models load correctly
- [ ] Test contact form EmailJS integration

### **Deployment Platforms**

#### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Import project to Vercel dashboard
3. Configure environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_production_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_production_template_id
   VITE_EMAILJS_USER_ID=your_production_user_id
   ```
4. Deploy automatically with each push to main branch

#### **Netlify**

1. Build the project locally: `npm run build`
2. Drag and drop `dist` folder to Netlify dashboard
3. Configure redirects for SPA in `public/_redirects`:
   ```
   /*    /index.html   200
   ```
4. Set environment variables in site settings

#### **GitHub Pages**

```bash
# Install and configure gh-pages
npm install -g gh-pages
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist

# Or add to package.json scripts
"deploy": "gh-pages -d dist"
```

### **Local Data Export for Deployment**

The CRUD system automatically exports character data to `src/constants/characters.js` including:

- All character information
- Base64 encoded images for self-contained deployment
- Proper import/export structure for React components

```bash
# After adding characters via admin panel
1. Characters are automatically exported to characters.js
2. Images are converted to base64 and included
3. No external image dependencies required
4. Ready for static hosting deployment
```

### **Environment Variables for Production**

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_production_service_id
VITE_EMAILJS_TEMPLATE_ID=your_production_template_id
VITE_EMAILJS_USER_ID=your_production_user_id

# Optional: Custom Admin Credentials (modify AuthContext.jsx)
VITE_ADMIN_EMAIL=custom_admin@email.com
VITE_ADMIN_PASSWORD=custom_admin_password
```

### **Production Optimizations**

- Automatic code splitting with Vite
- Image optimization and lazy loading
- 3D model compression and efficient loading
- CSS purging with Tailwind
- Service worker for offline capability (optional)

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

- Follow React best practices and hooks patterns
- Use meaningful commit messages following conventional commits
- Add comments for complex logic, especially 3D and animation code
- Test on multiple devices and browsers
- Optimize performance for 3D models and animations
- Maintain the existing authentication and CRUD system structure
- Ensure localStorage compatibility across different browsers

### **Contribution Areas**

- 🎨 **Character Art** - Add new character designs and artwork
- 🔧 **Features** - Enhance CRUD system or add new functionality
- 🎪 **3D Models** - Contribute new 3D models or improve existing ones
- 📱 **Mobile UX** - Improve mobile responsiveness and touch interactions
- 🔐 **Security** - Enhance authentication system (future backend integration)
- 🎯 **Performance** - Optimize loading times and 3D rendering
- 📝 **Documentation** - Improve documentation and guides

### **Code Style**

- Use functional components with hooks
- Follow Tailwind CSS utility classes
- Implement Framer Motion for animations
- Maintain consistent file and folder structure
- Use TypeScript-style JSDoc comments for complex functions

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Lhyann Digital Character Artist Portfolio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### **Portfolio Owner**

- **Artist**: Lhyann
- **Specialty**: Digital Character Design & Original Character Creation
- **Email**: lhyan@gmail.com (Admin Access)
- **Portfolio**: [lhyann-portfolio.com](https://your-portfolio-url.com)
- **Commission Inquiries**: Available through the portfolio contact form

### **Technical Support**

- **Developer**: Portfolio Development Team
- **GitHub**: [@your-github](https://github.com/your-username)
- **Issues**: [GitHub Issues](https://github.com/your-username/lhyann-portfolio/issues)
- **Documentation**: [Wiki](https://github.com/your-username/lhyann-portfolio/wiki)

### **Features & Capabilities**

- 🎨 **Character Design** - Original character creation and development
- 🖼️ **Digital Illustration** - High-quality digital artwork and portraits
- 📖 **Story Creation** - Character backstories and world-building
- 🎭 **Concept Art** - Visual development for characters and environments
- 💼 **Commission Work** - Custom character designs for clients
- 🗃️ **Portfolio Management** - Full CRUD system for content management

---

<div align="center">
  <h3>🌟 Thank you for exploring Lhyann's Digital Character Artist Portfolio! 🌟</h3>
  <p>A complete portfolio solution with authentication, CRUD management, and immersive 3D experience</p>
  <p>If you found this project helpful, please consider giving it a ⭐</p>

<br />

<img src="https://img.shields.io/github/stars/Andert51/TH_Lh-portf01" alt="GitHub stars" />
  <img src="https://img.shields.io/github/forks/Andert51/TH_Lh-portf01" alt="GitHub forks" />
  <img src="https://img.shields.io/github/watchers/Andert51/TH_Lh-portf01" alt="GitHub watchers" />
</div>

---

<div align="center">
  <h4>🚀 **New in v2.0** - Full Authentication & CRUD System!</h4>
  <p>✅ Admin Panel • ✅ User Registration • ✅ Character Management • ✅ Local Storage • ✅ Data Export</p>
  <br />
  <sub>Built with ❤️ for digital artists and character creators worldwide</sub>
</div>
