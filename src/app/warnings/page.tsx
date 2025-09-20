import { Routes } from "@/routes";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en" + Routes.WARNINGS);
}
