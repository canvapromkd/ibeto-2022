import {
  GiProgression,
  GiTeacher,
  GiTargetPrize,
  GiCash,
  GiPublicSpeaker,
  GiMeshNetwork,
  GiBrainstorm,
} from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
export const whyParticipateData = [
  {
    id: 1,
    content:
      "Bring a brilliant idea and help it transform and make the difference it deserves.",
    icon: <GiBrainstorm className="wp__icon" />,
  },
  {
    id: 2,
    content:
      "Be part of a detailed 3-month project development structure made to guide you every step of the way.",
    icon: <GiProgression className="wp__icon" />,
  },
  {
    id: 3,
    content:
      "Get the chance to avail internships from renowned corporate companies.",
    icon: <MdMapsHomeWork className="wp__icon" />,
  },
  {
    id: 4,
    content:
      "Be privy to valuable advice from a panel of accomplished experts willing to help you along any point you may be stuck in your journey.",
    icon: <GiTeacher className="wp__icon" />,
  },
  {
    id: 5,
    content:
      "Take a shot at winning prizes worth up to 1 Lakh, which are open to the top teams.",
    icon: <GiTargetPrize className="wp__icon" />,
  },
  {
    id: 6,
    content:
      "Get access to premium talks and workshops to sharpen your knowledge.",
    icon: <RiKakaoTalkFill className="wp__icon" />,
  },
  {
    id: 7,
    content:
      "Get 50 activity points for socially relevant projects, provided as per KTU regulations.",
    icon: <GiCash className="wp__icon" />,
  },
  {
    id: 8,
    content:
      "Attend technical sessions hosted by speakers, who are more than familiar with each aspect of project development.",
    icon: <GiPublicSpeaker className="wp__icon" />,
  },
  {
    id: 9,
    content:
      "Build strong networks and connect with professionals, individuals working on socially relevant projects, and more.",
    icon: <GiMeshNetwork className="wp__icon" />,
  },
];
