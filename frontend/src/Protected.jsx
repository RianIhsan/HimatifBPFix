import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const [searchParams] = useSearchParams();
  if (searchParams.get("password") !== import.meta.env.VITE_MAKRAB_KEY) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
