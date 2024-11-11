import React from "react";
import TagsList from "./TagsList";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Tags.css";

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "stress_management",
      tagDesc:
        "For questions about managing stress related to academics, social life, or personal challenges in college. Alumni and peers can share their experiences and coping strategies.",
    },
    {
      id: 2,
      tagName: "time_management",
      tagDesc:
        "Questions and advice on balancing academic workload, extracurricular activities, and personal life. Tips for effective time management techniques and tools.",
    },
    {
      id: 3,
      tagName: "relationships",
      tagDesc:
        "Guidance on building and maintaining healthy relationships with friends, family, or partners while navigating college life.",
    },
    {
      id: 4,
      tagName: "career_confusion",
      tagDesc:
        "Questions about career choices, finding the right field, or dealing with uncertainty in career paths. Alumni can offer insights from their own journeys.",
    },
    {
      id: 5,
      tagName: "academic_pressure",
      tagDesc:
        "For students dealing with academic pressure, exam stress, or fear of failure. Advice and strategies for handling high academic expectations.",
    },
    {
      id: 6,
      tagName: "mental_wellbeing",
      tagDesc:
        "General discussions on mental health, including mindfulness practices, self-care routines, and maintaining a positive outlook during challenging times.",
    },
    {
      id: 7,
      tagName: "homesickness",
      tagDesc:
        "Support and advice for students experiencing homesickness or adjusting to a new environment away from home.",
    },
    {
      id: 8,
      tagName: "self_esteem",
      tagDesc:
        "Questions about building self-confidence, overcoming self-doubt, and managing feelings of inadequacy. Alumni can share personal growth tips.",
    },
    {
      id: 9,
      tagName: "financial_stress",
      tagDesc:
        "Advice on handling financial worries, budgeting tips, and guidance on part-time work or scholarships.",
    },
    {
      id: 10,
      tagName: "loneliness",
      tagDesc:
        "For students who feel isolated or struggle with making new connections in college. Peers and alumni can offer social support tips.",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
