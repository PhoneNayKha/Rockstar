import { Outlet } from "react-router";

import { Container } from "@mui/material";

import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <AppDrawer />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
