import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem("lhyann_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("lhyann_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, userType) => {
    try {
      // Admin credentials
      if (userType === "admin") {
        if (email === "lhyan@gmail.com" && password === "1234") {
          const adminUser = {
            id: "admin",
            email: "lhyan@gmail.com",
            name: "Lhyann",
            type: "admin",
            loginTime: new Date().toISOString(),
          };
          setUser(adminUser);
          localStorage.setItem("lhyann_user", JSON.stringify(adminUser));
          return { success: true, user: adminUser };
        } else {
          return { success: false, error: "Invalid admin credentials" };
        }
      }
      
      // User registration/login
      if (userType === "user") {
        if (!email || !password) {
          return { success: false, error: "Email and password are required" };
        }
        
        // For users, we register them automatically on first login
        const existingUsers = JSON.parse(localStorage.getItem("lhyann_users") || "[]");
        let user = existingUsers.find(u => u.email === email);
        
        if (!user) {
          // Register new user
          user = {
            id: Date.now().toString(),
            email,
            name: email.split("@")[0], // Use email prefix as name initially
            type: "user",
            registeredAt: new Date().toISOString(),
            commissions: [],
          };
          existingUsers.push(user);
          localStorage.setItem("lhyann_users", JSON.stringify(existingUsers));
        } else {
          // Existing user login - validate password (for now, just check if provided)
          if (!password) {
            return { success: false, error: "Password is required" };
          }
        }
        
        const loggedInUser = {
          ...user,
          loginTime: new Date().toISOString(),
        };
        
        setUser(loggedInUser);
        localStorage.setItem("lhyann_user", JSON.stringify(loggedInUser));
        return { success: true, user: loggedInUser };
      }
      
      return { success: false, error: "Invalid user type" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Login failed. Please try again." };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("lhyann_user");
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("lhyann_user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading,
    isAdmin: user?.type === "admin",
    isUser: user?.type === "user",
    isLoggedIn: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
