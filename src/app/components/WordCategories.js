export default function WordCategories({familiar, mastered, unfamiliar}) {
  const unfamiliarWords = 198;

  return (
    <div className="w-[636px] mx-auto flex">
      <div className="flex-1 bg-green-500 text-grey-800 flex items-center justify-center font-medium py-2">
        Mastered: {mastered}
      </div>

      <div className="flex-1 bg-yellow-500 text-grey-800 flex items-center justify-center font-medium">
        Familiar: {familiar}
      </div>
      
      <div className="flex-1 bg-red-500 text-white flex items-center justify-center font-medium">
        Unfamiliar: {unfamiliar}
      </div>
    </div>
  )
}