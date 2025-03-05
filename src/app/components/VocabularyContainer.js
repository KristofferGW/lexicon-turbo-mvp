export default function VocabularyContainer({ words }) {
    return (
      <div className="w-[636px]">
        {/* Header row */}
        <div className="flex">
          <div className="flex items-center" style={{ width: '80%' }}>
            <h2 className="text-xl font-bold">Vocabulary</h2>
          </div>
          <div className="flex items-center justify-center" style={{ width: '5%' }}>
            <span role="img" aria-label="eye">👁️</span>
          </div>
          <div className="flex items-center justify-end" style={{ width: '15%' }}>
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
  