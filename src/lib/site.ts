export const site = {
  legalName: "Carbon Edge Building Services Limited",
  brandName: "Carbon Edge Building Services",
  shortName: "Carbon Edge",
  companyNumber: "17292722",
  incorporated: "21 June 2026",
  tagline: "Shaping Low Carbon London, one building at a time.",
  location: "London",
  registeredOffice: {
    line1: "71–75 Shelton Street",
    line2: "Covent Garden",
    city: "London",
    postcode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  founder: {
    name: "Ashlee Rising",
    role: "Founder & Director",
    experience: "Over 22 years of building-services industry experience.",
    linkedin: "https://uk.linkedin.com/in/lord-ashlee-r-81127b3b",
  },
  companyLinkedin:
    "https://www.linkedin.com/company/carbon-edge-building-services/",
  companiesHouse:
    "https://find-and-update.company-information.service.gov.uk/company/17292722",
  preview: "Design concept. Not an authorised company website.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Capabilities" },
  { href: "/sectors", label: "Sectors" },
  { href: "/approach", label: "Our Approach" },
  { href: "/field-work", label: "Field Activity" },
  { href: "/about", label: "About" },
] as const;

export const cta = {
  href: "/contact",
  label: "Discuss a Project",
} as const;

export const expertiseStrip = [
  "MEP Retrofit",
  "Decarbonisation",
  "Plant Replacement",
  "Energy Efficiency",
  "Building Modernisation",
] as const;

export const homeServices = [
  {
    index: "01",
    title: "MEP Decarbonisation & Retrofit",
    summary:
      "Practical pathways to modernise existing mechanical and electrical systems without discarding the building.",
    href: "/services#mep-decarbonisation",
  },
  {
    index: "02",
    title: "Mechanical Plant Replacement",
    summary:
      "Boiler and major plant upgrades planned around ageing plant rooms, access and operational continuity.",
    href: "/services#plant-replacement",
  },
  {
    index: "03",
    title: "Low-Carbon Heating & Cooling",
    summary:
      "Heat-pump and electrification options assessed against the building, not applied as a template.",
    href: "/services#low-carbon",
  },
  {
    index: "04",
    title: "Building Management Systems",
    summary:
      "Controls modernisation that makes plant visible, controllable and easier to run.",
    href: "/services#bms",
  },
  {
    index: "05",
    title: "Lifecycle & Energy Analysis",
    summary:
      "Condition review, retrofit feasibility and capital planning for long-term plant strategy.",
    href: "/services#lifecycle",
  },
  {
    index: "06",
    title: "Heritage & Complex Commercial Retrofit",
    summary:
      "Engineering that respects fabric, limited plant space and buildings that stay in use.",
    href: "/services#heritage",
  },
] as const;

export const services = [
  {
    id: "mep-decarbonisation",
    index: "01",
    title: "MEP decarbonisation & retrofit",
    kicker: "Existing buildings first",
    intro:
      "Most of London’s carbon sits in buildings that already exist. Carbon Edge focuses on the mechanical and electrical systems that keep those buildings working — and on the practical steps required to bring them forward.",
    body: "Decarbonisation in occupied commercial property is rarely a single replacement. It is a sequence of assessments, options and phased works that have to sit inside architectural, operational and commercial constraints.",
    applications: [
      "Existing building assessments",
      "Decarbonisation planning",
      "Retrofit options appraisal",
      "MEP refurbishment",
      "Building-services modernisation",
      "Operational energy considerations",
      "Phased retrofit planning",
    ],
    capabilities: [
      "Survey and review of existing mechanical and electrical infrastructure",
      "Identification of plant at or beyond useful life",
      "Coordination of retrofit options with building use and access",
      "Support for owners and consultants preparing a deliverable sequence of works",
    ],
    benefits: [
      "A clearer picture of what can be improved now, and what should wait",
      "Retrofit thinking that respects heritage fabric and day-to-day operations",
      "Technical language that asset managers and contractors can both use",
    ],
  },
  {
    id: "plant-replacement",
    index: "02",
    title: "Mechanical plant replacement",
    kicker: "Ageing plant, live buildings",
    intro:
      "Heating plant that has been patched for a decade is a familiar London story. Replacement is not only a product decision; it is a plant-room, programme and continuity problem.",
    body: "Carbon Edge supports major mechanical plant upgrades where equipment is reaching the end of its useful life, plant rooms need modification, and heating and cooling systems have to be coordinated rather than swapped in isolation.",
    applications: [
      "Heating plant replacement",
      "Ageing boiler replacement options",
      "Major mechanical plant upgrades",
      "Plant room modifications",
      "Mechanical system modernisation",
      "Heating and cooling system coordination",
    ],
    capabilities: [
      "Strip-out and replacement sequencing in constrained plant rooms",
      "Ventilation and access improvements where plant rooms have been neglected",
      "Coordination with existing distribution, flues, electrics and controls",
      "Tender and proposal support for plant modernisation schemes",
    ],
    benefits: [
      "Plant that can actually be maintained, not just installed",
      "Fewer surprises once the old equipment is opened up",
      "A replacement strategy that can be phased around occupation",
    ],
  },
  {
    id: "low-carbon",
    index: "03",
    title: "Low-carbon heating & cooling",
    kicker: "Where electrification is viable",
    intro:
      "Air-source heat pumps and other low-carbon plant can transform building performance. They are not appropriate for every building, every load or every plant room.",
    body: "The useful question is not whether heat pumps are the future. It is whether a given building is ready — electrically, spatially, acoustically and hydraulically — and what transitional plant is required if it is not.",
    applications: [
      "Air-source heat pump integration",
      "Heating and cooling system transition",
      "Low-carbon plant options",
      "Building readiness assessments",
      "Existing infrastructure compatibility",
      "Electrification planning",
    ],
    capabilities: [
      "Review of existing heating and cooling loads and distribution",
      "Plant-space, structural and electrical constraint mapping",
      "Optioneering between like-for-like plant, hybrid arrangements and fuller electrification",
      "Honest advice where a building is not yet ready for a heat-pump-led solution",
    ],
    benefits: [
      "Decarbonisation options grounded in the building, not a catalogue",
      "Fewer dead-end designs that fail at plant-room or power capacity",
      "A transition plan that can sit alongside capital cycles",
    ],
    note: "Heat pumps are one option. Suitability depends on the building.",
  },
  {
    id: "bms",
    index: "04",
    title: "Building management systems",
    kicker: "Plant you can actually run",
    intro:
      "Efficient plant without a coherent control strategy still wastes energy. Many London buildings are running ageing BMS, partial upgrades or almost no visibility of what the plant is doing.",
    body: "Controls modernisation is often the difference between new equipment that performs and new equipment that hunts, short-cycles or is overridden on day one.",
    applications: [
      "BMS upgrades",
      "Controls modernisation",
      "Plant monitoring integration",
      "Operational efficiency improvements",
      "System control strategy",
      "Building performance monitoring",
    ],
    capabilities: [
      "Review of existing controls architecture and field devices",
      "Integration of replacement plant into a usable operating strategy",
      "Monitoring that supports facilities teams rather than a shelf of unused graphics",
      "Coordination with mechanical replacement so controls are not an afterthought",
    ],
    benefits: [
      "Plant that can be understood by the people who run it",
      "Better conditions with fewer ad-hoc overrides",
      "A foundation for later energy and lifecycle reporting",
    ],
  },
  {
    id: "lifecycle",
    index: "05",
    title: "Lifecycle & energy analysis",
    kicker: "Before capital is committed",
    intro:
      "Asset managers need to know which plant is a liability, which upgrades are feasible, and how investment should be sequenced across a building or a portfolio.",
    body: "Lifecycle energy assessment is a decision tool. It is not a promise of a particular saving. Carbon Edge supports condition review, opportunity identification and capital planning without dressing estimates up as guaranteed outcomes.",
    applications: [
      "Lifecycle energy assessment",
      "Existing plant condition review",
      "Energy improvement opportunities",
      "Retrofit feasibility",
      "Capital planning support",
      "Long-term plant replacement strategy",
    ],
    capabilities: [
      "Survey-led review of landlord and central plant",
      "Reporting that separates observed condition from proposed options",
      "Support for owners preparing investment cases and consultant briefs",
      "Portfolio thinking where several assets share similar plant risk",
    ],
    benefits: [
      "Clearer investment sequencing",
      "Fewer replacement projects started without a true picture of the existing system",
      "A written basis for discussion with consultants, contractors and boards",
    ],
    note: "Savings are not stated here. They belong to a defined survey.",
  },
  {
    id: "validation",
    index: "06",
    title: "Validation & technical investigation",
    kicker: "Know the system before you change it",
    intro:
      "Opening a thirty-year-old heating system without water quality, condition and diagnostic work is how replacement projects inherit someone else’s problems.",
    body: "Pre-retrofit investigation is part of responsible delivery: plant condition, system diagnostics, water sampling coordination and a clear account of what the existing infrastructure will allow.",
    applications: [
      "Plant condition assessments",
      "System diagnostics",
      "Water sampling coordination",
      "Technical surveys",
      "Existing infrastructure review",
      "Pre-retrofit investigations",
    ],
    capabilities: [
      "Site survey of plant rooms, distribution and access",
      "Coordination of water sampling and validation ahead of major works",
      "Identification of hidden constraints before tenders are priced",
      "Technical notes that consultants and clients can interrogate",
    ],
    benefits: [
      "Fewer late discoveries once strip-out begins",
      "A cleaner starting point for new plant",
      "Better-informed tenders and programmes",
    ],
  },
  {
    id: "heritage",
    index: "07",
    title: "Heritage & complex commercial retrofit",
    kicker: "Character retained, systems renewed",
    intro:
      "London’s cultural venues, listed fabric and dense commercial cores do not offer empty plant rooms and weekend shutdowns. The engineering has to work around the building.",
    body: "Heritage and complex commercial retrofit is a logistics and coordination discipline as much as a plant one: protected features, limited risers, noisy neighbours, and audiences or tenants who still need the building on Monday.",
    applications: [
      "Working around protected or sensitive architectural features",
      "Access and logistical challenges",
      "Existing-building constraints",
      "Phased upgrades",
      "Coordination with owners and consultants",
      "Maintaining building operations where feasible",
    ],
    capabilities: [
      "Plant strategies that respect fabric and sightlines",
      "Phased replacement designed around performance schedules and occupation",
      "Collaboration with design consultants representing owners and occupiers",
      "Practical method thinking for constrained West End and central London sites",
    ],
    benefits: [
      "Modern services without treating the building as a blank canvas",
      "Delivery thinking that starts from access, not from a typical detail",
      "A contractor who expects complexity rather than being surprised by it",
    ],
  },
  {
    id: "delivery",
    index: "08",
    title: "Project delivery & contractor collaboration",
    kicker: "From tender to handover",
    intro:
      "Carbon Edge is a specialist contractor. The work happens with consultants, main contractors, facilities teams and other trades — not in isolation.",
    body: "Early involvement, clear commercial thinking and coordinated commissioning are how plant replacement stays on the building’s terms. The firm participates in technical tenders, procurement support and delivery planning as a collaborative contractor, not as a substitute design practice.",
    applications: [
      "Technical tender participation",
      "Design-consultant coordination",
      "Procurement support",
      "Programme planning",
      "Contractor collaboration",
      "Commissioning coordination",
      "Project handover planning",
    ],
    capabilities: [
      "Tender submissions for plant replacement and retrofit packages",
      "Working alongside design consultants representing client bodies",
      "Programme logic that accounts for live-building constraints",
      "Handover thinking so facilities teams inherit a system they can run",
    ],
    benefits: [
      "A contractor who can sit in a tender interview and talk about the plant room honestly",
      "Fewer gaps between design intent and installed reality",
      "A delivery partner for the unglamorous work that makes retrofit succeed",
    ],
  },
] as const;

export const sectors = [
  {
    id: "heritage",
    index: "01",
    title: "Heritage & cultural buildings",
    headline: "Theatres, cultural venues and architecturally sensitive properties.",
    image: "/images/haymarket.jpg",
    imageAlt:
      "Theatre Royal Haymarket, a historic London theatre facade. Illustrative of the heritage sector, not a Carbon Edge project.",
    challenges: [
      "Historic infrastructure behind a protected or highly visible facade",
      "Limited plant space and awkward access",
      "Operational continuity around performances and public opening",
      "Sensitive refurbishment that cannot treat the building as a shell",
      "Energy performance expectations that the original services never anticipated",
    ],
    copy: "Cultural buildings are often loved in the auditorium and neglected in the basement. Ageing boilers, temporary cooling and plant that has been patched through another season are common. The engineering task is to modernise services while the building continues to do what it was built to do.",
  },
  {
    id: "commercial",
    index: "02",
    title: "Commercial property & offices",
    headline: "Plant renewal, controls and asset performance across occupied commercial stock.",
    image: "/images/classical-columns.jpg",
    imageAlt:
      "Contemporary commercial office buildings. Illustrative of the office sector, not a Carbon Edge project.",
    challenges: [
      "Building lifecycle planning as plant approaches end of life",
      "Plant renewal in occupied floorplates",
      "Energy efficiency that has to survive real operation",
      "Building controls that facilities teams will actually use",
      "Asset performance reporting to owners and occupiers",
    ],
    copy: "Commercial assets are judged on comfort, cost and increasingly on carbon. Carbon Edge works on the landlord systems that sit behind those scores: heating and cooling plant, distribution and the controls that determine whether replacement equipment performs.",
  },
  {
    id: "hospitality",
    index: "03",
    title: "Hotels & hospitality",
    headline: "Comfort, continuity and plant that can keep a house in service.",
    image: "/images/albert-hall.jpg",
    imageAlt:
      "The Royal Albert Hall, a landmark London cultural building. Illustrative of prestige occupied venues, not a Carbon Edge project.",
    challenges: [
      "Guest comfort that cannot be paused for a plant-room rebuild",
      "Operational constraints around 24-hour occupation",
      "Heating, cooling and domestic hot water running as one problem",
      "Plant modernisation in tight rooftops and basements",
      "Phased upgrades timed around occupancy and works programmes",
    ],
    copy: "Hospitality buildings run hot, quite literally. Plant has to support bedrooms, kitchens, public rooms and back-of-house without a convenient shutdown window. Upgrade work has to be sequenced with the house still open, or with a clearly defined dark period.",
  },
  {
    id: "retail",
    index: "04",
    title: "Retail & shopping centres",
    headline: "Landlord plant that has often been left behind the public-facing investment.",
    image: "/images/mall.jpg",
    imageAlt:
      "A multi-level retail interior. Illustrative of the retail sector, not a Carbon Edge project.",
    challenges: [
      "Ageing landlord plant behind recently refreshed malls",
      "Large building services with long distribution runs",
      "Lifecycle energy reporting for owners and asset managers",
      "High operational demand and limited shutdown windows",
    ],
    copy: "It is not unusual to find public areas that have been invested in, and central plant that has not been touched since the early 1990s. That gap is both a risk and a retrofit opportunity — provided the existing system is properly understood first.",
  },
  {
    id: "residential",
    index: "05",
    title: "Residential estates & mansion blocks",
    headline: "Shared heating systems, resident disruption and plant rooms that have been repaired, not renewed.",
    image: "/images/hero-facade.jpg",
    imageAlt:
      "A classical London street facade. Illustrative of historic residential and mixed-use fabric, not a Carbon Edge project.",
    challenges: [
      "Shared heating systems serving many dwellings",
      "Ageing plant with a long history of patch repair",
      "Resident disruption and communication",
      "Plant room modernisation in basements and lightwells",
      "Heating controls that residents and managers can live with",
    ],
    copy: "Mansion-block plant replacement is as much a resident and consultant exercise as it is a mechanical one. Many of the people paying for the work also live in the building. The engineering has to be robust; the process has to be respectful.",
  },
  {
    id: "portfolios",
    index: "06",
    title: "Property portfolios & asset management",
    headline: "Multi-property thinking for owners who cannot upgrade everything at once.",
    image: "/images/london-houses.jpg",
    imageAlt:
      "London at dusk, looking east along the Thames. Illustrative of the city context, not a Carbon Edge project.",
    challenges: [
      "Multi-property planning across mixed building types",
      "Asset lifecycle and plant-risk visibility",
      "Investment prioritisation",
      "Decarbonisation strategy that can be executed building by building",
      "Retrofit opportunities sequenced against capital cycles",
    ],
    copy: "Portfolios need a way to move from ambition to a defensible order of works. Carbon Edge is set up to help owners and asset managers understand where plant is a near-term liability and where a measured retrofit will do more than a rushed replacement.",
  },
] as const;

export const fieldActivity = [
  {
    id: "west-end-theatre",
    index: "01",
    title: "West End theatre — plant modernisation proposal",
    location: "London theatre district",
    status: "Proposal",
    statusTone: "tender" as const,
    image: "/images/haymarket.jpg",
    imageAlt:
      "Historic West End theatre architecture, used to illustrate the setting. Not a photograph of the surveyed plant or a completed Carbon Edge project.",
    summary:
      "A landmark cultural venue whose public face is world-class, and whose plant room told a more familiar London story: services at the end of their useful life, kept going by repair.",
    points: [
      "Ageing mechanical systems, including four boilers described as surviving on patch-and-repair",
      "Temporary cooling arrangements in place to maintain audience comfort",
      "Water sampling and validation proposed before any new system is introduced",
      "A proposed strip-out and air-source heat pump installation, subject to the building’s constraints",
      "Decarbonisation assessment prepared as part of the proposal",
      "A subsequent tender interview for major plant replacement in the theatre district — treated here as the same engagement, not a second project",
    ],
    caveat:
      "This is a proposal and tender-stage engagement. It is not presented as a completed installation or a contract award.",
  },
  {
    id: "east-london-retail",
    index: "02",
    title: "East London shopping centre — lifecycle assessment",
    location: "East London",
    status: "Survey",
    statusTone: "survey" as const,
    image: "/images/hero-london.jpg",
    imageAlt:
      "Aerial view of London. Illustrative of city context, not the surveyed shopping centre.",
    summary:
      "A major shopping centre whose public-facing areas had seen recent investment, while landlord plant behind the scenes was reported as dating to 1992.",
    points: [
      "Comprehensive site survey of landlord plant",
      "Plant modernisation opportunity identified behind a refreshed public interior",
      "Lifecycle energy report in development to set out upgrade options",
      "Evaluation of future plant strategy rather than a single product swap",
    ],
    caveat:
      "Survey and reporting stage only. No verified energy savings, contract award or completed modernisation is claimed.",
  },
  {
    id: "marylebone-mansion",
    index: "03",
    title: "Marylebone mansion block — plant replacement tender",
    location: "Marylebone",
    status: "Tender",
    statusTone: "tender" as const,
    image: "/images/hero-facade.jpg",
    imageAlt:
      "Classical London street architecture. Illustrative of the mansion-block setting, not a photograph of the plant room or a completed project.",
    summary:
      "A residential mansion block whose heating plant had been patched and repaired for years. The proposed works are a full plant modernisation, not another temporary repair.",
    points: [
      "Approximately 30-year-old heating plant proposed for strip-out and replacement",
      "New energy-efficient major plant, plant-room ventilation improvements and BMS upgrades",
      "Direct collaboration with a design consultant representing clients, many of whom live in the block",
      "A scheme defined by resident responsibility as much as by plant selection",
    ],
    caveat:
      "Tender and proposal stage. No contract award or completed works are claimed.",
  },
  {
    id: "knightsbridge-hotel",
    index: "04",
    title: "Knightsbridge hotel — building systems review",
    location: "Knightsbridge",
    status: "Site visit",
    statusTone: "visit" as const,
    image: "/images/coliseum.jpg",
    imageAlt:
      "Ornate historic London building facade. Illustrative of prestige occupied buildings, not the hotel visited and not a Carbon Edge refurbishment.",
    summary:
      "A site visit to a prestigious Knightsbridge hotel already undergoing a substantial building upgrade, with attention on bringing building systems toward contemporary performance and environmental standards.",
    points: [
      "Existing prestige hotel in a demanding central London setting",
      "Wider building upgrade already underway",
      "Consideration of modern performance and environmental standards for the building systems",
    ],
    caveat:
      "A site visit and industry engagement. Carbon Edge is not presented as the contractor for the full hotel refurbishment.",
  },
] as const;

export const approachSteps = [
  {
    index: "01",
    title: "Assess",
    summary:
      "Understand the existing building, plant, energy profile and the constraints that will decide what is actually possible.",
    detail:
      "Survey, condition review and a clear account of access, occupation, electrical capacity, plant space and fabric sensitivity. The output is a true picture, not a product list.",
  },
  {
    index: "02",
    title: "Plan",
    summary:
      "Identify practical retrofit options, lifecycle considerations and the project requirements that follow from them.",
    detail:
      "Optioneering between repair, replacement, hybrid plant and fuller electrification. Capital, programme and disruption are treated as engineering inputs, not afterthoughts.",
  },
  {
    index: "03",
    title: "Design & coordinate",
    summary:
      "Work with relevant consultants and partners to develop an appropriate delivery approach.",
    detail:
      "Carbon Edge does not replace the design team. The contractor role is to make the proposed works buildable: plant-room reality, procurement logic, interfaces and a sequence the building can tolerate.",
  },
  {
    index: "04",
    title: "Implement",
    summary:
      "Support carefully planned building-services upgrades and system modernisation.",
    detail:
      "Strip-out, plant replacement, ventilation and controls work delivered around live occupation wherever the brief requires it. Method comes before momentum.",
  },
  {
    index: "05",
    title: "Validate",
    summary:
      "Assess performance, commissioning requirements and successful handover.",
    detail:
      "Commissioning coordination, a system the facilities team can run, and a handover that explains what was installed — not a folder that disappears into a drawer.",
  },
] as const;

export const buildingTypes = [
  "Heritage / cultural",
  "Commercial office",
  "Hotel / hospitality",
  "Retail / shopping centre",
  "Residential / mansion block",
  "Portfolio / mixed assets",
  "Other",
] as const;

export const serviceOptions = [
  "MEP Retrofit",
  "Plant Replacement",
  "Low-Carbon Heating",
  "BMS Upgrade",
  "Energy / Lifecycle Assessment",
  "Technical Survey",
  "Other",
] as const;

export const projectStages = [
  "Early Assessment",
  "Planning / Feasibility",
  "Tender Opportunity",
  "Upcoming Works",
  "General Enquiry",
] as const;

export const buyers = [
  "Commercial property owners",
  "Asset managers",
  "Facilities managers",
  "Property developers",
  "Building consultants",
  "Main contractors",
  "Estate managers",
] as const;
