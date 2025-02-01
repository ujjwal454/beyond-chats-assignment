import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { RegisterForm } from "@/types";

const Register = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {};

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
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
