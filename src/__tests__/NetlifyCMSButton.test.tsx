import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { NetlifyCMSButton, NetlifyCMSButtonProps } from '../components/NetlifyCMSButton';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: NetlifyCMSButtonProps, children: React.ReactNode = undefined): RenderResult {
  return render(<NetlifyCMSButton {...props}>{children}</NetlifyCMSButton>);
}

describe('NetlifyCMSButton', () => {
  test('should render without crashing', async () => {
    const props: NetlifyCMSButtonProps = { collection: 'posts', entry: 'hello-world' };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
