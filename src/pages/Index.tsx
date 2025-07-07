
import { useNavigate } from "react-router-dom";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogHero } from "@/components/BlogHero";
import { BlogPost } from "@/components/BlogPost";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const navigate = useNavigate();
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <BlogHero />
      
      <main className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Story</h2>
            <div onClick={() => handlePostClick(featuredPost.id)}>
              <BlogPost post={featuredPost} variant="featured" />
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <span className="text-gray-500">
              {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => handlePostClick(post.id)}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <BlogPost post={post} variant="card" />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 flex-1 focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TechBlog
            </h4>
            <p className="text-gray-400 max-w-md mx-auto">
              Discover amazing stories, insights, and ideas from the world of technology and design.
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 TechBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
