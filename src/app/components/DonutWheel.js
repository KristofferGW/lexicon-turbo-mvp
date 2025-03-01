export default function DonutWheel() {
    return (
      <div className="flex justify-center items-center py-4">
        <div className="relative w-40 h-40">
          <div
            className="absolute w-full h-full rounded-full"
            style={{
              background: 'conic-gradient(rgb(34, 197, 94) 0% 33%, rgb(234, 179, 8) 33% 66%, rgb(239, 68, 68) 66% 100%)',
            }}
          />
          <div className="absolute w-28 h-28 rounded-full bg-lexicon top-0 left-0 right-0 bottom-0 m-auto" />
        </div>
      </div>
    );
  }
  