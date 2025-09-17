// src/components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../api/config";
const BASE_URL = config.BASE_URL
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // Call check-user API
    fetch(`${BASE_URL}/user/check-user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.ok) {
          setIsAuth(true);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <p>Checking authentication...</p>;

  return isAuth ? children : null;
};

export default ProtectedRoute;
