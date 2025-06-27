# 🎨 Lhyann Portfolio Customization Guide

This guide will help you add your own characters, images, and customize the portfolio with your artwork.

## 📁 File Structure Overview

```
src/
├── assets/                    # All images and icons
│   ├── index.js              # Asset exports
│   ├── company/              # Company logos (for experience section)
│   ├── tech/                 # Technology icons
│   └── [your-images].png     # Your character art files
├── constants/
│   ├── index.js              # Main portfolio data
│   └── characters.js         # Character database
└── components/
    ├── Characters.jsx        # Character library page
    └── [other components]
```

## 🖼️ Adding Your Character Images

### Step 1: Add Image Files
1. Place your character artwork in `src/assets/` folder
2. Recommended formats: `.png`, `.jpg`, `.webp`
3. Recommended dimensions:
   - Main character portraits: 400x600px (aspect ratio 2:3)
   - Gallery images: 800x600px or larger
   - Thumbnails: 320x240px

### Step 2: Export Images in index.js
Add your images to `src/assets/index.js`:

```javascript
// Add your images
import character1 from "./character1.png";
import character2 from "./character2.png";
import character1_gallery1 from "./character1_gallery1.png";

export {
  // ... existing exports
  character1,
  character2,
  character1_gallery1,
};
```

## 👥 Adding Your Characters

### Edit `src/constants/characters.js`

1. **Import your images** at the top:
```javascript
import { 
  carrent, jobit, tripguide, // existing
  character1, character2, character1_gallery1 // your new images
} from "../assets";
```

2. **Add your characters** to the `charactersDatabase` array:
```javascript
{
  id: 7, // Make sure this is unique
  name: "Your Character Name",
  title: "Character Title/Role",
  category: "Your Category", // Add to characterCategories if new
  element: "Your Element", // Add to characterElements if new
  age: "Character Age",
  origin: "Where they're from",
  personality: "personality traits, separated by commas",
  abilities: ["Ability 1", "Ability 2", "Ability 3"],
  backstory: "Detailed character backstory and lore. This can be several sentences describing their history, motivations, and role in their world.",
  description: "Physical description of the character's appearance and notable features.",
  tags: ["tag1", "tag2", "tag3", "tag4"], // For searching
  image: character1, // Main portrait
  gallery: [character1, character1_gallery1, character2], // Multiple images
},
```

3. **Update categories and elements** if you add new ones:
```javascript
export const characterCategories = [
  "All",
  "Ethereal Guardians",
  "Urban Legends", 
  "Dreamscape Chronicles",
  "Your New Category", // Add here
];

export const characterElements = [
  "All",
  "Shadow",
  "Technology", 
  "Dreams",
  "Storm",
  "Memory",
  "Stars",
  "Your New Element", // Add here
];
```

## 🖼️ Updating Main Gallery (Works Section)

Edit `src/constants/index.js` to update the main gallery:

1. **Import your gallery images**:
```javascript
import {
  // ... existing imports
  yourProject1,
  yourProject2,
  yourProject3,
} from "../assets";
```

2. **Update the projects array**:
```javascript
const projects = [
  {
    name: "Your Project Name",
    description: "Detailed description of your artwork series or project. Explain the concept, inspiration, and what makes it special.",
    tags: [
      {
        name: "fantasy", // Use relevant tags
        color: "blue-text-gradient",
      },
      {
        name: "characterdesign",
        color: "green-text-gradient", 
      },
      {
        name: "digitalart",
        color: "pink-text-gradient",
      },
    ],
    image: yourProject1,
    source_code_link: "https://your-portfolio-link.com/", // Link to your art
  },
  // Add more projects...
];
```

## 🎨 Customizing Your Brand

### Update Personal Information

In `src/constants/index.js`:

1. **Update experiences** with your real art journey:
```javascript
const experiences = [
  {
    title: "Your Actual Role",
    company_name: "Your Studio/Freelance",
    icon: starbucks, // Use appropriate icon
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Your actual achievements and experience",
      "What you accomplished in this role",
      "Skills you developed",
      "Notable projects or clients",
    ],
  },
  // Add your real experiences...
];
```

2. **Update testimonials** with real client feedback:
```javascript
const testimonials = [
  {
    testimonial: "Real testimonial from your client about your work",
    name: "Client Name",
    designation: "Their Role",
    company: "Their Company",
    image: "https://randomuser.me/api/portraits/women/4.jpg", // Or real photo
  },
  // Add real testimonials...
];
```

3. **Update services** to match your offerings:
```javascript
const services = [
  {
    title: "Your Service 1",
    icon: creator, // Choose appropriate icon
  },
  {
    title: "Your Service 2", 
    icon: web,
  },
  // Add your actual services...
];
```

### Update About Section

In `src/components/About.jsx`, replace the about text with your personal story:

```javascript
I'm [Your Name], a passionate digital character artist specializing in [your specialties]. 
With expertise in [your skills], I bring [your unique value proposition]. 
[Your personal story and what drives your art]...
```

### Update Contact Information

In `src/components/Contact.jsx`, update:
- Your name in the form
- Your email address
- Any contact links

## 🎭 Adding New Character Categories

If you want to add completely new character series:

1. **Create new category** in `characters.js`:
```javascript
export const characterCategories = [
  "All",
  "Ethereal Guardians",
  "Urban Legends", 
  "Dreamscape Chronicles",
  "Sci-Fi Warriors", // New category
  "Mythical Beasts",  // Another new category
];
```

2. **Add characters** with the new category:
```javascript
{
  id: 8,
  name: "Cyber Knight Zara",
  category: "Sci-Fi Warriors", // Matches new category
  // ... rest of character data
}
```

## 🔧 Technical Tips

### Image Optimization
- Use WebP format for better compression
- Optimize images before adding (tools: TinyPNG, Squoosh)
- Keep file sizes under 500KB for web performance

### Naming Conventions
- Use descriptive filenames: `character_name_portrait.png`
- No spaces in filenames, use underscores or hyphens
- Be consistent with naming

### Testing Your Changes
1. Save all files
2. Check the browser (it should auto-reload)
3. Test both the main gallery and Characters page
4. Check mobile responsiveness

## 🎨 Style Customization

### Colors
The site uses Tailwind CSS. Main colors are defined in the design system:
- Primary: Dark background
- Secondary: Gray text
- Accent: Purple/pink gradients

### Fonts
- Main font: Poppins
- You can change this in `src/styles.js`

## 📱 Responsive Design

The portfolio is fully responsive. Your images will automatically adapt to:
- Desktop (large screens)
- Tablet (medium screens) 
- Mobile (small screens)

## 🚀 Deployment Tips

When ready to deploy:
1. Build the project: `npm run build`
2. Test the build: `npm run preview`
3. Deploy the `dist` folder to your hosting service

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Ensure all file paths are correct
3. Verify image files are properly imported
4. Make sure object IDs are unique

## 🎯 Quick Start Checklist

- [ ] Add your character artwork to `src/assets/`
- [ ] Export images in `src/assets/index.js`
- [ ] Add characters to `src/constants/characters.js`
- [ ] Update main gallery in `src/constants/index.js`
- [ ] Update personal info (About, Contact, Experiences)
- [ ] Test everything works
- [ ] Replace placeholder images with your art
- [ ] Update logo and branding

Happy customizing! 🎨✨
