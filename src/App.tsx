import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import TemplatesPage from './pages/TemplatesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="builder" element={<BuilderPage />} />
      </Route>
    </Routes>
  )
}
