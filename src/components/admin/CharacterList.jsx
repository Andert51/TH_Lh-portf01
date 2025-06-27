import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { getCharacters, deleteCharacter } from "../../utils/characterStorage";

const CharacterList = ({ onEdit }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const characterData = await getCharacters();
      setCharacters(characterData);
    } catch (error) {
      console.error("Error loading characters:", error);
      setMessage("Error loading characters");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (characterId) => {
    if (window.confirm("Are you sure you want to delete this character?")) {
      try {
        await deleteCharacter(characterId);
        setCharacters(characters.filter(char => char.id !== characterId));
        setMessage("Character deleted successfully");
        setTimeout(() => setMessage(""), 3000);
      } catch (error) {
        console.error("Error deleting character:", error);
        setMessage("Error deleting character");
      }
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='text-white text-xl'>Loading characters...</div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "", 0.2, 1)}
      initial="hidden"
      animate="show"
    >
      {message && (
        <div className={`mb-4 p-3 rounded-lg ${message.includes("Error") ? "bg-red-600" : "bg-green-600"} text-white`}>
          {message}
        </div>
      )}

      {characters.length === 0 ? (
        <div className='text-center py-12'>
          <div className='text-secondary text-xl mb-4'>No characters found</div>
          <div className='text-secondary'>Add your first character to get started!</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className='bg-tertiary p-6 rounded-2xl'
            >
              {/* Character Image */}
              <div className='relative w-full h-[200px] mb-4'>
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

              {/* Character Info */}
              <div className='mb-4'>
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

              {/* Action Buttons */}
              <div className='flex gap-2'>
                <button
                  onClick={() => onEdit(character)}
                  className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(character.id)}
                  className='flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors'
                >
                  Delete
                </button>
              </div>

              {/* Character Stats */}
              <div className='mt-4 text-[12px] text-secondary'>
                <div>Age: {character.age}</div>
                <div>Origin: {character.origin}</div>
                <div>Gallery: {character.gallery?.length || 0} images</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CharacterList;
