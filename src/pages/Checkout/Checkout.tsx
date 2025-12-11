import { Table } from '../../components/iu/Table/Table'
import CardCredit from '../../components/iu/CardCredit/CardCredit'
import {Toaster} from 'sonner'

const Checkout = () => {

  return (
    <div className="bg-gray-900 min-h-screen">
      <Toaster position="top-right" richColors visibleToasts={1} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          Checkout
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Table />
          </div>
          <div>
            <CardCredit />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
