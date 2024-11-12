import React from "react";

const WidgetTags = () => {
  const tags = [
    "stress_management",
    "time_management",
    "academic_pressure",
    "career_confusion",
    "self_esteem",
    "loneliness",
    "relationships",
    "mental_wellbeing",
    "financial_stress",
    "homesickness",
  ];

  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
