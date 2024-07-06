// components/ClientProvider.tsx
"use client";

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from '@/app/_redux/store';

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ClientProvider;
