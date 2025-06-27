import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { getCharacters } from "../utils/characterStorage";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { github, close } from "../assets";

const CharacterDetail = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    loadCharacter();
  }, [characterId]);

  const loadCharacter = async () => {
    try {
      const characters = await getCharacters();
      const foundCharacter = characters.find(
        (char) => char.id === parseInt(characterId)
      );
      setCharacter(foundCharacter);
    } catch (error) {
      console.error("Error loading character:", error);
    }
  };

  if (!character) {
    return (
      <div className='bg-primary min-h-screen flex items-center justify-center'>
        <div className='text-white text-center'>
          <h1 className='text-4xl font-bold mb-4'>Character Not Found</h1>
          <button
            onClick={() => navigate('/characters')}
            className='bg-tertiary py-3 px-6 rounded-xl text-white font-bold hover:bg-[#1a1a3a] transition-colors'
          >
            Back to Characters
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === character.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? character.gallery.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='bg-primary min-h-screen'>
      {/* Header with back button */}
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className='max-w-7xl mx-auto px-6 pt-32 pb-8'>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/characters')}
            className='flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 z-10 relative'
          >
            <span className='text-2xl'>←</span>
            <span className='font-medium'>Back to Characters</span>
          </motion.button>

          <motion.div
            variants={textVariant()}
            initial="hidden"
            animate="show"
            className='text-center'
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              {character.name}
            </h1>
            <p className={`${styles.heroSubText} text-secondary mt-4`}>
              {character.title}
            </p>
          </motion.div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Image Carousel */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className='relative'
          >
            <div className='relative bg-tertiary rounded-2xl p-6 h-[500px]'>
              <div className='relative h-full w-full rounded-xl overflow-hidden'>
                <img
                  src={character.gallery[currentImageIndex]}
                  alt={`${character.name} - Image ${currentImageIndex + 1}`}
                  className='w-full h-full object-cover'
                />
                
                {/* Navigation arrows */}
                {character.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors'
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors'
                    >
                      →
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className='absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm'>
                  {currentImageIndex + 1} / {character.gallery.length}
                </div>
              </div>

              {/* Thumbnail navigation */}
              {character.gallery.length > 1 && (
                <div className='flex gap-2 mt-4 justify-center'>
                  {character.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-white' 
                          : 'border-transparent opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className='w-full h-full object-cover'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Character Information */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className='space-y-6'
          >
            {/* Basic Info Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <div className='bg-tertiary p-6 rounded-2xl'>
                <h3 className='text-white text-2xl font-bold mb-4'>Character Info</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <p className='text-secondary text-sm'>Age</p>
                    <p className='text-white font-semibold'>{character.age}</p>
                  </div>
                  <div>
                    <p className='text-secondary text-sm'>Origin</p>
                    <p className='text-white font-semibold'>{character.origin}</p>
                  </div>
                  <div>
                    <p className='text-secondary text-sm'>Element</p>
                    <span className='inline-block px-3 py-1 rounded-full bg-violet-gradient text-white text-sm font-semibold'>
                      {character.element}
                    </span>
                  </div>
                  <div>
                    <p className='text-secondary text-sm'>Category</p>
                    <span className='inline-block px-3 py-1 rounded-full bg-black-200 text-secondary text-sm font-semibold'>
                      {character.category}
                    </span>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Personality Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <div className='bg-tertiary p-6 rounded-2xl'>
                <h3 className='text-white text-xl font-bold mb-3'>Personality</h3>
                <p className='text-secondary leading-relaxed'>{character.personality}</p>
              </div>
            </Tilt>

            {/* Abilities Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <div className='bg-tertiary p-6 rounded-2xl'>
                <h3 className='text-white text-xl font-bold mb-3'>Abilities</h3>
                <div className='flex flex-wrap gap-2'>
                  {character.abilities.map((ability, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-black-200 text-white rounded-full text-sm'
                    >
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>

            {/* Tags Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <div className='bg-tertiary p-6 rounded-2xl'>
                <h3 className='text-white text-xl font-bold mb-3'>Tags</h3>
                <div className='flex flex-wrap gap-2'>
                  {character.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-green-gradient text-white rounded-full text-sm font-semibold'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Description Card - Full Width */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          animate="show"
          className='mt-12'
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
            <div className='bg-tertiary p-8 rounded-2xl'>
              <h3 className='text-white text-2xl font-bold mb-4'>Description</h3>
              <p className='text-secondary leading-relaxed text-lg'>
                {character.description}
              </p>
            </div>
          </Tilt>
        </motion.div>

        {/* Backstory Card - Full Width */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          initial="hidden"
          animate="show"
          className='mt-8'
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
            <div className='bg-tertiary p-8 rounded-2xl'>
              <h3 className='text-white text-2xl font-bold mb-4'>Backstory</h3>
              <p className='text-secondary leading-relaxed text-lg'>
                {character.backstory}
              </p>
            </div>
          </Tilt>
        </motion.div>

        {/* Back to Characters Button */}
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          initial="hidden"
          animate="show"
          className='flex justify-center mt-12'
        >
          <button
            onClick={() => navigate('/characters')}
            className='bg-tertiary py-4 px-8 rounded-xl text-white font-bold hover:bg-[#1a1a3a] transition-colors duration-300 shadow-lg'
          >
            ← Back to Character Library
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterDetail;
