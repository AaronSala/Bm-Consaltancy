
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import BlogPostPage from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import VideographyIndex from "./pages/VideographyIndex";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
      <HashRouter>
        <Routes>
          <Route path="/" element={<VideographyIndex />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    
  </QueryClientProvider>
);

export default App;
