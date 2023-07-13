import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Header, UserDetails } from '../../pages';
import PostDetails from '../../pages/PostDetails/PostDetails';


const Posts = lazy(() => import('../../pages/Posts/Posts'));
const Users = lazy(() => import('../../pages/Posts2/Posts2'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Suspense fallback={<div>Loading ...</div>}> <Posts /> </Suspense>} />
          <Route path="/posts2" element={<Suspense fallback={<div>Loading ...</div>}> <Users /> </Suspense>} />
          <Route path="/posts/:id" element={<UserDetails />} />
          <Route path="/posts/:id/details" element={<PostDetails />} />
          <Route path="*" element={<div>About</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
