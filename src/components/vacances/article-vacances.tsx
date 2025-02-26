import Image from "next/image";
import SignInButton from "./sign-in-button-vacances";

export default function ArticleVacances() {
  const jobss = [
    {
      "recruiter-enterprise": "Helpper - Soluções Inteligentes",
      modality: "Remoto",
      avatar:
        "https://s3-alpha-sig.figma.com/img/b3d2/8e0a/7df9e0bc64043b6133afd254f7e1ea70?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DknFjseSzLrmFhb3vGob7DROSEOhP6CWyZ9koCt1ltuqBLO80UcZeWywJ73WFZV3yK2vvjo5lvDBM5n8Y205fhBSoSJ1MyvwZmJEFbybxBh1TKbPIji9rq4b5Ine8gAZTPK03r01RGOLLFqMND9m4aGXQsljO8noMLGQRIWbUMkAK3gfhh-Qi8Bol0oOCxN4RFLRBf8LTLij20bOPAYPkcbyF3IWG9A9qjJMa36NoheeSWUmdeFMRj4vnDYPxOPPZmKmPYOu7OYVk0S-Osq4HJ5Izi7cidaP84usSQ4ghVCXxnegQc533xzFw-TJFZ2DGjIATDm5WITP6Octk0a6rw__",
      "job-title": "Desenvolvedor back-end Jr",
      description: "João Pessoa - PB, a 12,6 Km de você. Home Office",
      salary: "R$1.200,00",
      especiality: "back-end",
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
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-3 lg:px-40 lg:gap-6 lg:pb-20">
      {jobss.map((job, index) => {
        return (
          <article
            key={index}
            className="lg:bg-white lg:p-5 lg:rounded-xl lg:shadow-md"
          >
            <div className="lg:flex lg:gap-x-3 lg:pb-6 lg:items-center">
              <div className="lg:min-w-11">
                <Image
                  src={"/images/avatar.png"}
                  width={45}
                  height={45}
                  alt="avatar"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:text-nowrap">
                <span className="lg:font-bold lg:text-sm">
                  {job["recruiter-enterprise"]}
                </span>
                <em className="lg:text-xs">({job.modality})</em>
              </div>
            </div>

            <h1 className="lg:text-xl lg:font-bold lg:pb-3">
              {job["job-title"]}
            </h1>

            <em>{job.description}</em>

            <div className="lg:flex lg:justify-between lg:items-center lg:pt-5">
              <span className="lg:font-bold">{job.salary}</span>
              <SignInButton />
            </div>
          </article>
        );
      })}
    </div>
  );
}
