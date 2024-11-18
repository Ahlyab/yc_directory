import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_CreatedAt desc) {
  _id,
    title,
    slug,
    _CreatedAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image
}`);