import * as FormSection from "./PingFormSectionSCompilator.js";
import * as Icon from "react-bootstrap-icons";
export default function PingForm() {
  return (
    <form style={{width:"477px"}} className="bg-slate-50 w-fit h-3/5 rounded-3xl overflow-hidden relative mt-16 flex">
      <FormSection.Init className=""/>
      <FormSection.Init className=""/>
      <FormSection.Init className=""/>
      <FormSection.Init className=""/>
      <FormSection.Init className=""/>

      <section>
        <btn>
          <Icon.XLg />
        </btn>
        <btn>
          <Icon.ArrowLeft />
        </btn>
      </section>
    </form>
  );
}
