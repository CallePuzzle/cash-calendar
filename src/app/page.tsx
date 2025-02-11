import { Calendar } from "@/app/components/Calendar";
import DayDetail from "./components/DayDetail";

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-around lg:flex-row">
      <Calendar />
      <DayDetail />
    </section>
  );
}
