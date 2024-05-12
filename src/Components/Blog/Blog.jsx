import React from "react";

const Blog = () => {
  React.useEffect(() => {        
    const script = document.createElement("script");        
    script.src = "https://www.bloghandy.com/api/bh_blogengine.js";        
    script.async = true;        
    // script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
        }, [])
  return (
    <>
      <div className="proyectos-container">
        <h2 className="proyectos-titulo">Blog</h2>
      </div>
      <div id="bh-posts"></div>
    </>
  );
};

export default Blog;
