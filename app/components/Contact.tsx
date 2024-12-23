import Button from "./Button";
import Odkaz from "../../public/icons/Odkaz";

export default function Contakt() {
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="mt-32 flex flex-col justify-center items-center gap-4">
            <h1 className="text-[3rem] text-white font-bold leading-[110%] text-center w-[60%]">
            Chcete posunout svou digitální přítomnost na <span className="text-fialova">vyšší úroveň</span>?
            </h1>
            <p className="text-center text-xl font-regular tracking-widest text-white opacity-70 mt-3">
            Kontaktujte mě a společně probereme, jak vám mohu pomoci dosáhnout vašich cílů.
            </p>
        </div>
        <div className="mt-16">
        <Button content="Napište mi" icon={<Odkaz />} color={true}></Button>
        </div>
        <p className="text-white text-sm mt-40 mb-8">© Ondřej Krejčí 2025</p>
    </div>
    );
  }
  