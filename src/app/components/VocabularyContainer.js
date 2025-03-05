export default function VocabularyContainer({ words }) {
    return (
      <div className="w-[636px] bg-lexicon mx-auto">
        {/* Header row */}
        <div className="flex text-white h-[50px]">
          <div className="flex items-center justify-center border border-white" style={{ width: '75%' }}>
            <h2 className="text-xl font-bold">Vocabulary</h2>
          </div>
          <div className="flex items-center justify-center border border-white" style={{ width: '10%' }}>
            <span role="img" aria-label="eye">👁️</span>
          </div>
          <div className="flex items-center justify-center border border-white" style={{ width: '15%' }}>
            <span className="text-lg font-semibold">Learning</span>
          </div>
        </div>
        {/* Vocabulary list */}
        <ul className="mt-4">
          {words.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>{item.swedish}</strong> - {item.english}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  