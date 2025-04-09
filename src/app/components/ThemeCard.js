export default function ThemeCard({ number, title, units, mastered }) {
  const colorMaps = {
    33: [
      "#FF0000", "#FF0000", "#FF0F00", "#FF1F00", "#FF2F00", "#FF3F00", "#FF4F00",
      "#FF5F00", "#FF6F00", "#FF7F00", "#FF8F00", "#FF9F00", "#FFAF00", "#FFBF00",
      "#FFCF00", "#FFDF00", "#FFEF00", "#FFFF00", "#EFFF00", "#DFFF00", "#CFFF00",
      "#BFFF00", "#AFFF00", "#9FFF00", "#8FFF00", "#7FFF00", "#6FFF00", "#5FFF00",
      "#4FFF00", "#3FFF00", "#2FFF00", "#1FFF00", "#0FFF00", "#00FF00"
    ],
    66: [
      "#FF0000", "#FF0000", "#FF0700", "#FF0F00", "#FF1700", "#FF1F00", "#FF2700",
      "#FF2F00", "#FF3700", "#FF3F00", "#FF4700", "#FF4F00", "#FF5700", "#FF5F00",
      "#FF6700", "#FF6F00", "#FF7700", "#FF7F00", "#FF8700", "#FF8F00", "#FF9700",
      "#FF9F00", "#FFA700", "#FFAF00", "#FFB700", "#FFBF00", "#FFC700", "#FFCF00",
      "#FFD700", "#FFDF00", "#FFE700", "#FFEF00", "#FFF700", "#FFFF00", "#F7FF00",
      "#EFFF00", "#E7FF00", "#E0FF00", "#D8FF00", "#D0FF00", "#C8FF00", "#C1FF00",
      "#B9FF00", "#B1FF00", "#AAFF00", "#A2FF00", "#9AFF00", "#92FF00", "#8BFF00",
      "#83FF00", "#7BFF00", "#73FF00", "#6CFF00", "#64FF00", "#5CFF00", "#55FF00",
      "#4DFF00", "#45FF00", "#3DFF00", "#36FF00", "#2EFF00", "#26FF00", "#1EFF00",
      "#17FF00", "#0FFF00", "#07FF00", "#00FF00"
    ],
    99: [
      "#FF0000", "#FF0000", "#FF0500", "#FF0A00", "#FF0F00", "#FF1400", "#FF1A00", "#FF1F00",
      "#FF2400", "#FF2900", "#FF2E00", "#FF3400", "#FF3900", "#FF3E00", "#FF4300", "#FF4800",
      "#FF4E00", "#FF5300", "#FF5800", "#FF5D00", "#FF6200", "#FF6800", "#FF6D00", "#FF7200",
      "#FF7700", "#FF7C00", "#FF8200", "#FF8700", "#FF8C00", "#FF9100", "#FF9600", "#FF9C00",
      "#FFA100", "#FFA600", "#FFAB00", "#FFB000", "#FFB600", "#FFBB00", "#FFC000", "#FFC500",
      "#FFCA00", "#FFD000", "#FFD500", "#FFDA00", "#FFDF00", "#FFE400", "#FFEA00", "#FFEF00",
      "#FFF400", "#FFF900", "#FFFF00", "#F9FF00", "#F4FF00", "#EFFF00", "#EAFF00", "#E4FF00",
      "#DFFF00", "#DAFF00", "#D5FF00", "#D0FF00", "#CAFF00", "#C5FF00", "#C0FF00", "#BBFF00",
      "#B6FF00", "#B0FF00", "#ABFF00", "#A6FF00", "#A1FF00", "#9CFF00", "#96FF00", "#91FF00",
      "#8CFF00", "#87FF00", "#82FF00", "#7CFF00", "#77FF00", "#72FF00", "#6DFF00", "#68FF00",
      "#62FF00", "#5DFF00", "#58FF00", "#53FF00", "#4EFF00", "#48FF00", "#43FF00", "#3EFF00",
      "#39FF00", "#34FF00", "#2EFF00", "#29FF00", "#24FF00", "#1FFF00", "#1AFF00", "#14FF00",
      "#0FFF00", "#0AFF00", "#05FF00", "#00FF00"
    ]
  };

  const colorMap = colorMaps[units] || colorMaps[33]; // Default to 33 if not found
  const bgColor = colorMap[Math.min(mastered, units)];

  return (
    <div className="w-[636px] mx-auto my-4 flex justify-between items-center bg-lexicon text-white mb-2">
      {/* Vänstra sidan */}
      <div className="pl-4">
        <span className="font-bold">{number} &gt; </span>
        {title} ({units} units)
      </div>

      {/* Högra sidan */}
      <div className="text-white px-4 py-5 w-[121px]" style={{ backgroundColor: bgColor }}>
        <span className="font-bold">{mastered}</span> mastered
      </div>
    </div>
  );
}
