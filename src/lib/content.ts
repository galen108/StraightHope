export interface Article {
  id: string;
  title: string;
  author?: string;
  date: string;
  excerpt: string;
  content: string;
  category: 'Recovery' | 'Service' | 'Steps' | 'Announcements';
  slug: string;
  imageUrl?: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: "A Message from Your Newsletter Chair",
    author: "Galen T.",
    date: "November 2026",
    excerpt: "Taking over as the new MANA Newsletter Subcommittee Chair and introducing the virtual edition of Straight Hope.",
    content: "Hey family!\n\nMy name is Galen T., a grateful recovering addict, with ~13 years clean. My clean date is December 2nd, 2013. This Fellowship saved my life.\n\nWith 18+ years in web engineering, within a 25-year career that began in graphic design and digital publishing, it is my honor and privilege to serve as your MANA Newsletter Subcommittee Chair.\n\nI will continue creating the print version of Straight Hope each month, transfer that content to the MANA WordPress site and lastly, convert the print edition into a fully modern, indexable, and discoverable Next.js (React)-based Virtual Straight Hope. I have, with the authorization of the Service Committee acquired and configured a custom web domain for the virtual edition at https://straighthope.org.\n\nI want to give a genuine and heartfelt thank you to MANA in its entirety, for not only helping me to turn my life around but also granting me multiple chances to serve this community. I look forward to continuing to serve, now in this very exciting capacity.\n\nILS — Galen T.\nWeb: https://straighthope.org\nE-Mail: straighthope@cprna.org",
    category: 'Announcements',
    slug: 'message-from-newsletter-chair',
    imageUrl: '/images/newsletter/nov2026/image5.png',
    featured: true,
  },
  {
    id: 'miracles',
    title: "Living Miracles",
    author: "Montgomery Area",
    date: "November 2026",
    excerpt: "Celebrating clean time anniversaries in our fellowship.",
    content: "11/1 Lindsey S. 14 yrs Virtual Breakfast Club\n11/8 Kim 2 yrs Talking Heads\n11/15 Joanna 22 yrs Talking Heads\n11/15 Kara 2 yrs Talking Heads\n11/21 Elizabeth L. 22 yrs Ladies in Recovery\n11/30 Melanie L. 4 yrs Oasis\n12/4 Galen T. 13 yrs Older Toddlers\n12/6 Maddy M. 6 yrs Today’s Recovery\n12/13 Kimmi R. 4 yrs Today’s Recovery\n12/6 Liam 1 yr Talking Heads\n12/20 Ruben T. 19 yrs Talking Heads\n12/17 Eric C. 13 yrs Stepping Free\n12/17 Rob H. 6 yrs Stepping Free\n2/6 Charlene 26 yrs Speak Easy\n\n♥️🔷️♥️🔷️♥️",
    category: 'Announcements',
    slug: 'living-miracles-nov-2026',
    imageUrl: '/images/newsletter/nov2026/image20.png',
  },
  {
    id: '2',
    title: "Step Eleven: Improving Conscious Contact",
    author: "Montgomery Area",
    date: "November 2026",
    excerpt: "We sought through prayer and meditation to improve our conscious contact with God as we understood Him.",
    content: "“We sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His Will for us and the power to carry that out”\n\nAs I pray and meditate to God of my understanding, I realize how little I truly understand about life. I am just trying the best I can to navigate through the hurdles that come my way. For many years alcohol and drugs seemed like the best course for me. I thought I could heighten my celebrations and drown my sorrows. Today I believe in NA and earnestly working the 12 Steps of recovery are a much better path for me.",
    category: 'Steps',
    slug: 'step-eleven-nov-2026',
    imageUrl: '/images/newsletter/nov2026/image2.jpg',
  },
  {
    id: '3',
    title: "Tradition Eleven: Attraction Rather Than Promotion",
    author: "Montgomery Area",
    date: "November 2026",
    excerpt: "Our public relations policy is based on attraction rather than promotion.",
    content: "“Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.”\n\nPersonal anonymity and avoiding sensational advertising are key points to practicing Tradition 11. The best attraction to recovery is how it works, not who I am or what I have done or not done. NA meetings can now be found all over the world, and meetings are spoken in most every language. The truth is powerful enough; any attempt to exaggerate the truth takes away from this evidence.",
    category: 'Service',
    slug: 'tradition-eleven-nov-2026',
    imageUrl: '/images/newsletter/nov2026/image6.jpg',
  },
  {
    id: 'gsr-orientation',
    title: "GSR Orientation & Resource Drive",
    author: "Montgomery Area",
    date: "November 2026",
    excerpt: "New to service? Get oriented and access resources for your group.",
    content: "Montgomery Area Service PR offers a GSR Orientation before every Area Service meeting. This is a great way to learn how to represent your group effectively and stay connected with the larger fellowship.\n\nWhen: 1st Tuesdays @ 7 PM\nWhere: MASC Zoom ID: 876 1298 6083; Passcode: 749698\n\nOur MASC Google Drive also has information for GSRs and their Groups. It contains everything you need to get started, including policy documents, forms, and orientation materials. Scan the QR code in our print edition to go straight to the GSR & Groups folder!",
    category: 'Service',
    slug: 'gsr-orientation-resources-nov-2026',
    imageUrl: '/images/newsletter/nov2026/image8.jpg',
  },
  {
    id: '5',
    title: "NA-Related Announcements & Events",
    author: "Montgomery Area",
    date: "November 2026",
    excerpt: "Service positions open, local meetings needing support, and upcoming regional events.",
    content: "Montgomery Area Service: THERE ARE SEVERAL SERVICE POSITIONS OPEN! Come to the next ASC & volunteer Tuesday, December 1, 7:30 pm. Open positions are: Vice-Treasurer, H&I Chair, and Meetings Chair, Area Liaisons.\n\nGSR Orientations are held from 7-7:30 PM right before the ASC! Both are on the MASC Zoom ID: 876 1298 6083; P/C: 749698\n\nBéisbol (Spanish Hybrid) needs support, Monday 6 PM, Emory Grove UM Church, 8200 Emory Grove Rd., Gaithersburg, MD, Zoom ID: 831 7185 1799; P/C: 152608\n\nSolo Por Hoy (Spanish Hybrid) needs support, Friday 7 PM, Festival Center, 1640 Columbia Road NW, Washington, DC; Zoom ID: 232 505 167; P/C: 76111\n\n11/26: Montgomery Area Thanksgiving! Thursday, November 26, 10 AM – 6 PM. Christ the Servant Lutheran Church, 9801 Centerway Rd, Montgomery Village, MD 20886\n\n12/12: Regional Service Committee Meeting Hosted by Rock Creek Area! Saturday, December 12, Subcommittees: 10 am – 12 Noon; RSC 1 PM – 5 PM, Meeting ID: 671 727 103; Passcode: 654321 Now HYBRID! Location TBA\n\nHow to Make Area Donations:\nZelle: MONTGOMERY AREA SERVICE COMMITTEE, mascdonation\nCashApp: $MASCdonate\nSend Check by US Mail: MASC, PO Box 8214, Gaithersburg, MD 20898. Make sure to include your Group’s Name!\n\nNeed More Info? email info@cprna.org\nInterested in Carrying the Message? Come to the Public Relations meeting 1st Tuesday of the month @ 6 PM or email na-montgomery@cprna.org\n\nMore NA events can be found at https://www.cprna.org/event/\n\nUpcoming Events Mentioned:\n- NORVANA Thanksgiving Potluck & Game Day\n- CPRCNA 40 Subcommittees\n- East of the River Area Jump Start to Recovery Group New Year's Day Marathon",
    category: 'Announcements',
    slug: 'na-announcements-events-nov-2026',
    imageUrl: '/images/newsletter/nov2026/image19.jpg',
  }
];
