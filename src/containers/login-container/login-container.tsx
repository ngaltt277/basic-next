import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Row, Col } from 'antd';
import { Input } from '@/components/form/input';
import { LOGIN_VALIDATION_MESSAGES } from '@/constant/validate-message';
import { Button } from '@/components/form/button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { RouterPath } from '@/enums/router-path';

const schema = yup
  .object({
    username: yup
      .string()
      .required(LOGIN_VALIDATION_MESSAGES.usernameRequired)
      .max(20, LOGIN_VALIDATION_MESSAGES.usernameMax),
    password: yup
      .string()
      .required(LOGIN_VALIDATION_MESSAGES.passwordRequired)
      .min(8, LOGIN_VALIDATION_MESSAGES.passwordMin)
      .max(16, LOGIN_VALIDATION_MESSAGES.passwordMax),
  })
  .required();

export function LoginContainer() {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const postData = async () => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((response) => {
      setCookie('token', response.accessToken);
      router.push(RouterPath.Home);
    });
  });

  return (
    <div className="container">
      <h2>LOGIN</h2>
      <form onSubmit={onSubmit}>
        <Row>
          <Col span={24}>
            <label>Username</label>
          </Col>
          <Col span={24}>
            <Input name="username" control={control} type="text" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <label>Password</label>
          </Col>
          <Col span={24}>
            <Input name="password" control={control} type="password" />
          </Col>
        </Row>
        <p>
          Don&apos;t have an account? <Link href={RouterPath.Register}>Sign up</Link>
        </p>
        <Button label="Login" />
      </form>
      <div className="box"></div>
    </div>
  );
}
