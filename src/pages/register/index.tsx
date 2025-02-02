import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { RegisterForm } from "@/types";
import GoogleSvg from "@/assets/icons/google.svg";
import { auth, googleProvider, signInWithPopup } from "@/firebase";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RegisterForm>();

  const onSubmit = () => {
    navigate("/verify");
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
      navigate("/setup");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm p-6">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="email">Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className={`${errors.name ? "border-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{`${errors.name.message}`}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: "password is required" })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`${errors.password ? "border-destructive" : ""}`}
            />
            {errors.password && (
              <p className="text-destructive text-sm mt-1">
                {`${errors.password.message}`}
              </p>
            )}
          </div>
          <Button className="w-full" onClick={handleSubmit(onSubmit)}>
            Register
          </Button>
          <div className="flex items-center justify-center mt-4 mb-4">
            <span className="text-gray-500">or</span>
          </div>
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleGoogleSignIn}
          >
            <img src={GoogleSvg} alt="google" className="w-4 h-4 mr-2" />
            Register with Google{" "}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
