import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/Home.tsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
