import Image from "next/image";
import Container from "./component/common/Container";
import Typography from "./component/common/Typography";
import Button from "./component/common/Button";
import ArticleSection from "./component/home/ArticleSection";
import SectionDivider from "./component/home/SectionDivider";
import React from "react";
import BlogTab from "./component/home/BlogTab";
import ResourceSection from "./component/home/ResourceSection";
import ReviewCard from "./component/home/ReviewCard";
import { SlideUp, ZoomIn } from "./component/common/Motion";

const peoples = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/dedb/e955/e99222e0e015c0cc43df02356ba3f825?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~gDyhC3G4G6u83fuqiucasuzyBkYsmqtP4cRlNvOtaaqrSN7-JoFRqHCObl-1viUKNMfOsP6RJHTaEaMgcZsq2uKUFx~cXHCucDjelc2A0Pryph74HH7NjF48PnZ-emYtxIQQOc16e9gsJ1rtdunXZmmA~fvntX74Ax2FlH3uJ4WP503qe5LTgIS0~DCB8~EIto06pyDmcGqiYTe-5KL-xPchztTsSvEEjdnJm-2pDzh6tbHpe78Uy2nVb4F4Lp94F8VBDIAgiuEcrl73-q4zHEgu1Ul13~S3Pyu14522aV5AjtZdsK0y5PglEpeS0lX9Ut4mal5E4iFMy~wVOE6Q__",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/077b/9b1f/b51c319c5b2ac95f6fa6cea6dbee1545?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmZ5Tbbi2WwnXS09uJ8fnLuhXmzY7KFiyFIqGnvnCi9yhviDIdeXPA2YjIjBxqpeJHO7tc0ypgDh~ggnJ67SxebZ1nccwpNzG5aL61btWsqXc-U3NbVbuaYjk5c6WC~PAqymU7i66aWZga57SG0aqXzIMXFIbkN9kdqIC7f3n0mepVxQPmXtS-Rus2SpzEsvqLYIGOBq5xkUv~5P7JlfTFxWD~RVKQebrRd1KYQKXRR1zZCLAsNifEJJffVSpLGEd40YsYwwQYf2UxwhumnjegMjZH5uQTk4irlbQKMxtC5U4v94x4tKrNLI-0OLiL4IJ4Bk30~UKwyKgIodkTPdIw__",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/36d0/9592/ce4a4cc2078a8bca2d1f2da992143a0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BY2TkOYcFezMy-KQFJdutyfA9sx0f3dDkkqUCaPnk7RhHr~Dmj31LN6lcRJoEfTxL9Ga-iNBE0UmpaCWFGbAxfYl8MdIqVT5Mxor6QXXbCm2H4Mj9UgmoxhMEFxkxSzGKr7ndilFP5Ep3EqlqgXPJ-p5YodepggiXkhE2JtLpFKuaJatBWCSEce4LNcb-E~Pu4q~Fs~ULaHvZIsq7vud2YGCG5Nk3mopVAvilEUolResQF83ahg2sRti3c9XhfNzC2aMPyLHYkv5hxQQC6YmQG4LI2wJ0F5lu6RatsTSlMrkGmXzVshoUXIbQilE~UoW9U9OPCGy7KxTH~ZPdLiX2w__",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/5d8d/02f7/d9fea10ab6aa04277815abb9740e0ea4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhfeXGXIWlf5JTEzuiuDCKfp8aEvpi5cBeHXTDjKF1AOw0jE7tf5vegRIsybC3y05sOni2SEP5ow5dXmT6POB6sWua9GJs1Yd1HodcJxIBIWYe-d-w2cMuDMmLPWqH7jHMj~2tlffLt6Zs9xRCuQGEUNXeWVbdKN4NmmTM3HeVl8m7vT0xrNp-OKSLcvtUo5bHy1dMUggkhx63j8AmwU26b2LU~PkamDoyHSk54BiF1dAnRXUvXlg-2LdTFeaBqQ75MMzHH8HpY5DDAVTDT~f8IsHxQ~EGICxVAVxi9CRmKoprAFDO4Z85dqGK5GJj0rapaAStJcKAhm0fjUxKafTg__",
  },
];

const people2 = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/9ca0/b441/026494e0c72821ab8e1522f508c22524?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wq9Xwfhsi85nVjOwIpFbXSNQUoiteRNb~bmPHPNaDEDv4qrNOQ6kFrSg-XetoDIDeHeyC6pdl4GPzYLF0KvyC0T0yIAy0t1c6zfLY245iab1yaA7LQQol8dMehxgwZxnkwQ1pwCmTpebSn2rWQzBplYDxkn2T3vS5z~ofVaoHs-0V2uwdl~rBygYGXzTGKiScK9gvqL1kRC2-1CCpxnUA0kqse5S2nq0CBotnVc3RMTiEp7MSJ~G-ZfswLY-O8BEWFE~Zo7QBntGdUtNLPDkSZtV2QLweNeDuIKSdOFPBkYzLSjacmwEFaHln8j3hkoweho3ir01ok0iC724-e5Yag__",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/ec7b/b51f/9f46593b45c288e917ecb72c2e94633e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dy007Dj-jKFbTsLd~2hT~yZVmdJZcoUG-jZBzFLI7sGhdzHhjx2R~RAmKpN5WXuE~Sy2ZaoF~ETbQ~dL9xtC8c369uaA6wgUy8dgonSsmz1tEVxK4h9kC-8Z6-bY0CuvFLjDCxE1NH9GIHsLtqN37C6Hv6g4Z3n0y4XjvTAW~5el1YpqSJKUXR7YJrf67T1M8tzySyu1RyfvFUFg9YQdOxx6Ug1jjmr4WhbnQeDpkfV-wUV~S3RoGYLlUensB7Ri9cK-Onay32UtjYuHJhezmwR32sD0pBtjWP8PjvLGWZtCqODf5o4pdW~9yA5YfF5MIuYWp6SVgHNnQuLfYSqfyA__",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/5c36/5dcb/ee25841036effb134828bc200a31dc8f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dU-qxABrlrMq1XF8GUk~0IB16VbzuJFT1yk3J5y5nC1O0hBnGmrIbTYUfWCbtbCckOt~Kp6sextmdCmDzqNTxiF7j3mJ2YXPZ4HiywWTLEom22xNzhGdif5YAna7SRL-FYwJC~GD4e-QYbgQ8G8fo4jnuN1zTUf0Auu7e6UkrV-fxHwv4NlTjse~sUlSTCaxkGxctsjBAoAa1bflfpLVD5fa0N7buu1S2Qepdf5r0XLPS0Z-4DmQYwjze1pACI7YIsRM~IWbfhRzjIttiTwyp7b0NySEBe4z5ng-G0dXnUqsjabv4LVcAQqboryhrEfUleQnC1xVT4eUz5PhiUEPQw__",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/29c0/2573/dee083a0d8ba7e866b75f5e3af4a6c78?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neC3IzxX6suIhyExdWnA4Uj29xEDq1ki4JeYdmHwGv78wldQdjWmps54l7ZawLjXw1nhy2BZYakolrYocV2qJJHT-FAfVTDozRgt7JfD-aCMT43cnXc0gFVlMMY1AAiycf-qb5eq9brrtijpFOXiTihUoPauP1tOWjunBE~suO5rlvJrfVvdPPwZGCb90xfMRSeSZHhdbA7xRo3rI-QeYN6k~w8YbBXSIa17VEzhkgPsIHicRKJA~ro9an-jQQF5UhhkjLrfxHqw6shD5pVIZ2O9dV-eQ3D8D0jVFq4mWiE-7~YhwStBzj3kad9xhohF0~YJshiOrmWNPpjYpz-Zew__",
  },
];
const futureTechnologyArticles = [
  {
    title: "Quantity",
    description:
      "Over 1,000 articles on emerging tech trends and breakthroughs.",
  },
  {
    title: "Variety",
    description:
      "Articles cover fields like AI, robotics, biotechnology, and more.",
  },
  {
    title: "Frequency",
    description: "Fresh content added daily to keep you up to date.",
  },
  {
    title: "Authoritative",
    description:
      "Written by our team of tech experts and industry professionals.",
  },
];

const researchInsightsArticles = [
  {
    title: "Depth",
    description: "500+ research articles for in-depth understanding.",
  },
  {
    title: "Graphics",
    description: "Visual aids and infographics to enhance comprehension.",
  },
  {
    title: "Trends",
    description: "Explore emerging trends in future technology research.",
  },
  {
    title: "Contributors",
    description: "Contributions from tech researchers and academics.",
  },
];

const blogs1 = [
  {
    id: 1,
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    excerpt:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    share: 20,
    author: {
      name: "John Techson",
      position: "Quantum Computing",
      image:
        "https://s3-alpha-sig.figma.com/img/077b/9b1f/b51c319c5b2ac95f6fa6cea6dbee1545?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmZ5Tbbi2WwnXS09uJ8fnLuhXmzY7KFiyFIqGnvnCi9yhviDIdeXPA2YjIjBxqpeJHO7tc0ypgDh~ggnJ67SxebZ1nccwpNzG5aL61btWsqXc-U3NbVbuaYjk5c6WC~PAqymU7i66aWZga57SG0aqXzIMXFIbkN9kdqIC7f3n0mepVxQPmXtS-Rus2SpzEsvqLYIGOBq5xkUv~5P7JlfTFxWD~RVKQebrRd1KYQKXRR1zZCLAsNifEJJffVSpLGEd40YsYwwQYf2UxwhumnjegMjZH5uQTk4irlbQKMxtC5U4v94x4tKrNLI-0OLiL4IJ4Bk30~UKwyKgIodkTPdIw__",
    },
  },
  {
    id: 2,
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    excerpt:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 42,
    share: 18,
    author: {
      name: "Sarah Ethicist",
      position: "AI Ethics",
      image:
        "https://s3-alpha-sig.figma.com/img/36d0/9592/ce4a4cc2078a8bca2d1f2da992143a0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BY2TkOYcFezMy-KQFJdutyfA9sx0f3dDkkqUCaPnk7RhHr~Dmj31LN6lcRJoEfTxL9Ga-iNBE0UmpaCWFGbAxfYl8MdIqVT5Mxor6QXXbCm2H4Mj9UgmoxhMEFxkxSzGKr7ndilFP5Ep3EqlqgXPJ-p5YodepggiXkhE2JtLpFKuaJatBWCSEce4LNcb-E~Pu4q~Fs~ULaHvZIsq7vud2YGCG5Nk3mopVAvilEUolResQF83ahg2sRti3c9XhfNzC2aMPyLHYkv5hxQQC6YmQG4LI2wJ0F5lu6RatsTSlMrkGmXzVshoUXIbQilE~UoW9U9OPCGy7KxTH~ZPdLiX2w__",
    },
  },
  {
    id: 3,
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    excerpt:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    share: 12,
    author: {
      name: "Astronomer X",
      position: "Space Exploration",
      image:
        "https://s3-alpha-sig.figma.com/img/5d8d/02f7/d9fea10ab6aa04277815abb9740e0ea4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhfeXGXIWlf5JTEzuiuDCKfp8aEvpi5cBeHXTDjKF1AOw0jE7tf5vegRIsybC3y05sOni2SEP5ow5dXmT6POB6sWua9GJs1Yd1HodcJxIBIWYe-d-w2cMuDMmLPWqH7jHMj~2tlffLt6Zs9xRCuQGEUNXeWVbdKN4NmmTM3HeVl8m7vT0xrNp-OKSLcvtUo5bHy1dMUggkhx63j8AmwU26b2LU~PkamDoyHSk54BiF1dAnRXUvXlg-2LdTFeaBqQ75MMzHH8HpY5DDAVTDT~f8IsHxQ~EGICxVAVxi9CRmKoprAFDO4Z85dqGK5GJj0rapaAStJcKAhm0fjUxKafTg__",
    },
  },
];
const blogs2 = [
  {
    id: 1,
    date: "October 17, 2023",
    title: "The Quantum Leap in Computing",
    excerpt:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "50k",
    comments: 60,
    share: 20,
    author: {
      name: "Alexandre",
      position: "Quantum Computing",
      image:
        "https://s3-alpha-sig.figma.com/img/dedb/e955/e99222e0e015c0cc43df02356ba3f825?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~gDyhC3G4G6u83fuqiucasuzyBkYsmqtP4cRlNvOtaaqrSN7-JoFRqHCObl-1viUKNMfOsP6RJHTaEaMgcZsq2uKUFx~cXHCucDjelc2A0Pryph74HH7NjF48PnZ-emYtxIQQOc16e9gsJ1rtdunXZmmA~fvntX74Ax2FlH3uJ4WP503qe5LTgIS0~DCB8~EIto06pyDmcGqiYTe-5KL-xPchztTsSvEEjdnJm-2pDzh6tbHpe78Uy2nVb4F4Lp94F8VBDIAgiuEcrl73-q4zHEgu1Ul13~S3Pyu14522aV5AjtZdsK0y5PglEpeS0lX9Ut4mal5E4iFMy~wVOE6Q__",
    },
  },
  {
    id: 2,
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    excerpt:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 42,
    share: 18,
    author: {
      name: "Sarah Ethicist",
      position: "AI Ethics",
      image:
        "https://s3-alpha-sig.figma.com/img/36d0/9592/ce4a4cc2078a8bca2d1f2da992143a0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BY2TkOYcFezMy-KQFJdutyfA9sx0f3dDkkqUCaPnk7RhHr~Dmj31LN6lcRJoEfTxL9Ga-iNBE0UmpaCWFGbAxfYl8MdIqVT5Mxor6QXXbCm2H4Mj9UgmoxhMEFxkxSzGKr7ndilFP5Ep3EqlqgXPJ-p5YodepggiXkhE2JtLpFKuaJatBWCSEce4LNcb-E~Pu4q~Fs~ULaHvZIsq7vud2YGCG5Nk3mopVAvilEUolResQF83ahg2sRti3c9XhfNzC2aMPyLHYkv5hxQQC6YmQG4LI2wJ0F5lu6RatsTSlMrkGmXzVshoUXIbQilE~UoW9U9OPCGy7KxTH~ZPdLiX2w__",
    },
  },
  {
    id: 3,
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    excerpt:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    share: 12,
    author: {
      name: "Astronomer X",
      position: "Space Exploration",
      image:
        "https://s3-alpha-sig.figma.com/img/5d8d/02f7/d9fea10ab6aa04277815abb9740e0ea4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhfeXGXIWlf5JTEzuiuDCKfp8aEvpi5cBeHXTDjKF1AOw0jE7tf5vegRIsybC3y05sOni2SEP5ow5dXmT6POB6sWua9GJs1Yd1HodcJxIBIWYe-d-w2cMuDMmLPWqH7jHMj~2tlffLt6Zs9xRCuQGEUNXeWVbdKN4NmmTM3HeVl8m7vT0xrNp-OKSLcvtUo5bHy1dMUggkhx63j8AmwU26b2LU~PkamDoyHSk54BiF1dAnRXUvXlg-2LdTFeaBqQ75MMzHH8HpY5DDAVTDT~f8IsHxQ~EGICxVAVxi9CRmKoprAFDO4Z85dqGK5GJj0rapaAStJcKAhm0fjUxKafTg__",
    },
  },
];

const blogs3 = [
  {
    id: 1,
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    excerpt:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    share: 12,
    author: {
      name: "Astronomer X",
      position: "Space Exploration",
      image:
        "https://s3-alpha-sig.figma.com/img/5d8d/02f7/d9fea10ab6aa04277815abb9740e0ea4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhfeXGXIWlf5JTEzuiuDCKfp8aEvpi5cBeHXTDjKF1AOw0jE7tf5vegRIsybC3y05sOni2SEP5ow5dXmT6POB6sWua9GJs1Yd1HodcJxIBIWYe-d-w2cMuDMmLPWqH7jHMj~2tlffLt6Zs9xRCuQGEUNXeWVbdKN4NmmTM3HeVl8m7vT0xrNp-OKSLcvtUo5bHy1dMUggkhx63j8AmwU26b2LU~PkamDoyHSk54BiF1dAnRXUvXlg-2LdTFeaBqQ75MMzHH8HpY5DDAVTDT~f8IsHxQ~EGICxVAVxi9CRmKoprAFDO4Z85dqGK5GJj0rapaAStJcKAhm0fjUxKafTg__",
    },
  },
  {
    id: 2,
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    excerpt:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    share: 20,
    author: {
      name: "John Techson",
      position: "Quantum Computing",
      image:
        "https://s3-alpha-sig.figma.com/img/077b/9b1f/b51c319c5b2ac95f6fa6cea6dbee1545?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmZ5Tbbi2WwnXS09uJ8fnLuhXmzY7KFiyFIqGnvnCi9yhviDIdeXPA2YjIjBxqpeJHO7tc0ypgDh~ggnJ67SxebZ1nccwpNzG5aL61btWsqXc-U3NbVbuaYjk5c6WC~PAqymU7i66aWZga57SG0aqXzIMXFIbkN9kdqIC7f3n0mepVxQPmXtS-Rus2SpzEsvqLYIGOBq5xkUv~5P7JlfTFxWD~RVKQebrRd1KYQKXRR1zZCLAsNifEJJffVSpLGEd40YsYwwQYf2UxwhumnjegMjZH5uQTk4irlbQKMxtC5U4v94x4tKrNLI-0OLiL4IJ4Bk30~UKwyKgIodkTPdIw__",
    },
  },
  {
    id: 3,
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    excerpt:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 42,
    share: 18,
    author: {
      name: "Sarah Ethicist",
      position: "AI Ethics",
      image:
        "https://s3-alpha-sig.figma.com/img/36d0/9592/ce4a4cc2078a8bca2d1f2da992143a0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BY2TkOYcFezMy-KQFJdutyfA9sx0f3dDkkqUCaPnk7RhHr~Dmj31LN6lcRJoEfTxL9Ga-iNBE0UmpaCWFGbAxfYl8MdIqVT5Mxor6QXXbCm2H4Mj9UgmoxhMEFxkxSzGKr7ndilFP5Ep3EqlqgXPJ-p5YodepggiXkhE2JtLpFKuaJatBWCSEce4LNcb-E~Pu4q~Fs~ULaHvZIsq7vud2YGCG5Nk3mopVAvilEUolResQF83ahg2sRti3c9XhfNzC2aMPyLHYkv5hxQQC6YmQG4LI2wJ0F5lu6RatsTSlMrkGmXzVshoUXIbQilE~UoW9U9OPCGy7KxTH~ZPdLiX2w__",
    },
  },
];

const blogs = [
  { id: 1, label: "All", blogs: blogs1 },
  { id: 2, label: "Quantum Computing", blogs: blogs2 },
  { id: 3, label: "AI Ethics", blogs: blogs3 },
  { id: 4, label: "Space Exploration", blogs: [] },
  { id: 5, label: "Biotechnology", blogs: [] },
  { id: 6, label: "Renewable Energy", blogs: [] },
];

const resource1 = {
  title: "Ebooks",
  description:
    "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
  logo: "/icons/ebooks.svg",
  downloadUrl: "#",
  downloadTitle: "Download Ebooks Now",
  downloadCounts: "10k",
  users: peoples,
  topicTitle: "Variety of Topics",
  topicDescription:
    "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
  bannerSrc:
    "https://s3-alpha-sig.figma.com/img/5c58/bd55/d1d2999cecd1cbacbf24bed394351b0d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQWRyuNVyqA5skJcn8UDceO2~8cG132SjfyEHZq-t7Mw8FnIWfJoIC370y9l7bpj3zJtQp7X7rlY8L2WPteh5Dgoaocwk4D1-SKRCUT7Ux2TPXvnMaWqbI6oPYj8VaEc4gUXIkHmQRZd6Z0oCVJLyVt3qeNjYxBcTO5UIpre51N34fXc64cZP1QCL0xLFnxq7MtQvaV~or6seJPS5EigggzjrJQ-yz~Xyvsv5EO4XF7W2MO9Oy8wysGNUjXO9Y~-nvyoqkTRo5A2nXv5DOy~vY8Ub1b~PdZn40H9RtJXuT3v4EYbpM~Ypyt2d-1yV7r8goYAtkHpFsU6vUwbckKW~w__",
  total: {
    label: "Total Ebooks",
    count: "Over 100 ebooks",
  },
  averageAuthorExpertise:
    "Ebooks are authored by renowned experts with an average of 15 years of experience",
};

const resource2 = {
  title: "Whitepapers",
  description:
    "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
  logo: "/icons/whitepapers.svg",
  downloadUrl: "#",
  downloadTitle: "Download Whitepapers Now",
  downloadCounts: "10k",
  users: people2,
  topicTitle: "Topics Coverage",
  topicDescription:
    "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
  bannerSrc:
    "https://s3-alpha-sig.figma.com/img/d109/d58c/28fd0c916d156bc651a8f58d8a9b18f2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qh86na7~CAXP99GcAgo3z8o7VDlHPyf2LDattxOp1glQUVqgSIajxWVGA8mLRaZdt04isH7ywarKHpTradBbyI68WEHm1fycctE3NwpADjNmPScVE2TYCSNTvV1jdn9dzg1efmzoyEIGf7iWnTvRQyBwVyL~CddpRcit4xABmcQeTtfTbdct7M~1-hxodXdks~iDlQjQ6M7PZNksIopAzJ2KKxXMt0uv2h3Y93Zlx8wCqiOd1lIJgc2hs3ofMg573YDe82k1FbpQ3dWLqP1r--1I3HcDXQ8aETNMekYorpXatUmbu7uyBPAk8Tl73imF0lhEG3hToi0~vHiYt6-j0Q__",
  total: {
    label: "Total Whitepapers",
    count: "Over 50 whitepapers",
  },
  averageAuthorExpertise:
    "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
};

const reviews1 = [
  {
    id: 1,
    user: {
      name: "Sarah Thompson",
      location: "San Francisco, USA",
      image:
        "https://s3-alpha-sig.figma.com/img/b3c0/b963/52883ea7c646c549928b4b7fa7113217?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b5Ivp8QuzrBaCJiJg1wV-ELYytIwPzvMXPvMeIvPxqQjzYWAU2Hx8PNFzLKsJwHatFCGa5Hk9hr1p-ISEs-S0HavzANyCdlB~leUj6iIdLTnqpHM0X-n1zhFSBharj-~SXnpTS7cEgrqt~42oJLWfqGp8UDGzJMxB2-5eD6w~Z1eNAdOA5qlvXHJuZ~RphUdtL7qSWlWHqsVSprvgrvs-wO6FjLvq~gYoj5K3A2fkskcWQKNGIuSaTlCyXHGHJzDhbQKjN3OPx357O2nY345V0s9Jm1woieBWPz-sYDY98yu-nsV0Ot070~duY6IoKRXFrGwEJqcaGnZSz8nk8XLGw__",
    },
    message:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    id: 2,
    user: {
      name: "Raj Patel",
      location: "Mumbai, India",
      image:
        "https://s3-alpha-sig.figma.com/img/d524/bc1f/cb0204cf83d513ef63f108dddbce3610?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im-ZC8yu1pHsK13qgduuZr4uIMDBOyhd4LEsfO6Gru9eFeRCaX8MxDL46rV9uDsSvj2UNhES9XNXlCJW8~w8SEwt-pWvBfpm6CMy23OIRmmYN8t07HAVEWqUWL0Qz-skm4po-kIUZS0YBuNzcEGv0hA3V7YvFBp9b3Qrmx3xw2OsFU5Yn-x5rCav9y7UVU2pjMn0cWAWUyaqyiZHaBHxr2-A51OqmhNhz-YjeQtzWc5at6VfcwsbhSo7vu9D8y0LQPBAyc1YoryFadJucelPis~r9l0OU14RiHzaR5Bov08dAI0uLCmVAcBiTmtSkHLgPEHi5LaD1qBL4h6WJyH5AA__",
    },
    message:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    id: 3,
    user: {
      name: "Emily Adams",
      location: "London, UK",
      image:
        "https://s3-alpha-sig.figma.com/img/c2a0/5c49/6dafab28f7d885e1bc645af3d1aa73ec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgXcVur6zlq7Gsr7qA-ofcFIFaOGqfcoUHlyEac-nsCqO-HgJzuZ9lL9m4U5vwh5AGLIS71~KhGKJFZqymRfacSohFQQdZn22iHX7L0Ow0rYAJEU46QpmE~h-6zB8DQAjMYqQ~B0ZYGUWsseM15BEukj1sZv~4gUtN~dphAtcnPI7v3hGtEghTkZ30ogYEhnC4P0EGBRgwE33Bgmip0x8Kq-gWVQs6-7IrQHBi7aX4N3ar3QrMDoOY61k6cUqqlJR8oUjg51fR7zYwwNlPFo-BFfkdnytYP1W3CYywx4M7ArS8mwH~NemGx-myX3LLVFO1Py9RQjooFM~klLFoOvdw__",
    },
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
];
const reviews2 = [
  {
    id: 4,
    user: {
      name: "Emily Adams",
      location: "London, UK",
      image:
        "https://s3-alpha-sig.figma.com/img/c2a0/5c49/6dafab28f7d885e1bc645af3d1aa73ec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgXcVur6zlq7Gsr7qA-ofcFIFaOGqfcoUHlyEac-nsCqO-HgJzuZ9lL9m4U5vwh5AGLIS71~KhGKJFZqymRfacSohFQQdZn22iHX7L0Ow0rYAJEU46QpmE~h-6zB8DQAjMYqQ~B0ZYGUWsseM15BEukj1sZv~4gUtN~dphAtcnPI7v3hGtEghTkZ30ogYEhnC4P0EGBRgwE33Bgmip0x8Kq-gWVQs6-7IrQHBi7aX4N3ar3QrMDoOY61k6cUqqlJR8oUjg51fR7zYwwNlPFo-BFfkdnytYP1W3CYywx4M7ArS8mwH~NemGx-myX3LLVFO1Py9RQjooFM~klLFoOvdw__",
    },
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    id: 5,
    user: {
      name: "Emily Adams",
      location: "London, UK",
      image:
        "https://s3-alpha-sig.figma.com/img/c2a0/5c49/6dafab28f7d885e1bc645af3d1aa73ec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgXcVur6zlq7Gsr7qA-ofcFIFaOGqfcoUHlyEac-nsCqO-HgJzuZ9lL9m4U5vwh5AGLIS71~KhGKJFZqymRfacSohFQQdZn22iHX7L0Ow0rYAJEU46QpmE~h-6zB8DQAjMYqQ~B0ZYGUWsseM15BEukj1sZv~4gUtN~dphAtcnPI7v3hGtEghTkZ30ogYEhnC4P0EGBRgwE33Bgmip0x8Kq-gWVQs6-7IrQHBi7aX4N3ar3QrMDoOY61k6cUqqlJR8oUjg51fR7zYwwNlPFo-BFfkdnytYP1W3CYywx4M7ArS8mwH~NemGx-myX3LLVFO1Py9RQjooFM~klLFoOvdw__",
    },
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    id: 6,
    user: {
      name: "Emily Adams",
      location: "London, UK",
      image:
        "https://s3-alpha-sig.figma.com/img/c2a0/5c49/6dafab28f7d885e1bc645af3d1aa73ec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgXcVur6zlq7Gsr7qA-ofcFIFaOGqfcoUHlyEac-nsCqO-HgJzuZ9lL9m4U5vwh5AGLIS71~KhGKJFZqymRfacSohFQQdZn22iHX7L0Ow0rYAJEU46QpmE~h-6zB8DQAjMYqQ~B0ZYGUWsseM15BEukj1sZv~4gUtN~dphAtcnPI7v3hGtEghTkZ30ogYEhnC4P0EGBRgwE33Bgmip0x8Kq-gWVQs6-7IrQHBi7aX4N3ar3QrMDoOY61k6cUqqlJR8oUjg51fR7zYwwNlPFo-BFfkdnytYP1W3CYywx4M7ArS8mwH~NemGx-myX3LLVFO1Py9RQjooFM~klLFoOvdw__",
    },
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
];

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto mt-[var(--header-height)]">
      <section id="home" className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3">
            {/* left info div */}
            <div className="container container-left border-b-2 border-b-dark_15 ">
              <div className="pt-10 md:pt-10 2xl:pt-[150px] pb-10 2xl:pb-[100px] pr-5 xl:pr-20">
                <Typography
                  variant="h5"
                  className="text-dark_40 mb-5 2xl:mb-[30px]"
                >
                  Your Journey to Tomorrow Begins Here
                </Typography>
                <Typography
                  variant="heading70"
                  className="text-white mb-3 2xl:mb-5"
                >
                  Explore the Frontiers of Artificial Intelligence
                </Typography>
                <Typography variant="body-1" className="text-grey_50">
                  Welcome to the epicenter of AI innovation. FutureTech AI News
                  is your passport to a world where machines think, learn, and
                  reshape the future. Join us on this visionary expedition into
                  the heart of AI.
                </Typography>
              </div>
            </div>

            {/* 3 columns div */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="container container-left">
                <ZoomIn>
                  <div className="py-5 2xl:py-[50px] border-r-2 border-dark_15">
                    <Typography variant="h2">
                      300 <span className="text-yellow">+</span>{" "}
                    </Typography>
                    <Typography variant="body-1" className="text-grey_50">
                      Resources available
                    </Typography>
                  </div>
                </ZoomIn>
              </div>

              <ZoomIn>
                <div className="py-5 2xl:py-[50px] border-r-2 border-dark_15 ps-5 2xl:ps-5 lg:ps-[50px]">
                  <Typography variant="h2">
                    12K <span className="text-yellow">+</span>{" "}
                  </Typography>
                  <Typography variant="body-1" className="text-grey_50">
                    Total Downloads
                  </Typography>
                </div>
              </ZoomIn>
              <ZoomIn>
                <div className="py-5 2xl:py-[50px] ps-5 2xl:ps-[50px]">
                  <Typography variant="h2">
                    10 <span className="text-yellow">+</span>{" "}
                  </Typography>
                  <Typography variant="body-1" className="text-grey_50">
                    Active Users
                  </Typography>
                </div>
              </ZoomIn>
            </div>
          </div>
          {/* right bg div */}
          <div className="relative border-l-2 border-dark_15 w-full lg:w-1/3 ">
            <div className="container container-right h-full">
              <div
                className="ps-5 xl:ps-20 space-y-5 2xl:space-y-[30px] py-20 h-full flex flex-col items-start justify-end bg-center object-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/icons/abstract.svg')",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="border-2 inline-block bg-dark_10 flex-shrink-0 p-3 2xl:p-5 rounded-full border-dark_15 relative">
                  <div className="flex items-start">
                    {peoples.map((people, index) => (
                      <div
                        key={people.id}
                        className={`relative ${index > 0 ? "-ml-3" : ""}`} // Apply left margin for overlap
                      >
                        <Image
                          src={people.image}
                          width={60}
                          height={60}
                          alt={`people profile ${people.image}`}
                          className="aspect-[60/60] bg-dark_15 border-2 border-dark_40 rounded-full max-w-[60px] w-full h-full object-cover bg-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Typography variant="h4">Explore 1000+ resources</Typography>
                  <Typography variant="body-2" className="text-grey_60">
                    Over 1,000 articles on emerging tech trends and
                    breakthroughs.
                  </Typography>
                </div>
                <Button variant="primary" showIcon>
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 columns grid */}

      <section className="border-y-2 border-dark_15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="container container-left border-r-2 border-dark_15">
            <div className="pr-5 lg:pr-20 py-5 2xl:py-[50px] ">
              <Image
                src={"/icons/latest-news.svg"}
                width={50}
                height={50}
                className="aspect-[50/50] mb-[30px] w-full h-full max-w-[50px] bg-center object-contain"
                alt="latest news"
              />
              <div className="flex justify-between mb-5 2xl:mb-[30px] gap-5 items-center">
                <div>
                  <Typography variant="title" className="">
                    Latest News Updates
                  </Typography>
                  <Typography variant="body-1" className="text-grey_50">
                    Stay Current
                  </Typography>
                </div>
                <Button variant="secondary" showIcon></Button>
              </div>
              <Typography
                variant="title"
                className="text-grey_50 tracking-tight"
              >
                Over 1,000 articles published monthly
              </Typography>
            </div>
          </div>
          <div className="py-5 xl:py-[50px] px-5 2xl:px-20 border-y-2 lg:border-y-0 border-dark_15">
            <Image
              src={"/icons/expert.svg"}
              width={50}
              height={50}
              className="aspect-[50/50] mb-[30px] w-full h-full max-w-[50px] bg-center object-contain"
              alt="latest news"
            />
            <div className="flex justify-between mb-5 2xl:mb-[30px] gap-5 items-center">
              <div>
                <Typography variant="title" className="">
                  Expert Contributors
                </Typography>
                <Typography variant="body-1" className="text-grey_50">
                  Trusted Insights
                </Typography>
              </div>
              <Button variant="secondary" showIcon></Button>
            </div>
            <Typography variant="title" className="text-grey_50">
              50+ renowned AI experts on our team
            </Typography>
          </div>
          <div className="container container-right border-l-2 border-dark_15 ">
            <div className="py-5 2xl:py-[50px] ps-5 xl:ps-20">
              <Image
                src={"/icons/global-readership.svg"}
                width={50}
                height={50}
                className="aspect-[50/50] mb-[30px] w-full h-full max-w-[50px] bg-center object-contain"
                alt="latest news"
              />
              <div className="flex justify-between mb-5 2xl:mb-[30px] gap-5 items-center">
                <div>
                  <Typography variant="title" className="">
                    Global Readership
                  </Typography>
                  <Typography variant="body-1" className="text-grey_50">
                    Worldwide Impact
                  </Typography>
                </div>
                <Button variant="secondary" showIcon></Button>
              </div>
              <Typography variant="title" className="text-grey_50">
                2 million monthly readers
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* section divider info */}
      <SectionDivider
        badgeText="Unlock the Power of"
        heading="FutureTech Features"
        buttonText=""
        buttonHref="#"
      />

      {/* two col and 4 grid items */}
      <ArticleSection
        title="Future Technology Blog"
        description="Stay informed with our blog section dedicated to future technology."
        imageSrc="/icons/future-technology.svg"
        articles={futureTechnologyArticles}
      />

      <ArticleSection
        title="Research Insights Blogs"
        description="Dive deep into future technology concepts with our research section."
        imageSrc="/icons/research-insights.svg"
        articles={researchInsightsArticles}
      />

      <SectionDivider
        badgeText="A Knowledge Treasure Trove"
        heading="Explore FutureTech's In-Depth Blog Posts"
        buttonText="View All Blogs"
        buttonHref="#"
      />

      <BlogTab data={blogs} />

      <SectionDivider
        badgeText="Your Gateway to In-Depth Information"
        heading="Unlock Valuable Knowledge with FutureTech's Resources"
        buttonText="View All Resources"
        buttonHref="#"
      />

      <ResourceSection data={resource1} />

      <ResourceSection data={resource2} />

      <SectionDivider
        badgeText="What Our Readers Say"
        heading="Real Words from Real Readers"
        buttonText="View All Testimonials"
        buttonHref="#"
      />
      <section className="relative border-b-2 border-dark_15">
        <Container variant="container-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reviews1.map((review, index) => (
              <div
                key={index}
                className={`relative lg:border-r-2 border-dark_15 
              ${index % 3 === 0 ? "lg:border-l-0" : ""} 
              ${index % 3 === 2 ? "lg:border-r-0" : ""}`}
              >
                <ReviewCard
                  key={review.id}
                  data={review}
                  className={` 
              ${index % 3 === 0 ? "pr-5 xl:pr-[50px]" : "px-5 xl:px-[50px]"} 
              ${index % 3 === 2 ? "ps-5 xl:ps-[50px]" : "px-5 xl:px-[50px]"}
              `}
                />
              </div>
            ))}
          </div>
        </Container>
        <div className="absolute inset-0 bg-grid-pattern z-0"></div>
      </section>
      <section className="relative border-b-2 border-dark_15">
        <Container variant="container-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reviews2.map((review, index) => (
              <div
                key={index}
                className={`relative lg:border-r-2 border-dark_15 
              ${index % 3 === 0 ? "lg:border-l-0" : ""} 
              ${index % 3 === 2 ? "lg:border-r-0" : ""}`}
              >
                <ReviewCard
                  key={review.id}
                  data={review}
                  className={` 
              ${index % 3 === 0 ? "pr-5 xl:pr-[50px]" : "px-5 xl:px-[50px]"} 
              ${index % 3 === 2 ? "ps-5 xl:ps-[50px]" : "px-5 xl:px-[50px]"}
              `}
                />
              </div>
            ))}
          </div>
        </Container>
        <div className="absolute inset-0 bg-grid-pattern z-0"></div>
      </section>
      <section className="bg-dark_10 border-y-2 border-dark_15">
        <Container variant="container-md">
          <div className="py-[60px] 2xl:py-[120px] ">
            <div className="mb-10 2xl:mb-[100px] flex flex-col lg:flex-row gap-10 2xl:gap-20 justify-between items-start lg:items-center">
              <div>
                <ZoomIn>
                  <Image
                    src={"/icons/learn-connect.svg"}
                    width={150}
                    height={150}
                    className="aspect-[150/150] max-w-[100px] 2xl:max-w-[150px] w-full h-full object-cover bg-center"
                    alt="learn connect"
                  />
                </ZoomIn>
              </div>
              <SlideUp>
                <div>
                  <div className="inline-block bg-dark_20 p-[10px] rounded-[4px] mb-4">
                    <Typography variant="title">
                      Learn, Connect, and Innovate
                    </Typography>
                  </div>
                  <Typography variant="h1" className="mt-8 mb-[30px]">
                    Be Part of the Future Tech Revolution
                  </Typography>
                  <Typography variant="body-1" className="text-grey_50">
                    Immerse yourself in the world of future technology. Explore
                    our comprehensive resources, connect with fellow tech
                    enthusiasts, and drive innovation in the industry. Join a
                    dynamic community of forward-thinkers.
                  </Typography>
                </div>
              </SlideUp>
            </div>
            <div className="bg-dark_08 gap-5 rounded-[12px] p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[12px] border border-dark_15 bg-dark_10 p-5 space-y-5 2xl:p-10">
                <div className="flex justify-between">
                  <Typography
                    variant="title"
                    className="flex items-center justify-between"
                  >
                    Resource Access
                  </Typography>
                  <Button href="#" variant="secondary" showIcon />
                </div>
                <Typography variant="body-1">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </Typography>
              </div>
              <div className="rounded-[12px] border border-dark_15 bg-dark_10 p-5 space-y-5 2xl:p-10">
                <div className="flex justify-between">
                  <Typography
                    variant="title"
                    className="flex items-center justify-between"
                  >
                    Community Forum
                  </Typography>
                  <Button href="#" variant="secondary" showIcon />
                </div>
                <Typography variant="body-1">
                  Join our active community forum to discuss industry trends,
                  share insights, and collaborate with peers.
                </Typography>
              </div>
              <div className="rounded-[12px] border border-dark_15 bg-dark_10 p-5 space-y-5 2xl:p-10">
                <div className="flex justify-between">
                  <Typography
                    variant="title"
                    className="flex items-center justify-between"
                  >
                    Tech Events
                  </Typography>
                  <Button href="#" variant="secondary" showIcon />
                </div>
                <Typography variant="body-1">
                  Stay updated on upcoming tech events, webinars, and
                  conferences to enhance your knowledge.{" "}
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
