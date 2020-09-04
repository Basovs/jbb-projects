import styled from "styled-components";

const Form = () => {
  return (
    <MyForm>
      <InputWrapper>
        <input type="text" placeholder="Your email" />
        <button>Contact</button>
      </InputWrapper>
      <InputWrapper>
        <input type="text" placeholder="Explane your needs here..." />
      </InputWrapper>
    </MyForm>
  );
};

export default Form;

const MyForm = styled.form`
  margin: 30px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 5px 5px 5px 20px;
  border-radius: 10px;
  margin: 20px 0;
  min-block-size: 49px;
  input {
    color: #fff;
    ::placeholder {
      color: #8a8f98;
    }
  }
  button {
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 7px;
    color: #333;
    font-weight: bold;
  }
`;
