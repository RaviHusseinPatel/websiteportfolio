import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard() {
  const experiences = [
    {
      id: 1,
      company: "Bright Network Technology Academy",
      role: "Trainee Software Engineer",
      dates: "JUL 22- NOV 22",

      image:
        "https://previews.dropbox.com/p/thumb/AByCwLyqu8595tcDf0VB5NMF8nld7A4H7SKBCosTxkTOQKZEnTLWC-xnOHQB0PZsSiD1QlGjsEjQI0smcQoOB47ykI5-sQqDTcFq6PS0necMhOGYutKgKY0DcwtndJwQBJKO4T93xlIcXM7zNsuw_M-k5Ipt7c2Y0oMADtygrQ-qaAYHNDZc-hUq1ID0YkuTFyEZFEDpd3ZYTHCselFbP8OYiodZVnZn1WxIFNkGKuPOrx-0nfJTSpvVAdhUy0SzEfRCkRYjImZiUu1jxtic66xME6_WfoMspFp2DAbRekXnuuBIlK7-fqTvj-5xGY3-qlim8qpE71uesCuRaCETpUGCthzSf4CIW32XO2yXbyCjbSWhEOYdS_gYBALwT8JSsKo/p.jpeg",
      skill1:
        "https://previews.dropbox.com/p/thumb/ABwjLuqDDON2U35nZ4lUt9Mnx-ODApR6kJfVGDXLg6Hq9vwrdjMv8KJo5mf8Hqs4c-QWLQCzlUYPPzNRs5GgLzd3PPPxHCrYLhBwmNFxmibzuECE83DsxKHsXW_WIsSUWPzIZjht6CHPa8THnaJWZ8aEyUqZVu4VbUDEHxTs-XR-qyLLFC81nClG49OwDts95amdYKW81aSvHl7vkVjOwpf10iGWF6MyqvEyUwcaJOK6Wr4qxy26oA-Z60UaIdY5KOFAmdhvjKWd7-hXUqHmL0QS8OZRxI0n0-nR4TVrpaMH8T_AW1cyVJHefBmOIB1un_Zu02uId6urxMUgAs-jHYeCu7TzudYdARrdIbxKgC55JW2n9Ms8RKIGa00yTjS8Xno/p.png",
      skill2:
        "https://previews.dropbox.com/p/thumb/ABx6G-FluYpJN7LE_BJcy50WmMQs0z4__4zJAzZm7784DXRXeJTxc3UZs-AaENOUPo_GNaKp7xL7k45xfMmN7O8Q_-2Od22AzScsER1vm0s_2W-gGfypOXCaHYxeAMOFik7IYDOEq1MjKHzomiKklkmqN9SooHStWJs7QWg_JAqDLlEDM0nFAwPmvIICkvBa6cTLgAATVfvFYsf7Ig9Za8JLbkuUJeZPXJjdCW6T52fZ3-1G_M2EmzIV2tF6Kn2Xk8N-orveQll275m0qLsWgF5tFwUiXlskxVCqaKudQMS1z61jVPBi84-1rYdLUR6H6LF7HVwBEjadvdxCQnaoVL9d4L5_HUwECoyBBO1Ub12qlmJUQAQ280rYZh_7iMJY7AA/p.png",
      skill3:
        "https://previews.dropbox.com/p/thumb/ABxgA6kawDCeLcRN8d7bIHmZZ7qmbZcVWkKT1yBtsGKPn0n8uuHO8UzcjOwwAEEGkfD2T_0fFRDtZJTP70-EvxZhUl9i_HFJp0ek8geaonJRMd0Va6y4tN1lcOhjyYj5eQ11P8yniaWjUcrzsecEEz3v6SnYOE1E8yv1CEDeSG1XJleNQS949kE7URtnS5v9hpnEM5WZA8gQItCjomBykHWU3ZD3wxChHvJN5d-KZwZ_Xn9o5FzhIjjufby9ApiueztGLYBVy2p7fRcksZFuZTh-Zq0nAp-Kgr1tChawGJ6watGKO5W1xxHFtQOKoaumQk2AY4iNO7E2mDLDmfs7y0esC5sm4ZpopNlb86PhZ1Qb1lNbvPAfgTlAtj8FnHWfQxU/p.png",
      point1:
        "Learn fundementals of JS,HTML, CSS and React (i.e Hooks) to create fullstack APIs that follow CRUD functionality",
      point2:
        "Understand core Java concepts (i.e. OOP) and SQL to create a CRUD API using Spring Boot that stores user information. Ran using Postman",
      point3:
        "Work in Agile environments, with an aim of maximising potential consumer satisfcation and project quality",
    },

    {
      id: 1,
      company: "Self Employed",
      role: "Website Design & Deployment",
      dates: "Aug 22- Current",

      image:
        "https://previews.dropbox.com/p/thumb/ABxFwoG9NGrEAt8UXlbRcwtetIo5wY6PXezXNzbxWjOpLQeSNC7OHho331Nppyox9M93LJuLIInBVz6je6wwg2YSjOyI6vMlUTBKrJP5rtIfjr83KfB5f2jeusI9GhgtqLt4cA-Uv065B_CGxyHdIK0NYzmOc7St5zqLFlfBNSkz2eCnDXX3wbkJVj8EhF-UDIYhtut6yzEk79wWGPPRjRoz_WGWQqh8BY1gMHJONxQA1qOPM2G3GIvqzoYDyH3sMLbMaKvGcTG88Gb72K54r5XcS1FWq-Ge67x-NZPKvnv8PSn-S5CeK3K73_f_o6sPxXbT6W-Q5F3p3ZTx7IJSzkJso-UUGwh6Z1HHbq_oHty44h6BmqmDzj4ok0T2H9apbJI/p.jpeg",
      skill1:
        "https://previews.dropbox.com/p/thumb/ABzMvN_kat_m2TkPcb3xx4pHAytJDayWdW5ltexkoyFqnLEv6z9UuZpil0BIU8kvHwycV7gJMkj-OFHNHNrIUJDHpbuy2MKmzzKNqX4XwBLB-LCPL0ycqFgbxN5Fi6SnQ-kimzOvoSx3cGh3kB8NteXME6D7RbOwDZAZscVOYA6frrCcOAmCs4mlFxgvTGIDTKcTT1dPwzaqH-EzcXBfk74wlABOYPCei8V4RUY4fL3CFt6DLaONkc4VUp-qlxaJbqjZ0epz4DmHCjEbZYnIOyCmfCW1_YqMffM5zAK75VszX9H66nIEPZ4GAx5_C38XIzDGDLJKyn0V0Ieg4kEryEXzYKftyG6SFssmn8LjXf4-suKzlayHdkHjdK7S9EWrF20/p.png",
      skill2:
        "https://previews.dropbox.com/p/thumb/ABxWAAjDiCVKbDgCFcXujZhPZveC3danenZI2O81QR483TGCH2W2m8OfbTZq1XrFnsBvcWfM6XsuljYnptqjzBEKAp2A-qFZJB7YWUV_s2Bux9B5lNJ-yM7nGOkHzhylgt7ToEu3FRua6XTDD_auoOdMGNYpEU7MwhFuglH0o9maZxIbjnOG5tU6sjMH9vZJP3tu6Dqwf6o5Y2AgOPEBtFFKh0YVzH1Na5mR3piF0AtMsa8n1z8ZNQ6kWdyMhtU_j7ijK-C_vL4P7gGw2D_yxDZ2n4HvEk3a2v1FyA1raI2Et019pix2BvYwmyPwvIwbhjy-Rsd89HXKKYLZtq0T8pgXBC8EQMZV3Xx430Rvpj1aDbQmSaF40c3EnF8D2LBiXDE/p.png",
      point1:
        "Use Domain Registrar (123Reg) to move parked domain to Web Hosting Service (Siteground), to host Web Domain and point to the server",
      point2:
        "Collaborate  with client and designers to maximise UI based on market research of competitor sites ",
      point3:
        "Use Elementor and UI Core to style the website to client needs & follow SEO protocol",
    },
    {
      id: 3,
      company: "Guidepoint",
      role: "Client Services",
      dates: "Dec 21- May 22",

      image:
        "https://previews.dropbox.com/p/thumb/ABzCLSNICV0j-UEj-52j6aEXMJlrcBnBbvJ0UgmyWLRv8EcFnMygwYODdGHmZZnQOwkScPwv_5wuIQHnfxLxa_tzT7s92-eFjBZoIOkn6_LphEZTBkUZrSI1STv9nksXBMka3xhtFfIjfT83m2xcZVVUjhSg4LcZGSM2qqGCr1N7Tcah6ZLFLfoH54Vtz90eIDXh3_V9zy9hhOLjmelleJqQx6TD3J0N0gPr3nEXr0BqNB6CHRqvnZS5_5kLcLBk_6X5RhD0ZMri7hsqC5eljx7RsxlO4IkFMM8vHFDuyzK4NwfU-hkCmU4Q9Uck4YhKXKdTLVILTdYxBhbJRrqRMlEJuMQe7h_O-w5IMMb-lG-_zCP1HWCnDUkJh88l2PlC3dE/p.png",
      point1:
        "Conduct comparative on market trends and potential growth pathways for Clients, including those in the Tech ",
      point2:
        "Match and Onboard C-level Tech Executives and Directors for Client Research Cnsultations, receiving a 100% satisfaction rate of onboarded Consultants",
      point3:
        "Achieved an 80% approval rate by clients for subject matter experts recruited, exceeding the average rate of 65%",
    },
  ];

  return (
    <>
      {experiences.map(
        ({
          id,
          company,
          role,
          dates,
          image,
          skill1,
          skill2,
          skill3,
          point1,
          point2,
          point3,
        }) => (
          <article className=" top-2 flex flex-col rounded-lg items-center  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden">
             <div key={id}>
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

              <p className="uppercase py-5 text-gray-300">{dates} </p>

              <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>{point1} </li>
                <li>{point2} </li>
                <li>{point3} </li>
              </ul>
            </div>
            </div>
          </article>
        )
      )}
    </>
  );
}

export default ExperienceCard;
