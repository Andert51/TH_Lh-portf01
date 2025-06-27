import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { characterCategories, characterElements } from "../../constants/characters";
import { saveCharacter, saveCharacterImages } from "../../utils/characterStorage";

const CharacterForm = ({ character, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    category: "Lost Souls",
    element: "Curiosity",
    age: "",
    origin: "",
    personality: "",
    abilities: "",
    backstory: "",
    description: "",
    tags: "",
  });

  const [images, setImages] = useState({
    main: null,
    gallery: []
  });

  const [imagePreviews, setImagePreviews] = useState({
    main: null,
    gallery: []
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (character) {
      setFormData({
        name: character.name || "",
        title: character.title || "",
        category: character.category || "Lost Souls",
        element: character.element || "Curiosity",
        age: character.age || "",
        origin: character.origin || "",
        personality: character.personality || "",
        abilities: Array.isArray(character.abilities) ? character.abilities.join(", ") : character.abilities || "",
        backstory: character.backstory || "",
        description: character.description || "",
        tags: Array.isArray(character.tags) ? character.tags.join(", ") : character.tags || "",
      });
    }
  }, [character]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(prev => ({ ...prev, main: file }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => ({ ...prev, main: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => ({ ...prev, gallery: files }));
    
    const previews = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        if (previews.length === files.length) {
          setImagePreviews(prev => ({ ...prev, gallery: previews }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Prepare character data
      const characterData = {
        ...formData,
        id: character?.id || Date.now(),
        abilities: formData.abilities.split(",").map(ability => ability.trim()),
        tags: formData.tags.split(",").map(tag => tag.trim()),
      };

      // Save images if provided
      if (images.main || images.gallery.length > 0) {
        const imagePaths = await saveCharacterImages(characterData.id, images);
        characterData.image = imagePaths.main || character?.image;
        characterData.gallery = imagePaths.gallery.length > 0 ? imagePaths.gallery : character?.gallery || [];
      } else if (character) {
        // Keep existing images if no new ones uploaded
        characterData.image = character.image;
        characterData.gallery = character.gallery;
      }

      // Save character
      await saveCharacter(characterData);
      
      setMessage("Character saved successfully!");
      setTimeout(() => {
        onBack();
      }, 1500);

    } catch (error) {
      console.error("Error saving character:", error);
      setMessage("Error saving character. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "", 0.2, 1)}
      initial="hidden"
      animate="show"
      className='bg-tertiary p-8 rounded-2xl'
    >
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-white font-bold text-[24px]'>
          {character ? "Edit Character" : "Add New Character"}
        </h3>
        <button
          onClick={onBack}
          className='text-secondary hover:text-white transition-colors'
        >
          ← Back to List
        </button>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Basic Information */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='text-white font-medium mb-2 block'>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
              placeholder="Character name"
            />
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
              placeholder="Character title"
            />
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium'
            >
              {characterCategories.filter(cat => cat !== "All").map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Element *</label>
            <select
              name="element"
              value={formData.element}
              onChange={handleInputChange}
              required
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium'
            >
              {characterElements.filter(el => el !== "All").map(element => (
                <option key={element} value={element}>{element}</option>
              ))}
            </select>
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
              placeholder="e.g., 25 years, Eternal, Unknown"
            />
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Origin</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleInputChange}
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
              placeholder="Character's origin"
            />
          </div>
        </div>

        {/* Detailed Information */}
        <div>
          <label className='text-white font-medium mb-2 block'>Personality</label>
          <input
            type="text"
            name="personality"
            value={formData.personality}
            onChange={handleInputChange}
            className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
            placeholder="e.g., Curious, brave, determined"
          />
        </div>

        <div>
          <label className='text-white font-medium mb-2 block'>Abilities</label>
          <input
            type="text"
            name="abilities"
            value={formData.abilities}
            onChange={handleInputChange}
            className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
            placeholder="Separate abilities with commas"
          />
        </div>

        <div>
          <label className='text-white font-medium mb-2 block'>Backstory *</label>
          <textarea
            name="backstory"
            value={formData.backstory}
            onChange={handleInputChange}
            required
            rows={4}
            className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary resize-none'
            placeholder="Character's backstory and history"
          />
        </div>

        <div>
          <label className='text-white font-medium mb-2 block'>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={3}
            className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary resize-none'
            placeholder="Physical description and appearance"
          />
        </div>

        <div>
          <label className='text-white font-medium mb-2 block'>Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
            placeholder="Separate tags with commas"
          />
        </div>

        {/* Image Upload */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='text-white font-medium mb-2 block'>Main Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
            />
            {imagePreviews.main && (
              <div className='mt-2'>
                <img 
                  src={imagePreviews.main} 
                  alt="Main preview" 
                  className='w-24 h-24 object-cover rounded-lg'
                />
              </div>
            )}
          </div>

          <div>
            <label className='text-white font-medium mb-2 block'>Gallery Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryImagesChange}
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
            />
            {imagePreviews.gallery.length > 0 && (
              <div className='mt-2 flex gap-2 flex-wrap'>
                {imagePreviews.gallery.map((preview, index) => (
                  <img 
                    key={index}
                    src={preview} 
                    alt={`Gallery preview ${index + 1}`} 
                    className='w-16 h-16 object-cover rounded-lg'
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`p-3 rounded-lg ${message.includes("Error") ? "bg-red-600" : "bg-green-600"} text-white`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <div className='flex justify-end gap-4'>
          <button
            type="button"
            onClick={onBack}
            className='bg-black-200 py-3 px-8 rounded-lg text-secondary hover:text-white transition-colors'
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-lg text-white font-bold hover:bg-[#1a1a3a] transition-colors disabled:opacity-50'
          >
            {loading ? "Saving..." : (character ? "Update Character" : "Create Character")}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default CharacterForm;
