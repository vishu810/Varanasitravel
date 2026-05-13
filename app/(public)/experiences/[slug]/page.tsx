export default function ExperienceDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Experience: {params.slug}</h1>
      <p>Details about this experience.</p>
    </div>
  );
}