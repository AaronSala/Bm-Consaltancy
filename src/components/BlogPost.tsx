
import { Clock, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  featured: boolean;
}

interface BlogPostProps {
  post: BlogPostData;
  variant?: "card" | "featured";
}

export const BlogPost = ({ post, variant = "card" }: BlogPostProps) => {
  const isCard = variant === "card";
  const isFeatured = variant === "featured";

  return (
    <article 
      className={`group cursor-pointer transition-all duration-300 ${
        isCard 
          ? "bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden" 
          : isFeatured
          ? "relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden text-white min-h-[400px]"
          : ""
      }`}
    >
      <div className={`${isCard ? "aspect-video" : isFeatured ? "absolute inset-0" : ""}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className={`${
            isCard 
              ? "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              : isFeatured 
              ? "w-full h-full object-cover opacity-20" 
              : ""
          }`}
        />
      </div>
      
      <div className={`${
        isCard 
          ? "p-6" 
          : isFeatured 
          ? "absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent" 
          : ""
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="secondary" className={`${isFeatured ? "bg-white/20 text-white" : ""}`}>
            {post.category}
          </Badge>
          <div className={`flex items-center gap-4 text-sm ${isFeatured ? "text-white/80" : "text-gray-500"}`}>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
        
        <h3 className={`font-bold mb-3 group-hover:text-blue-600 transition-colors ${
          isFeatured ? "text-3xl text-white" : "text-xl"
        }`}>
          {post.title}
        </h3>
        
        <p className={`mb-4 leading-relaxed ${
          isFeatured ? "text-white/90 text-lg" : "text-gray-600"
        }`}>
          {post.excerpt}
        </p>
        
        <div className={`flex items-center gap-2 ${isFeatured ? "text-white/80" : "text-gray-500"}`}>
          <User className="w-4 h-4" />
          <span className="text-sm font-medium">{post.author}</span>
        </div>
      </div>
    </article>
  );
};
