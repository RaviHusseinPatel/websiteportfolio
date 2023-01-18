import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  const skills = [
    {
      id: 1,
      skill: "JS",
      image:
        "https://previews.dropbox.com/p/thumb/ABwKvXEUcVYBLt9ujoS63eesPisflB-h9Rzr8aNv3tJJDEx50w3rYtK7VyF311Hx2c8PM-6rEczsplBY9KGGMFw8z_TDQMlZ9TGrXat6fjzplO7tDttdoAH7ubch29jKlZrIROTMSMqp99ev8G4mIu5Odd_Wl6EZ42nUA9eS96aTqqN6DNR6x6WFgCo_5SF2DPci_aL-ZcI_C-QpJ5AtlkC7GErAfe0dwYIZnODeOO2zURvucpoi9GLxyJgKwCBsTBI6ObuDf-qeG9m72CPVwxnej6-nrL890I2vjyHu70HAM3Ht0o0kZQ2cTVbhjBr6H-v6VBKMaDD_UEfCrLbhKd6NrxaFq5BG4EAfO9f1YeRAQf0OfcxviXmwefw0tiWJSUQ/p.png",
      proficiency: "75%",
    },

    {
      id: 2,
      skill: "React",
      image:
        "https://previews.dropbox.com/p/thumb/ABwjLuqDDON2U35nZ4lUt9Mnx-ODApR6kJfVGDXLg6Hq9vwrdjMv8KJo5mf8Hqs4c-QWLQCzlUYPPzNRs5GgLzd3PPPxHCrYLhBwmNFxmibzuECE83DsxKHsXW_WIsSUWPzIZjht6CHPa8THnaJWZ8aEyUqZVu4VbUDEHxTs-XR-qyLLFC81nClG49OwDts95amdYKW81aSvHl7vkVjOwpf10iGWF6MyqvEyUwcaJOK6Wr4qxy26oA-Z60UaIdY5KOFAmdhvjKWd7-hXUqHmL0QS8OZRxI0n0-nR4TVrpaMH8T_AW1cyVJHefBmOIB1un_Zu02uId6urxMUgAs-jHYeCu7TzudYdARrdIbxKgC55JW2n9Ms8RKIGa00yTjS8Xno/p.png",
      proficiency: "80%",
    },

    {
      id: 3,
      skill: "Next",
      image:
        "https://previews.dropbox.com/p/thumb/ABwGav8tlae9QAIFASn4ApaqLYiutE4he-n6E2GBmmqNHumXxBOkzcNBGyEBbgOyokycskPm3whlUdWKWyN_z96DFC6kunyoqsNaIIaMDYrN3HexRcYluMczltqQ0NNbnpuJkFiengP5n3_9XqSjmqInNF9yiAa7cCRd0XvLrhMQx7nMxpQpLcVZek8fcoQHVrnZdxRf7FZ1G9paa9LK3wnej8HVxiP_HVJ6PFLusg9dLAU10mcGvTZDLvG2LFu47SOZIzz9J6YoCh8aLVTYlL_KbqCDrJQlpkSUxVnRTkXzaLD9D7nI80KZdyHITR3xN85VSxygn35t503FhlS1pl54l2V8nf-zX9ycDTL8faeLFsKJEAghTj44ZDC8CCeCVi8/p.png",
      proficiency: "40%",
    },

    {
      id: 4,
      skill: "HTML",
      image:
        "https://previews.dropbox.com/p/thumb/ABybIXPvik4ShRnkoTaJY1JB4Dh5_U4JlwWN19aiPy507nfRbWiUKdP46drH8tUOdLMC-q8BJ10YKT7T1ek0UF3Wf-j5_k6_ktZTzA6x2kgI5Uzjgd-Z--sjClc06xmRhmvjGiJ89FAopABiXex4uQF4_m6KLSf2fZiH7YJhnEJb1AKelfK-lVQjuVzD464mAPpuGLkHC6KNa91AKH68rHxeQt3NkesHwbuXAvjABO6vDocp0Gs9UlwPP2iFKdCSp4l5ZA5EDCWQbORmKpNYC3Ilam4rTP6AldHtlAuTDUQItvEU4t0I5G5I8XtvRULWsoibP5t8ul5Rx26d9mnO8-BWnhoOTKrkklFvVJZWYcWQP6GFlPFJ--9osyc4eP4cmV4/p.png",
      proficiency: "80%",
    },

    {
      id: 5,
      skill: "CSS",
      image:
        "https://previews.dropbox.com/p/thumb/ABzs3iMD4fCVuA2eYno4BcohNClMdJEfgJDPA2W4S0-KF5kizhazpzz2yIj8CMBJfHcRxHuC39ZGLY6qZISpPiolrik5YjIk0VwdX5lNH7ZNKiozzAGoi2MUFPyBVv8EhIVo89nCIlf5i0K3oyulklOdUVKMatI_TBFi3lZpr3VltVghoYTuB4VhAqRMbwzQx3liUAAuWPMXZf__S_9eZSotAW7Tm1BayRS01BLA4rUfc5dsIuU3M2j-U2FLpFlYbzqkaw7-9C12bx5eb-qsmLUc2bBBxSIMw6FkjffbuyqrnW1GF0XdomR06Z1bzE6DqJskAu7jCRF0yMsE44Rt25cGQ-eez1sHJfOK4pEEDi0xMRrDq-0LcPHlB_kztagxMM8/p.png",
      proficiency: "75%",
    },

    {
      id: 6,
      skill: "Tailwind CSS",
      image:
        "https://previews.dropbox.com/p/thumb/ABx2ywrmROUzUfO4zWAQ5CfchRvCMqpxgDRDP56J5MXYrZALN725l_9QFuG09ngxkWWBIH11MLcmG72W3TJX-jcSrQWNd5hgN7sAI4YAyQ4tdVKiRRbiuRAWxe-fRDSPfqjsqp5mU1l8GQV-9rRqWRFsPeL6UXbZTNCoRaRLvD37iWzUj2lF2gISJaBnkG8Nqodsz_kKbk37ABWObSk6vpYAlBwpW_nFqIGBvKGDVqsZGEUYYVI5elEoWYwbIccVAjlkX8KsLt4oCXLiewdee3XNLazmvsZ66u8ygujkjadBOjxjNics84-cZOGZUq3Q_iVpzmFOvDL_DIFjlYeUQrQqVuUg5Y-33_z50JQvZ6bNiELjy0CsmUPv0jjQ4LMjqX8/p.png",
      proficiency: "70%",
    },

    {
      id: 6.5,
      skill: "Three",
      image:
        "https://previews.dropbox.com/p/thumb/ABx-qxo-cyZP-1VQv3mQUy7hqtaphwQuEno5-OVsDrNlL1ErO5UmCoF0rdWa6gS1rDX-KPaHtckdKGJqfkuIfHH9fh2MBEc_M4INQ0dLroKT9JMG3FrTo9oc7la2dcIExYpbGcKrCHG-vxCZv3o84PK0BSdbO7PgZksNowx6dz-BkUpqCvHrA_YEbkIsNxx_ginz_7cL-Eubw5RHVKRoQdcLeN3FDRG9bhrwbJoVE4mditY511bPYEN7y1ZxGcL1n3UWUjoCV2J9CCGFZuUQsI1f1U_7PvNQJE-kxQz7SZf9ed2kH3gmPptd6gKg_3Ykyy2XptMjxM2qjum2GnqPJQFCQcW-qAN4OkNBCYVflH8VS5xwUcaFBhmos1OY0Ws9O3c/p.png",
      proficiency: "20%",
    },

    {
      id: 7,
      skill: "TypeScipt",
      image:
        "https://previews.dropbox.com/p/thumb/ABwuwpwA47hf4_vRzKTXq175rM1ubU-ICz5-vj5GK1fvKhTvbI9H0QlE4AIvTojJNsXrKDgxWfuCIuZvnRFL44Kz9U0KDFUpRgYWdbJCmvHyqkszlDF8d5A14R_SEwEmH5GEIQs6Ziq-E2umAUYCDS4lhijXJiqPjOSDXMQLISrzSA8S05ppXoiWYgjmzbyBgyeEG6TAPylq39p3dHdNxRB2D8NNNQfZvbmzHdgOrRHJ5UCAsvhGvgWeM5cCMh94ZQgBVU6H75tvQ2_ZTcT06LO8Ffstn5DKzS6gRtnW_RFztmrRdc6lB9p05jMz88V6mu1EAiF9cZN_8KV5AXr7SaEstCzg05xLR-TYMzPbJPeH9y00-JZys5MvrtzsXgYrumY/p.jpeg",
      proficiency: "60%",
    },

    {
      id: 8,
      skill: "Node.JS",
      image:
        "https://previews.dropbox.com/p/thumb/ABxB8b-RqUchbypw6JasurhWQ_Co8-DBpnWixYLoqUg60SuyeAkUMN-dqF0bDhsbyQ1I35EO-xnWBqhNQ0iw2teBEqoP7j6PyE-jka_8C_wosxvnKQP0fOepwFnrDNmDu7alAaivTDuDy-to3yDpciGCNvl1cvwdYwbNtxh0eyTaIK1H9UOVEuy6UpfeKuQGjUB3GSUw9IJiU7UdZp0mzDF93X836BqmsIDZxeECRRp3w1niJXKNWQOgoRwwR5oxlxEOOHANMn54SMykoLVryuZCN-t9cyY8_IK8Y-he_NBM-mokVo5cpMGSgeWnQV-P3Bh_NN2rU-eyxReLNWhh23-cplAfmgBOoHFxN7RIYclSdna849eSzhu0KwXsghydVrk/p.png",
      proficiency: "70%",
    },

    {
      id: 9,
      skill: "Java",
      image:
        "https://previews.dropbox.com/p/thumb/ABxgD17J4C22fr0m_ZucDpg9aITn4oJNB8AV5cGdbcEhFfLgZsBn6GKzIBtPVBUB8Dqg2B_HFyvS0l8yHb9eoCyQtk5gJvM6Xmtw2hpS9Cqd_IlCSgAkz3-bMJuSXi8vpteiA44tTVLxQ0qL0siC8R6KoO1UWNxh64c5R5B868e8Pr6E6uVzOdlxXXV9zQy7gaDKUWLj2TBFp5UFNwp0pUdcndqpzFSnbhFfsC71MPfKxpItcm9sO_wxMLDp8X-pWFG6j_2Cj18SAjuwp-NCXmKCIvojDBzy8b-uqm_LxUs8qkV_0EDJRyRgMdeTyvx6UT6u3sMIQLK1nbUCZg19C5P0h58tV40PtTTBnH-7Hei2TYUIp5-TT7-Y8koMJrzhi1k/p.png",
      proficiency: "60%",
    },

    {
      id: 10,
      skill: "Spring Boot",
      image:
        "https://previews.dropbox.com/p/thumb/ABx6G-FluYpJN7LE_BJcy50WmMQs0z4__4zJAzZm7784DXRXeJTxc3UZs-AaENOUPo_GNaKp7xL7k45xfMmN7O8Q_-2Od22AzScsER1vm0s_2W-gGfypOXCaHYxeAMOFik7IYDOEq1MjKHzomiKklkmqN9SooHStWJs7QWg_JAqDLlEDM0nFAwPmvIICkvBa6cTLgAATVfvFYsf7Ig9Za8JLbkuUJeZPXJjdCW6T52fZ3-1G_M2EmzIV2tF6Kn2Xk8N-orveQll275m0qLsWgF5tFwUiXlskxVCqaKudQMS1z61jVPBi84-1rYdLUR6H6LF7HVwBEjadvdxCQnaoVL9d4L5_HUwECoyBBO1Ub12qlmJUQAQ280rYZh_7iMJY7AA/p.png",
      proficiency: "50%",
    },

    {
      id: 11,
      skill: "PostgreSQL",
      image:
        "https://previews.dropbox.com/p/thumb/ABwe5FwNAxcVHLZG06r7tFIe2q90rwfbOsX-_BAET99MX5MyyhwYIMH4a3GgQU3WJacRQharAq67dHgQ98qseinixKUV1MbYcPLisZcw7IIT3YQIxDQZfk5EXG2BWx2Zntrib5-zQDdvbY5U7luR38uxx26BIb4M3P9Rj84AxSN0Po8tEoziZjEN2V6CZiEt6ZGxb1qoOUQ_Nmvj6vkxCjjlN-gSmwaUWT-NmQHJ22Am2wlyQNOgwFMwkaDWl7a6Zd1wYVbbcZ6RGoOIvfN3cqnI9qq9fyZBkHJSWHyBQ5DXtXOHziY9ZysTusK3Dn7ocjSAKjKsSMKF38i1o831fnDzCxonQfZOkEBQLM66-hp86curELNLJdddCQg4yM75YpU/p.png",
      proficiency: "70%",
    },
  ];

  return (
    <>
      {skills.map(({ id, image, proficiency }) => (
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 500,
            }}
            className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={image}
          />

          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">
                {proficiency}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skill;
