import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard() {
  const experiences = [
    {
      id: 1,
      company: "Bright Network Technology Academy",
      role: "Trainee Software Engineer",
    dates:"JUL 22- NOV 22",
  
      image:
        "https://previews.dropbox.com/p/thumb/AByCwLyqu8595tcDf0VB5NMF8nld7A4H7SKBCosTxkTOQKZEnTLWC-xnOHQB0PZsSiD1QlGjsEjQI0smcQoOB47ykI5-sQqDTcFq6PS0necMhOGYutKgKY0DcwtndJwQBJKO4T93xlIcXM7zNsuw_M-k5Ipt7c2Y0oMADtygrQ-qaAYHNDZc-hUq1ID0YkuTFyEZFEDpd3ZYTHCselFbP8OYiodZVnZn1WxIFNkGKuPOrx-0nfJTSpvVAdhUy0SzEfRCkRYjImZiUu1jxtic66xME6_WfoMspFp2DAbRekXnuuBIlK7-fqTvj-5xGY3-qlim8qpE71uesCuRaCETpUGCthzSf4CIW32XO2yXbyCjbSWhEOYdS_gYBALwT8JSsKo/p.jpeg",
      skill1:
        "https://previews.dropbox.com/p/thumb/ABwjLuqDDON2U35nZ4lUt9Mnx-ODApR6kJfVGDXLg6Hq9vwrdjMv8KJo5mf8Hqs4c-QWLQCzlUYPPzNRs5GgLzd3PPPxHCrYLhBwmNFxmibzuECE83DsxKHsXW_WIsSUWPzIZjht6CHPa8THnaJWZ8aEyUqZVu4VbUDEHxTs-XR-qyLLFC81nClG49OwDts95amdYKW81aSvHl7vkVjOwpf10iGWF6MyqvEyUwcaJOK6Wr4qxy26oA-Z60UaIdY5KOFAmdhvjKWd7-hXUqHmL0QS8OZRxI0n0-nR4TVrpaMH8T_AW1cyVJHefBmOIB1un_Zu02uId6urxMUgAs-jHYeCu7TzudYdARrdIbxKgC55JW2n9Ms8RKIGa00yTjS8Xno/p.png",
      skill2:
        "https://previews.dropbox.com/p/thumb/ABx6G-FluYpJN7LE_BJcy50WmMQs0z4__4zJAzZm7784DXRXeJTxc3UZs-AaENOUPo_GNaKp7xL7k45xfMmN7O8Q_-2Od22AzScsER1vm0s_2W-gGfypOXCaHYxeAMOFik7IYDOEq1MjKHzomiKklkmqN9SooHStWJs7QWg_JAqDLlEDM0nFAwPmvIICkvBa6cTLgAATVfvFYsf7Ig9Za8JLbkuUJeZPXJjdCW6T52fZ3-1G_M2EmzIV2tF6Kn2Xk8N-orveQll275m0qLsWgF5tFwUiXlskxVCqaKudQMS1z61jVPBi84-1rYdLUR6H6LF7HVwBEjadvdxCQnaoVL9d4L5_HUwECoyBBO1Ub12qlmJUQAQ280rYZh_7iMJY7AA/p.png",
    skill3:"https://previews.dropbox.com/p/thumb/ABxgA6kawDCeLcRN8d7bIHmZZ7qmbZcVWkKT1yBtsGKPn0n8uuHO8UzcjOwwAEEGkfD2T_0fFRDtZJTP70-EvxZhUl9i_HFJp0ek8geaonJRMd0Va6y4tN1lcOhjyYj5eQ11P8yniaWjUcrzsecEEz3v6SnYOE1E8yv1CEDeSG1XJleNQS949kE7URtnS5v9hpnEM5WZA8gQItCjomBykHWU3ZD3wxChHvJN5d-KZwZ_Xn9o5FzhIjjufby9ApiueztGLYBVy2p7fRcksZFuZTh-Zq0nAp-Kgr1tChawGJ6watGKO5W1xxHFtQOKoaumQk2AY4iNO7E2mDLDmfs7y0esC5sm4ZpopNlb86PhZ1Qb1lNbvPAfgTlAtj8FnHWfQxU/p.png",
        point1:"Learn fundementals of JS,HTML, CSS and React (i.e Hooks) to create fullstack APIs that follow CRUD functionality",
    point2:"Understand core Java concepts (i.e. OOP) and SQL to create a CRUD API using Spring Boot that stores user information. Ran using Postman",
    point3:"Work in Agile environments, with an aim of maximising potential consumer satisfcation and project quality",
      },

      {
        id: 1,
        company: "Self Employed",
        role: "Website Design & Deployment",
      dates:"Aug 22- Current",
    
        image:
          "https://previews.dropbox.com/p/thumb/ABz26_yVsRMknU-zkevRc4HdsUtqX-QC2nIGmHbm0zsOd05Jlp8zA_lRClG3FQNOOiIrLjFDJRIxD5mpFjMjY1_aBUjI8-W9JwIjdtclkRLn8rmzW0LgPA-tPXg-jlkpQKx7FxIQHPx3snyMGKAT64eJ3aQ1-5aZZSC1emmtCS_sDHjFf1H3iyl5NPxMsT-y7VP2DUCZD-pv8-EAuFJ1KfRyKjzoOYsGMoxnjyqAdEMLCtNSXPdXiNYo7G4hTqRsxiuivsBZmQOvqq2zofaPWOV2fK0KVdmfHtAxwXbF7apeH5mblbAii7WOdjsogHG_AlrXeZ_ux_Nwj8hBRGhzHuz7MMVzLpwC08liGcpkAfFMYIQ98DMtuWlWa_3ecdOhHZA/p.png",
        skill1:
          "https://previews.dropbox.com/p/thumb/AByxBriS3nULdLQXrs3KP3QhLsJ0IaA_pLOsQlq4NAdAkflqffv26KbVUQ6Rx2o-FpHvyWXrdtMx6bfezlDuna_3M9GXruhZdr9Qj5LzjW9dU4oBPeDuG60tmnSq8N1RqCOLZW_OzrvYxN8Nmt3c5yv_B1hgT_JM7CNDhnkvcSwhEFHrEDkhYNVzBo45P0GJt9Cy2LiOkVWxEd10DS-b5rb-TgnuPYLhtLtTSWz0n1HGgMLLfFhsVKLaGeDwPBRGIPFo_u7zq5E-bpjBeA4kUu1tjozWXBYJA2JW9xFl1cpD0NuSVvkqxKcdQNJtrAzUnhXGc6CX2Er9q4ev0x3mwlx-kPl_phi2K1-maNGywl4o4IUZluAd5DXfwNrfXpeOe3g/p.png",
        skill2:
          "https://previews.dropbox.com/p/thumb/ABxWAAjDiCVKbDgCFcXujZhPZveC3danenZI2O81QR483TGCH2W2m8OfbTZq1XrFnsBvcWfM6XsuljYnptqjzBEKAp2A-qFZJB7YWUV_s2Bux9B5lNJ-yM7nGOkHzhylgt7ToEu3FRua6XTDD_auoOdMGNYpEU7MwhFuglH0o9maZxIbjnOG5tU6sjMH9vZJP3tu6Dqwf6o5Y2AgOPEBtFFKh0YVzH1Na5mR3piF0AtMsa8n1z8ZNQ6kWdyMhtU_j7ijK-C_vL4P7gGw2D_yxDZ2n4HvEk3a2v1FyA1raI2Et019pix2BvYwmyPwvIwbhjy-Rsd89HXKKYLZtq0T8pgXBC8EQMZV3Xx430Rvpj1aDbQmSaF40c3EnF8D2LBiXDE/p.png",
      point1:"Use Domain Registrar (123Reg) to move parked domain to Web Hosting Service (Siteground), to host Web Domain and point to the server",
      point2:"Collaborate  with client and designers to maximise UI based on market research of competitor sites ",
      point3:"Use Elementor and UI Core to style the website to client needs & follow SEO protocol",
        },
        {
          id: 3,
          company: "Guidepoint",
          role: "Client Services",
        dates:"Dec 21- May 22",
      
          image:
            "data:image/png;base64,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",
        point1:"Providing the world's leading Hedge Funds and PE Firms with customised research solutions, sourcing them with leading industry experts",
        point2:"Conduct comparative on market trends and potential growth pathways for Clients, including those in the Tech ",
        point3:"Match and Onboard C-level Tech Executives and Directors for Client Research Cnsultations, receiving a 100% satisfaction rate of onboarded Consultants",
          }
  ];

  return (
    <>
      {experiences.map(({ id, company, role, dates, image, skill1, skill2,skill3,point1,point2,point3 }) => (
        <article className=" top-2 flex flex-col rounded-lg items-center  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={image}
            className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          />

          <div className="px-0 md:px-10 ">
            <h4 className="text-2xl font-light">{role}</h4>
            <p className="font-bold text-xl mt-1">{company}</p>
            <div className="flex space-x-2 my-2">
              <img className="h-10 w-13 rounded-full" src={skill1} />
              <img className="h-10 w-13 rounded-full" src={skill2} />
              <img className="h-10 w-13 rounded-full" src={skill3} />

            </div>

            <p className="uppercase py-5 text-gray-300">
              {dates}            </p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>{point1} </li>
              <li>{point2} </li>
              <li>{point3} </li>
            </ul>
          </div>
        </article>
        
      ))}
    </>
  );
}

export default ExperienceCard;
