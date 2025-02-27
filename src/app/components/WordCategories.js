export default function WordCategories() {
  const unfamiliarWords = 198;

  return (
    <div className="w-[636px] mx-auto flex">
      <div className="flex-1 bg-green-500 text-grey-800 flex items-center justify-center font-medium py-2">
        Mastered:
      </div>

      <div className="flex-1 bg-yellow-500 text-grey-800 flex items-center justify-center font-medium">
        Familiar:
      </div>
      
      <div className="flex-1 bg-red-500 text-white flex items-center justify-center font-medium">
        Unfamiliar: {unfamiliarWords}
      </div>
    </div>
  )
}