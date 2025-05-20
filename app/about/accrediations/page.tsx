import Image from "next/image";

const accreditationData = [
  {
    title: "Government of Odisha Act 2018",
    file: "/GIET-UNIVERSITY-Notification-with-Act-2-351.pdf",
    images: "/images/a1.jpg",
  },
  {
    title: "Inclusion in UGC Act, 1956 (Section 2f)",
    file: "/UGC-2-f (1).pdf",
    images: "/images/a2.png",
  },
  {
    title: "Membership of Association of Indian Universities",
    file: "/AIU-_20220421_0001.pdf",
    images: "/images/a3.jpg",
  },
  {
    title:
      "NBA Accredited B.Tech Programs – CSE, MECH, EEE, Biotech, and ECE (5 Times)",
    file: "/NBA-CSE-MECH-2023-26.pdf",
    images: "/images/a4.png",
  },
  {
    title: "NAAC Accreditation (2015-2020) – CGPA 3.28, Second Cycle",
    file: "/NAAC.pdf",
    images: "/images/a5.png",
  },
  {
    title: "AQAR Report 2018-2019",
    file: "/AQAR-REPORT-2018-19.pdf",
    images: "/images/a6.png",
  },
  {
    title: "AQAR Report 2017-2018",
    file: "/AQAR-REPORT-2018-19.pdf",
    images: "/images/a7.png",
  },
  {
    title: "AQAR Report 2016-2017",
    file: "/AQAR-REPORT-2018-19.pdf",
    images: "/images/a8.jpg",
  },
  {
    title: "Recognized by DSIR for Quality Research",
    file: "/DSIR-2022.pdf",
    images: "/images/a9.jpg",
  },
  {
    title: "Approved by AICTE since 1997",
    file: "/EOA-Report-22-23.pdf",
    images: "/images/a10.jpg",
  },
  {
    title: "Biomedical Waste Management Authorization",
    file: "/AQAR-REPORT-2018-19.pdf",
    images: "/images/a11.jpg",
  },
  {
    title: "Odisha Startup 2016 – Incubator Recognition",
    file: "/startup-2016.pdf",
    images: "/images/a12.jpg",
  },
  {
    title: "ISO Certification (9001:2015)",
    file: "/ISO-Certificate-of-Registration.pdf",
    images: "/images/a13.png",
  },
  {
    title: "Integrated Tribal Development Agency",
    file: "/Startup-Odisha.pdf",
    images: "/images/a11.jpg",
  },
  {
    title: "Nurses & Midwives Council, Orissa – Provisional Recognition",
    file: "/Provisional-Recognition-nursing.pdf",
    images: "/images/a15.png",
  },
  {
    title: "Nursing NOC",
    file: "/Provisional-Recognition-nursing.pdf",
    images: "/images/a13.png",
  },
  {
    title: "INDIAN NURSING COUNCIL (INC)",
    file: "/Approval-letter-INDIAN-NURSING-COUNCIL-NEW-DELHI.pdf",
    images: "/images/a13.png",
  },
  {
    title: "INDIAN COUNCIL OF AGRICULTURAL RESEARCH (ICAR)",
    file: "/Approval-letter-INDIAN-NURSING-COUNCIL-NEW-DELHI.pdf",
    images: "/images/a9.jpg",
  },
  {
    title: "AISHE - 2019-20",
    file: "/1-AISHE-GIETU-U-1071-2019-20.pdf",
    images: "/images/a10.jpg",
  },
  {
    title: "AISHE - 2023-24",
    file: "/5-AISHE-GIETU-U-1071-2023-24.pdf",
    images: "/images/a8.jpg",
  },
  {
    title: "AISHE - 2021-22",
    file: "/1-AISHE-GIETU-U-1071-2019-20.pdf",
    images: "/images/a8.jpg",
  },
];

export default function AccreditationPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-100 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">
        Recognitions & Accreditations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {accreditationData.map((item, index) => (
          <a
            key={index}
            href={`/pdf/${item.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex items-start gap-4"
          >
            <img
              src={item.images}
              alt="Odisha Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-gray-800 font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
