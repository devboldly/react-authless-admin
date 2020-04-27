import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { NonAdminOnly, NonAdminOnlyProps } from '../components/NonAdminOnly';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: NonAdminOnlyProps, children: React.ReactNode = undefined): RenderResult {
  return render(<NonAdminOnly {...props}>{children}</NonAdminOnly>);
}

describe('NonAdminOnly', () => {
  test('should render without crashing', async () => {
    const props: NonAdminOnlyProps = {};
    const children: React.ReactNode = 'non-admin only';
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
