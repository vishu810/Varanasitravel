export default function PackageDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Package: {params.slug}</h1>
      <p>Details about this package.</p>
    </div>
  );
}