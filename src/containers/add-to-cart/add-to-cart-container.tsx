import { Col, Row } from 'antd';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/form/button';
import { Select } from '@/components/form/select';
import { Input } from '@/components/form/input';
import { schema } from '@/schema/add-to-cart';

enum ProductEnum {
  Pepsi = 'pepsi',
  CocaCola = 'coca cola',
  SevenUp = '7up',
}

export function AddToCartContainer() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      carts: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'carts',
  });

  const carts = watch('carts');

  const getOptionState = (value: string) =>
    carts?.some((cart) => cart.product === value);

  const products = [
    ProductEnum.Pepsi,
    ProductEnum.CocaCola,
    ProductEnum.SevenUp,
  ];

  const productOptions = products.map((product) => {
    return {
      label: product,
      value: product,
      disabled: getOptionState(product),
    };
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const appendCart = () => {
    append({
      product: productOptions.find((option) => !option.disabled)?.value || '',
      quantity: 1,
    });
  };

  return (
    <div className="add-to-cart">
      <h2>Add To Cart</h2>
      <form onSubmit={onSubmit} className="carts-form">
        {fields.map((field, index) => (
          <Row key={field.id} gutter={[16, 16]}>
            <Col span={12} offset={2}>
              <Select
                name={`carts.${index}.product`}
                control={control}
                options={productOptions}
              />
            </Col>
            <Col span={6}>
              <Input
                name={`carts.${index}.quantity`}
                control={control}
                type="number"
              />
            </Col>
            <Col span={2} className="remove-button">
              <Button label="-" onClick={() => remove(index)} />
            </Col>
          </Row>
        ))}

        <div className="form-footer">
          <Button
            label="Add new product"
            disabled={fields.length === productOptions.length}
            onClick={appendCart}
          />
          <Button label="Add to cart" type="submit" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}
