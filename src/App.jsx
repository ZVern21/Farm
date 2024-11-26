/* 
Useful commands for pushing code to gh-pages branch for website:
  1. npm run build
  2. git add . 
    optional: git add -f dist/
  3. git commit -m "message"
  4. git push origin main
  5. git subtree push --prefix dist origin gh-pages
*/

// src/App.jsx
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;


