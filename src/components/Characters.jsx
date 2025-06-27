import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { charactersDatabase, characterCategories, characterElements } from "../constants/characters";
import { fadeIn, textVariant } from "../utils/motion";

const CharacterCard = ({ character, index, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(character);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <div 
        className='bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full cursor-pointer hover:shadow-lg transition-all duration-300'
        onClick={handleClick}
      >
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1.02}
          transitionSpeed={450}
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
      </div>
    </motion.div>
  );
};

const Characters = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedElement, setSelectedElement] = useState("All");

  const filteredCharacters = charactersDatabase.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.backstory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || character.category === selectedCategory;
    const matchesElement = selectedElement === "All" || character.element === selectedElement;
    
    return matchesSearch && matchesCategory && matchesElement;
  });

  const handleCharacterClick = (character) => {
    console.log('Character clicked:', character);
    console.log('Navigating to:', `/character/${character.id}`);
    navigate(`/character/${character.id}`);
  };

  return (
    <div className='bg-primary min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className='max-w-7xl mx-auto px-6 py-20 pt-32'>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={`${styles.sectionSubText}`}>Character Database</p>
            <h2 className={`${styles.sectionHeadText}`}>Character Library.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Explore the complete collection of original characters, each with unique personalities, 
            abilities, and rich backstories. Discover their origins, relationships, and the worlds 
            they inhabit in this comprehensive character database.
          </motion.p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Search and Filters */}
        <motion.div 
          variants={fadeIn("up", "", 0.3, 1)}
          initial="hidden"
          animate="show"
          className='bg-tertiary p-6 rounded-2xl mb-8'
        >
          {/* Search Bar */}
          <div className='relative max-w-md mb-6'>
            <input
              type="text"
              placeholder="Search characters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
            />
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
              <svg className='w-5 h-5 text-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className='flex flex-wrap gap-4 mb-4'>
            <div>
              <label className='text-secondary text-[14px] mb-2 block'>Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='bg-black-200 py-2 px-3 text-white rounded-lg outline-none border-none font-medium'
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
                className='bg-black-200 py-2 px-3 text-white rounded-lg outline-none border-none font-medium'
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
        </motion.div>

        {/* Characters Grid */}
        <motion.div 
          variants={fadeIn("up", "", 0.5, 1)}
          initial="hidden"
          animate="show"
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        >
          {filteredCharacters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              index={index}
              onClick={handleCharacterClick}
            />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredCharacters.length === 0 && (
          <motion.div 
            variants={fadeIn("up", "", 0.7, 1)}
            initial="hidden"
            animate="show"
            className='mt-20 text-center'
          >
            <p className='text-secondary text-[18px] mb-4'>No characters found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedElement("All");
              }}
              className='bg-tertiary py-2 px-6 rounded-lg text-white hover:bg-black-200 transition-colors'
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Characters;
