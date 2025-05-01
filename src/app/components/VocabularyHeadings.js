export default function VocabularyHeadings({ onEyeClick }) {
    return (
        <div className="flex w-full max-w-[636px] h-12 sm:h-14 mx-auto text-white text-sm sm:text-base">
            {/* <div className="flex items-center justify-center border border-white w-[65%] sm:w-[75%]"> */}
            <div className="flex items-center justify-center border border-white w-[75%] sm:w-[75%]">
                <h2 className="text-base sm:text-xl font-bold">Vocabulary</h2>
            </div>
            {/* <div className="flex items-center justify-center border border-white w-[15%] sm:w-[10%]"> */}
            <div className="flex items-center justify-center border border-white w-[10%] sm:w-[10%]">
                <span
                    role="img"
                    aria-label="eye"
                    onClick={onEyeClick}
                    className="cursor-pointer"
                >
                    👁️
                </span>
            </div>
            {/* <div className="flex items-center justify-center border border-white w-[20%] sm:w-[15%]"> */}
            <div className="flex items-center justify-center border border-white w-[15%] sm:w-[15%]">
                <span className="font-semibold block sm:hidden">Learn.</span>
                <span className="font-semibold hidden sm:block">Learning</span>
            </div>
        </div>
    );
}
