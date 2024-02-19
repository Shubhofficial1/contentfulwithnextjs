export default function BlogDetails({
  params,
}: {
  params: {
    blogId: string;
  };
}) {
  return (
    <div>
      <p>Details About Blog {params.blogId}</p>
    </div>
  );
}
