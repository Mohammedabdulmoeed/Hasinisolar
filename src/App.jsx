import AppRoutes from './routes/AppRoutes';
import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute';

export default function App() {
  return (
    <>
      {/* IMPORTANT: resets scroll on every route change */}
      <ScrollToTopOnRoute />

      {/* Renders your application instantly with no loading screen lag */}
      <AppRoutes />
    </>
  );
}