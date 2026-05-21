import { Toaster } from "sonner";

import AppRoutes from './routing/AppRoutes';

function App() {

  return (
    <>
      <Toaster position="top-center" richColors />
      <AppRoutes />
    </>
  )
}

export default App;
