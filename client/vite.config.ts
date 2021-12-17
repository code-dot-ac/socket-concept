import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const codespaceName = 'willhartman-code-dot-ac-socket-concept-7v55w5qgcrx9v'; //process.env['CODESPACE_NAME'];
const hmrPort = 3000;

const hmrRemoteHost = codespaceName ? `${codespaceName}-${hmrPort}.githubpreview.dev` : 'localhost';
const hmrRemotePort = codespaceName ? 443 : hmrPort;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: hmrRemoteHost,
      port: hmrPort,
      clientPort: hmrRemotePort,
    },
  },
});
