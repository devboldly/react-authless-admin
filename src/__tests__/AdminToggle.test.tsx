import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { AdminToggle, AdminToggleProps } from '../components/AdminToggle';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: AdminToggleProps, children: React.ReactNode = undefined): RenderResult {
  return render(<AdminToggle {...props}>{children}</AdminToggle>);
}

describe('AdminToggle', () => {
  test('should render without crashing', async () => {
    const props: AdminToggleProps = {};
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
