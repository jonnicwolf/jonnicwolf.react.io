import { FC, ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useDarkmode } from '../../Darkmode';

import styled from 'styled-components';
import emailjs from '@emailjs/browser';

import LinkButton from '../../assets/buttons/LinkButton';

interface Props {
  viewSetter: (value: string) => void,
};

interface FormData {
  to_name: string,
  from_name: string,
  message: string,
};

interface Form {};

interface Wrap {
  darkmode: boolean,
};

interface Img {};
interface Input {};

interface Message {
  darkmode: boolean,
};

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

const ContactForm: FC<Props> = ({ viewSetter }) => {
  useEffect(() => {
    emailjs.init(publicKey)
  }, []);
  const { darkmode } = useDarkmode();
  const [formData, setFormData] = useState<FormData>({
    to_name: '',
    from_name: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_dna0xvk',
        'template_9zxn0jo',
        // @ts-ignore
        formData,
        publicKey
      );
      alert('Email sent successfully!');
      setFormData({ to_name: '', from_name: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    };
  };

  return (
    <Form>
      <Wrap darkmode={darkmode} >
        <Img src={`https://img.icons8.com/?size=100&id=61005&format=png&color=${darkmode ? 'ffffff' : '000000'}`} alt="" />
        <Input
          placeholder='Full Name'
          name='to_name'
          value={formData.to_name}
          onChange={handleChange}
          required />
      </Wrap>

      <Wrap darkmode={darkmode} >
        <Img src={`https://img.icons8.com/?size=100&id=85500&format=png&color=${darkmode ? 'ffffff' : '000000'}`}/>
        <Input
          placeholder='Email'
          name='from_name'
          value={formData.from_name}
          onChange={handleChange}
          required />
      </Wrap>

      <Message
        darkmode={darkmode}
        placeholder='Message...'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required />

      {formData.message && <LinkButton darkMode={darkmode} textContent='SUBMIT' isScaleAnimation={true} 
      // @ts-ignore
      onClick={handleSubmit} />}
      
      {/* @ts-ignore */}
      <ButtonWrap>
        <LinkButton
          onClick={() => viewSetter('bio')}
          textContent='ABOUT'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('exp')}
          textContent='EXPERIENCE'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('tech')}
          textContent='TECH'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
      </ButtonWrap>
    </Form>
  );
};

const Form = styled.form<Form>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;
const Wrap = styled.div<Wrap>`
  display: flex;
  border: 1px solid black;
  height: 2rem;
  padding: 10px;
  color: ${props => props.darkmode ? 'white' : 'black'};
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
`;
const ButtonWrap = styled(Wrap)<Wrap>`
  border: none;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Img = styled.img<Img>`
  height: 50%;
  align-self: center;
  color: inherit;
`;
const Input = styled.input<Input>`
  border: none;
  width: 100%;
  font-size: 1.5rem;
  background: none;
  color: inherit;
  outline: none;
`;
const Message = styled.textarea<{darkmode: boolean}>`
  height: 200px;
  width: 100%;
  background: none;
  outline: none;
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
  color: ${props => props.darkmode ? 'white' : 'black'};
`;

export default ContactForm;
