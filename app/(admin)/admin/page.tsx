import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const session = await getServerSession()
  if (!session) redirect('/login')

  const totalLeads = await prisma.lead.count()
  const newToday = await prisma.lead.count({
    where: { createdAt: { gte: new Date(new Date().setHours(0,0,0)) } },
  })
  const recentLeads = await prisma.lead.findMany({ take: 10, orderBy: { createdAt: 'desc' } })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-text-muted">Total Leads</p>
          <p className="text-4xl font-bold text-gold-500">{totalLeads}</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-text-muted">New Today</p>
          <p className="text-4xl font-bold text-gold-500">{newToday}</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Recent Leads</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-bg-border">
              <tr>
                <th className="p-3">Name</th>
                <th>WhatsApp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead: any) => (
                <tr key={lead.id} className="border-b border-bg-border/50">
                  <td className="p-3">{lead.fullName}</td>
                  <td>{lead.whatsapp}</td>
                  <td>{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}