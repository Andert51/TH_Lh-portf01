import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { exportCharactersFile } from "../utils/characterStorage";
import { useAuth } from "../contexts/AuthContext";
import CharacterForm from "./admin/CharacterForm";
import CharacterList from "./admin/CharacterList";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [editingCharacter, setEditingCharacter] = useState(null);
  const { isAdmin, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect non-admin users
    if (!isLoggedIn || !isAdmin) {
      navigate("/login");
    }
  }, [isLoggedIn, isAdmin, navigate]);

  // Show loading or redirect message if not authorized
  if (!isLoggedIn || !isAdmin) {
    return (
      <div className='bg-primary min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-white text-2xl font-bold mb-4'>Access Denied</h2>
          <p className='text-secondary mb-6'>Admin privileges required to access this page.</p>
          <button
            onClick={() => navigate("/login")}
            className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleEdit = (character) => {
    setEditingCharacter(character);
    setActiveTab("form");
  };

  const handleCreate = () => {
    setEditingCharacter(null);
    setActiveTab("form");
  };

  const handleBackToList = () => {
    setEditingCharacter(null);
    setActiveTab("list");
  };

  return (
    <div className='bg-primary min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className='max-w-7xl mx-auto px-6 py-20 pt-32'>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={`${styles.sectionSubText}`}>Character Management</p>
            <h2 className={`${styles.sectionHeadText}`}>Admin Panel.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Manage your character database. Add new characters, edit existing ones, 
            and organize your digital art portfolio with ease.
          </motion.p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Navigation Tabs */}
        <motion.div 
          variants={fadeIn("up", "", 0.3, 1)}
          initial="hidden"
          animate="show"
          className='flex flex-wrap gap-4 mb-8'
        >
          <button
            onClick={() => setActiveTab("list")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "list"
                ? "bg-tertiary text-white"
                : "bg-black-200 text-secondary hover:text-white"
            }`}
          >
            Character List
          </button>
          <button
            onClick={handleCreate}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "form" && !editingCharacter
                ? "bg-tertiary text-white"
                : "bg-black-200 text-secondary hover:text-white"
            }`}
          >
            Add New Character
          </button>
          <button
            onClick={exportCharactersFile}
            className='px-6 py-3 rounded-lg font-medium transition-colors bg-green-600 hover:bg-green-700 text-white'
          >
            Export Characters.js
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeIn("up", "", 0.5, 1)}
          initial="hidden"
          animate="show"
        >
          {activeTab === "list" ? (
            <CharacterList onEdit={handleEdit} />
          ) : (
            <CharacterForm 
              character={editingCharacter} 
              onBack={handleBackToList}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
