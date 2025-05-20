import Image from "next/image";

export default function HistoryPage() {
  return (
    <section className="pt-32 pb-20 mt-10 px-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-slate-900">
        GIET University – An Amalgamation of Academics and Research-Based
        Learning
      </h1>

      <div className="mb-8">
        <Image
          src="/images/view.jpg"
          alt="GIET University Campus"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg shadow-cyan-500 w-full object-cover"
        />
      </div>

      <p className="text-lg mb-6">
        GIET University, Gunupur (formerly known as Gandhi Institute of
        Engineering and Technology), was founded in 1997 by the Vidya Bharati
        Educational Trust. Located in the tranquil foothills of the Eastern
        Ghats, along the banks of the scenic Bansadhara River in Odisha, the
        university has established itself as one of the premier institutions for
        higher education in Eastern India.
      </p>

      <p className="text-lg mb-6">
        Over the decades, GIETU has evolved through academic rigor, innovation,
        and a deep commitment to research and technological advancement. It
        earned University status in 2018 through an act of the Odisha
        Legislative Assembly and has been listed under the UGC Act, 1956, since
        2019.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
        Milestones of GIETU
      </h2>
      <div className="mb-6">
        <Image
          src="/images/campus.jpg"
          alt="Milestones at GIETU"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg shadow-cyan-500 w-full object-cover"
        />
      </div>

      <ul className="list-disc list-inside space-y-2 text-base">
        <li>
          Established in 1997 as Gandhi Institute of Engineering and Technology
          under Vidya Bharati Educational Trust.
        </li>
        <li>
          Conferred University status in 2018 through the Odisha Legislative
          Assembly Act.
        </li>
        <li>Listed under Section 2(f) of the UGC Act, 1956.</li>
        <li>
          Accredited five times by NBA for key B.Tech programs including CSE,
          MECH, EEE, Biotech, and ECE.
        </li>
        <li>
          Accredited by NAAC in its second cycle with a CGPA of 3.28
          (2015–2020).
        </li>
        <li>
          Recognized by DSIR (Govt. of India) as an institution of high-quality
          research.
        </li>
        <li>Approved by AICTE since its inception in 1997.</li>
        <li>
          Received approvals from Indian Nursing Council and ICAR for Nursing
          and Agriculture programs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">
        A Campus Built for the Future
      </h2>

      <div className="mb-6">
        <Image
          src="/images/wifi-facility.jpg"
          alt="Modern GIETU Campus"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg shadow-cyan-500 w-full object-cover"
        />
      </div>

      <p className="text-lg mb-4">
        GIETU's campus blends modern infrastructure with natural beauty,
        offering students a serene and highly stimulating environment. From
        smart classrooms and advanced laboratories to lush green spaces, GIETU
        provides everything students need for holistic development.
      </p>

      <p className="text-lg">
        With its focus on research-driven education, international
        collaborations, and community outreach, GIET University continues to
        shape future-ready leaders and innovators.
      </p>
    </section>
  );
}
