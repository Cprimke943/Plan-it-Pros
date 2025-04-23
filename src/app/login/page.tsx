import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginForm />

      {/* Register link */}
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-blue-600 hover:underline font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
