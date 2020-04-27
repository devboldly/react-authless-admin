import * as React from 'react';
import { useAdmin } from '../../hooks/useAdmin';
import { AdminOnly } from '../../components/AdminOnly';

export function UseAdminExample(): JSX.Element {
  const [isAdmin, setIsAdmin] = useAdmin();
  return (
    <>
      <div>Is admin? {isAdmin + ''}</div>
      <div>
        <button onClick={() => setIsAdmin(!isAdmin)}>Toggle</button>
      </div>
      <AdminOnly>
        This is only visible when admin is enabled. Affects all admin-only components site-wide using local storage.
      </AdminOnly>
    </>
  );
}
