import SignupForm from "@/components/Signup"; // Assuming the form is in Signup.tsx
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <SignupForm />

      {/* Link back to login */}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-semibold"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
