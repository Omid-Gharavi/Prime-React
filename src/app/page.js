import Chart from "@/components/chart/Chart";
import SideBar from "@/components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="dark bg-background text-foreground grid grid-cols-[8rem_1fr] min-h-screen">
      <SideBar />
      <Chart />
    </main>
  );
}
