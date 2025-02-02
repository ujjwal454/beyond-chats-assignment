import Test from "@/pages/chat-bot-test";
import Integration from "@/pages/integration";
import Register from "@/pages/register";
import SetupOrganization from "@/pages/setup";
import Verify from "@/pages/verify";

export const routes = [
  { path: "/", element: <Register /> },
  { path: "/verify", element: <Verify /> },
  { path: "/setup", element: <SetupOrganization /> },
  { path: "/integrate", element: <Integration /> },
  { path: "/test", element: <Test /> },
];
