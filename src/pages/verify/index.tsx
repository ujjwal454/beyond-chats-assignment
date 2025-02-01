import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { defaultOtp } from "@/constants";
import { useTimer } from "react-timer-hook";
import { addSeconds } from "date-fns";

const Verify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<{ otp: string }>();

  const { seconds, restart } = useTimer({
    expiryTimestamp: addSeconds(new Date(), 30),
  });

  const showOtp = () => {
    toast.info(defaultOtp);
  };

  const onSubmit = (data: { otp: string }) => {
    if (data.otp !== defaultOtp) {
      setError("otp", {
        type: "manual",
        message: "Invalid OTP",
      });
      return;
    } else {
      toast.success("OTP verified successfully");
    }
  };

  useEffect(() => {
    showOtp();
  }, []);

  const handleResend = () => {
    showOtp();
    restart(addSeconds(new Date(), 30));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-sm p-6">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-4">
            We have sent a 6-digit verification code to your email. Enter it
            below to verify your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                type="text"
                id="otp"
                placeholder="6-digit code"
                maxLength={6}
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter a valid 6-digit OTP",
                  },
                })}
                className={`${errors.otp ? "border-destructive" : ""}`}
              />
              {errors.otp && (
                <p className="text-destructive text-sm mt-1">
                  {errors.otp.message}
                </p>
              )}
            </div>

            <Button className="w-full" type="submit">
              Verify
            </Button>
          </form>

          <div className="mt-4 text-center">
            {seconds > 0 ? (
              <p className="text-sm text-muted-foreground">
                Resend OTP in {seconds}
              </p>
            ) : (
              <Button variant="link" onClick={handleResend}>
                Resend OTP
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
