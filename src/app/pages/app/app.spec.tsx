import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App - Teste unitário', () => {
  it('Deve renderizar o componente', () => {
    render(<App />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
