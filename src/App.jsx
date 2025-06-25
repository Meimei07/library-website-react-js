import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Book from "./pages/book/Book";
import BookForm from "./pages/book/Form";
import Visitor from "./pages/visitor/Visitor";
import VisitorForm from "./pages/visitor/Form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="book" element={<Book />} />
      <Route path="book/form" element={<BookForm />} />
      <Route path="visitor" element={<Visitor />} />
      <Route path="visitor/form" element={<VisitorForm />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
