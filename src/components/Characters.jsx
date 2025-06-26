import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { charactersDatabase, characterCategories, characterElements } from "../constants/characters";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CharacterCard = ({ character, index, onClick }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full cursor-pointer hover:shadow-lg transition-all duration-300'
        onClick={() => onClick(character)}
      >
        <div className='relative w-full h-[200px]'>
          <img
            src={character.image}
            alt={character.name}
            className='w-full h-full object-cover rounded-xl'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl' />
          <div className='absolute bottom-3 left-3'>
            <h3 className='text-white font-bold text-[18px]'>{character.name}</h3>
            <p className='text-secondary text-[12px]'>{character.title}</p>
          </div>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-[12px] px-2 py-1 rounded-full bg-black-200 text-secondary'>
              {character.category}
            </span>
            <span className='text-[12px] px-2 py-1 rounded-full bg-violet-gradient text-white'>
              {character.element}
            </span>
          </div>
          <p className='text-secondary text-[13px] leading-relaxed line-clamp-3'>
            {character.description}
          </p>
        </div>

        <div className='mt-3 flex flex-wrap gap-1'>
          {character.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className='text-[10px] px-2 py-1 rounded-full bg-black-100 text-secondary'
            >
              #{tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const CharacterModal = ({ character, isOpen, onClose }) => {
  if (!isOpen || !character) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className='bg-tertiary rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto m-4'
      >
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h2 className='text-white text-[28px] font-bold'>{character.name}</h2>
            <p className='text-secondary text-[16px]'>{character.title}</p>
          </div>
          <button
            onClick={onClose}
            className='text-white hover:text-secondary transition-colors text-2xl font-bold'
          >
            ×
          </button>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <img
              src={character.image}
              alt={character.name}
              className='w-full h-[300px] object-cover rounded-xl mb-4'
            />
            
            <div className='grid grid-cols-3 gap-2'>
              {character.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${character.name} ${index + 1}`}
                  className='w-full h-[80px] object-cover rounded-lg'
                />
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='text-white text-[18px] font-semibold mb-2'>Character Info</h3>
              <div className='space-y-2 text-[14px]'>
                <p><span className='text-secondary'>Age:</span> <span className='text-white'>{character.age}</span></p>
                <p><span className='text-secondary'>Origin:</span> <span className='text-white'>{character.origin}</span></p>
                <p><span className='text-secondary'>Element:</span> <span className='text-white'>{character.element}</span></p>
                <p><span className='text-secondary'>Category:</span> <span className='text-white'>{character.category}</span></p>
              </div>
            </div>

            <div>
              <h3 className='text-white text-[18px] font-semibold mb-2'>Personality</h3>
              <p className='text-secondary text-[14px]'>{character.personality}</p>
            </div>

            <div>
              <h3 className='text-white text-[18px] font-semibold mb-2'>Abilities</h3>
              <ul className='text-secondary text-[14px] space-y-1'>
                {character.abilities.map((ability, index) => (
                  <li key={index}>• {ability}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-white text-[18px] font-semibold mb-2'>Backstory</h3>
              <p className='text-secondary text-[14px] leading-relaxed'>{character.backstory}</p>
            </div>

            <div>
              <h3 className='text-white text-[18px] font-semibold mb-2'>Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {character.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='text-[12px] px-3 py-1 rounded-full bg-black-200 text-secondary'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedElement, setSelectedElement] = useState("All");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCharacters = charactersDatabase.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.backstory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || character.category === selectedCategory;
    const matchesElement = selectedElement === "All" || character.element === selectedElement;
    
    return matchesSearch && matchesCategory && matchesElement;
  });

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Character Database</p>
        <h2 className={`${styles.sectionHeadText}`}>Character Library.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Explore the complete collection of original characters, each with unique personalities, 
        abilities, and rich backstories. Discover their origins, relationships, and the worlds 
        they inhabit in this comprehensive character database.
      </motion.p>

      {/* Search and Filters */}
      <div className='mt-10 space-y-4'>
        {/* Search Bar */}
        <div className='relative max-w-md'>
          <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
          />
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
            <svg className='w-5 h-5 text-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className='flex flex-wrap gap-4'>
          <div>
            <label className='text-secondary text-[14px] mb-2 block'>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='bg-tertiary py-2 px-3 text-white rounded-lg outline-none border-none font-medium'
            >
              {characterCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className='text-secondary text-[14px] mb-2 block'>Element</label>
            <select
              value={selectedElement}
              onChange={(e) => setSelectedElement(e.target.value)}
              className='bg-tertiary py-2 px-3 text-white rounded-lg outline-none border-none font-medium'
            >
              {characterElements.map(element => (
                <option key={element} value={element}>{element}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className='text-secondary text-[14px]'>
          Showing {filteredCharacters.length} of {charactersDatabase.length} characters
        </p>
      </div>

      {/* Characters Grid */}
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {filteredCharacters.map((character, index) => (
          <CharacterCard
            key={character.id}
            character={character}
            index={index}
            onClick={handleCharacterClick}
          />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className='mt-20 text-center'>
          <p className='text-secondary text-[18px]'>No characters found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedElement("All");
            }}
            className='mt-4 bg-tertiary py-2 px-6 rounded-lg text-white hover:bg-black-200 transition-colors'
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Character Modal */}
      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SectionWrapper(Characters, "characters");
