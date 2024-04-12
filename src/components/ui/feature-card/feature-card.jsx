import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Feature, Header, Image, Owner, Text } from "./styles";

function FeatureCard({ title, owner, isNegative, image, about }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image src={image} width={52} height={52} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text
        className="feature-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </Feature>
  );
}

export default FeatureCard;
