import classNames from 'classnames';
import { get, useController } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  control: any;
  type?: string;
  disabled?: boolean;
};

export function Input({ name, control, type, label, disabled }: Props) {
  const { field, formState } = useController({
    name,
    control,
  });

  const { errors } = formState;
  const isError = get(errors, name);
  const message = get(isError, 'message');

  return (
    <div className="input">
      <div
        className={classNames(
          'input-container',
          {
            invalid: isError,
          },
          {
            has_label: label,
          },
        )}
      >
        <label htmlFor={name} className="input-label">
          {label}
        </label>
        <input
          id={name}
          type={type}
          value={field.value}
          onChange={field.onChange}
          className={classNames({
            has_label: label,
          })}
          disabled={disabled}
        />
      </div>
      {isError && <span className="input-error">{message}</span>}
    </div>
  );
}
