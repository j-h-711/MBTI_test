import styled from "styled-components";

export const CenteredBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 667px) {
    margin-top: 0.1rem;
  }
`;
export const Title = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 4rem;
  font-weight: bold;
  color: #dc9e77;

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }

  @media (min-width: 321px) and (max-width: 499px) {
    font-size: 2rem;
  }

  @media (min-width: 500px) and (max-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const BTN = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #dc9e77;
  color: #f8e692;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 601px) and (max-width: 1600px) {
    font-size: 1.5rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;

export const BoxContainer = styled.div`
  text-align: center;
  border: none;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  background: #f8e692;
  color: #69a65a;

  @media (max-width: 600px) {
    margin: 1rem;
    padding: 0.2rem;
  }
  @media (min-width: 601px) and (max-width: 1600px) {
    font-size: 2.5rem;
    max-height: 500px;
    padding-top: 0;
  }
`;

export const ImgWrap = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 601px) and (max-width: 1600px) {
    max-width: 500px;
    margin-top: 0px;
    padding: 0px;
  }
`;
export const ImgBox = styled.img`
  border-radius: 1rem;
  width: 100%;
`;
