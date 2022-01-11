import { Container } from './styles';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

export function Input({ value, type, onChange, placeholder }: Props) {
  return (
    <Container
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
