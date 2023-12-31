import styled from "styled-components";

export const CenteredBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const BoxContainer = styled.div`
  text-align: center;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  background: #f8e692;
  color: #69a65a;
`;
export const ImgWrap = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 2rem;
`;
export const ImgBox = styled.img`
  border-radius: 1rem;
  width: 100%;
`;
export const BTN = styled.button`
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #dc9e77;
  width: 100%;
  color: #f8e692;
  cursor: pointer;

  @media (max-width: 699px) {
    font-size: 1rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 1.5rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;

export const Title = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 2.5rem;
  color: #dc9e77;

  @media (max-width: 699px) {
    font-size: 1.5rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 2rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 30px;

  @media (max-width: 699px) {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 1.5rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;
