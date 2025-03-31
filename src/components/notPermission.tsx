import React from "react";

const containerStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
  textAlign: "center",
  padding: "0 20px",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "400px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "40px 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const titleStyle: React.CSSProperties = {
  fontSize: "24px",
  margin: "0 0 20px",
  color: "#343a40",
};

const textStyle: React.CSSProperties = {
  fontSize: "16px",
  margin: "0 0 30px",
  color: "#6c757d",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const NotPermission: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Acesso Negado</h1>
        <p style={textStyle}>
          Você não tem permissão para acessar esta página. Por favor, verifique
          suas credenciais ou entre em contato com o administrador.
        </p>
      </div>
    </div>
  );
};

export default NotPermission;
