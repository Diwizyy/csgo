import React, { useState } from 'react';

type Item = {
  name: string;
  color: string;
};

const items: Item[] = [
  { name: 'Common Skin', color: 'text-gray-400' },
  { name: 'Uncommon Skin', color: 'text-green-400' },
  { name: 'Rare Skin', color: 'text-blue-400' },
  { name: 'Epic Skin', color: 'text-purple-400' },
  { name: 'Legendary Skin', color: 'text-yellow-400' },
  { name: 'Knife', color: 'text-red-400' },
  { name: 'Gloves', color: 'text-pink-400' },
];

export default function App() {
  const [selected, setSelected] = useState<Item | null>(null);
  const [opening, setOpening] = useState(false);

  const openCase = () => {
    setOpening(true);
    setSelected(null);

    setTimeout(() => {
      const roll = Math.random();
      let result: Item;

      if (roll < 0.5) result = items[0];          // 50% Common
      else if (roll < 0.75) result = items[1];    // 25% Uncommon
      else if (roll < 0.9) result = items[2];     // 15% Rare
      else if (roll < 0.96) result = items[3];    // 6% Epic
      else if (roll < 0.99) result = items[4];    // 3% Legendary
      else if (roll < 0.995) result = items[5];   // 0.5% Knife
      else result = items[6];                      // 0.5% Gloves

      setSelected(result);
      setOpening(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <h1 className="text-4xl font-extrabold">🎁 CS:GO Case Opening</h1>
      <button
        onClick={openCase}
        disabled={opening}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {opening ? 'Opening...' : 'Open Case'}
      </button>

      {selected && (
        <div className={`text-3xl font-bold mt-8 ${selected.color} animate-pulse`}>
          🎉 You got: {selected.name}
        </div>
      )}
    </div>
  );
}