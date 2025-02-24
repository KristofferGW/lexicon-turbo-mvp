export default function WordCategories() {
    <div className="w-[636px] mx-auto mt-6 flex">
      {/* Mastered box */}
      <div className="flex-1 bg-green-500 text-white flex items-center justify-center font-medium">
        Mastered:
      </div>

      {/* Familiar box */}
      <div className="flex-1 bg-yellow-500 text-white flex items-center justify-center font-medium">
        Familiar:
      </div>
      
      <div className="flex-1 bg-red-500 text-white flex items-center justify-center font-medium">
        Unfamiliar:
      </div>
    </div>
  );
}