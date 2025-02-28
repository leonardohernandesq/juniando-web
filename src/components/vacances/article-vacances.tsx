"use client";

import Image from "next/image";
import DialogVacances from "./dialog-vacandes";
import { useState } from "react";

export default function ArticleVacances({
  contentDialog,
}: {
  contentDialog: string;
}) {
  const jobs = [
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 1,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 2,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 3,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 4,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 5,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 6,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 7,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 8,
    },
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
      id: 9,
    },
  ];

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 px-4 gap-6 pb-20 lg:grid-cols-3 md:px-40">
      {jobs.map((job) => {
        return (
          <article key={job.id} className="bg-white p-5 rounded-xl shadow-md">
            <div className="flex gap-x-3 pb-6 items-center">
              <div className="min-w-11">
                <Image
                  src={"/images/avatar.png"}
                  width={45}
                  height={45}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col text-nowrap">
                <span className="font-bold text-sm">
                  {job["recruiter-enterprise"]}
                </span>
                <em className="text-xs">({job.modality})</em>
              </div>
            </div>

            <h1 className="text-xl font-bold pb-3">{job["job-title"]}</h1>

            <em>{job.description}</em>

            <div className="flex justify-between items-center pt-5">
              <span className="font-bold">{job.salary}</span>
              <button
                onClick={() => setOpenDialog(!openDialog)}
                className="bg-blue-dark rounded-full text-white py-1 px-3 font-bold"
              >
                Cadastre-se
              </button>
            </div>
            <DialogVacances
              openDialog={openDialog}
              content={contentDialog}
              onClose={() => setOpenDialog(!openDialog)}
            />
          </article>
        );
      })}
    </div>
  );
}
