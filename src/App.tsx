import "@/assets/style/pages/_root.scss";
import { ComboSelector } from "@/components/shared/ComboSelector.tsx";
import * as React from "react";
import { ItemsStructure } from "@/types/components/BaseDropdown.ts";

export const App: React.FC = () => {
  const items: Array<ItemsStructure> = [
    { label: "Education 🎓", value: "education" },
    { label: "Yeeeah, science! 🧪", value: "science" },
    { label: "Art 🎨🎭", value: "art" },
    { label: "Sport ⚽", value: "sport" },
    { label: "Games 🎮", value: "games" },
    { label: "Health 🧑‍⚕️", value: "health" },
    { label: "Music 🎵🎧", value: "music" },
    { label: "Nature 🌿🌼", value: "nature" },
    { label: "Technology 💻📱", value: "technology" },
    { label: "Travel ✈️🌍", value: "travel" },
    { label: "Food 🍕🍣", value: "food" },
    { label: "History 🏛️📜", value: "history" },
  ];

  return (
    <main className="root">
      <div className="root_top"></div>
      <div className="root__component">
        <ComboSelector items={items} />
      </div>
    </main>
  );
};
