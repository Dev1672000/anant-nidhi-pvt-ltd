import KycForm from "./components/KycForm";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import KycLogin from "./pages/kycLogin";
import Status from "./pages/status";

function App() {
  return (
    <div className="space-y-10">
      <Login />
      <Status />
      <EmailVerification />

      <KycLogin />
      <KycForm />
    </div>
  );
}

export default App;
