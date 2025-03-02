export default function ThemeCard({ number, title, units, mastered }) {
    return (
      <div className="w-[636px] mx-auto my-4 flex justify-between items-center bg-lexicon text-white p-4 mb-2">
        {/* Vänstra sidan */}
        <div>
          <span className="font-bold">{number} &gt; </span>
          {title} ({units} units)
        </div>
  
        {/* Högra sidan */}
        <div className="bg-red-600 text-white px-4 py-2 rounded-lg">
          <span className="font-bold">{mastered}</span> mastered
        </div>
      </div>
    );
  }
  