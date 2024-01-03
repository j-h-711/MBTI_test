import styled from "styled-components";

export const BoxContainer = styled.div`
  text-align: center;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  background: #f8e692;
  color: #69a65a;

  @media (min-width: 400px) and (max-width: 699px) {
    max-height: 637px;
  }
`;
export const SubBox = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background: #d8b975;
  color: #69a65a;
`;
export const Title = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #dc9e77;

  @media (max-width: 399px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  @media (min-width: 400px) and (max-width: 699px) {
    font-size: 2rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 2rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 399px) {
    font-size: 1.3rem;
  }

  @media (min-width: 400px) and (max-width: 699px) {
    font-size: 1.5rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 2rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;
export const Contents = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;

  @media (max-width: 399px) {
    font-size: 1rem;
  }

  @media (min-width: 400px) and (max-width: 699px) {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    font-size: 2rem;
    max-height: 500px;
    padding: 0.8rem;
  }
`;
export const ImgWrap = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 2rem;
`;
export const ImgBox = styled.img`
  border-radius: 1rem;
  width: 80%;

  @media (min-width: 400px) and (max-width: 699px) {
    width: 60%;
  }
  @media (min-width: 700px) and (max-width: 2000px) {
    width: 50%;
  }
`;
export const BTN = styled.button`
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #dc9e77;
  color: #f8e692;
  font-weight: bold;

  @media (max-width: 399px) {
    margin-top: 30px;
    font-size: 1rem;
  }

  @media (min-width: 400px) and (max-width: 699px) {
    margin-top: 30px;
    font-size: 1.2rem;
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    margin-top: 30px;
    font-size: 1.2rem;
  }
`;
