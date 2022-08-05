import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth"

import { api } from "../services/apiClient"
import { setupAPIClient } from "../services/api"
import { usecan } from "../hooks/useCan"


export default function Dashboard() {
  const { user } = useContext(AuthContext)

  const userCanSeeMetrics = usecan({
    roles: ["administrator","editor"]
  });

useEffect(() => {
  api.get("/me")
  .then(response => console.log(response))
}, [])

  return (
    <>
    <h1>Dashboard: {user?.email}</h1>

    { userCanSeeMetrics && <div>Métricas</div>}
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  
  const response = await apiClient.get("/me");

  console.log(response.data)

  return {
    props:{}
  }
})