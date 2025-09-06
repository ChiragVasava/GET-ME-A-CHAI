import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import dbConnect from '@/lib/db'
import User from '@/models/User'


const UsernamePage = async ({ params }) => {

  // if the username is not present in the database, show a 404 page
  const checkUser = async () => {

    await dbConnect()

    let u = await User.findOne({ username: params.username })

    if (!u) {
      return notFound()
    }
  }
  await checkUser()

  return (
    <div>
      <PaymentPage username={params.username} />
    </div>
  )
}
export default UsernamePage

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Support ${params.username} - Get Me A Chai',
  }
}
