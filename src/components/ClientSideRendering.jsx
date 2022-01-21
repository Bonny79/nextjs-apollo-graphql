import { useState, useEffect } from "react";

const ClientSideRendering = ({ children, ...props }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return <div {...props}>{children}</div>;
};

export default ClientSideRendering;
