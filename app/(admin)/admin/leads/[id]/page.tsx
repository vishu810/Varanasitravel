export default function LeadDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Lead: {params.id}</h1>
      <p>Details of the lead.</p>
    </div>
  );
}