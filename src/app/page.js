import Chart from "@/components/chart/Chart";
import Filter from "@/components/filter/Filter";
import SideBar from "@/components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="dark bg-background text-foreground p-2 flex gap-2 min-h-screen">
      <SideBar />
      <Chart />
      <Filter />
    </main>
  );
}
