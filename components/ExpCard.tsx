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
      point1:"Use Domain Registrar (123Reg) to move parked domain to Web Hosting Service (Siteground), to host Web Domain and point to the server.",
      point2:"Colloborate with client and designers to maximise UI based on market reseaerch of competitor sites ",
      point3:"Use Elementor and UI Core to style the website to client needs & follow SEO protocol",
        }
  ];

  return (
    <>
      {experiences.map(({ id, company, role, dates, image, skill1, skill2,point1,point2,point3 }) => (
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
