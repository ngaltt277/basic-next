import { useController, get } from 'react-hook-form';
import { Radio } from './Radio';

type Option = {
  label?: string;
  value?: string;
};

type Props = {
  name: string;
  label?: string;
  control: any;
  options: Option[];
};

export function RadioGroup({ name, label, control, options }: Props) {
  const { formState } = useController({
    name,
    control,
  });

  const { errors } = formState;
  const isError = get(errors, name);
  const message = get(isError, 'message');

  return (
    <div className="radio-group">
      <div>{label}</div>
      <div className="radio">
        {options.map((option) => (
          <Radio
            name={name}
            key={option.value}
            control={control}
            label={option.label}
            value={option.value}
          />
        ))}
      </div>

      {isError && <span className="radio-error">{message}</span>}
    </div>
  );
}
