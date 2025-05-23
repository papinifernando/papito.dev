export interface Post {
  frontmatter: {
    id: string;
    slug: string;
    title: string;
    description: string;
    tags: Array<Tag>;
    dateStr: string;
    reading_time: string;
    coverImageSrc?: string;
  }
}

export interface Tag {
  name: string;
  color: string;
}

export interface YouTubeData {
  title: string;
  url: string;
  thumbnail: string;
}