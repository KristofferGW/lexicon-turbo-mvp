// export default function VocabularyContainer({ words }) {
//   return (
//     <div className="w-[636px] bg-lexicon mx-auto text-white">
//       {/* Header row */}
//       <div className="flex h-[50px]">
//         <div
//           className="flex items-center justify-center border border-white"
//           style={{ width: '75%' }}
//         >
//           <h2 className="text-xl font-bold">Vocabulary</h2>
//         </div>
//         <div
//           className="flex items-center justify-center border border-white"
//           style={{ width: '10%' }}
//         >
//           <span role="img" aria-label="eye">
//             👁️
//           </span>
//         </div>
//         <div
//           className="flex items-center justify-center border border-white"
//           style={{ width: '15%' }}
//         >
//           <span className="text-lg font-semibold">Learning</span>
//         </div>
//       </div>

//       {words.map((item, index) => (
//         <div key={index} className="flex h-[50px] text-white">
//           {/* Index-kolumn */}
//           <div
//             className="flex items-center justify-center border border-gray-300 px-2"
//             style={{ width: '5%' }}
//           >
//             {index + 1}
//           </div>

//           {/* Ordkolumnen med två rader */}
//           <div
//             className="flex flex-col justify-center border border-gray-300 px-2"
//             style={{ width: '70%' }}
//           >
//             {/* Första raden – Svenska */}
//             <div className="flex items-center border border-white" style={{ height: '50%' }}>
//               <div className="w-[10%]">
//                 <strong>Sve:</strong>
//               </div>
//               <div className="bg-white text-black w-[90%] border border-gray">
//                 {item.swedish}
//               </div>
//             </div>
//             {/* Andra raden – Engelska */}
//             <div className="flex items-center" style={{ height: '50%' }}>
//               <div className="w-[10%] border border-white">
//                 <strong>Eng:</strong>
//               </div>
//               <div className="bg-white text-black w-[90%]">
//                 {item.english}
//               </div>
//             </div>
//           </div>

//           {/* Ögon-ikonen */}
//           <div
//             className="flex items-center justify-center border border-gray-300 bg-white"
//             style={{ width: '10%' }}
//           >
//             <span role="img" aria-label="eye">
//               👁️
//             </span>
//           </div>

//           {/* Learning-status */}
//           <div
//             className="flex items-center justify-center border border-gray-300"
//             style={{ width: '15%' }}
//           >
//             <span className="bg-green-200 px-2 py-1 rounded">Familiar</span>
//           </div>
//         </div>
//       ))}


//     </div>
//   );
// }

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
        <div key={index} className="flex h-[50px] text-white">
          {/* Sifferkolumn */}
          <div className="flex items-center justify-center border border-gray-300 px-2" style={{ width: '5%' }}>
            {index + 1}
          </div>

          {/* Ordkolumn med Sve och Eng – tar nu hela bredden utan extra padding */}
          <div className="flex flex-col justify-center border border-gray-300" style={{ width: '70%' }}>
            {/* Första raden – Svenska */}
            <div className="flex items-center border border-white h-[50%]">
              <div className="px-2">
                <strong>Sve:</strong>
              </div>
              <div className="flex-grow bg-white text-black border border-gray">
                {item.swedish}
              </div>
            </div>
            {/* Andra raden – Engelska */}
            <div className="flex items-center h-[50%]">
              <div className="px-2 border border-white">
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

          {/* Learning-status */}
          <div className="flex items-center justify-center border border-gray-300" style={{ width: '15%' }}>
            <span className="bg-green-200 px-2 py-1 rounded">Familiar</span>
          </div>
        </div>
      ))}
    </div>
  );
}

