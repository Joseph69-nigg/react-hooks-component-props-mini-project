import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { blogName, blogAbout, blogImage, posts } from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
