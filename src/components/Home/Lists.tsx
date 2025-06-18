import React from "react";
import { lists } from "@/constants/lists";

const Lists = () => {
  return (
    <div className="p-8 space-y-10">
      {lists.map((section, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-bold mb-3">{section.title}</h2>
          <ul className="list-disc pl-5 space-y-1">
            {section.items.map((item, j) => (
              <li key={j}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Lists;
