export default function VocabularyContainer({ words }) {
  return (
    <div className="w-[636px] bg-lexicon mx-auto text-white">
      {/* Header rad */}
      <div className="flex h-[50px]">
        <div className="flex items-center justify-center border border-white" style={{ width: '75%' }}>
          <h2 className="text-xl font-bold">Vocabulary</h2>
        </div>
        <div className="flex items-center justify-center border border-white" style={{ width: '10%' }}>
          <span role="img" aria-label="eye">
            👁️
          </span>
        </div>
        <div className="flex items-center justify-center border border-white" style={{ width: '15%' }}>
          <span className="text-lg font-semibold">Learning</span>
        </div>
      </div>

      {words.map((item, index) => (
        // Använd min-h-[50px] istället för h-[50px] så att raden kan växa vid behov
        <div key={index} className="flex min-h-[50px] text-white">
          {/* Sifferkolumn */}
          <div className="flex items-center justify-center border border-gray-300 px-2" style={{ width: '5%' }}>
            {index + 1}
          </div>

          {/* Ordkolumn med Sve och Eng */}
          <div className="flex flex-col justify-center border border-gray-300" style={{ width: '70%' }}>
            {/* Första raden – Svenska */}
            <div className="flex items-center border border-white">
              <div className="px-2">
                <strong>Sve:</strong>
              </div>
              <div className="flex-grow bg-white text-black border border-gray">
                {item.swedish}
              </div>
            </div>
            {/* Andra raden – Engelska */}
            <div className="flex items-center border border-white">
              <div className="px-2">
                <strong>Eng:</strong>
              </div>
              <div className="flex-grow bg-white text-black border border-gray">
                {item.english}
              </div>
            </div>
          </div>

          {/* Ögon-ikonen */}
          <div className="flex items-center justify-center border border-gray-300 bg-white" style={{ width: '10%' }}>
            <span role="img" aria-label="eye">
              👁️
            </span>
          </div>

          {/* Learning-status med staplade rutor */}
          <div
            className="flex flex-col items-center space-y-1 border border-gray-300 p-1"
            style={{ width: '15%' }}
          >
            <span className="bg-green-200 px-2 py-1 rounded">Mastered</span>
            <span className="bg-green-200 px-2 py-1 rounded">Familiar</span>
            <span className="bg-green-200 px-2 py-1 rounded">Unfamiliar</span>
          </div>
        </div>
      ))}
    </div>
  );
}
