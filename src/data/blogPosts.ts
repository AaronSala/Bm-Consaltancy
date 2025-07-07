
import { BlogPostData } from "@/components/BlogPost";

export const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "The Future of Web Development: What's Coming in 2024",
    excerpt: "Explore the cutting-edge technologies and trends that will shape web development in the coming year, from AI integration to new framework innovations.",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we look toward 2024, several key trends are emerging that will fundamentally change how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code completion to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot and similar tools are just the beginning.</p>
      
      <h2>Edge Computing and Performance</h2>
      <p>With the rise of edge computing, we're seeing applications that are faster and more responsive than ever before. This shift is changing how we think about data processing and user experience.</p>
      
      <h2>Sustainable Web Practices</h2>
      <p>Environmental consciousness is driving the adoption of sustainable web practices. Developers are increasingly focused on creating energy-efficient applications that minimize their carbon footprint.</p>
      
      <p>The future is bright for web development, and these trends are just the tip of the iceberg. Stay tuned as we continue to explore these exciting developments.</p>
    `,
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    featured: true
  },
  {
    id: "2",
    title: "Building Responsive Design Systems at Scale",
    excerpt: "Learn how to create and maintain design systems that work across multiple teams and products while ensuring consistency and efficiency.",
    content: `
      <p>Creating a design system that scales across an entire organization is one of the most challenging yet rewarding endeavors in modern product development.</p>
      
      <h2>Foundation First</h2>
      <p>Start with the basics: typography, color, spacing, and component architecture. These foundational elements will guide every decision that follows.</p>
      
      <h2>Documentation is Key</h2>
      <p>Without proper documentation, even the best design system will fail. Invest time in creating comprehensive guides and examples.</p>
    `,
    author: "Michael Rodriguez",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Design",
    featured: false
  },
  {
    id: "3",
    title: "The Art of Clean Code: Best Practices for 2024",
    excerpt: "Discover the principles and practices that separate good code from great code, with real-world examples and actionable tips.",
    content: `
      <p>Clean code is not just about following conventions—it's about creating software that is maintainable, readable, and robust.</p>
      
      <h2>Readability Over Cleverness</h2>
      <p>Write code that tells a story. Your future self and your colleagues will thank you for choosing clarity over cleverness.</p>
      
      <h2>The SOLID Principles</h2>
      <p>Understanding and applying SOLID principles in your daily work will dramatically improve your code quality.</p>
    `,
    author: "Emma Thompson",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Programming",
    featured: false
  },
  {
    id: "4",
    title: "Mastering Modern CSS: Grid, Flexbox, and Beyond",
    excerpt: "Deep dive into advanced CSS techniques that will elevate your styling skills and help you create stunning, responsive layouts.",
    content: `
      <p>CSS has evolved tremendously over the past few years. Modern CSS gives us powerful tools to create complex layouts with ease.</p>
      
      <h2>CSS Grid vs Flexbox</h2>
      <p>Understanding when to use Grid versus Flexbox is crucial for creating efficient layouts.</p>
      
      <h2>Custom Properties and CSS Variables</h2>
      <p>CSS custom properties enable dynamic theming and make maintenance much easier.</p>
    `,
    author: "Alex Kim",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "CSS",
    featured: false
  },
  {
    id: "5",
    title: "React Performance Optimization Techniques",
    excerpt: "Unlock the secrets to building lightning-fast React applications with these proven optimization strategies and tools.",
    content: `
      <p>Performance is crucial for user experience. Let's explore the most effective ways to optimize React applications.</p>
      
      <h2>Memoization Strategies</h2>
      <p>Learn when and how to use React.memo, useMemo, and useCallback effectively.</p>
      
      <h2>Bundle Optimization</h2>
      <p>Code splitting and lazy loading can dramatically reduce initial load times.</p>
    `,
    author: "David Park",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "React",
    featured: false
  },
  {
    id: "6",
    title: "The Psychology of User Interface Design",
    excerpt: "Understanding how users think and behave is key to creating interfaces that are not just beautiful, but truly effective.",
    content: `
      <p>Great UI design goes beyond aesthetics. It's about understanding human psychology and creating interfaces that feel natural and intuitive.</p>
      
      <h2>Cognitive Load Theory</h2>
      <p>Reduce mental effort by organizing information hierarchically and minimizing unnecessary elements.</p>
      
      <h2>Color Psychology in UI</h2>
      <p>Colors evoke emotions and influence behavior. Choose your palette wisely.</p>
    `,
    author: "Lisa Wang",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "UX/UI",
    featured: false
  }
];
