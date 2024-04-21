import { logout } from "@/lib/lib";

export async function POST() {
  try {
    await logout();
    return Response.json({
      success: true,
      message: "Logout ustunlikli",
      code: 200,
    });
  } catch (error) {
    console.log("logout yalnyslygy", error);
    return Response.json({
      message: "Bir yalnysluk doredi",
      code: 500,
      success: false,
    });
  }
}
