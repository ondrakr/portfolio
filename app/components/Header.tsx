import Button from "./Button";
import Odkaz from "../../public/icons/Odkaz";
import Hvezda from "../../public/icons/Hvezda";

export default function Header() {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="z-90 mt-6">
        <div className="mt-32 flex flex-col justify-center items-center gap-4">
            <p className="text-center text-md sm:text-md md:text-lg lg:text-xl font-regular tracking-widest text-white opacity-70">
            FULL-STACK DEVELOPER & DESIGNER
            </p>
            <h1 className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-white font-bold leading-[110%] text-center mx-3 w-[80%]">
            Začíná to myšlenkou, končí kódem a&nbsp;vizuální identitou <span className="text-fialova">na míru</span>
            </h1>
            <p className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-regular tracking-widest text-white opacity-70 mt-3">
            ONDŘEJ KREJČÍ
            </p>
        </div>
        <div className="mt-16 flex justify-center">
        <Button content="Napište mi" icon={<Odkaz />} color={true}></Button>
        </div>
        </div>

<div className="w-full overflow-hidden absolute z-[-999] mt-[-2rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="1852" height="826" viewBox="0 0 1852 826" fill="none" className=" left-0 w-[1852px] overflow-hidden">
  <path fillRule="evenodd" clipRule="evenodd" d="M102.5 104.5V206.5H204.5V104.5L102.5 104.5ZM101.5 104.5V206.5L0 206.5V207.5L101.5 207.5L101.5 309.5H0V310.5H101.5L101.5 412.5H0V413.5H101.5V515.5H0V516.5H101.5V618.5H0V619.5H101.5L101.5 721.5H0V722.5H101.5L101.5 824.5H0V825.5L1852 825.5V824.5L1749.5 824.5V722.5H1852V721.5H1749.5V619.5H1852V618.5H1749.5V516.5H1852V515.5H1749.5V413.5H1852V412.5L1749.5 412.5V310.5H1852V309.5H1749.5V207.5H1852V206.5H1749.5V104.5L1852 104.5V103.5L1749.5 103.5V1.50015L1852 1.50016V0.500157L1749.5 0.500148V0.499969L1748.5 0.49997V0.500148L1646.5 0.500139V0.499969L1645.5 0.49997V0.500139L1543.5 0.50013V0.499969L1542.5 0.49997V0.50013L1440.5 0.500122V0.499969L1439.5 0.49997V0.500122L1337.5 0.500113V0.499969L1336.5 0.49997V0.500113L1234.5 0.500104V0.499969L1233.5 0.49997V0.500104L1131.5 0.500096V0.499969L1130.5 0.49997V0.500096L1029.5 0.500087V0.499969L1028.5 0.49997V0.500087L926.5 0.500078V0.499969L925.5 0.49997V0.500078L823.5 0.50007V0.499969L822.5 0.50007L719.5 0.499969L718.5 0.49997L616.5 0.499969L615.5 0.49997L513.5 0.499969L512.5 0.49997L410.5 0.499969L409.5 0.49997L308.5 0.499969L307.5 0.49997L205.5 0.499969L204.5 0.49997L102.5 0.499969L101.5 0.49997L0 0.5V1.5L101.5 1.50001L101.5 103.5L0 103.5V104.5L101.5 104.5ZM1748.5 515.5V413.5H1646.5V515.5H1748.5ZM1645.5 515.5V413.5H1543.5V515.5H1645.5ZM1543.5 516.5H1645.5V618.5H1543.5V516.5ZM1542.5 515.5V413.5H1440.5V515.5H1542.5ZM1440.5 516.5H1542.5V618.5H1440.5V516.5ZM1439.5 515.5V413.5H1337.5V515.5H1439.5ZM1337.5 516.5H1439.5V618.5H1337.5V516.5ZM1336.5 515.5V413.5H1234.5V515.5H1336.5ZM1234.5 516.5H1336.5V618.5H1234.5V516.5ZM1233.5 515.5V413.5L1131.5 413.5V515.5H1233.5ZM1131.5 516.5H1233.5V618.5H1131.5V516.5ZM1130.5 515.5V413.5H1029.5V515.5H1130.5ZM1029.5 516.5H1130.5V618.5H1029.5V516.5ZM1028.5 515.5V413.5H926.5V515.5H1028.5ZM926.5 516.5H1028.5V618.5H926.5V516.5ZM925.5 515.5V413.5H823.5V515.5H925.5ZM823.5 516.5H925.5V618.5H823.5V516.5ZM822.5 515.5V413.5H719.5V515.5H822.5ZM719.5 516.5H822.5V618.5H719.5V516.5ZM718.5 515.5V413.5H616.5V515.5H718.5ZM616.5 516.5H718.5V618.5H616.5V516.5ZM615.5 515.5V413.5H513.5V515.5H615.5ZM513.5 516.5H615.5V618.5H513.5V516.5ZM512.5 515.5V413.5H410.5V515.5H512.5ZM410.5 516.5H512.5V618.5H410.5V516.5ZM409.5 515.5V413.5H308.5V515.5L409.5 515.5ZM308.5 516.5L409.5 516.5V618.5L308.5 618.5V516.5ZM307.5 515.5V413.5H205.5V515.5H307.5ZM205.5 516.5H307.5V618.5H205.5V516.5ZM204.5 515.5V413.5H102.5V515.5H204.5ZM102.5 516.5H204.5V618.5H102.5V516.5ZM1646.5 516.5H1748.5V618.5H1646.5V516.5ZM102.5 721.5L102.5 619.5H204.5V721.5H102.5ZM205.5 721.5V619.5H307.5V721.5H205.5ZM308.5 721.5V619.5L409.5 619.5V721.5H308.5ZM410.5 721.5V619.5H512.5V721.5H410.5ZM513.5 721.5V619.5H615.5V721.5H513.5ZM616.5 721.5V619.5H718.5V721.5H616.5ZM719.5 721.5V619.5H822.5V721.5H719.5ZM823.5 721.5V619.5H925.5V721.5H823.5ZM926.5 721.5V619.5H1028.5V721.5H926.5ZM1029.5 721.5V619.5H1130.5V721.5H1029.5ZM1131.5 721.5V619.5H1233.5V721.5H1131.5ZM1234.5 721.5V619.5H1336.5V721.5H1234.5ZM1337.5 721.5V619.5H1439.5V721.5H1337.5ZM1440.5 721.5V619.5H1542.5V721.5H1440.5ZM1543.5 721.5V619.5H1645.5V721.5H1543.5ZM1646.5 721.5V619.5H1748.5V721.5H1646.5ZM1748.5 824.5V722.5H1646.5V824.5H1748.5ZM1645.5 824.5V722.5H1543.5V824.5H1645.5ZM1542.5 824.5V722.5H1440.5V824.5H1542.5ZM1439.5 824.5V722.5H1337.5V824.5H1439.5ZM1336.5 824.5V722.5H1234.5V824.5H1336.5ZM1233.5 824.5V722.5H1131.5V824.5H1233.5ZM1130.5 824.5V722.5H1029.5V824.5H1130.5ZM1028.5 824.5V722.5H926.5V824.5H1028.5ZM925.5 824.5V722.5H823.5V824.5H925.5ZM822.5 824.5V722.5H719.5V824.5H822.5ZM718.5 824.5V722.5H616.5V824.5H718.5ZM615.5 824.5V722.5H513.5V824.5H615.5ZM512.5 824.5V722.5H410.5V824.5H512.5ZM409.5 824.5V722.5H308.5V824.5H409.5ZM307.5 824.5V722.5H205.5V824.5H307.5ZM204.5 824.5V722.5H102.5L102.5 824.5H204.5ZM1748.5 310.5V412.5H1646.5V310.5H1748.5ZM1748.5 1.50015L1646.5 1.50014V103.5L1748.5 103.5V1.50015ZM1748.5 104.5L1646.5 104.5V206.5H1748.5V104.5ZM1748.5 207.5H1646.5V309.5H1748.5V207.5ZM1645.5 310.5V412.5H1543.5V310.5H1645.5ZM1645.5 1.50014L1543.5 1.50013V103.5L1645.5 103.5V1.50014ZM1645.5 104.5L1543.5 104.5V206.5H1645.5V104.5ZM1645.5 207.5H1543.5V309.5H1645.5V207.5ZM1542.5 310.5V412.5H1440.5V310.5H1542.5ZM1542.5 207.5V309.5H1440.5V207.5H1542.5ZM1542.5 104.5V206.5H1440.5V104.5L1542.5 104.5ZM1542.5 1.50013V103.5L1440.5 103.5V1.50012L1542.5 1.50013ZM1439.5 1.50012L1337.5 1.50011V103.5L1439.5 103.5V1.50012ZM1439.5 104.5L1337.5 104.5V206.5L1439.5 206.5V104.5ZM1439.5 207.5L1337.5 207.5V309.5H1439.5V207.5ZM1439.5 310.5H1337.5V412.5H1439.5V310.5ZM1336.5 310.5V412.5H1234.5V310.5H1336.5ZM1233.5 412.5H1131.5V310.5L1233.5 310.5V412.5ZM1029.5 412.5H1130.5V310.5H1029.5V412.5ZM1028.5 412.5H926.5V310.5H1028.5V412.5ZM823.5 412.5H925.5V310.5H823.5V412.5ZM822.5 412.5H719.5V310.5H822.5V412.5ZM616.5 412.5H718.5V310.5H616.5V412.5ZM615.5 412.5H513.5V310.5H615.5V412.5ZM410.5 412.5H512.5V310.5H410.5V412.5ZM409.5 412.5H308.5V310.5H409.5V412.5ZM205.5 412.5H307.5V310.5H205.5V412.5ZM204.5 412.5H102.5L102.5 310.5H204.5V412.5ZM1234.5 1.5001L1336.5 1.50011V103.5L1234.5 103.5V1.5001ZM1131.5 1.5001L1233.5 1.5001V103.5L1131.5 103.5V1.5001ZM1029.5 1.50009L1130.5 1.5001V103.5L1029.5 103.5V1.50009ZM926.5 1.50008L1028.5 1.50009V103.5L926.5 103.5V1.50008ZM823.5 1.50007L925.5 1.50008V103.5L823.5 103.5V1.50007ZM719.5 1.50006L822.5 1.50007V103.5L719.5 103.5V1.50006ZM616.5 1.50005L718.5 1.50006V103.5L616.5 103.5V1.50005ZM513.5 1.50004L615.5 1.50005V103.5L513.5 103.5V1.50004ZM410.5 1.50003L512.5 1.50004V103.5L410.5 103.5L410.5 1.50003ZM308.5 1.50003L409.5 1.50003L409.5 103.5L308.5 103.5L308.5 1.50003ZM205.5 1.50002L307.5 1.50003L307.5 103.5L205.5 103.5L205.5 1.50002ZM102.5 1.50001L204.5 1.50002L204.5 103.5L102.5 103.5L102.5 1.50001ZM205.5 104.5V206.5L307.5 206.5V104.5L205.5 104.5ZM308.5 104.5V206.5H409.5V104.5L308.5 104.5ZM410.5 104.5V206.5L512.5 206.5V104.5L410.5 104.5ZM513.5 104.5V206.5H615.5V104.5L513.5 104.5ZM616.5 104.5V206.5L718.5 206.5V104.5L616.5 104.5ZM719.5 104.5V206.5H822.5V104.5L719.5 104.5ZM823.5 104.5V206.5L925.5 206.5V104.5L823.5 104.5ZM926.5 104.5V206.5L1028.5 206.5V104.5L926.5 104.5ZM1029.5 104.5V206.5H1130.5V104.5L1029.5 104.5ZM1131.5 104.5V206.5L1233.5 206.5V104.5L1131.5 104.5ZM1234.5 104.5V206.5H1336.5V104.5L1234.5 104.5ZM102.5 309.5L102.5 207.5H204.5V309.5H102.5ZM205.5 309.5V207.5L307.5 207.5V309.5H205.5ZM308.5 309.5V207.5H409.5V309.5H308.5ZM410.5 309.5V207.5L512.5 207.5V309.5H410.5ZM513.5 309.5V207.5H615.5V309.5H513.5ZM616.5 309.5V207.5L718.5 207.5V309.5H616.5ZM719.5 309.5V207.5H822.5V309.5H719.5ZM823.5 309.5V207.5L925.5 207.5V309.5H823.5ZM926.5 309.5V207.5L1028.5 207.5V309.5H926.5ZM1029.5 309.5V207.5H1130.5V309.5H1029.5ZM1131.5 309.5V207.5L1233.5 207.5V309.5L1131.5 309.5ZM1234.5 309.5V207.5H1336.5V309.5H1234.5Z" fill="white" fillOpacity="0.03"/>
  <defs className="z-[-1]">
    <linearGradient id="gradient-overlay" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#000319" stopOpacity="1" />
      <stop offset="20%" stopColor="rgba(0, 3, 25, 0)" />
    </linearGradient>
  </defs>
  <rect width="1852" height="826" fill="url(#gradient-overlay)" />
</svg>

</div>

<div className="absolute z-20" style={{ top: 90, left: 189 }}>
<Hvezda />
</div>
<div className="absolute z-20" style={{ top: -13, right: 194, opacity: 0.3 }}>
<Hvezda />
</div>
<div className="absolute z-20" style={{ top: 500, right: 297, opacity: 0.5 }}>
<Hvezda />
</div>


<div className="glow" style={{ top: -600, left: -200 }}></div>
<div className="glow" style={{ top: -700, left: 0 }}></div>
<div className="glow" style={{ top: -500, left: -400 }}></div>

<div className="glow" style={{ top: -600, right: -200, transform: 'rotate(45deg)' }}></div>
<div className="glow" style={{ top: -700, right: 0, transform: 'rotate(45deg)' }}></div>
<div className="glow" style={{ top: -500, right: -400, transform: 'rotate(45deg)' }}></div>
    </div>
    );
  }
  