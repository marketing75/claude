import { groq } from 'next-sanity';

// Testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    rating,
    photo,
    service,
    city,
    featured
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    rating,
    photo,
    service,
    city
  }
`;

// Case Studies
export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    services,
    challenge,
    results,
    heroImage,
    featured,
    publishedAt
  }
`;

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    services,
    challenge,
    results,
    heroImage,
    publishedAt
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    services,
    challenge,
    solution,
    results,
    testimonial-> {
      _id,
      name,
      role,
      company,
      quote,
      rating,
      photo
    },
    heroImage,
    seo,
    featured,
    publishedAt
  }
`;

// Blog Posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    categories,
    coverImage,
    publishedAt
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    excerpt,
    body,
    categories,
    coverImage,
    seo,
    publishedAt
  }
`;

// Team Members
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio,
    linkedin,
    order
  }
`;

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    phone,
    email,
    address,
    socialLinks,
    gtmId
  }
`;
