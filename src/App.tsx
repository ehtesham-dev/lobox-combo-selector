import "@/assets/style/pages/_root.scss";
import { ComboSelector } from "@/components/shared/ComboSelector.tsx";
import * as React from "react";
import { ItemsStructure } from "@/types/components/BaseDropdown.ts";
import { useState } from "react";

export const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Array<ItemsStructure>>([]);
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
      <div className="root__intro">
        <img className="root__logo" src="/lobox-icon.png" alt="lobox-logo" />
        <h5 className="root__title">Tnx for opportunity LOBOX 💙</h5>
      </div>
      <div className="root__component">
        <div className="root__top">Selected items : {selectedItems.join(", ")}</div>
        <ComboSelector
          items={items}
          handleSelectedItemsUpdate={setSelectedItems}
          name="Sample-combo-selector"
        />
      </div>
    </main>
  );
};
