import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <>
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 500,
        }}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="data:image/png;base64,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"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">50%</p>
        </div>
      </div>
    </div>


    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -400 : 400,
        }}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="data:image/png;base64,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"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">50%</p>
        </div>
      </div>
    </div>

    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -400 : 400,
        }}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUiIiL///9h2vtj3/9j3v8cAAAAAAAhHx5k4f8hHh0gGxkfHx8iISAgGBUeCwAfFhIICAgTExMfEgxf1PQYGBgdBgBdz+5ZxOFXvdkdCQBHkaUdBAA0W2ajo6Pt7e0PDw/c3NxEiZyKioo6OjonJydHR0e3t7dMn7Y5angwT1hRrcZhYWEtLS3R0dE9d4fCwsI2YGwsQ0mxsbEnMjVLnLJBf5BQqsNra2t7e3uQkJAoNTlNTU01NTXm5uYxU1wlLC2BgYFWVlYqPkM/pj6YAAAdb0lEQVR4nM1d62KiOhBGAbmDBgW8tNbWVrSt1fXSrtvVXd//oU5QEgISEtR2z/w4u3taMR+TzExmvkyEytfL3duPm/uP518PD58vQ2H48vnw8Ov54/7mx9vdN3y78JUP//128/HYqNVq9X6j2TQMQzgK/Fuz2ejX4U8ajx83b7+/chBfhfDu6f6xX6/XGxhWvhhGA/5W//H+6av0+RUI726eh416n4EtjbNfbwyfb74C5bUR3r59fDbqTX5wBMxmvfH58XZ75RFdFeHt018Bzssz0GGUjbrw9+mqIK+H8PbpeXie8rKqrA2frwjyWghf/7zUrgAPg3z583qlkV0F4e3Nr/5FkzMHZKP/6+YqirwCwrt7qL6rwjsKVOT9FYzrxQhf343+ddWXCHzy+8WT9UKEr8/Xnp4ZjI3+pRgvQvj63v+K6ZmW5oUYL0B4917/enwHjPX3C9bj2Qhv/zQa34Ivkkbjz9l29VyEN8Mvsy95YvSHN9+K8PVX7TvxHTDWfp23HM9CeP8l/o8lzdr9NyF8+6z/A3yR1D/fvgPhx7dP0ESM2seXI3z97P8zfJH0P8uuxpIIb/6hAo9i1Eoa1VIIb//W/jG+SGp/S/nGMghfhe/z8UXSEMrM1BII//0MRVJqpvIjfP8/zFAktferI7x9/Lc2NCv9R97FyInw7vNfRDFF0vzk3G/wIXxr/t8AQogGX4DDhfDHt+4jeMXo/7gWwpv6/xEghFjnMakcCH/+TwFyQmQjvP/fAowgsjdUTIR/uLdKmuUAKI6uXTJoBT9G4fl1NkQWwp98AE0dgHm4GnQ6g+lsD2yLa3gnojktcxw/prdoORxPqf+8DCEnQN0ed3xXVUUoatXzl7OdrZeFpzj2fDrx0GMkL5jugMmGyFiLxQj5QlEFjNdVVapikUTJG/Ushz28RDR7MQ1cVSIfo3oDwWJ9kBWkFiJ84gKoWYMqMS4MMpgOOVRwFN2edzz19ClqsAVsiE/nInzlcvT6bqJmRxYPz58KDg8+zZ6PXMpDqlM2xH7RbqoA4W+BS4O7IH9skah+6DDXowI2S1ekPkNasSEOC9gcBQgfeGJRU6NoEGGcjO3iqarrK6/wERJbi80H+k6DjvAX14YedJLRqVXXc10pvZykakcpsBaGPQ5SH5Ak+BgohMlxx0xz0/hVHuE914bXmkl4ZP6qt19sxuFgQg4vmqpbm+bYdD1lpSSx6i2nvf1mMw9HLn50wPb+NapbpCF84wJoCn48DMkLZaBriqZZQB6Gk6pIjntg5a9GMCcXsSR5nbFtw6BIgZFNd7dEEEX2UhRqtL0UBeFvvpwMmKroNe+IQZiWvO+4hG7UYJ9jVE17SihQkoLQIuMERZ6iH3k7phKNGsXaUBByWRnBMJEKfTOjJM3edcjhuyHIDlK3RokCJdEPT6K07jR+gjpgK7H5UAYh3yIUrBDNxRxboLQXI2Kqqh2QjsidjZ8AFL2pnWNO5PgJks9GKFAKN7kIXznTaq3J8R2LSznvx5q8JUCoE4HUsz0jVCwuhVwIys6LVTxjmlMIMdfx5yIc8u0IlU38/S5tmVj2IHEFor/Bi9FsrQjs3lamPAB+Pn4FNns8xpAX4Qdn4tAKj18vjbrU32nPE3cuudt4nEprSQBcAqqCtI17/CWPA6HQz6tM5SDkcxRQ7NicF04hXU7siSSF3SjA0ZwJAXtGU2AkcrwQqmOe3VieyzhFeMs5RwWzHVtSt3C/a8qhmMzUFVyxupB4QTXYFQbnTuyP1ClPDG+8nEZvpwj/8Ca3lcVxGUoT+iQ9CJh7GKLa6VoLP/nn0i7OeWhzN16IHNYUztM/bIS8dhSqYhuPkumsLI1QWmdD4J22Ga5c0Y6vQwpyzfWJnNrTE4SP3NltbGhCpiXX7FHu9qHHth9yEC8FHlMD/f4jC+ENf4UJxAbfHbOTayYy+4RI3pxj5oHO0em7O758wUlOI4Pw9oU/OYq+21vwJNbsaSZHIfkLDi8uOMhxzvmSlCfGJoPwvgSRxF4fx+zpXG/XDlPZHDEYcmXj0Fqo9jiTd9kMahrhXRkic/foqiSPYUqRgJlLaHCi8enEmnGv9qMYzbsChO9lCvWxDZB8PisHX0lITFGGl8Ci98RyCIXGOx3haymyk+xXSyHUhgExTVecmtd7cXTP5fIPkk69pRA+l6qDxgirnJ5KsSZkQk0K+cw/8rolEKaVSCIsp0I4S8vo0ASjTMaQneuNBOlQ4keYViKJsJwKy61Ds9XJAJTcPY911MtaGiGjRALha0m2BbalbQ5vkbhDnIeTvCGHtcHeogRCofGai7CUIYXSLuEPQS+xogP81wCwnVNpfxgJqcQE4V2J03THUcfbQ48dT+kblHmDoZo8QPNVHbWZ34K2T3wbxFgM4S4H4X1ZShCIR+ruWZNN0XFa1d06JsBLUl0xDSr/t5DSvz9FWCYiPQp+u1vW25UTPxFCA2o6awxxxrKQ9ijeW5hlxkdEpxjhTWlqM/fuqYX3FeL0oDNFC7BON4zXg3ZPHm/kdJSkMowRPpZmXOg9NNWK9eDMEEC1E09KfYd2wZKvFe9MrHiCc8YVSIzHLMKyrgKKtudKMGgLNEPFNc57W3P0P9VR4adRxlIa8YVAWLDXRwg/ypNjDeGoiOI8jWJjK+ObibEAIVZsYXlQH8evkSOvn5LGRxpheTsjJIGpV2DzzTbKjGZimGTTLxWVB9Fi58u1EYJtTYzw6Rx6LDZzG/pSInTVS2sBG1jJEwo+j5wn02BnBfEXYoR/z2FXokRNdUb9dn2D11vW9Zk2sjbqmr7GWnHgRC0cUKX5l0TInQVOCdp+q9QCpuLgRbiWLcs58LkOnC7HsQA2QQVLEcTJxJLOQoiqGLcEwrMmKc7W5tu5iKAm4yq/u+2F4XS1Wg2gwD+m03C2HeAd8bzt6FrOW9b2sSlds+O7rMTTVDh/kgqmnveCITIA2rK9m89WHbLEC0VMJPpn8kN/Nd3uFVm2M4w9xBPgKZFmpfmcILzlYs6cSrx/qrpxPhFia8v6PFwtJ5GZhYCqnCKJEV43GHUixp5sI5wgtrhc9cOMGMItRvh25mE0/P2hpTlABvNwsPbdCFmKjMEv0uGluMFyNVvIbaArOONdYK6pUn/DCM9w9wfR4zkkduT5tBO4sSoulgOnxlsPZjsQL0OfM2+VksYfjPAcdx8JLgJ7niuK18B2AvP4d64S8IkYnwjh3ZkqVCw5uDIsioihXJquCqVxFyP8cc4yVKzWIly67NFFVlRUkUhHm4r+ebCpHM8IVlsH8FUPCKn/iBGWzLEJESWotQknnkS1leSwg/VysILub9bbbsdItr3eDPrHQWc08QmvQYWoVv1OzwLlNHnwFxHCsgGN3t5BeKd81xibqIquHyDtqiu5bcMgxrL0jBxjHFvGcU/VC7wqVHM+UPg6/c7Y5uF+IzmQM4Syy9B0wHjp5ZsVKeJ4T6BLm5sz9L+CFuuJ1hZrW9uMZ6tlEFHG8yYvfH4wXZRgkEcLESJ8KrEMNTAMg2oePgguWE57G6sFwxJ956P/P2ePByeLxUFXtxy7NYTh0MR3875GUr3RGPAeBag/HRD+4dahBjYDP392ujAW6drorIWN4lFxwBFPJgxH9/g+TBgcdZ35bJn7VWJ1MtP4Jmvj/oDwgXMZKmBzyjbHk0kj3qs+Rj8NuLjsDp7TE8LvaTixmp2xkhiEGhf75OGAkO9gmgkWnSzbXJLcCaK2EXtw08FukjON20JVmxTjGeUQ3JFfzX6zGoQUzmoKYT9CeMe1DC0zy8aG8NbhQt7GBcxJsr8AqEYhdjiDLQ3l3iRviKeChrJVvmyPB0E17ZokcTI+IXSeSP0OIuQJuxWwzbKxIbxhy1LMXbyGJBPNRwWnCn1uHw1C/FLwwkUJjGjnpAN5PvDTIKXqsphPJRyCb6Fyw84jWsNlailEp0V2XeswfJSsSaZpe4kGwkxoJ2Ij/lpifNEkjVM0GpC3ywyD3Dvl5WYQ3kCE7IgGkDTRyJaNxjK2ZXov3kGhlG1iZtYlMg96nC9Ipjt+jm/FM8HUbWcapM4NiaMsOTktzXeIkGVKFXtFPlR0B8M28VQ8TdXjCjIxm7BcLQVnF8V4s4vqN6ntveLI2wk5HNUvpB1BYypUGMtQs9aEAlVvZWcmBuJgxjlbfD5BHZzueBSUijp98aaJJmVcU5bRas7YY12er8kESDUscrn1inBbnIQimZJwfg7aJw5O38bT9DgynOL2Tw5JWO3ddDQJgmDd2WbfU+QU4+V7TN2h3XU1ONGRJs/JgzrqqmA11G6Fu0KEMPzC9ktSl1bOjFDQy1cjXhZYIc+WNTO6PAsOu6dDcO4ud9niODY2boS+FVuw3FRlhkE+oEOs3QmFjGBNIKigwVzONf44WzOyBUPHBiMTcbfG6XhPVJeZEFpH/k/s2DBwi/9BWc26vEq2IAUQa29CUdxt2gHSoCTBqJjyGvboq4Bp4/JuZvXIg5N4Vs1yE21c4hgqaC6k4riUgA1BWp3Sfqv+JBS5QxkbGcnb0jMlTjy91CnYoa9cppe/vM6EXcenpik12gKdPRjJyBmq9PKrnlTLqyotPOzfCD/pOwswxcXooIgp6aDqSyAjZ+9tUnNLzifQZstOuBCiLsbIfBXQIJSE7ih5lMNjjZ/CB9XhKzu8T58oRX7VHMbvXkWckkyK2l7lA6xK7k5LPQiFgCMUKXUKc91gizge6jJ/p938EOghDTqSAwEyjtiDZSYqTp/E0ub0fE56mWHyAxYGb9bZIi2q+Vvt5rPwixbSYAMiBSzuUhZCppZUlHNUU+n6hMKAXgArsgXIbVJMkvFLoAZtKFZBG+8icSapgfkCuXhQSJCvxCC1Eq1Z6ndVdrkC+aqqmutWjMcChPkKyZX0wDIVacSWpigxZQVNi1Si5A+Z2y9TD4qWrPEgfFI+iTiB1YBBB4kEnYqIP5EqZZmgMOWbYXJYPTIe46mpoU9Ifq6+P4UXygdxaM9FEQDkUbQw9YnCSXp4gyk9OYQS3Q3P7gSpXc09M/AiDCmfQ2cL+b5FGSb5/UBJfRPmGtAkXaEnlMh5Egi9XTWXvUjDhzcvGUtA/xrsMDIqFMCouDCRtRAAK1HiyLUKUTyL6AT5s42GUY6/hRoXpkXboHFlVCiAQkNzGnBhJUprvsq2sotPYeaamiF1HWKEfBQB00IvfpL5nrIItQ3af3EWDYsRvlBtqYyO3vG9SHx4B8aa6REzZ2k6bDGT33e5jhvB0KSA9GJ8Uv0h5qlznagykwJSdnKBLIU9I2IaR7IXK+DppAQF/rnbEOgPaaxLlCVUezymhnT5GSViona+SH6a80UcWpDSsRFN0DLIDWpgTEOLS1EQzLfeAeHFMp9QhsUI07+t7YmfZc1yrmiIWObm5Z9hXPpO2VuYAnqXW7YSkcFGn0gpsV1Y7E/PrfS5Ey5XhT6Rr4rmO31/iPKeEkfYlrYmGet0uiUixUs5F5yriZ/Eruw4PbR9yl1OcH9I3ePjpaUyrXayV44Hlv4y2S3YPaVDz4xrEZnMYH2Bajp+7q/CPT49T4O3deKKUanGUSneUabWj0O3NZKXKufqY/SE+E+PwYXSUFaAltCp3xTk2vQxdnFFOdfDBiZ+FR2kmbSJkCc0h6GmF7mDV0b8REbcrwsoGUg7611/KsqXyri1gzrIT5XG34NehYfVnk54G8DPn6cZWi0O2NRe3DWl2NY4Sb46f/97yJcW5LxNnKGvquuCnl0Ap426aJZlts24ApoB2Em9eAVtZqFCZJRZLmA/t3Aeip4wrd0V1i30PX6E6M9bFDUqi3g06k7BBjjTFShV/kg0mJ5ZuGMRDFVRallc0uJivTuQEgXQllHtVqgUZfWdLTGgTl6PHIGIDWCQjh222kmPTLM7aQaVpPrj9HvHteOohIiCN1oDJaNFtJgSA+oiqleEYmIiIPrkiP4slz+HduWHtFEL7ROz+SsT7EcS5gFJqrfK9mzBFJXDmkJLOt9GAp3o0SQGVO7JoX5YXAMGPbLb02QunyxoTCioRjMFT9mT0oyggcVq4kuqqrrBqKdny3S4Ciwe2t04U6TQ0xXm2FMvmRBqYFHTEM1ndh0fjImHSdXRPqtHXHo6BgY2TlqcVPFNxQHCYr/f7DRw2oEN4IzkYV6aZvwvL2MlTacV+kSJVB059DxL/4aDi2FtyHLkoYifiiSRAYyTzoYe11Sk0xJpBFLRNCVv0TiYjRHXjnEBMeUSNeBMSXyStCoiJR24GEw+ja51UoX86mQGkr5diFCADzyfDJVLlCF6MV68qFC5XAqSxou6vBmk/I7q9wq3Pgc+DZsTZYJeiowhSf5g33XSbPokh2CfQ1XAhUcJhUMmQH224iSADsBs7aY6wUqjYkaN0eDktZlOqr1cZArdSbhow5jS1FB8heEkdJMTY0MVgmyCP2MviYytDuzxwE8T3FR/BorfYXQKESK85+AmKmA8ST9eEr11uGnbCTUL/zIaGtQH7zkQcEoYwic4oXsEYDwI3HQVWXQHTEpU/74Ev1R3wiATP0OQkymKPYhdkLbIYakVA0yYcESggKapF0ZtmNPfDS3enoPW9lSKI+xooZ8ltUp4+0E6eDxgaclF3dNw66jUK+mi6tcJnzyy6IwJepCYI8zN81YgxoBCrfc2Zivq7nn4RTOptnHlsex1dlorugXs3Sr3u6ARGI1tHlIg4nmX4OpDl92buLksYdefrHp7wQaWrpnobCsfPRETE2H8Yiia7rSdxTjsBF4uPskb7Dmp3s33c85b6PJ84OWx6SUYj0GYnXC83znyAC8s5jxNtlbeQtYW895qHcDgLu+A0cGGKzzz8yD4vMVdufMWGrBmIy9/th4Oi7h+sO4gJUpb29J1GMgoimlE/4nk8GcU3mi6bsm4/0DQmQSedCRO5TxbrPqDuWzxn51oojMzlc+SBy5Mq7sL1y71tAt5tlDywtl2PN9vFrvdcBix1LWoYDjc7RaLzX4+7oXEIUWRctYi+lHVj9hwZeiOybmnEmx9LEoEcpS7UrJwj6eBXM/zfT9A4vue51aPJ4M4HuIGAwiv5Nkn4uzaeecPFasdtxnik1ixxz/4jjvhj0ZtmEsPkDh/eN5BZ4LhU809ZHKx4IeW7jcQSXzU+XgOuPzZroOgLlXSaDxYQ9tzPZiHs6TBcjqOa3wlu2IchDwHzN+UNS0oQyNObdCWh73ByL/giOwRy+Hz7mQ5ndsycHDbBjbt5ETidq2XnMfHFbgjN8uE8b/c3YeDUeCVOFqYIIsMkr/urLZDuQuOG3dcfCzdUiFzHv/MaYryqS4RLmsw3OrK9qI37SwnPpEAyZMEYXRIMZwLstwGDhEGnd0WA0/Si/piaBt6E1pFdyKkuLDmdZaj9XoSSRD9Z70ejZa4DKOGEBmwtJOpqMXhH29Nn5BMX4yzepvghn9US6ctMIFzKttZkXFVhVpiUpSY9MLdnBGJ8ZnubXKO009SwXQeb1J2ErfZeYZ5w9lCd+qX0IH8Um2iBOTuCYRn9BjCLCG3gASacLe9RdpYELTaggY1uAVtmWZmkZz0GDqjT1TSpKrgUqCEpJG5pcLp4bJREfmRY57kSvOkT9QZvb74mlQRHWrIjlBJj7riRlG43VbJqKZ22uurvK3hbFKVLEWiWqhpSfeogg5DRPuWcsY0r19b+Z57uLMo4/W2cZManKQwQJJHL6bnKWa5ft6x5PXcK983Ed1uwfTGraT/3Pj4q8n9Oyor4diNu6SWajJkGHl9Eys0Zg1NMIuE1ZVSE9A+UvKjFnsmcZCjw5p8qMOmW8bS5Pe+LNuCNunZyOy0nfSfO/D+Ae6YrE6YOU/sLvhofEep5/cvLRucluhYjrNpVXGiJcdAJF9hfrRsx/JIUEh6grCk10c7C89kv91u0hxyNMY9E5ltIYUyHTYTqdP6CJdUImKCc10f0kr4apg/JZ0EcjmCO2zyd4pKqfCift4xA5XLyqUPUhzHTD1SR8oZnZLr9H7e5cxpuW7X2i7DGsqQaWhSvtt1s6Ane7mVWLJjub5PV29HnB/bxls0boSZ2xAzdyNwX8EilEYoOGOCoyitaQSkjKDAlBth9iKW7P0WJRI25WYplBZ5c0D7i24OQOkZGsIyd5R0y1iaaKw7kiq94myEWPb2B9YdJbx3ykWCO5bz7WusjU/m79UB3zQt2bH89H65C+4KQgcU+XKZzj5DT1SXMs+KKNmxnOOuIO47yUrEpdEvj0+o0Oqk6LKuk2/h6pzIc98T/1YYv116C1osrVlyYUByxDzgKLfgM3RcXZOyZiYXIXeKH3WuYPXzhiKvCKZkUp2XvA1zDaMmtFwWm+/eNe55ivp5M1tta0S/ATUQ5BlRP50xSEU4i8HTz5v37jzuXpgOakFbXKoHRPcQNboiKLkK4sAgL1zFOJHAcQbKeMkDc8kdlshdFJo5RSZIuDFT0iGvmguGRZMc86s4nEWJOywrP7kg4uJaQSrKAuRdjp2YKUn6RsmbdanuxjDjd+GyGwFTrgSm3CXLdb8cLpt4NIqn2R4TUOB2CXeXGhJ3PIpLans5ROVk3kCYd6dcIcLfXG3qQFzGp92c7egEM1VySSqoZhG6Ff1ZN3812gHvzsJoUK7mvuhOZ3QaKL9vvG6HRJyWvfTYBORVc9J6n3cTIr5/h92SveydznxLERUQ8xqX6a0tuatXR0LWVKQZ5G5nd3JRmZWQ21lx+knAzUZYeebwiriyJHZSRl9x7N6EJPlXpzlpQ2uYYpB7g00r1UECbHBagBWU9p+pOOgIeXYZyOlHt3MsbP2wdk3d6S6mAUluUoP8pmoaWJGvQfRGPceOK8GKJc+QT2Ee0qNZGQbC3xyOHyRZQm8wFmRZtnfj6STVo1aSOhpNBfY4dVooonbN9lr0mE04SRoIMQjjeVfI8iCsvDbYDHAlWWxqNWJ1+V6Gnan624JLvXRtkNp0SKLoHR+TvCSaqcYAG3cFKIoQVt7qTIip/FLEu8swTER3oBVuzhV7Psnsqw493YhHFN9EIxj1pyIQhQgrN2yITq/gDKxUXe9t1iN0cMquJt/RpPgcslGnmlEOhDyVYdDLPVt4wDfZciWcHHPl0xiK4tosfgQDIAth5ScbojMPclQAN7qTHm9jahMMV34eg0qqDujHto4A86NRfoSVP2yIurXKdFCG8LzOuFWCPmECPZxk+1tLUrCl9GHDAO9ZAJgIeS7QVcBu4Fdj8nJEK/SWoVaisfjxIVZ3vwrc+DER0dGdzFhpDjZADoRworL9ogLs8WoUeO6hJ/sY2Lw9xVOiOfJwBh/je9FjwkWXkSI1mFOUDyGPRRWiQzW2HElEvTsDXSwRwbEbPabFbrzOsqL8CCs3tTOv+PhSMejRdmmElScuLX6vGP1CR18SYeVVOI8n/XXSFHKzMmcjrPx+OPOqli+SxsNvzpHzIqxU/p7HBf8aqf3lHjc/Qrjr/78sRoOSVrsUYeWt9v9YjE1qTuZShHAxnnm511Wl/si7BMsjhFHqP5+pRu20gHZNhJXXlzPo0leU/gunkzgbYaXy8Q/VaNTyqkvXRlh5+2ersf5QxsScjzDyG//CqDbL+IgLEVZef337VDVqf4syatdGWKn8+PzWYNyof3JtJK6IsHL70+C7Ruka+PrGz4Kc7xchhP7/o8FOGV8DX6PxUcrHXw1hpXL3DRgjfOctwGsghBjfm1+K0Wg03y/CdzHCSI/Cl61Hoy9cpr+rIITr8efX2FWj9vnzgvV3RYTQrt489q88WY1G//HmbPtJylUQQnn9eKk1rwXSaNZePspG2DS5FkKoyKfnYf0KII1mffj8dBX1HeR6CCsHkEL9oulqNOrCNeFVroywEoF8f2mcp0qovMbL+3XhVa6PMJLXHxHKfonTfobRj9D9uNg15MhXIIzk99v9Y79eh3O2GKcB52W93n+8f7uCY8iVr0J4kN9vPz4e+7Vard5vNJsGBgv/1mw2+nX4k/7jx48vA3eQL0UYy93bj5v7j+dfDw+fL0Nh+PL58PDr+eP+5sfbV8zKrPwHXvWcltNl4eUAAAAASUVORK5CYII="
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">50%</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Skill;
