import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {lastKey ? (
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
