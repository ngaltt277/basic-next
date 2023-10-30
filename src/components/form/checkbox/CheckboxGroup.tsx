import { useController } from 'react-hook-form';

type Option = {
  value?: string;
  label?: string;
};

type Props = {
  control: any;
  name: string;
  options: Option[];
};

export function CheckboxGroup({ control, options, name }: Props) {
  const { field } = useController({ name, control });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const isExisted = field.value.some((item: string) => item === value);
    if (checked) {
      if (!isExisted) {
        field.onChange([...field.value, value]);
      }
    } else {
      if (isExisted) {
        field.onChange(field.value.filter((item: string) => item !== value));
      }
    }
  };

  return (
    <div>
      <div className="checkbox-group">
        {options.map((option) => (
          <div className="checkbox" key={option.value}>
            <label htmlFor={option.value} className="checkbox-container">
              <input
                id={option.value}
                type="checkbox"
                name={name}
                value={option.value}
                onChange={onChange}
              />
              <span className="label-checkbox">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
