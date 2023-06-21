import styled from '@emotion/styled';
import {Form as FormikForm, Field as FormikField, ErrorMessage as FormikError} from 'formik';

export const Title = styled.h2`
  margin: 0;
  font-size: 28px;
  text-transform: capitalize;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 12px;  
  padding-bottom: 20px;

`;

export const Contact = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(FormikField)`
  width: 230px;
  padding: 8px;
`;

export const ErrorMessage = styled(FormikError)`
color: tomato;
`;

export const SubmitBtn = styled.button`
  width: 250px;
  padding: 8px;
  background-color: #05c7057d;
  border-color: green;
  font-size: 16px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    transform: /scale(1.9);
    background-color: #05c705c8;
    font-weight: bold;
  }
`;


