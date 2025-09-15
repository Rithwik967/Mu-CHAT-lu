import { useState, useEffect } from 'react';

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
    'abyss', 'silk'
  ];

  useEffect(() => {
    // Get current theme from HTML data attribute
    const htmlElement = document.documentElement;
    const savedTheme = htmlElement.getAttribute('data-theme') || 'light';
    setCurrentTheme(savedTheme);
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    // Save to localStorage for persistence
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Theme</h2>
        <p className="text-base-content/60">Choose a theme for your chat interface</p>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme)}
            className={`btn btn-sm btn-outline ${
              currentTheme === theme ? 'btn-primary' : ''
            }`}
            title={theme}
          >
            {theme}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div className="bg-base-200 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-8">
                <span className="text-xs">R</span>
              </div>
            </div>
            <div>
              <div className="font-semibold">Rithwik Stambamkadi</div>
              <div className="text-sm text-base-content/60">Online</div>
            </div>
          </div>
          <div className="bg-base-100 p-3 rounded-lg">
            <p className="text-sm">This is how your chat messages will look with the {currentTheme} theme!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
