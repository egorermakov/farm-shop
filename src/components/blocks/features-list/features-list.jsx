import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledTitle, StyledButton } from "./styles";

function FeaturesList({ features, level }) {
  return (
    <Features>
      {features?.length ? (
        <>
          <StyledTitle level={level}>
            Почему фермерские продукты лучше?
          </StyledTitle>
          <Ul $isGridList>
            {features.map((feature) => (
              <Li key={feature.id}>
                <FeatureCard {...feature} />
              </Li>
            ))}
          </Ul>
          <StyledButton minWidth={260} link="/order">
            Купить
          </StyledButton>
        </>
      ) : null}
    </Features>
  );
}

export default FeaturesList;
