import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ajaxService } from '../services/ajaxService';
import { BlogItem } from './BlogItem';

export function Blog() {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    ajaxService(`/blogs/${params.id}`).then((data) => {
      setBlog(data);
    });
  }, []);

  return (
    <aside className='blog-aside'>
      {blog && (
        <BlogItem
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      )}
    </aside>
  );
}