import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { AdminOnly, AdminOnlyProps } from '../components/AdminOnly';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: AdminOnlyProps, children: React.ReactNode = undefined): RenderResult {
  return render(<AdminOnly {...props}>{children}</AdminOnly>);
}

describe('AdminOnly', () => {
  test('should render without crashing', async () => {
    const props: AdminOnlyProps = {};
    const children: React.ReactNode = 'admin only';
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
