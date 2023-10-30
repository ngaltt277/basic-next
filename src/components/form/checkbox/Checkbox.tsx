import { useController, get } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  control: any;
};

export function Checkbox({ name, label, control }: Props) {
  const { field, formState } = useController({
    name,
    control,
  });

  const { errors } = formState;
  const isError = get(errors, name);
  const message = get(isError, 'message');

  return (
    <div className="checkbox">
      <label htmlFor={name} className="checkbox-container">
        <input
          id={name}
          type="checkbox"
          checked={field.value}
          onChange={field.onChange}
        />
        <span className="label-checkbox">{label}</span>
      </label>
      {isError && <span className="label-error">{message}</span>}
    </div>
  );
}
