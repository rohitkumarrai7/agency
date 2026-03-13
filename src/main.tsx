import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './lib/auth-context'

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-neutral-900 border-t-transparent" />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </ConvexProvider>
  </StrictMode>,
)
