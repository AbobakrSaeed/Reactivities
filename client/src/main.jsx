import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={new QueryClient()}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
  </StrictMode>,
)
