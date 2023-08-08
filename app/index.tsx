import { useState } from "react";
import Welcome from "./onboarding/welcome";
import ThemedComponent from "../components/ThemedComponent";

const Index = () => {
  return (
    <ThemedComponent>
      <Welcome />
    </ThemedComponent>
  );
};
export default Index;
