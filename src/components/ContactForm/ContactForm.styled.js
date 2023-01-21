import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid white;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  padding: 30px;
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const InputName = styled.input`
  width: 200px;
  height: 25px;
  display: block;
  border-radius: 5px;
`;

export const InputNumber = styled.input`
  width: 200px;
  height: 25px;
  display: block;
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const BtnSubmit = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.46262254901960786) 0%,
    rgba(253, 29, 29, 0.3757878151260504) 50%,
    rgba(252, 176, 69, 0.4766281512605042) 100%
  );
`;