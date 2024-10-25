import React from "react";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default ClientLayout;
