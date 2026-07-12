// News & Announcements data
// To add a new item, prepend an object to the NEWS array (newest first).
// All fields except date, headline, and blurb are optional.
// Optional image attribution (e.g., for CC-BY images):
//   credit:     "Photo: Jane Doe (CC BY 4.0)"        // shows as a tiny overlay on the image
//   creditLink: "https://source-or-license-url"      // makes the credit clickable
// Items are listed newest-first (chronological). `date` is a human display string.
const NEWS = [
  {
    date: "July 2026",
    headline: "FWRI names our Wilson's snipe study its most innovative publication of the year",
    blurb: "The Fish and Wildlife Research Institute recognized our Ornithological Applications paper — which used stable isotopes to trace the migratory mixing of Wilson's snipe across wintering grounds — as its most innovative scientific publication of the year.",
    link: "https://doi.org/10.1093/ornithapp/duae064",
    linkText: "Read the paper",
    image: "images/wilsons-snipe-wood.jpg",
    credit: "Photo: Stanley Wood (CC BY-NC)"
  },
  {
    date: "March 24, 2026",
    headline: "Highly and casually active citizen scientists contribute equally valuable data",
    blurb: "",
    link: "https://www.floridamuseum.ufl.edu/science/highly-and-casually-active-citizen-scientists-contribute-equally-valuable-data/",
    linkText: "Read the article in FLMNH Research news",
    image: "images/lichen-golden-eye.jpg",
    credit: "Photo: Giff Beaton (CC BY-NC)"
  },
  {
    date: "March 8, 2026",
    headline: "Bats magazine covers our wind-energy migration research",
    blurb: "The new issue of BCI's Bats magazine features our Ecology Letters study on how a bat's migratory strategy shapes its risk at wind-energy facilities.",
    link: "https://digital.batcon.org/issue/volume-45-issue-1/",
    linkText: "Read the issue",
    image: "images/bats-magazine-2026-1.jpg"
  },
  {
    date: "January 29, 2026",
    headline: "iNaturalist users' distinct sampling habits shape biodiversity data",
    blurb: "Different users favor different times and places to record wildlife, a pattern that ripples into biodiversity datasets and into how community-science projects should be planned.",
    link: "https://doi.org/10.5334/cstp.868",
    linkText: "Read the paper",
    image: "images/thady_panelC.png"
  },
  {
    date: "November 26, 2025",
    headline: "The Seminole bat migration mystery, in Bat Conservation International's magazine",
    blurb: "BCI digs into our finding that Seminole bats head north, not south, in autumn, a range shift we traced with stable isotopes.",
    link: "https://www.batcon.org/seminole-bat-mystery/",
    linkText: "Read the story",
    image: "images/Seminole-Bat-horizontal-by-Michael-Durham-Minden-Pictures.jpg",
    credit: "Michael Durham/Minden Pictures"
  },
  {
    date: "September 9, 2025",
    headline: "Migratory strategy drives bat fatalities at wind energy facilities",
    blurb: "How a bat migrates, not just where it lives, shapes its risk at wind-energy facilities across at-risk North American species.",
    link: "https://doi.org/10.1111/ele.70202",
    linkText: "Read the paper",
    image: "images/ecollet-f1.jpg"
  },
  {
    date: "June 2025",
    headline: "Rosy-finch migration crosses state lines, complicating conservation",
    blurb: "Stable-isotope tracing shows rosy-finches mix across state boundaries between seasons, so safeguarding them will take coordination among states.",
    link: "https://doi.org/10.5751/ACE-02798-200106",
    linkText: "Read the paper",
    image: "images/rosy-finch-spencer.jpg",
    credit: "Photo: Bridget Spencer (CC BY-NC)"
  },
  {
    date: "May 7, 2025",
    headline: "Bat predation drives the evolution of elaborate Actias moth tails",
    blurb: "Mapping bat-predator richness across the globe shows that predation pressure, more than environment, favors the long hindwing tails moon moths use to misdirect attacks.",
    link: "https://doi.org/10.1098/rspb.2024.2824",
    linkText: "Read the paper",
    image: "images/rspb.2024.2824.f002.png"
  },
  {
    date: "February 2025",
    headline: "An assemblage-level approach to the biodiversity crisis",
    blurb: "Phys.org covers our Nature Reviews Biodiversity argument for protecting whole communities of species, not just one at a time.",
    link: "https://phys.org/news/2025-02-assemblage-approach-biodiversity-crisis.html",
    linkText: "Read the article",
    image: "images/assemblage-approaches.jpg"
  },
  {
    date: "November 2024",
    headline: "Limelight Rainforest wins the $5M XPRIZE Rainforest grand prize",
    blurb: "The team I led bat bioacoustics and bioinformatics for won XPRIZE's five-year global competition to advance rainforest biodiversity technology.",
    link: "https://www.xprize.org/news/xprize-rainforest-names-limelight-rainforest-winner-of-biodiversity-tech-competition",
    linkText: "Read the announcement",
    image: "images/limelight-xprize-2024.jpg"
  }
];
