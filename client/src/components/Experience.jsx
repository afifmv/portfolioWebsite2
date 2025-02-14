import React, { useEffect, useState } from "react";
import axios from "axios";
import EducationCard from "./EducationCard";


const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences", error);
      }
    };

    fetchExperiences();
  }, []);

  console.log(experiences);
  return (
    <div className="experience-banner">
      <h1>Education & Experience</h1>
      <div>
        {experiences.map((exp) => (
          <EducationCard />
        ))}
      </div>
    </div>
  );
};

export default Experience;
