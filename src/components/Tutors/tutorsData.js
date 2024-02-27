import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import { Rating } from "@mui/material";

const tutorsData = [
  {
    id: 1,
    name: "Mark Victor",
    abbrv: "Mark V.",
    image: "https://robohash.org/mark?set=set5",
    description:
      "3ayel wese5 2bn a27ba, m3fn w kalb w we7esh 2wy. m7d4 beytee2oh. sada2ooni",
    subjects: ["Physics", "Chemistry"],
    contact: {
      phone: "9665123456",
      email: "markviktor@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
      />
    ),
  },
  {
    id: 2,
    name: "Wael Tohami",
    abbrv: "W. Tohami",
    image: "https://robohash.org/wael?set=set5",
    description:
      "just steals your effort as a success story for him. He is not that bad but he is a harami",
    subjects: ["English", "business"],
    contact: {
      phone: "966233565",
      email: "waeltohami@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
        
      />
    ),
  },
  {
    id: 3,
    name: "Mostafa Mahmoud",
    abbrv: "Mostafa M.",
    image: "https://robohash.org/mostafa?set=set5",
    description:
      "just steals your effort as a success story for him. He is not that bad but he is a harami",
    subjects: ["Chemistry", "Physics"],
    contact: {
      phone: "966233565",
      email: "waeltohami@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
      />
    ),
  },
  {
    id: 4,
    name: "Wael Tohami",
    abbrv: "W. Tohami",
    image: "https://robohash.org/wael?set=set5",
    description:
      "just steals your effort as a success story for him. He is not that bad but he is a harami",
    subjects: ["English", "business"],
    contact: {
      phone: "966233565",
      email: "waeltohami@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
      />
    ),
  },
  {
    id: 5,
    name: "Wael Tohami",
    abbrv: "W. Tohami",
    image: "https://robohash.org/wael?set=set5",
    description:
      "just steals your effort as a success story for him. He is not that bad but he is a harami",
    subjects: ["English", "business"],
    contact: {
      phone: "966233565",
      email: "waeltohami@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
      />
    ),
  },
  {
    id: 6,
    name: "Wael Tohami",
    abbrv: "W. Tohami",
    image: "https://robohash.org/wael?set=set5",
    description:
      "just steals your effort as a success story for him. He is not that bad but he is a harami",
    subjects: ["English", "business"],
    contact: {
      phone: "966233565",
      email: "waeltohami@gmail.com",
    },
    rating: (
      <Rating
        defaultValue={3}
        icon={<StarRounded />}
        emptyIcon={<StarBorderRounded />}
        readOnly
      />
    ),
  },
];

export default tutorsData;
