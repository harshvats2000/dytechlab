import React from "react";
import classes from "./UpdateCards.module.css";
import UpdateCard from "./UpdateCard/UpdateCard";
import img from "../../../assets/update-img6.jpg";

const updateCards = () => {
  return (
    <div className={classes.UpdateCards}>
      <UpdateCard
        src={img}
        heading="Insights"
        text="Intern Shares Advice on How to Get Started on a Project with Little-to-No Industry Experience"
      />
      <UpdateCard
        src={img}
        heading="Insights"
        text="DRW Intern Uses Mathematical Theory in Real World Setting"
      />
      <UpdateCard
        src={img}
        heading="Insights"
        text="Organizations Making a Difference in our Communities"
      />
      <UpdateCard
        src={img}
        heading="Insights"
        text="Preparing for the Unexpected"
      />
      <UpdateCard
        src={img}
        heading="News"
        text="Chicago-area derivatives firms give more than $4 million to local food bank"
      />
      <UpdateCard
        src={img}
        heading="News"
        text="Cumberland AML officer shares her path to fintech and the challenges she overcame along the way"
      />
    </div>
  );
};

export default updateCards;
