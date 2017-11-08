import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Header = styled.div`
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 1.1em;
`;

const Metadata = styled.div`
  margin-bottom: 1.1em;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.span``;

const CardDate = styled.time`
  color: ${props => props.theme.colorLightGrey};
`;

const Title = styled.h3`
  color: ${props => props.theme.colorPrimary};
  margin-bottom: 1.1em;
  opacity: 0.8;
  transition: opacity 0.6s;
  :hover {
    opacity: 1;
  }
`;

const Description = styled.p`
  margin-bottom: 1.1em;
  color: ${props => props.theme.colorLightGrey};
`;

const Card = props => {
  const { children, description, title, date, image, category } = props;
  return (
    <Wrapper>
      <Header>
        <img src={image} alt="" />
      </Header>
      <Content>
        <Metadata>
          <Category>{category}</Category>
          <CardDate dateTime={date}>{date}</CardDate>
        </Metadata>

        <a href="#">
          <Title>{title}</Title>
        </a>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};

export default Card;