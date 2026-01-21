import { useSelector } from "react-redux"
import Header from "./Header"

const Browse = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Header />
      <div className="text-red-500 text-md text-center ml-8">
        Welcome to the Browse Page! {user && `Hello, ${user.displayName}` }
      </div>
    </div>
  )
}

export default Browse