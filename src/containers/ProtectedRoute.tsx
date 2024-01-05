import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  return true ? (
    children
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
}
