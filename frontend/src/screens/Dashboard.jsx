// import Stat from "../components/Dashboard/Stat"
import ProtectedRoute from "../components/ProtectedRoute"
import DashboardLayout from "../shared/DashboardLayout"

DashboardLayout


const Dashboard = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-2xl font-bold text-green-500">Dashboard</h1>
        {/* <Stat /> */}
      </DashboardLayout>

    </ProtectedRoute>
  )
}

export default Dashboard