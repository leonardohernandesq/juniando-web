export const posts = async () => {
  const findPosts = fetch(`${process.env.API_URL}/posts`, {
    next: {
      revalidate: 60, // 1 min
    },
  }).then((res) => {
    return res.json();
  });
  return findPosts;
};

export const fetchPostBySlug = async (slug: string) => {
  const data = fetch(`${process.env.API_URL}/posts/${slug}`, {
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  }).then((res) => {
    return res.json();
  });

  return data;
};

export const increasePostViewCount = async (slug: string) => {
  const url =
    process.env.NODE_ENV === "development"
      ? `/posts/postDetailView/${slug}`
      : `/posts/incrementView/${slug}`;
  const data = fetch(`${process.env.API_URL}${url}`, {}).then((res) => {
    return res.json();
  });

  return data;
};
