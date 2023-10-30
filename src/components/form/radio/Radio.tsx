import { useController } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  control?: any;
  value?: string;
};

export function Radio({ name, label, control, value }: Props) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <label htmlFor={value} className="radio-input">
      <input
        id={value}
        name={name}
        type="radio"
        value={value}
        onChange={field.onChange}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
}
