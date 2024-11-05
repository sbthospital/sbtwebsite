import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg"; 
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Orthopedic Insights
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Discover valuable information on orthopedic health and wellness in our latest articles.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="View All Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard 
            img={img1} 
            headlines="Understanding Joint Pain: Causes and Treatments" 
            description="Explore the common causes of joint pain and effective treatment options available to alleviate discomfort."
          />
          <BlogCard 
            img={img2} 
            headlines="The Importance of Regular Exercise for Joint Health" 
            description="Learn how regular physical activity can strengthen joints and improve overall mobility."
          />
          <BlogCard 
            img={img3} 
            headlines="Preventing Sports Injuries: Best Practices for Athletes" 
            description="Discover essential tips to prevent common sports injuries and maintain peak performance."
          />
          <BlogCard 
            img={img4} 
            headlines="The Role of Nutrition in Bone Health" 
            description="Understand how a balanced diet rich in vitamins and minerals supports healthy bones."
          />
          <BlogCard 
            img={img5} 
            headlines="Latest Advances in Orthopedic Surgery Techniques" 
            description="Stay updated on the newest surgical techniques and technologies transforming orthopedic care."
          />
          <BlogCard 
            img={img6} 
            headlines="Managing Arthritis: Tips for Living Well" 
            description="Get practical advice on managing arthritis symptoms and maintaining a high quality of life."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
