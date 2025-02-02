import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SetUp } from "@/types";
import { dummyScrapeData } from "@/constants";
import { useNavigate } from "react-router";

function SetupOrganization() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetUp>();

  const [isLoading, setIsLoading] = useState(false);

  const [webpages, setWebpages] = useState<any[]>([]);

  const updateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleScrapeData = async (data: SetUp) => {
    console.log(data);

    setIsLoading(true);
    const updateDummyData = dummyScrapeData.map((item) => ({
      ...item,
      url: data.url + item.url,
    }));
    setWebpages(updateDummyData);
    updateLoading();
  };

  const navigateToIntegration = () => {
    navigate("/integrate");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 dark:bg-gray-900">
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <CardTitle>Setup Organization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label>Company Name</Label>
            <Input
              {...register("name", {
                required: "Organization name is required",
              })}
              placeholder="Enter company name"
              className={`${errors.name ? "border-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label>Company Website</Label>
            <Input
              {...register("url", {
                required: "Organization url is required",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-./?%&=]*)?$/i,
                  message: "Enter a valid url",
                },
              })}
              placeholder="Enter website URL"
              className={`${errors.url ? "border-destructive" : ""}`}
            />
            {errors.url && (
              <p className="text-destructive text-sm mt-1">
                {errors.url.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label>Description</Label>
            <Input
              className={`${errors.description ? "border-destructive" : ""}`}
              {...register("description", { required: "Email is required" })}
            />
            {errors.description && (
              <p className="text-destructive text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit(handleScrapeData)}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Continue"}
          </Button>
        </CardContent>
      </Card>
      {!isLoading && webpages.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <h2 className="text-lg font-bold mb-2">Detected Webpages</h2>
          {webpages.map((page, index) => (
            <Card key={index} className="mb-2 p-4 dark:bg-gray-800">
              <p>{page.url}</p>
              <p
                className={
                  page.status === "Scraped"
                    ? "text-green-500"
                    : page.status === "Error"
                    ? "text-red-500"
                    : "text-yellow-500"
                }
              >
                {page.status}
              </p>
              {page.chunks.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-blue-500">
                    View Scraped Data
                  </summary>
                  <p className="text-sm mt-1">{page.chunks.join(" ")}</p>
                </details>
              )}
            </Card>
          ))}
        </div>
      )}
      <Button
        className="fixed bottom-4 right-4 flex flex-col items-end"
        disabled={webpages.length <= 0 || isLoading}
        onClick={navigateToIntegration}
      >
        Next
      </Button>
    </div>
  );
}

export default SetupOrganization;
