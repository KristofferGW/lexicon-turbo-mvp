import { useState, useEffect } from 'react';

export default function VocabularyContainer({ words, showEnglish }) {
  // Use React's useState to track visibility for each word individually
  const [visibilityState, setVisibilityState] = useState(
    words.map(() => showEnglish) // Initialize with the global showEnglish state
  );

  // Track the learning status for each word
  const [learningStatus, setLearningStatus] = useState(
    words.map(() => "Unfamiliar") // Initialize all words as "Unfamiliar"
  );

  // Update local state when global showEnglish changes
  useEffect(() => {
    setVisibilityState(words.map(() => showEnglish));
  }, [showEnglish, words.length]);

  // Toggle visibility for a specific word
  const toggleWordVisibility = (index) => {
    setVisibilityState(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Update learning status for a specific word
  const updateLearningStatus = (index, status) => {
    setLearningStatus(prevState => {
      const newState = [...prevState];
      newState[index] = status;
      return newState;
    });
  };

  return (
    <div className="w-[636px] bg-lexicon mx-auto text-white">
      {words.map((item, index) => (
        // Använd min-h-[50px] istället för h-[50px] så att raden kan växa vid behov
        <div key={index} className="flex min-h-[50px] text-white">
          {/* Sifferkolumn */}
          <div className="flex items-center justify-center border border-gray-300 px-2" style={{ width: '5%' }}>
            {index + 1}
          </div>

          {/* Ordkolumn med Eng och Sve */}
          <div className="flex flex-col justify-center border border-gray-300" style={{ width: '70%' }}>
            {visibilityState[index] && (
              <div className="flex items-center text-center border border-white">
                <div className="px-2 py-4">
                  <strong>Eng</strong>
                </div>
                <div className="flex-grow bg-white text-black border border-gray py-4">
                  {item.english}
                </div>
              </div>
            )}
            {/* Första raden – Svenska */}
            <div className="flex items-center border border-white">
              <div className="px-2 py-4">
                <strong>Sve</strong>
              </div>
              <div className="flex-grow bg-white text-black text-center border border-gray py-4">
                {item.swedish}
              </div>
            </div>
          </div>

          {/* Ögon-ikonen */}
          <div 
            className="flex items-center justify-center border border-gray-300 bg-white cursor-pointer" 
            style={{ width: '10%' }}
            onClick={() => toggleWordVisibility(index)}
          >
            <span role="img" aria-label="eye">
              {visibilityState[index] ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>

          {/* Learning-status med staplade rutor */}
          <div
            className="flex flex-col border border-gray-300"
            style={{ width: '15%', height: '120px' }}  // sätt en höjd så att flex-fördelningen blir synlig
          >
            <div 
              className={`flex-1 w-full bg-green-500 flex items-center justify-center cursor-pointer ${learningStatus[index] !== "Mastered" ? "opacity-50" : ""}`}
              onClick={() => updateLearningStatus(index, "Mastered")}
            >
              Mastered
            </div>
            <div 
              className={`flex-1 w-full bg-lexiconyellow flex items-center justify-center cursor-pointer ${learningStatus[index] !== "Familiar" ? "opacity-50" : ""}`}
              onClick={() => updateLearningStatus(index, "Familiar")}
            >
              Familiar
            </div>
            <div 
              className={`flex-1 w-full bg-red-500 flex items-center justify-center cursor-pointer ${learningStatus[index] !== "Unfamiliar" ? "opacity-50" : ""}`}
              onClick={() => updateLearningStatus(index, "Unfamiliar")}
            >
              Unfamiliar
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}