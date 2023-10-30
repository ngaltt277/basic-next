import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/schema/register';
import { Row, Col } from 'antd';
import { Input } from '@/components/form/input';
import { Button } from '@/components/form/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RouterPath } from '@/enums/router-path';

export function RegisterContainer() {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    router.push(RouterPath.Login);
  });

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <Row>
          <Col span={24}>
            <label>Username</label>
          </Col>
          <Col flex="auto">
            <Input name="username" control={control} type="text" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <label>Password</label>
          </Col>
          <Col flex="auto">
            <Input name="password" control={control} type="password" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <label>Confirm password</label>
          </Col>
          <Col flex="auto">
            <Input name="confirmPassword" control={control} type="password" />
          </Col>
        </Row>
        <p>
          Already have an account? <Link href={RouterPath.Login}>Login</Link>
        </p>
        <Button label="Sign up" />
      </form>
    </div>
  );
}
