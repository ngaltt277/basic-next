type Props = {
  label: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

export function Button({ label, disabled, type, onClick }: Props) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
