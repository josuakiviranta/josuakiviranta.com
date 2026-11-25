/* PROTOTYPE (2026-11-09): homepage copy in three languages. The Italian is a draft
   translation, not checked by a native speaker. */

export type Lang = "en" | "fi" | "it";
export const LANGS: Lang[] = ["en", "fi", "it"];

/* The offer block shared by the case page and the service pages. `terms`
   empty shows `termsPending` as a placeholder. */
export type OfferCopy = {
  cta: string;
  urgency: string;
  terms: { label: string; value: string }[];
  termsPending?: string;
  callLabel: string;
  emailLabel: string;
  /* A free first step as the main button, phone second (2026-11-12, sales
     page study). The button opens the owner's booking calendar (BOOKING in
     HomepageVariants.tsx, owner 2026-11-12). */
  request?: { label: string };
  /* A line under the prices: no commitment, no party. */
  assurance?: string;
};

export type Copy = {
  role: string;
  places: string;
  /* The footer link to public/ai-code-of-conduct.pdf (owner, 2026-11-25). */
  codeOfConduct: string;
  /* The footer's legal part (owner, 2026-11-25): its label and the link to
     the privacy notice (?page=privacy). */
  legal: string;
  privacyLink: string;
  /* The privacy notice in the short legal style of ylonenconsulting.com
     (owner, 2026-11-25): an opening line, paragraphs led by a bold heading,
     and the responsible party. The English is the owner's; FI and IT are the
     agent's translations. It must stay true to what
     components/VisitCounter.tsx and pages/api/hit.ts record. */
  privacy: { title: string; intro: string; sections: { heading: string; text: string }[]; party: { heading: string; lines: string[] } };
  /* The Eduskuntavaalit 2027 page (/fi/eduskuntavaalit-2027,
     /finnish-elections-2027, /it/elezioni-finlandesi-2027); the Finnish is
     the owner's or approved by the owner (2026-11-25); EN and IT are the
     agent's translations. `headTitle` opens the page's title; `lead` is its
     search description (name and topic in one sentence); `urgency` the caps
     line over the `h1`, `answer` the owner's answer under it; `topic` closes
     the byline under the button. `question`'s counts: the Round of
     2026-11-18, the candidates whose own pages name the theme and how many
     of them each AI left unnamed in its answers to the theme's questions;
     the questions' wording stays unshown (owner, 2026-11-25). `offer` replaces
     the main page's priced steps (owner, 2026-11-25). `link` is the main
     page's line under the election example. */
  elections: {
    headTitle: string;
    lead: string;
    urgency: string;
    title: string;
    answer: string;
    topic: string;
    question: { title: string; theme: string; asked: string; missed: string[] };
    measured: { title: string };
    offer: { lead: string; steps: { title: string; body: string }[]; price: string; extra: string };
    independence: string[];
    link: string;
  };
  problem: string;
  offer: string;
  /* The services; the case page's line names the one with `case` (owner,
     2026-11-11). */
  moreServices: { title: string; body: string; case?: boolean }[];
  clientsHeading: string;
  /* A reference: B3 shows the logo of the client with `logo`; the client
     with `findings` is the MP case (hidden, SHOW_CASE). */
  clients: { name: string; year: string; logo?: { src: string; href: string }; findings?: { label: string; text: string }[] }[];
  backgroundHeading: string;
  /* The nav's one link, to the offer's section (owner, 2026-11-16). */
  navServices: string;
  /* The sales section under the first screen (owner, 2026-11-13; was the
     AI-visibility service page). `request.label` is the booking button's
     label. For anyone, companies too. */
  visibility: Pick<OfferCopy, "request"> & {
    summary: string;
    /* The numbers are in `MEASURED` in HomepageVariants.tsx. */
    measured: {
      own: { /* The live sentence over the squares, "{rank}" = the ink column's place, "{n}" = its mentions per 100 answers (owner, 2026-11-14; per 100 since 2026-11-19). */ live: string; /* The same sentence when "{n}" rounds to 1 (singular). */ liveOne: string; /* From the middle place on, "{n}" = the typical (median) Candidate's mentions per 100 answers (owner, 2026-11-19). */ typical: string; /* Once the slide reaches place 1, "{n}" = place 1's mentions per 100 answers, "{x}" = that over the typical count, both rounded (owner, 2026-11-19). */ first: string; };
      /* The long-tail curve (owner, 2026-11-12): `y` the axis; `most` and
         `here` the two labels on the curve. */
      tail: { y: string; /* Under the axis's two ends (owner, 2026-11-14). */ left: string; right: string; /* Over the flat tail (owner, 2026-11-13). */ most: string; /* At the arrow to the striped head (owner, 2026-11-13). */ here: string };
      /* The election example; `players`: the axis unit under its graph
         (owner, 2026-11-13). */
      study: { title: string; /* The line under the header that ties the curve to the elections (owner, 2026-11-15). */ bridge: string; players: string; /* The box's sentence; owner's wording, 2026-11-14. */ intro: string };
    };
    /* The weekly example, names hidden. The numbers are in `SAMPLE` in
       HomepageVariants.tsx; `questions` match its rows in order. */
    sample: {
      /* `label`: the weekly example's header. */
      label: string;
      basis: string;
      rivals: string[];
      you: string;
      ask: string;
      /* The grey line under `ask`: what a set of questions is (owner, 2026-11-15). */
      legend: string;
      /* Arrow labels on the squares (owner, 2026-11-13: like the study box's arrow): `none` at an unnamed row, `named` under the named row's highest place, `{n}` the place. */
      none: string;
      named: string;
      questions: string[];
      /* The block before the sample that sells the offer: a header and the
         three things Josua does, laid out like the next step's topics
         (owner, 2026-11-14). */
      /* `price`: the step's price under its text (owner, 2026-11-15). */
      weekly: { label: string; lead: string; steps: { title: string; body: string; price?: string }[] };
      /* What comes with the weekly report, under it and before the button
         (owner, 2026-11-17): a caps line over numbered lines, the numbers
         drawn by the page. */
      guide: { lead: string; items: string[] };
    };
    /* The next step before the offer (owner, 2026-11-12): `lead` the
       header, `body` the label over the three topics. */
    next: { lead: string; body: string; steps: { title: string; body: string }[] };
  };
  /* The MP case study page (?page=case), fully anonymous (owner, 2026-11-09):
     no party, region, debate or date finer than the year. The findings come
     from the client entry that has them. A section with `pending` is a
     placeholder until the owner supplies the facts; `text` replaces it. */
  caseStudy: {
    cardLink: string;
    title: string;
    /* One or two lines under the title (owner, 2026-11-11). */
    summary?: string;
    pendingLabel: string;
    /* Each `text` is prose; a blank line ("\n\n") starts a new paragraph. */
    situation: { heading: string; pending: string; text?: string };
    solution: { heading: string; pending?: string; text?: string };
    changed: { heading: string; pending: string; text?: string };
    quote: { heading: string; pending: string };
    cta: string;
    /* Price and length of the offer under the call to action (owner, 2026-11-11). */
    terms: { label: string; value: string }[];
    /* The stronger call to action (owner, 2026-11-11): a line under the question and two buttons. */
    urgency: string;
    callLabel: string;
    emailLabel: string;
  };
  background: string[];
  quote: { text: string; source: string };
  contactHeading: string;
  facts: { label: string; value: string; href?: string }[];
};

const PHONE = { value: "+358 41 524 2441", href: "tel:+358415242441" };
const EMAIL = { value: "josua.kiviranta@gmail.com", href: "mailto:josua.kiviranta@gmail.com" };
const LINKEDIN = { value: "linkedin.com/in/josuakiviranta", href: "https://www.linkedin.com/in/josuakiviranta/" };
const BUSINESS_ID = "3127895-3 · Sassosa Consulting";

export const COPY: Record<Lang, Copy> = {
  en: {
    role: "GEO and branding for AI.",
    places: "Helsinki – Florence",
    codeOfConduct: "AI Code of Conduct",
    legal: "Legal",
    privacyLink: "Privacy",
    privacy: {
      title: "Privacy",
      intro: "This website uses no cookies and stores nothing on your device.",
      sections: [
        { heading: "Hosting", text: "This site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the site, Vercel automatically processes technical data such as your IP address and browser information in server logs for security and delivery purposes. Legal basis: legitimate interest in secure, reliable operation of the site (Art. 6(1)(f) GDPR). This may involve transfer of data to the USA; Vercel is certified under the EU–U.S. Data Privacy Framework and its data processing agreement applies." },
        { heading: "Visitor statistics", text: "We keep anonymous usage statistics, such as pages viewed, approximate location and device type, to understand how the site is used. IP addresses are not stored. The statistics are stored in the EU and deleted after 12 months. Legal basis: legitimate interest (Art. 6(1)(f) GDPR)." },
        { heading: "Contact", text: "If you email or call us, your data is used solely to handle your inquiry (Art. 6(1)(b) GDPR)." },
        { heading: "Your rights", text: "You have the right to access, correct or delete your personal data, to object to its processing, and to lodge a complaint with a supervisory authority." },
      ],
      party: { heading: "Controller", lines: ["Sassosa Consulting (Josua Kiviranta)", "Business ID 3127895-3", "Helsinki – Florence", EMAIL.value] },
    },
    elections: {
      headTitle: "Finnish parliamentary elections 2027: candidate visibility in AI answers",
      lead: "Josua Kiviranta measures how often ChatGPT and Claude name a 2027 Finnish parliamentary election candidate compared with others in their electoral district.",
      urgency: "Election day 18 April 2027 · AI answers change with a delay",
      title: "Does AI name you when a voter asks about the candidates in your electoral district?",
      answer: "Probably rarely, unless you are branded for AI, easy to find or otherwise well known.",
      topic: "Finnish parliamentary elections 2027",
      question: {
        title: "Voters ask AI.",
        theme: "Entrepreneurship is the most common theme among Helsinki candidates: 39 candidates raise it on their own pages.",
        asked: "AI was asked 5 questions on entrepreneurship, each in two different ways.",
        missed: ["Claude left 24 of them unnamed.", "ChatGPT left 29 of them unnamed."],
      },
      measured: { title: "Measured: Helsinki electoral district, November 2026" },
      offer: {
        lead: "Weekly report: how you rise into AI answers before election day.",
        steps: [
          { title: "Situation overview", body: "How often AI names you and your competitors on your own themes." },
          { title: "Instructions for your team", body: "Weekly instructions you can give your helpers: what to publish on your own pages, and where others should write about you on the theme you want to be known for." },
          { title: "Emerging election themes", body: "New themes where no one shows up yet, and chances to get branded for AI as their representative." },
        ],
        price: "€190 / month + VAT",
        extra: "Want me to do it for you? I produce material optimised for AI and the changes to your website at the consultation price of €90 / hour + VAT.",
      },
      independence: ["The same service and prices for candidates of every party.", "I am not a member of any party.", "My clients stay confidential."],
      link: "Finnish parliamentary elections 2027: measurement in your electoral district",
    },
    problem: "Before deciding, people ask AI.",
    offer: "I help you show up in AI answers.",
    moreServices: [
      { title: "Situation overview and decisions", body: "I build a picture of your situation and help you decide what to focus on to reach your goals.", case: true },
      // Held back for now (owner, 2026-11-12):
      // { title: "Run your own site", body: "I teach you to update your site, optimised for AI search, without a webmaster." },
    ],
    clientsHeading: "References",
    clients: [
      { name: "Haka-Wood", year: "2026", logo: { src: "/hakawood-logo.svg", href: "https://www.haka-wood.fi/" } },
      {
        name: "Sitting Finnish MP",
        year: "2026",
        findings: [],
      },
    ],
    backgroundHeading: "Background",
    navServices: "Services",
    visibility: {
      summary: "If AI can’t find you, it recommends your rival.",
      measured: {
        own: {
          live: "The candidate in place {rank} is named on average {n} times in 100 answers.",
          liveOne: "The candidate in place {rank} is named on average {n} time in 100 answers.",
          typical: "The typical candidate is named **{n} times** in 100 answers.",
          first: "The candidate in **place 1** is named **{n} times**: **{x} times as often**.",
        },
        tail: { y: "Mentions in AI answers", left: "Many mentions", right: "Few mentions", most: "Most options are rarely mentioned", here: "You want to be among the few options mentioned often" },
        study: { title: "Example: Finnish parliamentary elections 2027", bridge: "The same distribution can be measured in how candidates are named in elections.", players: "{n} candidates", intro: "ChatGPT and Claude were asked {n} questions about candidates in the Helsinki electoral district, and the questions named no candidate." },
      },
      sample: {
        label: "Weekly continuous measurement",
        basis: "Your visibility in {n} answers.",
        rivals: ["Competitor A", "Competitor B", "Competitor C"],
        you: "You",
        ask: "Do you show up in the topics that matter to you?",
        legend: "For each topic, precisely defined questions are put to different AI models.",
        none: "No mention",
        named: "You were the {n}th name in the answer",
        questions: ["Topic 1", "Topic 2", "Topic 211"],
        guide: {
          lead: "+ Weekly instructions based on a personal analysis, on how to increase your visibility:",
          items: ["What you have to do.", "Where you should be.", "What you should add.", "What you should change."],
        },
        weekly: {
          label: "Services and prices, no commitment",
          lead: "I help you show up in AI answers.",
          steps: [
            { title: "Industry analysis", body: "After the first conversation, I count how often AI names you and your competitors.", price: "€90 / hour + VAT" },
            { title: "Consultation", body: "Together we go through how to increase your visibility based on the analysis.", price: "€90 / hour + VAT" },
            { title: "Continuous measurement", body: "Each week you see how your visibility and the competition change.", price: "€190 / month + VAT" },
          ],
        },
      },
      next: {
        lead: "Let’s clarify how your brand gains visibility in AI answers.",
        body: "In our first conversation we go through",
        steps: [
          { title: "Your goal", body: "Which buyers and enquiries do you want to reach?" },
          { title: "Your current situation", body: "Where do your brand, website and sources stand today?" },
          { title: "Your competitors", body: "Which players in your field do you compete with for visibility?" },
        ],
      },
      request: { label: "Book a free conversation" },
    },
    caseStudy: {
      cardLink: "Read the case →",
      title: "A sitting MP's election strategy for the 2027 parliamentary elections.",
      pendingLabel: "To be written",
      situation: { heading: "The starting point", pending: "2–3 lines: a sitting MP, a re-election campaign, what worried them." },
      solution: { heading: "The solution" },
      changed: { heading: "The results", pending: "What the campaign did differently because of the findings." },
      quote: { heading: "In the MP’s words", pending: "An anonymous quote, if the MP allows one." },
      cta: "Want to know what you should focus on?",
      terms: [{ label: "Price", value: "€2,000 + VAT" }, { label: "Duration", value: "1 month" }],
      urgency: "Call, and we will go through your situation.",
      callLabel: "Call",
      emailLabel: "Email",
    },
    background: [
      "10 years of software engineering. Led project teams and delivered AI solutions for more than ten large enterprises.",
      "3 years building AI agents and putting them into daily use.",
    ],
    quote: {
      text: "Partner in strategic discussions related to emerging technologies and transformation.",
      source: "Vesa Syrjäkari, former VP, Innofactor",
    },
    contactHeading: "Contact",
    facts: [
      { label: "Phone", ...PHONE },
      { label: "Email", ...EMAIL },
      { label: "Based", value: "Helsinki – Florence" },
      { label: "Business ID", value: BUSINESS_ID },
      { label: "LinkedIn", ...LINKEDIN },
    ],
  },
  fi: {
    role: "GEO ja brändäys tekoälylle.",
    places: "Helsinki – Firenze",
    codeOfConduct: "Tekoälyn käytön periaatteet",
    legal: "Oikeudelliset tiedot",
    privacyLink: "Tietosuoja",
    privacy: {
      title: "Tietosuojaseloste",
      intro: "Tämä sivusto ei käytä evästeitä eikä tallenna mitään laitteellesi.",
      sections: [
        { heading: "Palvelintila", text: "Sivuston palvelintilan tarjoaa Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Kun vierailet sivustolla, Vercel käsittelee palvelinlokeissaan automaattisesti teknisiä tietoja, kuten IP-osoitettasi ja selaintietojasi tietoturvaa ja sivuston toimittamista varten. Käsittelyperuste: oikeutettu etu sivuston turvallisen ja luotettavan toiminnan varmistamiseen (yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan f alakohta). Tietoja voidaan siirtää Yhdysvaltoihin; Vercel on sertifioitu EU:n ja Yhdysvaltojen välisen tietosuojakehyksen (Data Privacy Framework) mukaisesti, ja Vercelin tietojenkäsittelysopimusta sovelletaan." },
        { heading: "Kävijätilastot", text: "Keräämme anonyymejä käyttötilastoja, kuten katsotut sivut, likimääräisen sijainnin ja laitetyypin, ymmärtääksemme, miten sivustoa käytetään. IP-osoitteita ei tallenneta. Tilastot säilytetään EU:ssa, ja ne poistetaan 12 kuukauden kuluttua. Käsittelyperuste: oikeutettu etu (yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan f alakohta)." },
        { heading: "Yhteydenotot", text: "Jos lähetät meille sähköpostia tai soitat, tietojasi käytetään ainoastaan yhteydenottosi käsittelyyn (yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohta)." },
        { heading: "Oikeutesi", text: "Sinulla on oikeus saada pääsy henkilötietoihisi, pyytää niiden oikaisemista tai poistamista, vastustaa niiden käsittelyä ja tehdä valitus valvontaviranomaiselle." },
      ],
      party: { heading: "Rekisterinpitäjä", lines: ["Sassosa Consulting (Josua Kiviranta)", "Y-tunnus 3127895-3", "Helsinki – Firenze", EMAIL.value] },
    },
    elections: {
      headTitle: "Eduskuntavaalit 2027: ehdokkaan näkyvyys tekoälyn vastauksissa",
      lead: "Josua Kiviranta mittaa, kuinka usein ChatGPT ja Claude mainitsevat eduskuntavaalien 2027 ehdokkaan vaalipiirinsä muihin ehdokkaisiin verrattuna.",
      urgency: "Vaalipäivä 18.4.2027 · Tekoälyn vastaukset muuttuvat viiveellä",
      title: "Mainitseeko tekoäly sinut, kun äänestäjä kysyy vaalipiirisi ehdokkaista?",
      answer: "Todennäköisesti harvoin, ellet ole brändäytynyt tekoälylle, helposti löydettävä tai muuten tunnettu.",
      topic: "eduskuntavaalit 2027",
      question: {
        title: "Äänestäjä kysyy tekoälyltä.",
        theme: "Yrittäjyys on Helsingin ehdokkaiden yleisin teema: 39 ehdokasta nostaa sen esiin omilla sivuillaan.",
        asked: "Tekoälyltä kysyttiin yrittäjyydestä 5 kysymystä, kukin kahdella eri tavalla.",
        missed: ["Claude jätti mainitsematta 24 heistä.", "ChatGPT jätti mainitsematta 29."],
      },
      measured: { title: "Mitattu: Helsingin vaalipiiri, marraskuu 2026" },
      offer: {
        lead: "Viikoittainen raportti: näin nouset tekoälyn vastauksiin ennen vaalipäivää.",
        steps: [
          { title: "Tilannekuva", body: "Kuinka usein tekoäly mainitsee sinut ja kilpailijasi omissa teemoissasi." },
          { title: "Ohjeet tiimillesi", body: "Viikoittaiset ohjeet, jotka voit antaa avustajillesi: mitä julkaista omilla sivuillasi ja missä muiden pitäisi kirjoittaa sinusta siinä aiheessa, josta haluat tulla tunnetuksi." },
          { title: "Nousevat vaaliteemat", body: "Uudet teemat, joissa kukaan ei vielä näy, ja tilaisuudet brändäytyä tekoälylle niiden edustajaksi." },
        ],
        price: "190 € / kk + alv",
        extra: "Haluatko, että teen sen puolestasi? Tuotan tekoälylle optimoidun aineiston ja muutokset sivustollasi konsultointihinnalla 90 € / h + alv.",
      },
      independence: ["Sama palvelu ja samat hinnat kaikkien puolueiden ehdokkaille.", "En ole minkään puolueen jäsen.", "Asiakkaani pysyvät luottamuksellisina."],
      link: "Eduskuntavaalit 2027: mittaus omassa vaalipiirissäsi",
    },
    problem: "Ennen päätöstä kysytään tekoälyltä.",
    offer: "Autan sinua näkymään tekoälyn vastauksissa.",
    moreServices: [
      { title: "Tilannekuva ja päätöksenteko", body: "Kokoan tilannekuvan ja autan päättämään, mihin sinun kannattaa keskittyä tavoitteidesi saavuttamiseksi.", case: true },
      // Held back for now (owner, 2026-11-12):
      // { title: "Sivustosi oma hallinta", body: "Opetan sinut päivittämään sivustosi tekoälyhauille optimoituna, ilman ylläpitäjää." },
    ],
    clientsHeading: "Referenssit",
    clients: [
      { name: "Haka-Wood", year: "2026", logo: { src: "/hakawood-logo.svg", href: "https://www.haka-wood.fi/" } },
      {
        name: "Istuva kansanedustaja",
        year: "2026",
        findings: [],
      },
    ],
    backgroundHeading: "Tausta",
    navServices: "Palvelut",
    visibility: {
      summary: "Jos tekoäly ei löydä sinua, se suosittelee kilpailijaasi.",
      measured: {
        own: {
          live: "Sijalla {rank} oleva ehdokas mainitaan keskimäärin {n} kertaa 100 vastauksessa.",
          liveOne: "Sijalla {rank} oleva ehdokas mainitaan keskimäärin {n} kerran 100 vastauksessa.",
          typical: "Tyypillinen ehdokas mainitaan **{n} kertaa** 100 vastauksessa.",
          first: "**Sijalla 1** oleva ehdokas mainitaan **{n} kertaa**: **{x} kertaa useammin**.",
        },
        tail: { y: "Maininnat tekoälyn vastauksissa", left: "Paljon mainintoja", right: "Vähän mainintoja", most: "Useimmat vaihtoehdot mainitaan harvoin", here: "Haluat kuulua harvoihin usein mainittuihin vaihtoehtoihin" },
        study: { title: "Esimerkki: Eduskuntavaalit 2027", bridge: "Sama jakauma voidaan mitata ehdokkaiden nimeämisessä vaaleissa.", players: "{n} ehdokasta", intro: "ChatGPT:ltä ja Claudelta kysyttiin {n} kysymystä Helsingin vaalipiirin ehdokkaista, ilman ehdokkaiden nimeämistä." },
      },
      sample: {
        label: "Viikoittainen jatkuva mittaus",
        basis: "Näkyvyytesi {n} vastauksessa.",
        rivals: ["Kilpailija A", "Kilpailija B", "Kilpailija C"],
        you: "Sinä",
        ask: "Näytkö sinulle tärkeissä aiheissa?",
        legend: "Jokaisesta aiheesta kysytään tarkoin määritellyt kysymykset eri tekoälymalleilta.",
        none: "Ei mainintaa",
        named: "Sinut mainittiin {n}. nimenä vastauksessa",
        questions: ["Aihe 1", "Aihe 2", "Aihe 211"],
        guide: {
          lead: "+ Viikoittaiset ohjeet henkilökohtaisen analyysin pohjalta, miten lisäät näkyvyyttäsi:",
          items: ["Mitä sinun pitää tehdä.", "Missä sinun pitää olla.", "Mitä sinun pitää lisätä.", "Mitä sinun pitää muuttaa."],
        },
        weekly: {
          label: "Palvelut ja hinnat ilman sitoutumista",
          lead: "Autan sinua näkymään tekoälyn vastauksissa.",
          steps: [
            { title: "Toimiala-analyysi", body: "Ensimmäisen keskustelun jälkeen lasken, kuinka usein tekoäly mainitsee sinut ja kilpailijasi.", price: "90 € / h + alv" },
            { title: "Konsultointi", body: "Käymme yhdessä läpi, miten lisäät näkyvyyttäsi analyysin pohjalta.", price: "90 € / h + alv" },
            { title: "Jatkuva mittaus", body: "Näet viikoittain, miten näkyvyytesi ja kilpailija-asetelma muuttuvat.", price: "190 € / kk + alv" },
          ],
        },
      },
      next: {
        lead: "Selvitetään, miten brändisi saa näkyvyyttä tekoälyn vastauksissa.",
        body: "Ensimmäisessä keskustelussa käymme läpi",
        steps: [
          { title: "Tavoitteesi", body: "Mitkä ostajat ja yhteydenotot haluat tavoittaa?" },
          { title: "Nykytilanteesi", body: "Missä vaiheessa brändisi, verkkosivustosi ja lähteesi ovat nyt?" },
          { title: "Kilpailijasi", body: "Keitä alasi toimijoita vastaan kilpailet näkyvyydessä?" },
        ],
      },
      request: { label: "Varaa ilmainen keskustelu" },
    },
    caseStudy: {
      cardLink: "Lue case →",
      title: "Istuvan kansanedustajan vaalistrategia vuoden 2027 eduskuntavaaleihin.",
      pendingLabel: "Täydennetään",
      situation: { heading: "Lähtötilanne", pending: "2–3 riviä: istuva kansanedustaja, uudelleenvalintakampanja, mikä huoletti." },
      solution: { heading: "Ratkaisu" },
      changed: { heading: "Tulokset", pending: "Mitä kampanja teki toisin löydösten takia." },
      quote: { heading: "Kansanedustajan sanoin", pending: "Anonyymi lainaus, jos kansanedustaja sallii." },
      cta: "Haluatko tietää, mihin sinun kannattaa keskittyä?",
      terms: [{ label: "Hinta", value: "2 000 € + alv" }, { label: "Kesto", value: "1 kk" }],
      urgency: "Soita, niin käydään tilanteesi läpi.",
      callLabel: "Soita",
      emailLabel: "Sähköposti",
    },
    background: [
      "10 vuotta ohjelmistokehitystä. Vetänyt projektitiimejä ja toimittanut tekoälyratkaisuja yli kymmenelle suuryritykselle.",
      "3 vuotta tekoälyagenttien rakentamista ja käyttöä päivittäisessä työssä.",
    ],
    quote: {
      text: "Sparrauskumppani uusiin teknologioihin ja muutokseen liittyvissä strategisissa keskusteluissa.",
      source: "Vesa Syrjäkari, entinen VP, Innofactor (käännös)",
    },
    contactHeading: "Yhteystiedot",
    facts: [
      { label: "Puhelin", ...PHONE },
      { label: "Sähköposti", ...EMAIL },
      { label: "Sijainti", value: "Helsinki – Firenze" },
      { label: "Y-tunnus", value: BUSINESS_ID },
      { label: "LinkedIn", ...LINKEDIN },
    ],
  },
  it: {
    role: "GEO e branding per l’IA.",
    places: "Helsinki – Firenze",
    codeOfConduct: "Codice di condotta sull’IA",
    legal: "Note legali",
    privacyLink: "Privacy",
    privacy: {
      title: "Informativa sulla privacy",
      intro: "Questo sito non usa cookie e non salva nulla sul tuo dispositivo.",
      sections: [
        { heading: "Hosting", text: "Questo sito è ospitato da Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Quando visiti il sito, Vercel tratta automaticamente nei log del server dati tecnici come il tuo indirizzo IP e le informazioni sul browser, per finalità di sicurezza e di erogazione del sito. Base giuridica: legittimo interesse al funzionamento sicuro e affidabile del sito (art. 6, par. 1, lett. f) del GDPR). Ciò può comportare il trasferimento di dati negli Stati Uniti; Vercel è certificata ai sensi del Data Privacy Framework UE–USA e si applica il relativo accordo sul trattamento dei dati." },
        { heading: "Statistiche delle visite", text: "Raccogliamo statistiche d’uso anonime, come le pagine visitate, la posizione approssimativa e il tipo di dispositivo, per capire come viene usato il sito. Gli indirizzi IP non vengono conservati. Le statistiche sono conservate nell’UE e cancellate dopo 12 mesi. Base giuridica: legittimo interesse (art. 6, par. 1, lett. f) del GDPR)." },
        { heading: "Contatti", text: "Se ci scrivi un’email o ci telefoni, i tuoi dati sono usati solo per gestire la tua richiesta (art. 6, par. 1, lett. b) del GDPR)." },
        { heading: "I tuoi diritti", text: "Hai il diritto di accedere ai tuoi dati personali, di chiederne la rettifica o la cancellazione, di opporti al loro trattamento e di proporre reclamo a un’autorità di controllo." },
      ],
      party: { heading: "Titolare del trattamento", lines: ["Sassosa Consulting (Josua Kiviranta)", "Codice identificativo d’impresa (Y-tunnus) 3127895-3", "Helsinki – Firenze", EMAIL.value] },
    },
    elections: {
      headTitle: "Elezioni parlamentari finlandesi 2027: visibilità dei candidati nelle risposte dell’IA",
      lead: "Josua Kiviranta misura quanto spesso ChatGPT e Claude nominano un candidato alle elezioni parlamentari finlandesi 2027 rispetto agli altri della circoscrizione.",
      urgency: "Elezioni il 18 aprile 2027 · Le risposte dell’IA cambiano con ritardo",
      title: "L’IA ti nomina quando un elettore chiede dei candidati della tua circoscrizione?",
      answer: "Probabilmente di rado, a meno che tu non sia riconoscibile per l’IA come marchio, facile da trovare o comunque noto.",
      topic: "elezioni parlamentari finlandesi 2027",
      question: {
        title: "Gli elettori chiedono all’IA.",
        theme: "L’imprenditorialità è il tema più comune tra i candidati di Helsinki: 39 candidati lo citano sulle proprie pagine.",
        asked: "All’IA sono state poste 5 domande sull’imprenditorialità, ciascuna in due modi diversi.",
        missed: ["Claude non ne ha nominati 24.", "ChatGPT non ne ha nominati 29."],
      },
      measured: { title: "Misurato: circoscrizione di Helsinki, novembre 2026" },
      offer: {
        lead: "Report settimanale: così entri nelle risposte dell’IA prima del giorno delle elezioni.",
        steps: [
          { title: "Quadro della situazione", body: "Quanto spesso l’IA nomina te e i tuoi concorrenti sui tuoi temi." },
          { title: "Istruzioni per il tuo team", body: "Istruzioni settimanali da dare ai tuoi collaboratori: cosa pubblicare sulle tue pagine e dove altri dovrebbero scrivere di te sul tema per cui vuoi essere conosciuto." },
          { title: "Temi elettorali emergenti", body: "Nuovi temi dove nessuno compare ancora, e occasioni per farti riconoscere dall’IA come loro rappresentante." },
        ],
        price: "190 € / mese + IVA",
        extra: "Vuoi che lo faccia io? Produco materiale ottimizzato per l’IA e le modifiche al tuo sito al prezzo di consulenza di 90 € / ora + IVA.",
      },
      independence: ["Lo stesso servizio e gli stessi prezzi per i candidati di ogni partito.", "Non sono iscritto ad alcun partito.", "I miei clienti restano riservati."],
      link: "Elezioni parlamentari finlandesi 2027: misurazione nella tua circoscrizione",
    },
    problem: "Prima di decidere, si chiede all’IA.",
    offer: "Ti aiuto a comparire nelle risposte dell’IA.",
    moreServices: [
      { title: "Quadro della situazione e decisioni", body: "Costruisco il quadro della situazione e ti aiuto a decidere su cosa concentrarti per raggiungere i tuoi obiettivi.", case: true },
      // Held back for now (owner, 2026-11-12):
      // { title: "Gestisci il tuo sito", body: "Ti insegno ad aggiornare il tuo sito, ottimizzato per le ricerche con l’IA, senza un webmaster." },
    ],
    clientsHeading: "Referenze",
    clients: [
      { name: "Haka-Wood", year: "2026", logo: { src: "/hakawood-logo.svg", href: "https://www.haka-wood.fi/" } },
      {
        name: "Parlamentare finlandese in carica",
        year: "2026",
        findings: [],
      },
    ],
    backgroundHeading: "Formazione ed esperienza",
    navServices: "Servizi",
    visibility: {
      summary: "Se l’IA non ti trova, raccomanda il tuo rivale.",
      measured: {
        own: {
          live: "Il candidato al {rank}º posto è nominato in media {n} volte su 100 risposte.",
          liveOne: "Il candidato al {rank}º posto è nominato in media {n} volta su 100 risposte.",
          typical: "Il candidato tipico è nominato **{n} volte** su 100 risposte.",
          first: "Il candidato al **1º posto** è nominato **{n} volte**: **{x} volte più spesso**.",
        },
        tail: { y: "Menzioni nelle risposte dell’IA", left: "Molte menzioni", right: "Poche menzioni", most: "La maggior parte delle opzioni è citata di rado", here: "Vuoi essere tra le poche opzioni citate spesso" },
        study: { title: "Esempio: elezioni parlamentari finlandesi 2027", bridge: "La stessa distribuzione si può misurare nel modo in cui vengono nominati i candidati alle elezioni.", players: "{n} candidati", intro: "A ChatGPT e Claude sono state poste {n} domande sui candidati della circoscrizione di Helsinki, senza nominare alcun candidato nelle domande." },
      },
      sample: {
        label: "Misurazione continua settimanale",
        basis: "La tua visibilità in {n} risposte.",
        rivals: ["Concorrente A", "Concorrente B", "Concorrente C"],
        you: "Tu",
        ask: "Compari negli argomenti che contano per te?",
        legend: "Per ogni argomento si pongono domande ben definite a diversi modelli di IA.",
        none: "Nessuna menzione",
        named: "Sei il {n}º nome nella risposta",
        questions: ["Argomento 1", "Argomento 2", "Argomento 211"],
        guide: {
          lead: "+ Istruzioni settimanali, basate su un’analisi personale, su come aumentare la tua visibilità:",
          items: ["Cosa devi fare.", "Dove devi essere.", "Cosa devi aggiungere.", "Cosa devi cambiare."],
        },
        weekly: {
          label: "Servizi e prezzi senza vincoli",
          lead: "Ti aiuto a comparire nelle risposte dell’IA.",
          steps: [
            { title: "Analisi di settore", body: "Dopo il primo colloquio, conto quanto spesso l’IA nomina te e i tuoi concorrenti.", price: "90 € / ora + IVA" },
            { title: "Consulenza", body: "Vediamo insieme come aumentare la tua visibilità in base all’analisi.", price: "90 € / ora + IVA" },
            { title: "Misurazione continua", body: "Ogni settimana vedi come cambiano la tua visibilità e la concorrenza.", price: "190 € / mese + IVA" },
          ],
        },
      },
      next: {
        lead: "Chiariamo come il tuo marchio ottiene visibilità nelle risposte dell’IA.",
        body: "Nel primo colloquio vediamo insieme",
        steps: [
          { title: "Il tuo obiettivo", body: "Quali acquirenti e richieste vuoi raggiungere?" },
          { title: "La tua situazione attuale", body: "A che punto sono oggi il tuo marchio, il tuo sito e le tue fonti?" },
          { title: "I tuoi concorrenti", body: "Con quali operatori del tuo settore competi per la visibilità?" },
        ],
      },
      request: { label: "Prenota un colloquio gratuito" },
    },
    caseStudy: {
      cardLink: "Leggi il caso →",
      title: "La strategia elettorale di un parlamentare in carica per le elezioni politiche del 2027.",
      pendingLabel: "Da scrivere",
      situation: { heading: "Il punto di partenza", pending: "2–3 righe: un parlamentare in carica, una campagna di rielezione, cosa lo preoccupava." },
      solution: { heading: "La soluzione" },
      changed: { heading: "I risultati", pending: "Cosa ha fatto di diverso la campagna grazie ai risultati." },
      quote: { heading: "Nelle parole del parlamentare", pending: "Una citazione anonima, se il parlamentare la consente." },
      cta: "Vuoi sapere su cosa dovresti concentrarti?",
      terms: [{ label: "Prezzo", value: "2.000 € + IVA" }, { label: "Durata", value: "1 mese" }],
      urgency: "Chiama, e vediamo insieme la tua situazione.",
      callLabel: "Chiama",
      emailLabel: "Email",
    },
    background: [
      "10 anni di sviluppo software. Ha guidato team di progetto e realizzato soluzioni di IA per più di dieci grandi aziende.",
      "3 anni a costruire agenti IA e a usarli nel lavoro quotidiano.",
    ],
    quote: {
      text: "Un interlocutore nelle discussioni strategiche su tecnologie emergenti e trasformazione.",
      source: "Vesa Syrjäkari, ex VP, Innofactor (traduzione)",
    },
    contactHeading: "Contatti",
    facts: [
      { label: "Telefono", ...PHONE },
      { label: "Email", ...EMAIL },
      { label: "Sede", value: "Helsinki – Firenze" },
      { label: "Codice aziendale (Y-tunnus)", value: BUSINESS_ID },
      { label: "LinkedIn", ...LINKEDIN },
    ],
  },
};
