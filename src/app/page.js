import Chart from "@/components/chart/Chart";
import SideBar from "@/components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="dark grid grid-cols-[8rem_1fr] bg-background text-foreground min-h-screen">
      <SideBar />
      <Chart />
    </main>
  );
}
