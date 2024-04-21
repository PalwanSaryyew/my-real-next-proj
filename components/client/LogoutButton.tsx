"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";

type Props = {};

export const LogoutButton: React.FC<Props> = ({}: Props) => {
  const handlelogout = async (event: any) => {
    event.preventDefault();
    const response: any = await fetch("/api/user/out", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Something went wrong with the API call");
    }

    const data = await response.json();
    if (data.success) {
      window.location.href = "/";
    }
    if (!data.success) {
      toast.error(data.message);
    }
  };

  return (
    <form onSubmit={handlelogout}>
      <Button type={"submit"} className="bg-mine text-mine-foreground">
        Logout
      </Button>
    </form>
  );
};
