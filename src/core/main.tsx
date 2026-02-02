import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes'
import { Provider } from '@/components/ui/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./theme/fonts.css"
import { AuthProvider } from '@/features/auth/contexts/AuthContext';

const router = createBrowserRouter(routes);
const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
    <QueryClientProvider client={client}>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
    </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
