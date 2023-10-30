import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import { Button } from '../../form/button';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { RouterPath } from '@/enums/router-path';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const router = useRouter();
  const isLogged = getCookie('token');

  const routes = useMemo(
    () => [
      {
        path: RouterPath.Home,
        label: 'Home',
      },
      {
        path: RouterPath.Passport,
        label: 'Passport Information',
      },
      {
        path: RouterPath.RetroMileageClaim,
        label: 'Retro Mileage Claim',
      },
      {
        path: RouterPath.AddToCart,
        label: 'Add To Cart',
      },
    ],
    [],
  );

  const logout = () => {
    deleteCookie('token');
    router.push(RouterPath.Login);
  };

  const renderRightNav = () => {
    return isLogged ? (
      <Button label="Logout" type="button" onClick={logout} />
    ) : (
      <div>
        <Link href={RouterPath.Login} className="nav-item">
          Login
        </Link>
      </div>
    );
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          {routes.map((route) => {
            return (
              <Link
                key={route.path}
                href={route.path}
                className="nav-item active"
              >
                {route.label}
              </Link>
            );
          })}
        </div>
        {renderRightNav()}
      </nav>
      <main>{children}</main>
    </>
  );
}
