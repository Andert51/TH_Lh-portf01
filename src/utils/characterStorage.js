import { charactersDatabase } from "../constants/characters";

// Local storage keys
const CHARACTERS_STORAGE_KEY = "lhyann_characters";
const IMAGES_STORAGE_KEY = "lhyann_character_images";

// Initialize storage with existing characters if empty
const initializeStorage = () => {
  const existingCharacters = localStorage.getItem(CHARACTERS_STORAGE_KEY);
  if (!existingCharacters) {
    localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(charactersDatabase));
  }
  
  const existingImages = localStorage.getItem(IMAGES_STORAGE_KEY);
  if (!existingImages) {
    localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify({}));
  }
};

// Get all characters
export const getCharacters = async () => {
  initializeStorage();
  const characters = localStorage.getItem(CHARACTERS_STORAGE_KEY);
  return characters ? JSON.parse(characters) : [];
};

// Save a character
export const saveCharacter = async (character) => {
  const characters = await getCharacters();
  const existingIndex = characters.findIndex(c => c.id === character.id);
  
  if (existingIndex >= 0) {
    // Update existing character
    characters[existingIndex] = character;
  } else {
    // Add new character
    characters.push(character);
  }
  
  localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(characters));
  
  // Update the main characters database file for deployment
  await updateCharactersFile(characters);
  
  return character;
};

// Delete a character
export const deleteCharacter = async (characterId) => {
  const characters = await getCharacters();
  const filteredCharacters = characters.filter(c => c.id !== characterId);
  
  localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(filteredCharacters));
  
  // Remove character images
  const images = JSON.parse(localStorage.getItem(IMAGES_STORAGE_KEY) || "{}");
  delete images[characterId];
  localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(images));
  
  // Update the main characters database file for deployment
  await updateCharactersFile(filteredCharacters);
  
  return true;
};

// Save character images to localStorage as base64
export const saveCharacterImages = async (characterId, images) => {
  const storedImages = JSON.parse(localStorage.getItem(IMAGES_STORAGE_KEY) || "{}");
  
  if (!storedImages[characterId]) {
    storedImages[characterId] = { main: null, gallery: [] };
  }
  
  const result = { main: null, gallery: [] };
  
  // Handle main image
  if (images.main) {
    const base64 = await fileToBase64(images.main);
    storedImages[characterId].main = base64;
    result.main = base64;
  }
  
  // Handle gallery images
  if (images.gallery && images.gallery.length > 0) {
    const galleryBase64 = [];
    for (const file of images.gallery) {
      const base64 = await fileToBase64(file);
      galleryBase64.push(base64);
    }
    storedImages[characterId].gallery = galleryBase64;
    result.gallery = galleryBase64;
  }
  
  localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(storedImages));
  return result;
};

// Get character images
export const getCharacterImages = (characterId) => {
  const images = JSON.parse(localStorage.getItem(IMAGES_STORAGE_KEY) || "{}");
  return images[characterId] || { main: null, gallery: [] };
};

// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// Update the characters.js file (for development - in production, this would be handled by the backend)
const updateCharactersFile = async (characters) => {
  try {
    // This creates a downloadable file that can be used to update the characters.js
    const charactersContent = generateCharactersFileContent(characters);
    
    // Store in localStorage for manual export
    localStorage.setItem("characters_export", charactersContent);
    
    console.log("Characters data updated. Use exportCharactersFile() to download the updated characters.js file.");
  } catch (error) {
    console.error("Error updating characters file:", error);
  }
};

// Generate the content for characters.js file
const generateCharactersFileContent = (characters) => {
  // Create import statements for images
  const imageImports = [];
  const seenImages = new Set();
  
  characters.forEach(character => {
    if (character.image && typeof character.image === 'string' && character.image.includes('import')) {
      // Skip base64 images, only handle import statements
      return;
    }
    
    // For existing imported images, keep the import
    if (character.image && !character.image.startsWith('data:')) {
      const imageName = character.image.split('/').pop().split('.')[0];
      if (!seenImages.has(imageName)) {
        seenImages.add(imageName);
        imageImports.push(`  ${imageName}`);
      }
    }
  });
  
  const imports = `import { 
${imageImports.join(',\n')}
} from "../assets";`;

  const charactersArray = JSON.stringify(characters, null, 2)
    .replace(/"image":\s*"([^"]+)"/g, (match, imagePath) => {
      if (imagePath.startsWith('data:')) {
        return `"image": "${imagePath}"`;
      }
      const imageName = imagePath.split('/').pop().split('.')[0];
      return `"image": ${imageName}`;
    });

  const categories = [...new Set(characters.map(c => c.category))].sort();
  const elements = [...new Set(characters.map(c => c.element))].sort();

  return `${imports}

export const charactersDatabase = ${charactersArray};

export const characterCategories = [
  "All",
  ${categories.map(cat => `"${cat}"`).join(',\n  ')}
];

export const characterElements = [
  "All",
  ${elements.map(el => `"${el}"`).join(',\n  ')}
];`;
};

// Export function to download the updated characters.js file
export const exportCharactersFile = () => {
  const content = localStorage.getItem("characters_export");
  if (!content) {
    alert("No characters data to export. Save a character first.");
    return;
  }
  
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'characters.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Initialize storage on module load
initializeStorage();
