import CustomSiteHeader from "@/ui/CustomSiteHeader";
import TabNavigator from "@/ui/TabNavigator";

export default function HomeServiceNavigation() {
  const Services = [
    {
      img1: "/services/darjeeling/TigerHill.jpg",
      servicename1: "Tiger Hill",
      link: "/our-services/darjeeling-tour-package",
      details: [
        {
          img: "/services/darjeeling/BatasiaLoop.jpg",
          servicename: "BatasiaLoop",
        },
        {
          img: "/services/darjeeling/DarjeelingHimalayanRailway.jpg",
          servicename: "Darjeeling Himalayan Railway",
        },
        {
          img: "/services/darjeeling/HappyValleyTeaEstate.jpg",
          servicename: "Happy Valley Tea Estate",
        },
        {
          img: "/services/darjeeling/HimalayanMountaineeringInstitute.jpg",
          servicename: "Himalayan Mountaineering Institute",
        },
        {
          img: "/services/darjeeling/PadmajaNaiduHimalayanZoologicalPark.jpg",
          servicename: "Padmaja Naidu Himalayan Zoological Park",
        },
        {
          img: "/services/darjeeling/PeacePagoda.jpg",
          servicename: "Peace Pagoda",
        },
      ],
      categoryName: "Darjeeling",
    },
    {
      img1: "/services/dooars/BuxaTigerReserve.jpg",
      servicename1: "Buxa Tiger Reserve",
      link: "/our-services/dooars-tour-package",

      details: [
        {
          img: "/services/dooars/ChilapataForest.jpg",
          servicename: "Chilapata Forest",
        },
        {
          img: "/services/dooars/GorumaraNationalPark.jpg",
          servicename: "Gorumara National Park",
        },
        {
          img: "/services/dooars/JaldaparaNationalPark.jpg",
          servicename: "Jaldapara National Park",
        },
        {
          img: "/services/dooars/JayantiBuxaregion.jpg",
          servicename: "Jayanti Buxaregion",
        },
        { img: "/services/dooars/Lataguri.jpg", servicename: "Lataguri" },
        {
          img: "/services/dooars/SamsingSuntalekhola.jpg",
          servicename: "Samsing Suntalekhola",
        },
      ],
      categoryName: "Dooars",
    },
    {
      img1: "/services/north-sikkim/ChoptaValley.jpg",
      servicename1: "Chopta Valley",
      link: "/our-services/north-sikkim-tour-package",

      details: [
        {
          img: "/services/north-sikkim/GurudongmarLake.jpg",
          servicename: "Gurudongmar Lake",
        },
        { img: "/services/north-sikkim/Lachen.jpg", servicename: "Lachen" },
        { img: "/services/north-sikkim/Lachung.jpg", servicename: "Lachung" },
        {
          img: "/services/north-sikkim/ThanguValley.jpg",
          servicename: "Thangu Valley",
        },
        {
          img: "/services/north-sikkim/YumthangValley.jpg",
          servicename: "Yumthang Valley",
        },
        {
          img: "/services/north-sikkim/ZeroPointYumesamdong.jpg",
          servicename: "Zero Point Yumesamdong",
        },
      ],
      categoryName: "North Sikkim",
    },
    {
      img1: "/services/south-sikkim/CharDhamSiddhesvaraDham.jpg",
      servicename1: "Char Dham Siddhesvara Dham",
      link: "/our-services/south-sikkim-tour-package",

      details: [
        { img: "/services/south-sikkim/Namchi.jpg", servicename: "Namchi" },
        {
          img: "/services/south-sikkim/RalongMonastery.jpg",
          servicename: "Ralong Monastery",
        },
        {
          img: "/services/south-sikkim/RavanglaAlsocalledRabong.jpg",
          servicename: "Ravangla / Rabong",
        },
        {
          img: "/services/south-sikkim/SamdruptseMonasteryStatue.jpg",
          servicename: "Samdruptse Monastery Statue",
        },
        {
          img: "/services/south-sikkim/TareyBhir.jpg",
          servicename: "Tarey Bhir",
        },
        {
          img: "/services/south-sikkim/TemiTeaGarden.jpg",
          servicename: "Temi Tea Garden",
        },
      ],
      categoryName: "South Sikkim",
    },
    {
      img1: "/services/nepal/Bandipur.jpg",
      servicename1: "Bandipur",
      link: "/our-services/nepal-tour-package",

      details: [
        {
          img: "/services/nepal/ChitwanNationalPark.jpg",
          servicename: "Chitwan National Park",
        },
        {
          img: "/services/nepal/EverestRegionKhumbu.jpg",
          servicename: "Everest Region Khumbu",
        },
        {
          img: "/services/nepal/KathmanduValley.jpg",
          servicename: "Kathmandu Valley",
        },
        {
          img: "/services/nepal/Lumbini.jpg",
          servicename: "Lumbini",
        },
        {
          img: "/services/nepal/Pokhara.jpg",
          servicename: "Pokhara",
        },
        {
          img: "/services/nepal/RaraLake.jpg",
          servicename: "Rara Lake",
        },
      ],
      categoryName: "Nepal",
    },
    {
      img1: "/services/bhutan/BumthangValley.jpg",
      servicename1: "Bumthang Valley",
      link: "/our-services/bhutan-tour-package",

      details: [
        {
          img: "/services/bhutan/CheleLaPass.jpg",
          servicename: "Chele La Pass",
        },
        {
          img: "/services/bhutan/HaaValley.jpg",
          servicename: "Haa Valley",
        },
        {
          img: "/services/bhutan/ParoTaktsangTigersNestMonastery.jpg",
          servicename: "Paro Taktsang Tigers Nest Monastery",
        },
        {
          img: "/services/bhutan/PhobjikhaValley.jpg",
          servicename: "Phobjikha Valley",
        },
        {
          img: "/services/bhutan/PunakhaDzong.jpg",
          servicename: "Punakha Dzong",
        },
        {
          img: "/services/bhutan/Thimphu.jpg",
          servicename: "Thimphu",
        },
      ],
      categoryName: "Bhutan",
    },
    {
      img1: "/services/north-east/CherrapunjiMeghalaya.jpg",
      servicename1: "Cherrapunji Meghalaya",
      link: "/our-services/north-east-tour-package",

      details: [
        {
          img: "/services/north-east/KazirangaNationalParkAssam.jpg",
          servicename: "Kaziranga National Park Assam",
        },
        {
          img: "/services/north-east/LoktakLakeManipur.jpg",
          servicename: "Loktak Lake Manipur",
        },
        {
          img: "/services/north-east/MajuliAssam.jpg",
          servicename: "Majuli Assam",
        },
        {
          img: "/services/north-east/ShillongMeghalaya.jpg",
          servicename: "Shillong Meghalaya",
        },
        {
          img: "/services/north-east/TawangArunachalPradesh.jpg",
          servicename: "Tawang Arunachal Pradesh",
        },
        {
          img: "/services/north-east/ZiroValleyArunachalPradesh.jpg",
          servicename: "Ziro Valley Arunachal Pradesh",
        },
      ],
      categoryName: "North East",
    },
  ];

  const categories = [
    "Darjeeling",
    "Dooars",
    "North Sikkim",
    "South Sikkim",
    "Nepal",
    "Bhutan",
    "North East",
  ];

  return (
    <div
      className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col gap-4"
      id="tour-services"
    >
      <CustomSiteHeader
        normal="Destinations by Region"
        highlighted="Explore Top"
      />
      <TabNavigator categories={categories} Services={Services} />
    </div>
  );
}
