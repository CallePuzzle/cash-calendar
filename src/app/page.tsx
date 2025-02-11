import { Calendar } from "@/app/components/Calendar";
import DayDetail from "./components/DayDetail";

export default function Index() {
  return (
    <section className="min-w-320 flex flex-col items-center justify-around lg:flex-row">
      <Calendar />
      <DayDetail daySelected="11/2/2025" />
    </section>
  );
}
