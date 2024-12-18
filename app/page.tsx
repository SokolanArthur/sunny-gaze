import { AppContent } from "@/components/shared/app-content";
import { News } from "@/components/shared/news";

export default function Home() {
  return (
    <div>
      <News />
      <AppContent />
    </div>
  );
}
