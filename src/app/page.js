import Chart from "@/components/chart/Chart";
import Filter from "@/components/filter/Filter";
import SideBar from "@/components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="dark bg-background text-foreground p-4 grid grid-cols-[8rem_1fr_300px] gap-4 min-h-screen">
      <SideBar />
      <Chart />
      <Filter />
    </main>
  );
}
