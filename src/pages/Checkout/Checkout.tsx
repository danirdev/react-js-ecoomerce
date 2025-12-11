import { Table } from '../../components/iu/Table/Table'

const Checkout = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          Checkout
        </h1>
        <Table />
      </div>
    </div>
  )
}

export default Checkout
