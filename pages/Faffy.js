import Blogcard from '@/components/Faffy/Blogcard'
import Herosection from '@/components/Faffy/Herosection'
import Section3 from '@/components/Faffy/Section3'
import Sectionone from '@/components/Faffy/Sectionone'
import Sectionthree from '@/components/Faffy/Sectionthree'
import Sectiontwo from '@/components/Faffy/Sectiontwo'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const blogOne = [
    {
        pic: "/img/blog1.png",
        para: " Día de los Muertos is a celebration full of joy, where families come together to cook delicious food, decorate their houses with flowers and gather to honor the cycle of life.  ",
        paratwo:
            "Are you yet to experience this incredible event? Don't worry - Noma has your back (and your bucket list!). As part of our 2024 remote work trip calendar, we'll be bringing you a very special el Día de los Muertos Edition in Oaxaca!",
        parathree:
            "El Día de los Muertos, or The Day of the Dead, is typically celebrated in Mexico between October 31st and November 2nd and honors the return of deceased loved ones to Earth. ",
        parafour:
            "Contrary to the name, El Día de los Muertos – or Day Of The Dead – is a joyful celebration of life; where communities believe that death is an integral part of life, the same as birth and not something to be feared. El Día de los Muertos is like a family reunion where living and dead members of the community come together to celebrate life with their loved ones. ",
    },
];
const blogTwo = [
    {
        photo: "/img/blog2.png",
        topPara: "Here are some incredible facts about El Día de los Muertos:",
        para: " It's believed that on October 31st, the gates to the afterlife open. For the first 24 hours, the spirits of children can revisit their families, and for the second 24 hours, adult spirits can do the same.  ",
        paratwo:
            "La Calavera Catrina is one of the most popular symbols of the holiday, a skeleton wearing a wide-brimmed hat with feathers, equal parts eerie and elegant. She reminds us that death is not something to be feared and no matter your , we all have the same destiny.",
        parathree:
            "Other popular symbols are calacas (skeletons) and calaveras (skulls) which appear in sweets, as parade masks, as dolls or as makeup.",
        parafour:
            "El Día de los Muertos is often mistaken for Halloween due to the similar dates but Halloween is rooted in ancient Celtic cultures, and El Día de los Muertos has pre-Columbian Aztec and Roman Catholic influences.",
        parafive:
            "Families make ofrendas (altars or offerings) in homes and on gravestones, they lay marigold flowers called cempasuchil and candles leading from cemeteries to their homes.",
        parasix:
            "Communities cover ofrendas with their deceased loved ones' favorite food, drinks and objects.",
        paraseven:
            "These traditions were influenced by Catholic All Saints Day and the Aztecs. Medieval Spaniards decorated graves with flowers and candles to guide the souls of their loved ones back to Earth. Ancient Aztecs left supplies and tools out to guide deceased family members through the Land of the Dead to the final resting place of Mictlán.",
        paraeight:
            "Despite being celebrated in some form for over 3,000 years, El Día de los Muertos was almost exclusively celebrated in rural Mexico until the 1980s.",
        paranine:
            "Surprisingly, the first-ever Día de los Muertos parade in Mexico City didn't take place until 2016, inspired by the James Bond film Spectre.  ",
    },
];
const blogThree = [
    {
        album: "/img/blog3.png",
        para: " Noma Collective is collaborating with Outsite; beautiful co-living spaces for remote workers and creatives, for an unforgettable el Día de los Muertos Edition. Outsite provides remote-ready accommodation and a co-working hub in the heart of Oaxaca. Noma provides incredible activities, excursions and a ready-made community of like-minded remote workers.   ",
        paratwo:
            "Visiting Oaxaca during El Día de los Muertos is an experience that can't be missed. Unlike Mexico City, the celebrations are more in line with the spiritual and authentic rituals of the holiday. Picture this: The streets are lined with colorful papel picado banners, the air thick with smells of cempasuchil flowers and smoky mezcal. Thousands of candles illuminate the old cemetery, Panteón Viejo Xoxocotlán; the atmosphere is infectious. The ancient traditions are combined with the wonders of modern connectivity allowing you to work from the heart of Oaxaca while being a part of this unique holiday.",
    },
];
const blogPic = [
    {
        visit: "/img/el.png",
        remote: "Remote Life",
        desti: "Watamu, Kenya: A Bucket List Destination",
        bgcolor: "#BBE4D7",
    },

    {
        visit: "/img/Featured.png",
        remote: "Travel Tips",
        desti:
            "Making the Most of Remote Work in Belize with Noma: Tips and Tricks",
        bgcolor: "#FFDA7F",
    },
    {
        visit: "/img/Remote-card5.png ",
        desti: "Lisbon: The Hottest Remote Work Destination in Europe",
        remote: "Alum-News",
        bgcolor: "#FFDA7F",
    },
];

const Faffy = () => {
  return (
    <>
          <div className="bg-[#F7F7F7]  ">
              <Navbar />
              <Herosection />
              <div className="max-w-[1120px] w-full mx-auto">
                  {blogOne.map((item, index) => (
                      <Sectionone blog={item} key={index} />
                  ))}
              </div>
              <div className="max-w-[1120px] w-full mx-auto">
                  {blogTwo.map((item, index) => (
                      <Sectiontwo myblog={item} key={index} />
                  ))}
              </div>
              <div className="max-w-[1120px] w-full mx-auto">
                  {blogThree.map((item, index) => (
                      <Sectionthree youblog={item} key={index} />
                  ))}
              </div>
              <Section3 />
              {/* blogcards */}
              <div className=" pt-8 bg-violet-100 ">
                  <p className="max-w-[1112px] px-4  w-full mx-auto text-center text-black text-[48px] font-normal font-sergio-trendy capitalize max-sm:text-[24px] ">
                      Blogs You Might Be Interested In
                  </p>
                  <div className="flex flex-wrap  gap-6 lg:gap-[68px] px-[8px] justify-center max-w-[1140px] w-full mx-auto ">
                      {blogPic.map((items, index) => (
                          <Blogcard blogs={items} key={index} />
                      ))}
                  </div>
                 
              </div>
              {/* blogcards */}
          </div>
    </>
  )
}

export default Faffy