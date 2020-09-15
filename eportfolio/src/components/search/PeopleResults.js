import React from "react";

import ProfileCard from "../profile/ProfileCard";
import { fakeProfile } from "../../TestData";

const peopleCard = () => (
  <div>
    <ProfileCard {...fakeProfile.profile} />
    <ProfileCard {...fakeProfile.profile} />
  </div>
);

export default peopleCard;
