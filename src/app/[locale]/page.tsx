import { HomeView } from "@/views/Home";

export default function HomePage({ params }: { params: { locale: string } }) {
  return <HomeView locale={params.locale} />;
}
