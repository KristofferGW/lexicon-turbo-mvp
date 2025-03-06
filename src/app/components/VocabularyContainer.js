export default function VocabularyContainer({ words }) {
  return (
    <div className="w-[636px] bg-lexicon mx-auto text-white">
      {/* Header row */}
      <div className="flex h-[50px]">
        <div
          className="flex items-center justify-center border border-white"
          style={{ width: '75%' }}
        >
          <h2 className="text-xl font-bold">Vocabulary</h2>
        </div>
        <div
          className="flex items-center justify-center border border-white"
          style={{ width: '10%' }}
        >
          <span role="img" aria-label="eye">
            👁️
          </span>
        </div>
        <div
          className="flex items-center justify-center border border-white"
          style={{ width: '15%' }}
        >
          <span className="text-lg font-semibold">Learning</span>
        </div>
      </div>

      {/* En “rad” per ord */}
      {words.map((item, index) => (
        <div key={index} className="flex h-[50px] text-white">
          {/* Ordkolumnen */}
          <div
            className="flex items-center justify-between border border-gray-300 px-2"
            style={{ width: '75%' }}
          >
            {/* Här kan du styra om du vill visa "Sve" och "Eng" på två separata rader 
                eller i samma cell, beroende på hur du vill ha layouten. */}
            <span>
              <strong>Sve:</strong> {item.swedish}
            </span>
            <span>
              <strong>Eng:</strong> {item.english}
            </span>
          </div>

          {/* Ögon-ikonen */}
          <div
            className="flex items-center justify-center border border-gray-300"
            style={{ width: '10%' }}
          >
            <span role="img" aria-label="eye">
              👁️
            </span>
          </div>

          {/* Learning-statusen */}
          <div
            className="flex items-center justify-center border border-gray-300"
            style={{ width: '15%' }}
          >
            {/* Exempelvis en hårdkodad status eller en dropdown/select om du vill */}
            <span className="bg-green-200 px-2 py-1 rounded">Familiar</span>
          </div>
        </div>
      ))}
    </div>
  );
}
