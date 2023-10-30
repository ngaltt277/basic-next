import classNames from 'classnames';
import { useController, get } from 'react-hook-form';

type Options = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  name: string;
  control: any;
  label?: string;
  options: Options[];
  autoFocus?: boolean;
};

export function Select({ name, control, options, label, autoFocus }: Props) {
  const { field, formState } = useController({
    name,
    control,
  });

  const { errors } = formState;
  const isError = get(errors, name);
  const message = get(isError, 'message');

  return (
    <div className="select">
      <div className={classNames('select-container', { invalid: isError })}>
        <label htmlFor={name} className="select-label">
          {label}
        </label>
        <select
          id={name}
          name={name}
          onChange={field.onChange}
          autoFocus={autoFocus}
          value={field.value}
          className={classNames({ has_label: label })}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {isError && <span className="select-error">{message}</span>}
    </div>
  );
}
