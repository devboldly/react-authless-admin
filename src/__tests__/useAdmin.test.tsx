import { renderHook } from '@testing-library/react-hooks';
import { useAdmin } from '../hooks/useAdmin';

describe('useNetlifyCMSAdminEnabled Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useAdmin());
    expect(result.error).toBe(undefined);
  });
});
