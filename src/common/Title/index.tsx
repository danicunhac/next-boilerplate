import { Container, Text } from './styles';

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
