import {
  NGO_OFFICIAL_NAME,
  PostJobDescription,
  ProjectItem,
  MonthlyReport,
  TechnicalFinancialPartner,
  DriveFolderNode,
  NewsItem,
  FieldActionPost,
  StakeholderForumThread,
  OfficialDocument,
  AiDraftDocument,
  GalleryMediaItem,
  SeasonalCalendarItem,
  EmergencyTurtleAlert,
  AuditLogEntry,
  ExecutiveMember,
  SiteContactSettings,
  SiteMaintenanceDelegation,
  ImpactMetricsState,
  SocialNetworkChannel,
  LogisticalNeedItem,
  MemberTaskReport,
  BoardMember
} from '../types';

export const NGO_INFO = {
  name: NGO_OFFICIAL_NAME,
  shortName: "AMSHARTE",
  brandLogoText: "ASR",
  formerName: "AMSHART — Amis du Monde pour la Santé, l'Hygiène et la Réflexion sur le Travail (2004)",
  fullName: NGO_OFFICIAL_NAME,
  officialTitle: NGO_OFFICIAL_NAME,
  acronymBreakdown: [
    { letter: "A", word: "Amis", description: "Solidarité humaine, engagement civique et entraide communautaire" },
    { letter: "M", word: "du Monde", description: "Ouverture planétaire, coopération internationale et fraternité" },
    { letter: "S", word: "pour la Sauvegarde", description: "Sauvegarde active des vies humaines, des terroirs et des écosystèmes" },
    { letter: "H", word: "de l'Hygiène", description: "Hygiène publique, salubrité des plages et propreté des milieux de vie" },
    { letter: "A", word: "de la Santé", description: "Santé et Sécurité au Travail (SST) inspirée des travaux pionniers du Pr FAYOMI" },
    { letter: "R", word: "en Milieu Rural", description: "Prévention et soutien aux communautés paysannes, agricoles et côtières" },
    { letter: "T", word: "Artisanal", description: "Accompagnement des pêcheurs artisans, ateliers et travailleurs informels" },
    { letter: "E", word: "et Environnemental", description: "Préservation de la biodiversité marine, des mangroves et des tortues de Togbin" }
  ],
  postalAddress: "02 BP 8130 GBEGAMEY COTONOU",
  headquarters: "Togbin Fandji, Commune d'Abomey-Calavi / Cotonou, République du Bénin",
  siteLocation: "Plage de Togbin Fandji (Site des Tortues Marines)",
  googleMapsUrl: "https://www.google.com/maps/place/6%C2%B021'04.9%22N+2%C2%B021'08.0%22E/@6.3513657,2.3496401,17z/data=!3m1!4b1!4m4!3m3!8m2!3d6.3513657!4d2.352215?hl=fr&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  coordinates: {
    lat: "6°21'04.9\"N",
    lng: "2°21'08.0\"E",
    decimalLat: 6.3513657,
    decimalLng: 2.352215
  },
  phones: ["(+229) 01 95 35 08 62", "(+229) 01 98 37 10 52", "(+229) 01 66 03 29 13"],
  email: "amshart150504@yahoo.fr",
  officialWebsite: "https://sites.google.com/view/ongamshart/home",
  facebookPage: "https://www.facebook.com/share/18GLuvttrH/",
  whatsappCommunityUrl: "https://chat.whatsapp.com/AMSHARTE-Tortues-Alerte",
  creationYear: 2004,
  yearsOfExistence: 22,
  pioneersCount: 9,
  history: "Née en 2004 sous la dénomination originelle d'AMSHART (Amis du Monde pour la Santé, l'Hygiène et la Réflexion sur le Travail) avec 9 pionniers suite aux 1ères journées scientifiques en Santé et Sécurité au Travail (SST) tenues en 2003 à la CCIB de Cotonou sous l'égide de feu Professeur Benjamin FAYOMI (Faculté des Sciences de la Santé / Université d'Abomey-Calavi), du Ministère du Travail et de partenaires académiques de Belgique. Face au constat de la précarité et des risques professionnels négligés chez les travailleurs ruraux et artisans, 9 pionniers ont fondé l'association. L'organisation a progressivement étendu sa mission à la protection de l'environnement, des lagunes, des mangroves et des tortues marines en devenant AMSHARTE (Amis du Monde pour la Sauvegarde de l'Hygiène, de la Santé Sécurité au Travail en Milieu Rural Artisanal et Environnemental).",

  legalCompliance: {
    law: "Loi 2025-19 relative aux ONG, Associations et Fondations en République du Bénin",
    certificateNo: "PSO1509-260421-nhdJTH du 21/04/2026-20:22",
    mcvtPartnershipLetter: "Lettre N° 878/MCVT/DC/CTR/SP-c du 07 Juillet 2026 (Reconnaissance officielle de partenariat avec le Ministère du Cadre de Vie et des Transports)",
    historicRegistration: "Découverte du site des tortues de Togbin par la MdSC et enregistrement du 26 Août 2026 à 18h30 par M. Gabin AZOMAN",
    award: "Trophée « Femme modèle dans la protection de l'environnement » JIF 2022 décerné par le MCVT"
  },
  mission: "Faciliter le développement du capital humain orienté vers la promotion de l'éco-citoyenneté et la lutte contre le changement climatique dans le respect des indicateurs des politiques publiques de façon participative et durable.",
  vision2032: "D'ici 2032, l'ONG AMSHARTE est une communauté de préventeurs autodéterminés pour la sauvegarde de l'hygiène, de la biodiversité, de l'environnement, de la santé et sécurité au travail de façon participative et durable.",
  objectives: [
    "Sensibiliser et former à la vulgarisation de l'hygiène et des concepts de santé et sécurité au travail dans le monde rural et artisanal (prévention des risques AT et MP).",
    "Aider à l'extension de la protection sociale à tous.",
    "Sensibiliser à la protection de l'environnement, la biodiversité marine et notamment la préservation des tortues marines."
  ],
  humanResources: {
    totalTeam: 33,
    membersCount: 8,
    executiveAppointments: 9,
    fieldStaff: 5, // éco-gardes, patrouilleurs, chargée environnement, chargé sécurité
    departmentalFocalPoints: 12, // 12 chefs-lieux du Bénin
    cnssDeclaredCount: 1,
    volunteersCount: 32
  },
  boardPresident: "Mme AKPODJI Philomène",
  executiveDirector: "SONON Tchéhouéa",
  interimProgramManager: "Henri Doudédji FATCHINA",
  fieldChallenges: [
    "Renouvellement de l'eau dans les bacs au cours de la période de transit des tortues à l'enclos où les visiteurs et touristes peuvent les contempler",
    "Évaluation du poids exact de la tortue lors des lâchers (manque de balance adaptée)",
    "Matériel d'identification des tortues (bagues métalliques, pinces à marquer ou puces électroniques)",
    "Fonctionnement de l'équipe des éco-gardes / patrouilleurs bénévoles (carburant, forfaits)",
    "Activités Génératrices de Revenus (AGR) pour les femmes face au changement climatique et à l'urbanisation des terres vivrières",
    "Accompagnement de quelques élus locaux et chefs traditionnels",
    "Vulgarisation des Aires Marines Protégées (créées par le Conseil des Ministres du 5 Janvier 2022)",
    "Moto de service pour la gestion rapide des alertes nocturnes (nid d'œufs ou tortue venue pondre)",
    "Équipements de Protection Individuelle (EPI) pour les éco-gardes lors des patrouilles",
    "Soutien aux pêcheurs artisans au cours du repos biologique (Juillet)",
    "Soutien aux pêcheurs pour la réparation des filets déchirés par les tortues lors des démaillages"
  ],
  keyInitiatives: [
    {
      name: "Ayi Dji Ni Min / Zogbodo Gan (6ème édition)",
      description: "Salubrité compétitive récompensant le quartier le plus propre des trois Togbin et le travailleur utilisant au mieux ses équipements de protection individuelle (QLPP 3T). Élargit la propreté de la plage aux quartiers environnants."
    },
    {
      name: "Consortium Nature Tropicale - AMSHARTE - Action Plus",
      description: "Appuyé par SOGEA SATOM avec la construction de trois écloseries dont celle de Togbin, rénovée par AGL & Bénin Terminal."
    },
    {
      name: "Consortium ANA - Action Plus - AMSHARTE",
      description: "Restauration participative des mangroves et forêts marécageuses soutenue par SOGEA SATOM."
    }
  ]
};

export const INITIAL_JOB_DESCRIPTIONS: PostJobDescription[] = [
  {
    id: "post-pca",
    code: "POSTE-00-PCA",
    title: "Présidente du Conseil d'Administration (PCA) & Trésorière",
    shortTitle: "PCA",
    incumbentName: "Mme AKPODJI Philomène",
    reportsTo: "Assemblée Générale Ordinaire & Statuts AMSHARTE",
    serviceNoteRef: "Procès-Verbal d'Assemblée Générale Élective N° 001/AMSHARTE/AG",
    signatureDate: "Cotonou / Togbin",
    department: "Conseil d'Administration (Organe Suprême de Surveillance)",
    badgeColor: "purple",
    functionSummary: "Présidence du Conseil d'Administration, orientations stratégiques, contrôle budgétaire et moral, conformité Loi N° 2025-19 et surveillance des comptes.",
    tasks: [
      "Préside les sessions ordinaires et extraordinaires du Conseil d'Administration et veille à l'application stricte des délibérations de l'Assemblée Générale.",
      "Contrôle la politique générale et l'action de la Direction Exécutive (DE) et de la Coordination des Programmes (CPI).",
      "Arrête les projets de budgets annuels, examine les états financiers certifiés et soumet le rapport moral et financier à l'Assemblée Générale.",
      "Veille à la conformité institutionnelle continue de l'ONG avec la Loi N° 2025-19 relative aux associations et ONG en République du Bénin.",
      "Assure la fonction de surveillance de la trésorerie et supervise la concordance des pièces comptables (Dolibarr & Google Drive).",
      "Autorise les conventions internationales d'envergure excédant le seuil de délégation de gestion courante de la Direction Exécutive."
    ],
    statusAndCompensation: "Mandat Statutaire d'Administrateur / Bénévole élue non rémunérée."
  },
  {
    id: "post-cpi",
    code: "POSTE-02-CPI",
    title: "Chargé de Programmes par Intérim (CPi)",
    shortTitle: "CPI",
    incumbentName: "Henri Doudédji FATCHINA",
    isInterim: true,
    reportsTo: "Directeur Exécutif (DE) — SONON Tchéhouéa",
    serviceNoteRef: "Note de service N° 014/2026/AMSHARTE/DE",
    signatureDate: "Togbin Fandji, le 15 Janvier 2026",
    department: "Direction des Programmes & Projets",
    badgeColor: "emerald",
    functionSummary: "Planification, coordination générale, suivi et évaluation rigoureuse de l'ensemble des projets de l'ONG.",
    tasks: [
      "Gère les programmes et projets de l'ONG et supervise leur exécution opérationnelle sur le terrain (Togbin, littoral, mangroves).",
      "Élabore les rapports d'activité mensuels au plus tard 10 jours après le mois échu (Règle J+10), et le rapport annuel au plus tard le 1er février de l'année nouvelle, en consolidant les contributions des chargés de programme (tortues, mangroves) et des points focaux.",
      "Organise et coordonne les activités des animateurs, des points focaux départementaux et des collaborateurs externes.",
      "Assure le suivi et l'évaluation des activités et projets de l'ONG, et élabore les documents de planification correspondants (cadres logiques, chronogrammes, fiches de suivi).",
      "Élabore le contenu technique des projets destinés aux partenaires, en lien avec le Chargé à la mobilisation des PTF, qui conduit la négociation financière.",
      "Rend régulièrement compte de ses activités au DE et lui soumet les projets et documents élaborés pour validation préalable.",
      "Assure l'intérim du DE pour les actes de gestion courante en cas d'absence ou d'empêchement (les engagements financiers ou juridiques majeurs restent soumis à une délégation expresse du DE).",
      "Organise la formation des formateurs, des animateurs et des collaborateurs de terrain.",
      "Consolide, en lien avec les autres chargés, les bases de données statistiques et d'impact de l'ONG (patrouilles, nids, pépinières).",
      "Assure l'exécution de toute autre tâche commandée par les nécessités de service, dans la limite de ses attributions et sur notification écrite du DE."
    ],
    statusAndCompensation: "Bénévole engagé — Bénéficie d'un forfait conventionnel pour ses déplacements et indemnités de mission selon la trésorerie disponible de l'ONG."
  },
  {
    id: "post-de",
    code: "POSTE-01-DE",
    title: "Directeur Exécutif (DE)",
    shortTitle: "DE",
    incumbentName: "SONON Tchéhouéa",
    reportsTo: "Conseil d'Administration / Président du Conseil d'Administration (PCA)",
    serviceNoteRef: "Statuts & Règlement Intérieur AMSHARTE",
    signatureDate: "Togbin Fandji",
    department: "Direction Exécutive",
    badgeColor: "blue",
    functionSummary: "Direction générale, représentation légale, supervision stratégique et ordonnancement des engagements financiers et partenariaux.",
    tasks: [
      "Assure la gouvernance exécutive et le leadership global de l'ONG conformément aux orientations du PCA.",
      "Valide et signe formellement les rapports d'activité mensuels et annuels consolidés par le CPI.",
      "Représente officiellement l'ONG auprès des Ministères (Cadre de Vie, Pêche), des agences des Nations Unies, de l'Union Européenne et des partenaires.",
      "Ordonnance les dépenses budgétaires et valide les états financiers préparés par le RAF.",
      "Signe les conventions bilatérales avec les PTF et autorise les accords de partenariat.",
      "Délègue expressément au CPI les actes de gestion courante en cas de mission extérieure ou d'absence."
    ],
    statusAndCompensation: "Direction Exécutive statutaire — Statut associatif de direction."
  },
  {
    id: "post-tortues",
    code: "POSTE-03-CP-TM",
    title: "Chargé du Programme Tortues Marines",
    shortTitle: "CP-Tortues",
    incumbentName: "Nestor K. SOSSOU",
    reportsTo: "Chargé de Programmes par Intérim (CPI)",
    serviceNoteRef: "Note de service N° 008/2026/AMSHARTE/DE",
    signatureDate: "Togbin Fandji, le 01 Février 2026",
    department: "Pôle Biodiversité Marine & Côtière",
    badgeColor: "cyan",
    functionSummary: "Supervision des patrouilles nocturnes de surveillance, protection des nids de pontes, gestion des écloseries et sensibilisation des pêcheurs.",
    tasks: [
      "Planifie et encadre les équipes d'éco-gardes pour les patrouilles côtières nocturnes sur les plages de Togbin Fandji, Avlékété et environs.",
      "Sécurise les sites de ponte des tortues luth (Dermochelys coriacea) et tortues olivâtres (Lepidochelys olivacea).",
      "Transfère les œufs vulnérables en écloserie protégée et coordonne les relâchers de bébés tortues avec les communautés et scolaires.",
      "Tient le registre biométrique et statistique quotidien des observations et sauvetages.",
      "Rédige sa fiche d'activité mensuelle et la transmet au CPI au plus tard le 5 de chaque mois pour consolidation.",
      "Sensibilise les communautés de pêcheurs artisans sur le démaillage sans mise à mort des tortues capturées accidentellement."
    ],
    statusAndCompensation: "Agent technique de projet / Bénévole indemnisé par mission."
  },
  {
    id: "post-mangroves",
    code: "POSTE-04-CP-MEC",
    title: "Chargée du Programme Mangroves & Écosystèmes Côtiers",
    shortTitle: "CP-Mangroves",
    incumbentName: "Christine ADANHOUNSO",
    reportsTo: "Chargé de Programmes par Intérim (CPI)",
    serviceNoteRef: "Note de service N° 009/2026/AMSHARTE/DE",
    signatureDate: "Togbin Fandji, le 01 Février 2026",
    department: "Pôle Restauration Écologique",
    badgeColor: "emerald",
    functionSummary: "Gestion des pépinières de palétuviers (Rhizophora & Avicennia), opérations de reboisement et animation des comités villageois de surveillance.",
    tasks: [
      "Supervise la production de propagules et plants de palétuviers dans les pépinières communautaires.",
      "Organise les campagnes de reboisement participatif dans les zones de mangroves dégradées.",
      "Établit le suivi du taux de reprise des plants et cartographie les parcelles restaurées.",
      "Anime les comités villageois de gestion concertée des ressources des mangroves.",
      "Fournit au CPI la synthèse mensuelle des surfaces restaurées et des effectifs villageois mobilisés.",
      "Co-anime les ateliers de sensibilisation pour les femmes productrices de sel et transformatrices de poisson."
    ],
    statusAndCompensation: "Spécialiste écologie végétale / Bénévole indemnisée selon projets."
  },
  {
    id: "post-ptf",
    code: "POSTE-05-PTF",
    title: "Chargé à la Mobilisation des PTF & Partenariats",
    shortTitle: "Mobilisateur PTF",
    incumbentName: "Sylvain D. AKPO",
    reportsTo: "Directeur Exécutif (DE) en liaison étroite avec le CPI",
    serviceNoteRef: "Note de service N° 011/2026/AMSHARTE/DE",
    signatureDate: "Togbin Fandji",
    department: "Pôle Partenariats & Négociation Financière",
    badgeColor: "amber",
    functionSummary: "Prospection des opportunités de financement, conduite des négociations financières et suivi institutionnel des bailleurs de fonds.",
    tasks: [
      "Assure la veille stratégique sur les appels à projets nationaux et internationaux (FEM, UE, AFD, UICN, PNUD, Fondations privées).",
      "Conduit la négociation financière et budgétaire des dossiers de subvention, sur la base du contenu technique rédigé par le CPI.",
      "Entretient les relations institutionnelles avec les représentants des PTF au Bénin.",
      "Veille au respect strict du calendrier de soumission des dossiers de requêtes et d'échéances des conventions.",
      "Renseigne le CRM des partenaires dans Dolibarr pour un suivi rigoureux des interactions."
    ],
    statusAndCompensation: "Bénévole qualifié / Prime au résultat négociée selon les conventions obtenues."
  },
  {
    id: "post-finances",
    code: "POSTE-06-RAF",
    title: "Responsable Administratif et Financier (RAF)",
    shortTitle: "RAF / Trésorier",
    incumbentName: "Brice HOUNGBO",
    reportsTo: "Directeur Exécutif (DE)",
    serviceNoteRef: "Note de service N° 005/2026/AMSHARTE/DE",
    signatureDate: "Cotonou / Togbin Fandji",
    department: "Service Comptabilité & Trésorerie",
    badgeColor: "purple",
    functionSummary: "Gestion comptable conforme aux normes associatives, suivi de trésorerie sur Dolibarr et élaboration des rapports financiers.",
    tasks: [
      "Tient la comptabilité générale et analytique de l'ONG dans le module Finances de Dolibarr.",
      "Contrôle et classe l'ensemble des pièces justificatives de dépenses (factures, reçus, feuilles de présence, bons de transport).",
      "Élabore mensuellement le tableau récapitulatif de trésorerie réinjecté dans Google Sheets pour le tableau de bord du DE et du CPI.",
      "Prépare les états financiers exigés par les bailleurs de fonds lors des audits de conventions.",
      "Gère les paiements des forfaits de déplacement des équipes de terrain après visa du CPI et DE."
    ],
    statusAndCompensation: "Cadre financier bénévole / Indemnité de gestion de trésorerie."
  },
  {
    id: "post-communication",
    code: "POSTE-07-COM",
    title: "Chargé de Communication, Visibilité & Médias",
    shortTitle: "Communication",
    incumbentName: "Eric GBENOU",
    reportsTo: "Directeur Exécutif (DE) et CPI",
    serviceNoteRef: "Note de service N° 012/2026/AMSHARTE/DE",
    signatureDate: "Cotonou",
    department: "Pôle Visibilité & Numérique",
    badgeColor: "rose",
    functionSummary: "Gestion du site Google Sites AMSHARTE, visibilité des actions de terrain, relations presse et reportages photos/vidéos.",
    tasks: [
      "Met à jour régulièrement le site web public Google Sites et le portail officiel de l'ONG.",
      "Produit les reportages photo/vidéo des patrouilles de nuit et des plantations de mangroves.",
      "Rédige les communiqués de presse et actualités officielles de l'ONG.",
      "Veille à l'application scrupuleuse des chartes graphiques des bailleurs (UE, PNUD, FEM, etc.) sur tous les supports.",
      "Gère l'archivage photographique dans le dossier Google Drive officiel '07_COMMUNICATION'."
    ],
    statusAndCompensation: "Bénévole en communication environnementale."
  },
  {
    id: "post-points-focaux",
    code: "POSTE-08-PF",
    title: "Points Focaux Départementaux & Animateurs de Terrain",
    shortTitle: "Points Focaux",
    incumbentName: "Équipes Atlantique, Littoral & Ouidah",
    reportsTo: "Chargé de Programmes par Intérim (CPI)",
    serviceNoteRef: "Notes territoriales",
    signatureDate: "Départements côtiers",
    department: "Réseau Terrain",
    badgeColor: "teal",
    functionSummary: "Relais locaux de l'ONG, mobilisation des communautés de base et remontée des alertes écologiques.",
    tasks: [
      "Assurent la liaison directe avec les chefs de villages côtiers, comités de pêcheurs et autorités locales.",
      "Saisissent les rapports de terrain mensuels via le formulaire en ligne dédié.",
      "Signalent en urgence au CPI tout échouage de mammifère marin ou braconnage de tortue marine constaté.",
      "Accompagnent les missions de terrain des experts et des délégations de partenaires."
    ],
    statusAndCompensation: "Animateurs communautaires / Forfaits de communication et carburant."
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-tortues-2026",
    code: "AMSH-PROJ-01",
    title: "Sauvegarde & Surveillance des Tortues Marines sur le Littoral Béninois",
    category: "tortues",
    leader: "Nestor K. SOSSOU (Sous supervision CPI)",
    status: "en_cours",
    progressPercentage: 68,
    budgetTotalFCFA: 18500000,
    budgetDepenseFCFA: 12150000,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    location: "Plages de Togbin Fandji, Avlékété, Cotonou et Ouidah",
    description: "Protection active des femelles pondeuses et de leurs pontes, éradication du braconnage sur 35 km de plage, sensibilisation des pêcheurs et création d'une écloserie modèle à Togbin Fandji.",
    objectives: [
      "Patrouiller 35 km de plage littorale chaque nuit pendant la période de ponte.",
      "Protéger au minimum 120 nids de tortues marines contre le braconnage et la submersion.",
      "Former et équiper 25 pêcheurs relais comme observateurs marins bénévoles.",
      "Relâcher avec succès plus de 8 000 nouveau-nés dans l'océan Atlantique."
    ],
    keyIndicators: [
      { label: "Nids de ponte sécurisés", current: 87, target: 120, unit: "nids" },
      { label: "Nouveau-nés relâchés en mer", current: 6140, target: 8000, unit: "individus" },
      { label: "Tortues adultes sauvées de filets", current: 19, target: 25, unit: "tortues" },
      { label: "Patrouilles nocturnes effectuées", current: 164, target: 240, unit: "sorties" }
    ],
    milestones: [
      { id: "m1", title: "Installation de l'écloserie modèle de Togbin Fandji", dueDate: "2026-02-15", done: true, responsible: "Nestor K. SOSSOU" },
      { id: "m2", title: "Campagne de formation des 25 pêcheurs sentinelles", dueDate: "2026-03-30", done: true, responsible: "Henri Doudédji FATCHINA (CPI)" },
      { id: "m3", title: "Revue technique mi-parcours et audit des pontes", dueDate: "2026-07-15", done: true, responsible: "CPI & DE" },
      { id: "m4", title: "Rapport scientifique annuel sur les cohortes 2026", dueDate: "2026-12-20", done: false, responsible: "Nestor K. SOSSOU" }
    ]
  },
  {
    id: "proj-mangroves-2026",
    code: "AMSH-PROJ-02",
    title: "Restauration Écologique des Mangroves & Forêts Marécageuses de la Lagune Côtière",
    category: "mangroves",
    leader: "Christine ADANHOUNSO (Sous supervision CPI)",
    status: "en_cours",
    progressPercentage: 54,
    budgetTotalFCFA: 24000000,
    budgetDepenseFCFA: 13500000,
    startDate: "2026-02-01",
    endDate: "2027-01-31",
    location: "Zones humides du Lac Nokoué, Chenal de Cotonou et berges de Togbin",
    description: "Reboisement participatif de 40 hectares de mangroves dégradées avec Rhizophora racemosa et Avicennia germinans, renforcement des activités génératrices de revenus durables pour les groupements de femmes.",
    objectives: [
      "Produire 60 000 propagules et plants de palétuviers en pépinières communautaires.",
      "Régénérer et reboiser 40 hectares de chenaux et vasières lagunaires.",
      "Structurer 4 comités villageois d'éco-gestion dans les communes riveraines.",
      "Former 120 femmes transformatrices de poisson à des foyers améliorés économes en bois."
    ],
    keyIndicators: [
      { label: "Plants de palétuviers produits", current: 42500, target: 60000, unit: "plants" },
      { label: "Hectares de mangroves reboisés", current: 24.5, target: 40, unit: "hectares" },
      { label: "Comités locaux d'éco-gestion actifs", current: 4, target: 4, unit: "comités" },
      { label: "Femmes formées aux foyers améliorés", current: 78, target: 120, unit: "bénéficiaires" }
    ],
    milestones: [
      { id: "mm1", title: "Sélection des sites dégradés et cartographie GPS", dueDate: "2026-02-28", done: true, responsible: "Christine ADANHOUNSO" },
      { id: "mm2", title: "Établissement des 2 pépinières communautaires pilotes", dueDate: "2026-04-10", done: true, responsible: "Christine ADANHOUNSO" },
      { id: "mm3", title: "Grande journée communautaire de reboisement saison des pluies", dueDate: "2026-06-25", done: true, responsible: "CPI & Équipe Mangroves" },
      { id: "mm4", title: "Évaluation du taux de reprise à 6 mois et regarnissage", dueDate: "2026-10-15", done: false, responsible: "Christine ADANHOUNSO" }
    ]
  },
  {
    id: "proj-formation-2026",
    code: "AMSH-PROJ-03",
    title: "Académie Éco-Citoyenne : Formation des Formateurs & Éco-gardes",
    category: "education",
    leader: "Henri Doudédji FATCHINA (CPI)",
    status: "en_cours",
    progressPercentage: 80,
    budgetTotalFCFA: 6500000,
    budgetDepenseFCFA: 5200000,
    startDate: "2026-03-01",
    endDate: "2026-11-30",
    location: "Centre communautaire de Togbin Fandji & écoles du littoral",
    description: "Conformément au cahier de charge du CPI : organisation de la formation des formateurs, animateurs et collaborateurs pour professionnaliser le suivi biologique et l'éducation environnementale.",
    objectives: [
      "Former 30 animateurs et éco-gardes aux protocoles scientifiques standardisés.",
      "Sensibiliser 1 500 élèves du primaire et secondaire sur la biodiversité côtière.",
      "Distribuer 500 livrets pédagogiques illustrés sur la faune marine du Bénin."
    ],
    keyIndicators: [
      { label: "Formateurs & animateurs certifiés", current: 28, target: 30, unit: "personnes" },
      { label: "Écoliers et collégiens sensibilisés", current: 1240, target: 1500, unit: "élèves" },
      { label: "Modules pédagogiques finalisés", current: 4, target: 4, unit: "modules" }
    ],
    milestones: [
      { id: "mf1", title: "Session 1 : Biologie et suivi des tortues marines", dueDate: "2026-04-05", done: true, responsible: "Henri Doudédji FATCHINA" },
      { id: "mf2", title: "Session 2 : Écologie des mangroves et techniques de pépinière", dueDate: "2026-05-18", done: true, responsible: "Henri Doudédji FATCHINA" },
      { id: "mf3", title: "Tournée d'éco-sensibilisation dans 10 écoles côtières", dueDate: "2026-10-30", done: false, responsible: "Éric GBENOU & CPI" }
    ]
  },
  {
    id: "proj-ptf-2026",
    code: "AMSH-PROJ-04",
    title: "Mobilisation PTF & Renforcement Institutionnel AMSHARTE",
    category: "ptf",
    leader: "Directeur Exécutif (DE) & Chargé PTF (Support technique CPI)",
    status: "en_cours",
    progressPercentage: 60,
    budgetTotalFCFA: 12000000,
    budgetDepenseFCFA: 7400000,
    startDate: "2026-01-15",
    endDate: "2026-12-31",
    location: "Cotonou & Siège Togbin Fandji",
    description: "Élaboration des contenus techniques des projets par le CPI, conduite des négociations financières par le Chargé PTF et signature des conventions par le DE.",
    objectives: [
      "Déposer 4 requêtes de financement structurées auprès des bailleurs (FEM, UE, Ambassades).",
      "Déployer l'infrastructure numérique hybride Google Workspace + Dolibarr ERP.",
      "Éditer et publier le rapport d'activité annuel 2025 avant le 1er février 2026 (réalisé avec succès)."
    ],
    keyIndicators: [
      { label: "Dossiers de projet soumis", current: 3, target: 4, unit: "dossiers" },
      { label: "Conventions signées", current: 2, target: 3, unit: "accords" },
      { label: "Membres et bénévoles enregistrés sur Dolibarr", current: 48, target: 60, unit: "comptes" }
    ],
    milestones: [
      { id: "mp1", title: "Publication et transmission du rapport annuel 2025 (Échéance 1er Février)", dueDate: "2026-02-01", done: true, responsible: "Henri Doudédji FATCHINA (CPI)" },
      { id: "mp2", title: "Dépôt de la requête FEM Microfinancements Biodiversité", dueDate: "2026-04-30", done: true, responsible: "CPI & Sylvain D. AKPO" },
      { id: "mp3", title: "Lancement de la plateforme hybride Google - Dolibarr", dueDate: "2026-09-15", done: true, responsible: "Directeur Exécutif & CPI" }
    ]
  }
];

export const INITIAL_MONTHLY_REPORTS: MonthlyReport[] = [
  {
    id: "rep-2026-08-cpi",
    reference: "RAP-MENS-2026-08-CPI",
    month: "Août",
    year: 2026,
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    projectCategory: "gouvernance",
    dateSubmitted: "2026-09-08", // Soumis avant le J+10 (10 Septembre) !
    status: "vise_de",
    summary: "Rapport mensuel consolidé de coordination des activités du mois d'août 2026. Surveillance active du littoral pendant la mousson et suivi des pépinières de mangroves.",
    activitiesCompleted: [
      "Consolidation des données terrain des programmes Tortues et Mangroves.",
      "Visite d'inspection sur le site de ponte de Togbin Fandji et vérification de l'écloserie.",
      "Coordination d'une séance de travail avec les 4 points focaux départementaux.",
      "Finalisation de la note conceptuelle pour la subvention d'extension de la surveillance côtière."
    ],
    quantitativeResults: [
      { label: "Nids enregistrés au mois d'août", value: "14 nids (dont 11 mis en sécurité)" },
      { label: "Propagules repiquées", value: "7 500 propagules en pépinière" },
      { label: "Réunions d'équipe présidées", value: "3 séances techniques" }
    ],
    challengesFaced: "Fortes houles océaniques et érosion côtière menaçant un secteur de plage à Togbin ; nécessité de relocaliser préventivement deux nids vers l'écloserie.",
    solutionsApplied: "Mobilisation nocturne immédiate de l'équipe de patrouille sous la houlette de Nestor Sossou et transfert sans casse.",
    nextMonthPlanning: "Planifier l'atelier de formation des éco-gardes pour septembre ; préparation du dossier technique pour le partenaire néerlandais.",
    financialNeedsFCFA: 650000,
    cpiReviewNotes: "Consolidé et conforme aux directives de planification.",
    deVisaNotes: "Vu et approuvé. Félicitations pour la rigueur du respect de l'échéance du 10 du mois. — SONON Tchéhouéa, DE"
  },
  {
    id: "rep-2026-08-tortues",
    reference: "RAP-MENS-2026-08-TM",
    month: "Août",
    year: 2026,
    authorName: "Nestor K. SOSSOU",
    authorRole: "Chargé du Programme Tortues Marines",
    projectCategory: "tortues",
    dateSubmitted: "2026-09-04",
    status: "valide_cpi",
    summary: "Rapport d'activité des patrouilles côtières de Togbin Fandji et Avlékété au titre du mois d'août 2026.",
    activitiesCompleted: [
      "22 patrouilles nocturnes effectuées par les binômes d'éco-gardes.",
      "Prise en charge de 14 montées de femelles sur la plage de Togbin.",
      "Sauvetage d'une tortue verte prise accidentellement dans un filet de pêche artisanale à Avlékété."
    ],
    quantitativeResults: [
      { label: "Km parcourus à pied de nuit", value: "480 km cumulés" },
      { label: "Œufs protégés en écloserie", value: "1 280 œufs" },
      { label: "Pêcheurs contactés en direct", value: "42 pêcheurs" }
    ],
    challengesFaced: "Pénurie temporaire de piles étanches pour les projecteurs frontaux des veilleurs de nuit.",
    solutionsApplied: "Dépannage d'urgence sur la caisse d'avance de l'ONG avec achat de batteries rechargeables.",
    nextMonthPlanning: "Entretien préventif de l'enclos de l'écloserie avant les grosses émergences de septembre.",
    financialNeedsFCFA: 420000,
    cpiReviewNotes: "Vérifié et validé par le CPI le 06/09/2026. Travail exemplaire sur le terrain. — Henri D. FATCHINA"
  },
  {
    id: "rep-2026-08-mangroves",
    reference: "RAP-MENS-2026-08-MEC",
    month: "Août",
    year: 2026,
    authorName: "Christine ADANHOUNSO",
    authorRole: "Chargée du Programme Mangroves",
    projectCategory: "mangroves",
    dateSubmitted: "2026-09-05",
    status: "valide_cpi",
    summary: "Suivi des pépinières villageoises et préparation des vasières pour la campagne de repiquage de fin de saison humide.",
    activitiesCompleted: [
      "Entretien des 2 pépinières de palétuviers rouges.",
      "Animation de 2 réunions avec le groupement des femmes saunières de Togbin.",
      "Inventaire de la survie des plants mis en terre en juin : taux de reprise encourageant de 84%."
    ],
    quantitativeResults: [
      { label: "Plants prêts à la mise en terre", value: "12 000 plants" },
      { label: "Femmes mobilisées", value: "35 participantes actives" }
    ],
    challengesFaced: "Dépôts sauvages d'ordures plastiques charriées par les chenaux lagunaires.",
    solutionsApplied: "Organisation d'une demi-journée d'assainissement communautaire avec les jeunes du village.",
    nextMonthPlanning: "Repiquage de 5 hectares prioritaires dès la première semaine de septembre.",
    financialNeedsFCFA: 580000,
    cpiReviewNotes: "Validé le 07/09/2026 par le CPI. Données intégrées dans la base statistique. — Henri D. FATCHINA"
  },
  {
    id: "rep-2026-07-cpi",
    reference: "RAP-MENS-2026-07-CPI",
    month: "Juillet",
    year: 2026,
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    projectCategory: "gouvernance",
    dateSubmitted: "2026-08-08",
    status: "vise_de",
    summary: "Rapport consolidé du mois de juillet 2026. Bilan de mi-parcours des projets et mise en place des préparatifs pour la saison intense des pontes.",
    activitiesCompleted: [
      "Synthèse semestrielle des indicateurs de performance.",
      "Session de concertation avec le Chargé PTF sur le rapport d'étape du FEM.",
      "Supervision du renouvellement des fiches de stocks et de matériel de terrain."
    ],
    quantitativeResults: [
      { label: "Taux global d'exécution physique", value: "62%" },
      { label: "Rapports départementaux reçus", value: "100% à l'échéance" }
    ],
    challengesFaced: "Retard de transmission des justificatifs de transport de deux animateurs.",
    solutionsApplied: "Rappel à l'ordre et mise en place du modèle de reçu numérique standardisé.",
    nextMonthPlanning: "Intensification des patrouilles maritimes et renforcement de la communication grand public.",
    financialNeedsFCFA: 600000,
    cpiReviewNotes: "Rapport conforme. Visa DE obtenu.",
    deVisaNotes: "Validé le 09/08/2026. Poursuivre le strict respect des délais de rapportage. — SONON Tchéhouéa, DE"
  }
];

export const INITIAL_PTF_PARTNERS: TechnicalFinancialPartner[] = [
  {
    id: "ptf-fem-micro",
    name: "Programme de Microfinancements du FEM (PMF / GEF - PNUD)",
    type: "Bailleur International",
    status: "Partenaire Actif",
    conventionTitle: "Projet Communautaire de Sauvegarde du Littoral et Conservation de la Faune Marine à Togbin",
    conventionBudgetFCFA: 25000000,
    disbursedBudgetFCFA: 17500000,
    nextDeliverableDate: "2026-10-15",
    nextDeliverableTitle: "Rapport d'étape technique T3 & Pièces justificatives financières Dolibarr",
    contactPerson: "Coordonnateur National PMF/FEM Bénin",
    contactEmail: "pmf.benin@undp.org",
    focusArea: "Biodiversité marine, protection des tortues et appui communautaire"
  },
  {
    id: "ptf-mcvdd",
    name: "Ministère du Cadre de Vie & du Développement Durable (Bénin)",
    type: "Ministère / État Béninois",
    status: "Partenaire Actif",
    conventionTitle: "Protocole d'Accord de Cogestion des Écosystèmes Côtiers et Mangroves",
    conventionBudgetFCFA: 15000000,
    disbursedBudgetFCFA: 10000000,
    nextDeliverableDate: "2026-11-30",
    nextDeliverableTitle: "Rapport technique annuel d'état écologique des mangroves côtières",
    contactPerson: "Direction Générale des Eaux, Forêts et Chasse (DGEFC)",
    contactEmail: "dgefc.cadrevie@gouv.bj",
    focusArea: "Reboisement des mangroves et surveillance de la biodiversité"
  },
  {
    id: "ptf-uicn",
    name: "Comité Français / Afrique de l'UICN (Union Internationale pour la Conservation de la Nature)",
    type: "ONG Internationale",
    status: "Partenaire Actif",
    conventionTitle: "Fonds Petits Projets pour les Écosystèmes Côtiers d'Afrique de l'Ouest",
    conventionBudgetFCFA: 12000000,
    disbursedBudgetFCFA: 8500000,
    nextDeliverableDate: "2026-12-10",
    nextDeliverableTitle: "Inventaire cartographique des nids et cohortes de nouveau-nés",
    contactPerson: "Chargé de Programme PPI Afrique de l'Ouest",
    contactEmail: "contact.ppi@uicn.org",
    focusArea: "Tortues marines et renforcement de capacités des ONG locales"
  },
  {
    id: "ptf-ue-benin",
    name: "Délégation de l'Union Européenne en République du Bénin",
    type: "Bailleur International",
    status: "Convention en négociation",
    conventionTitle: "Appui à la Résilience Climatique du Littoral Ouest-Africain (Phase 2)",
    conventionBudgetFCFA: 45000000,
    disbursedBudgetFCFA: 0,
    nextDeliverableDate: "2026-10-30",
    nextDeliverableTitle: "Dossier technique complet (Rédigé par CPI) & Offre financière (Négociée par Chargé PTF)",
    contactPerson: "Attaché Coopération Environnement UE Cotonou",
    contactEmail: "delegation-benin@eeas.europa.eu",
    focusArea: "Protection côtière, atténuation de l'érosion marine et économie bleue"
  },
  {
    id: "ptf-ambassade-france",
    name: "Service de Coopération de l'Ambassade de France au Bénin (PISCCA)",
    type: "Bailleur International",
    status: "En prospection",
    conventionTitle: "Soutien aux Initiatives Jeunes et Femmes pour les Écosystèmes Lagunaires",
    conventionBudgetFCFA: 18000000,
    disbursedBudgetFCFA: 0,
    nextDeliverableDate: "2026-11-15",
    nextDeliverableTitle: "Note conceptuelle d'avant-projet",
    contactPerson: "Conseiller Régional PISCCA",
    contactEmail: "cooperation.cotonou-amba@diplomatie.gouv.fr",
    focusArea: "Genre, foyers améliorés et reboisement de palétuviers"
  }
];

export const DRIVE_HIERARCHY: DriveFolderNode = {
  id: "drive-root",
  name: "AMSHARTE_OFFICIEL_WORKSPACE",
  code: "ROOT-AMSHARTE",
  ownerRole: "Direction Exécutive & CPI",
  description: "Dossier racine officiel sécurisé de l'ONG AMSHARTE sur Google Drive",
  colorTag: "blue",
  children: [
    {
      id: "folder-01",
      name: "01_DIRECTION_EXECUTICE_DE",
      code: "DE-SEC",
      ownerRole: "Directeur Exécutif (SONON Tchéhouéa)",
      description: "Textes fondamentaux, statuts, PV d'Assemblées Générales, notes de service, correspondances ministérielles officielles.",
      colorTag: "indigo",
      children: [
        { id: "f-01-1", name: "01.1_Statuts_et_Recepisse_Officiel", code: "DE-STAT", ownerRole: "DE", description: "Enregistrement légal au Journal Officiel de la République du Bénin.", colorTag: "indigo" },
        { id: "f-01-2", name: "01.2_Notes_de_Service_et_Nominations", code: "DE-NOTES", ownerRole: "DE", description: "Cahiers de charges officiels signés (dont Note N°... CPI Henri D. FATCHINA).", colorTag: "indigo" },
        { id: "f-01-3", name: "01.3_Conseil_Administration_PCA", code: "DE-PCA", ownerRole: "DE / PCA", description: "Rapports moraux, PV de réunions du Conseil d'Administration.", colorTag: "indigo" }
      ]
    },
    {
      id: "folder-02",
      name: "02_COORDINATION_PROGRAMMES_CPI",
      code: "CPI-COORD",
      ownerRole: "Chargé de Programmes par Intérim (Henri D. FATCHINA)",
      description: "Pilotage opérationnel, chronogrammes, cadres logiques, fiches de suivi, consolidation mensuelle et annuelle.",
      colorTag: "emerald",
      children: [
        { id: "f-02-1", name: "02.1_Plans_de_Travail_Annuels_PTA", code: "CPI-PTA", ownerRole: "CPI", description: "Planification stratégique et opérationnelle 2026-2027.", colorTag: "emerald" },
        { id: "f-02-2", name: "02.2_Rapports_Mensuels_Consolides_J10", code: "CPI-RAP-MENS", ownerRole: "CPI", description: "Tous les rapports consolidés avant le 10 de chaque mois échu.", colorTag: "emerald" },
        { id: "f-02-3", name: "02.3_Rapports_Annuels_Activite_Fev1", code: "CPI-RAP-ANN", ownerRole: "CPI", description: "Rapports d'activité annuels validés avant le 1er février.", colorTag: "emerald" },
        { id: "f-02-4", name: "02.4_Formations_et_Ateliers", code: "CPI-FORM", ownerRole: "CPI", description: "Modules pédagogiques, listes de présence, attestations des formateurs.", colorTag: "emerald" }
      ]
    },
    {
      id: "folder-03",
      name: "03_FINANCES_ET_DOLIBARR_SYNTHESE",
      code: "RAF-FIN",
      ownerRole: "Responsable Financier (Brice HOUNGBO) & DE",
      description: "Budgets prévisionnels, exports comptables Dolibarr, synthèses de trésorerie Google Sheets, audits.",
      colorTag: "purple",
      children: [
        { id: "f-03-1", name: "03.1_Budgets_Projets_et_Fonctionnement", code: "FIN-BUD", ownerRole: "RAF", description: "Fichiers de cadrage budgétaire et tableaux de bord partagés.", colorTag: "purple" },
        { id: "f-03-2", name: "03.2_Exports_Comptables_Dolibarr_CSV", code: "FIN-DOL", ownerRole: "RAF", description: "Grands livres, balances, journaux d'achats et dons synchronisés.", colorTag: "purple" },
        { id: "f-03-3", name: "03.3_Justificatifs_Depenses_et_Missions", code: "FIN-JUSTIF", ownerRole: "RAF / CPI", description: "Feuilles de route des déplacements, reçus certifiés, forfaits terrain.", colorTag: "purple" }
      ]
    },
    {
      id: "folder-04",
      name: "04_PROGRAMME_TORTUES_MARINES",
      code: "PROJ-TM",
      ownerRole: "Chargé Programme Tortues (Nestor SOSSOU) & CPI",
      description: "Protocoles de patrouille, fiches biométriques, données GPS des nids, registre de l'écloserie de Togbin.",
      colorTag: "cyan",
      children: [
        { id: "f-04-1", name: "04.1_Fiches_de_Patrouilles_Nocturnes", code: "TM-PAT", ownerRole: "CP-TM", description: "Cahiers de bord des veilles sur les plages.", colorTag: "cyan" },
        { id: "f-04-2", name: "04.2_Registres_Ecloserie_Togbin_Fandji", code: "TM-ECL", ownerRole: "CP-TM", description: "Suivi des incubations et lâchers de nouveau-nés.", colorTag: "cyan" },
        { id: "f-04-3", name: "04.3_Sensibilisation_Pecheurs_Artisans", code: "TM-PECH", ownerRole: "CP-TM", description: "Accords de libération des tortues prises dans les filets.", colorTag: "cyan" }
      ]
    },
    {
      id: "folder-05",
      name: "05_PROGRAMME_MANGROVES_ET_ZONES_HUMIDES",
      code: "PROJ-MEC",
      ownerRole: "Chargée Programme Mangroves (Christine ADANHOUNSO) & CPI",
      description: "Cartographie des vasières, pépinières communautaires de palétuviers, suivi des taux de reprise, conventions villageoises.",
      colorTag: "emerald",
      children: [
        { id: "f-05-1", name: "05.1_Pepinières_et_Suivi_Propagules", code: "MEC-PEP", ownerRole: "CP-MEC", description: "Statistiques de germination et entretien des plants.", colorTag: "emerald" },
        { id: "f-05-2", name: "05.2_Parcelles_Reboisees_et_SIG", code: "MEC-SIG", ownerRole: "CP-MEC", description: "Relevés GPS des 40 hectares en cours de réhabilitation.", colorTag: "emerald" },
        { id: "f-05-3", name: "05.3_Comites_Villageois_et_Femmes", code: "MEC-COM", ownerRole: "CP-MEC", description: "Actes de création des comités et dotation en foyers améliorés.", colorTag: "emerald" }
      ]
    },
    {
      id: "folder-06",
      name: "06_PARTENAIRES_TECHNIQUES_FINANCIERS_PTF",
      code: "PTF-CONV",
      ownerRole: "Chargé PTF (Sylvain AKPO) & DE / CPI",
      description: "Dossiers de soumission aux appels d'offres, conventions signées avec les bailleurs, correspondances de suivi.",
      colorTag: "amber",
      children: [
        { id: "f-06-1", name: "06.1_Conventions_Signees_Actives", code: "PTF-SIGN", ownerRole: "DE / PTF", description: "Conventions FEM/PNUD, Ministère du Cadre de Vie, UICN.", colorTag: "amber" },
        { id: "f-06-2", name: "06.2_Propositions_en_Cours_de_Negociation", code: "PTF-PROP", ownerRole: "CPI / PTF", description: "Dossiers techniques préparés par le CPI et offres budgétaires.", colorTag: "amber" }
      ]
    },
    {
      id: "folder-07",
      name: "07_COMMUNICATION_ET_VISIBILITE",
      code: "COM-MED",
      ownerRole: "Chargé de Communication (Eric GBENOU)",
      description: "Banque d'images haute définition, logos officiels, articles du site Google Sites, communiqués de presse.",
      colorTag: "rose",
      children: [
        { id: "f-07-1", name: "07.1_Phototheque_et_Videos_Terrain", code: "COM-IMG", ownerRole: "COM", description: "Reportages patrouilles nocturnes et pépinières de Togbin.", colorTag: "rose" },
        { id: "f-07-2", name: "07.2_Site_Web_Google_Sites_Assets", code: "COM-WEB", ownerRole: "COM", description: "Bannières, textes validés et fiches projets pour la vitrine.", colorTag: "rose" },
        { id: "f-07-3", name: "07.3_Chartes_Graphiques_Bailleurs", code: "COM-LOGO", ownerRole: "COM", description: "Logos officiels obligatoires (UE, PNUD, FEM, État béninois).", colorTag: "rose" }
      ]
    },
    {
      id: "folder-08",
      name: "08_POINTS_FOCAUX_DEPARTEMENTAUX",
      code: "PF-TERRAIN",
      ownerRole: "Points Focaux & CPI",
      description: "Dossiers partagés par département (Atlantique, Littoral, Ouidah, Grand-Popo) pour la remontée mensuelle via Google Forms.",
      colorTag: "teal"
    }
  ]
};

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Saison de ponte 2026 : Plus de 80 nids de tortues marines sécurisés à Togbin Fandji",
    date: "10 Septembre 2026",
    category: "Biodiversité Marine",
    summary: "Sous la supervision du CPI Henri D. FATCHINA et de l'équipe de patrouilleurs menée par Nestor SOSSOU, l'ONG AMSHARTE enregistre des résultats historiques de sauvegarde sur le littoral béninois.",
    fullText: "Les patrouilles nocturnes menées quotidiennement sur plus de 35 kilomètres de plage entre Togbin, Avlékété et Ouidah ont permis d'enregistrer une augmentation notable de montées de femelles pondeuses. Grâce à l'écloserie modèle de Togbin Fandji, plus de 6 100 nouveau-nés ont déjà rejoint l'océan Atlantique en toute sécurité, hors de portée des prédateurs et du braconnage. L'engagement des pêcheurs locaux formés comme sentinelles marines constitue la clé de voûte de cette réussite écologique exemplaire.",
    author: "Éric GBENOU, Chargé Communication",
    readTime: "3 min de lecture"
  },
  {
    id: "news-2",
    title: "Restauration des Mangroves : 40 hectares en cours de réhabilitation sur la lagune côtière",
    date: "28 Août 2026",
    category: "Restauration Écologique",
    summary: "Le programme Mangroves piloté par Christine ADANHOUNSO mobilise 4 comités villageois et plus de 70 femmes autour de pépinières communautaires de palétuviers rouges.",
    fullText: "La dégradation des zones humides menace l'équilibre hydrologique et la ressource halieutique dont dépendent des milliers de familles riveraines. L'ONG AMSHARTE a mis en place deux grandes pépinières communautaires produisant plus de 60 000 propagules. En parallèle, des foyers améliorés économes en bois de feu ont été distribués aux femmes transformatrices de poisson, diminuant de plus de 45% la pression de coupe sur les palétuviers.",
    author: "Henri Doudédji FATCHINA, CPI",
    readTime: "4 min de lecture"
  },
  {
    id: "news-3",
    title: "Partenariat stratégique : Le Directeur Exécutif SONON Tchéhouéa renforce les liens avec les PTF",
    date: "15 Août 2026",
    category: "Institutionnel & Partenariats",
    summary: "Séance de travail bilatérale avec les représentants du Programme de Microfinancements du FEM et de l'Union Européenne au siège opérationnel de Togbin Fandji.",
    fullText: "Accompagné du CPI Henri Doudédji FATCHINA et du Chargé PTF Sylvain AKPO, le Directeur Exécutif a présenté les états d'avancement des projets et la nouvelle infrastructure numérique d'AMSHARTE combinant Google Workspace pour le terrain et Dolibarr ERP pour la rigueur financière. Les bailleurs ont salué la ponctualité exemplaire des rapports mensuels soumis systématiquement dans les 10 jours suivant le mois échu.",
    author: "Direction Exécutive AMSHARTE",
    readTime: "3 min de lecture"
  }
];

export const INITIAL_FIELD_ACTIONS: FieldActionPost[] = [
  {
    id: "action-video-01",
    title: "🎥 [Exemple Vidéo Terrain N°1] Écloserie de Togbin : Émersion nocturne et ruée de 142 nouveau-nés vers l'océan",
    date: "14 Septembre 2026",
    time: "05:15",
    location: "Écloserie Centrale & Plage de Togbin Fandji",
    category: "lacher_mer",
    authorName: "Nestor K. SOSSOU & Éco-gardes",
    authorRole: "Chargé du Programme Tortues Marines",
    species: "Tortue Olivâtre (Lepidochelys olivacea)",
    measurements: {
      eggsCount: 142,
      weightKg: 0.02
    },
    content: "Séquence vidéo exclusive enregistrée au lever du jour à l'écloserie de Togbin. Éclosion synchronisée dans le compartiment N°14 surveillé depuis 52 jours. Les 142 nouveau-nés ont été escortés jusqu'au ressac sous la vigilance des patrouilleurs pour éviter les attaques de prédateurs ailés et de crabes fantômes.",
    hasVideo: true,
    videoDuration: "02:14",
    videoCaption: "Lâcher sous brume matinale à Togbin Fandji — 142 nouveau-nés atteignant l'Atlantique en toute sécurité.",
    imageUrls: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1000&auto=format&fit=crop&q=80"
    ],
    isExampleMedia: true,
    examplePlaceholderLabel: "Exemple Vidéo Terrain — Cliquez sur « Remplacer ce média » pour injecter votre fichier MP4 ou vidéo WhatsApp",
    verifiedBy: "Police BPLP, DE SONON Tchéhouéa & CPI Henri D. FATCHINA",
    likes: 95,
    stakeholderCommentsCount: 11,
    extractedIntoReport: true
  },
  {
    id: "action-anim-02",
    title: "🌊 [Animation Pédagogique N°2] Simulation interactive : Corridor de ponte et transfert sécurisé vers l'écloserie",
    date: "13 Septembre 2026",
    time: "22:40",
    location: "Zone littorale de Togbin Fandji (Secteur des dunes)",
    category: "sauvetage_tortue",
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    species: "Tortue Luth & Tortue Olivâtre",
    content: "Animation interactive schématisant le protocole scientifique AMSHARTE : détection de la trace en amont de la laisse de haute mer, sécurisation périmétrique, balisage GPS et transfert thermique délicat vers l'enclos grillagé de Togbin Fandji.",
    isAnimated: true,
    animatedType: "corridor_carte",
    isExampleMedia: true,
    examplePlaceholderLabel: "Animation Visuelle Interactive — Remplaçable par vos animations, schémas ou clips vidéo",
    verifiedBy: "Conseil Scientifique AMSHARTE & MCVT",
    likes: 54,
    stakeholderCommentsCount: 6,
    extractedIntoReport: false
  },
  {
    id: "action-video-03",
    title: "🎥 [Exemple Vidéo Terrain N°3] Patrouille de nuit conjointe BPLP : Sauvegarde et baguage officiel BJ 2872",
    date: "12 Septembre 2026",
    time: "02:20",
    location: "Plage de Togbin Fandji (Secteur Ouest km 14)",
    category: "action_conjointe_bplp",
    authorName: "Équipe Mixte Police BPLP & Éco-gardes",
    authorRole: "Patrouilleurs Nocturnes d'Urgence",
    tagId: "BJ 2872",
    species: "Tortue Olivâtre (Lepidochelys olivacea)",
    measurements: {
      lengthCarapaceCm: 76,
      widthCarapaceCm: 71,
      weightKg: 42
    },
    content: "Extrait vidéo de nuit en lumière rouge inactinique : intervention conjointe de la Brigade de Protection du Littoral et des Plages (BPLP) et d'AMSHARTE lors de la sécurisation d'une femelle adulte en fin de ponte. Pose de la bague Inconel BJ 2872 et retour pacifique à la mer sans stress lumineux.",
    hasVideo: true,
    videoDuration: "01:38",
    videoCaption: "Patrouille nocturne conjointe : pose de la bague Inconel sous éclairage rouge réglementaire.",
    imageUrls: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1000&auto=format&fit=crop&q=80"
    ],
    isExampleMedia: true,
    examplePlaceholderLabel: "Exemple Vidéo Terrain — À remplacer par les enregistrements de patrouille WhatsApp",
    verifiedBy: "Officier BPLP & Direction Exécutive AMSHARTE",
    likes: 67,
    stakeholderCommentsCount: 8,
    extractedIntoReport: true
  },
  {
    id: "action-photo-01",
    title: "📷 [Reportage Photo N°1] Sauvetage nocturne et réintroduction océanique à Togbin Plage",
    date: "13 Septembre 2026",
    time: "06:10",
    location: "Plage de Togbin Fandji (Secteur des Pêcheurs)",
    category: "sauvetage_tortue",
    authorName: "Paulin KPADONOU & Éco-gardes",
    authorRole: "Chef de Patrouille Littoral",
    species: "Tortue Olivâtre (Lepidochelys olivacea)",
    tagId: "BJ 2873",
    measurements: {
      lengthCarapaceCm: 75,
      widthCarapaceCm: 70,
      weightKg: 41
    },
    content: "Série photographique de haute résolution capturée au lever du jour à Togbin Fandji. Après vérification par l'équipe vétérinaire et pose de la bague BJ 2873, la tortue adulte a été guidée avec soin vers la première déferlante. Présence des sentinelles villageoises et pêcheurs partenaires.",
    imageUrls: [
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1000&auto=format&fit=crop&q=80"
    ],
    verifiedBy: "Coordination Vétérinaire & CPI Henri D. FATCHINA",
    likes: 82,
    stakeholderCommentsCount: 12,
    extractedIntoReport: true
  },
  {
    id: "action-photo-02",
    title: "📷 [Reportage Photo N°2] Opération Ayi Dji Ni Min : Pesée et tri de 320 kg de macro-plastiques",
    date: "11 Septembre 2026",
    time: "16:45",
    location: "Bordure littorale de Togbin Fandji",
    category: "salubrite_ayi_dji_ni_min",
    authorName: "Sosthène HOUNKPATIN",
    authorRole: "Responsable Hygiène, Salubrité Côtière & SST",
    content: "Documentation photographique de la collecte communautaire hebdomadaire. Plus de 320 kg de plastiques usagés, débris de filets et emballages ont été extraits du haut de plage pour dégager le passage des nouveau-nés vers la mer.",
    imageUrls: [
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1000&auto=format&fit=crop&q=80"
    ],
    verifiedBy: "Direction Exécutive (SONON Tchéhouéa)",
    likes: 74,
    stakeholderCommentsCount: 9,
    extractedIntoReport: true
  },
  {
    id: "action-01",
    title: "Action conjointe : Sécurisation, baguage BJ 2872 et remise en mer avec la Police BPLP",
    date: "12 Septembre 2026",
    time: "10:15",
    location: "Plage de Togbin Fandji (Secteur Ouest)",
    category: "action_conjointe_bplp",
    authorName: "Nestor K. SOSSOU",
    authorRole: "Chargé du Programme Tortues Marines",
    tagId: "BJ 2872",
    species: "Tortue Olivâtre (Lepidochelys olivacea)",
    measurements: {
      lengthCarapaceCm: 76,
      widthCarapaceCm: 71,
      weightKg: 42
    },
    imageUrls: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80"
    ],
    content: "Intervention conjointe décisive sur la plage de Togbin réunissant les officiers de la Brigade de Protection du Littoral et des Plages (BPLP), les forces de sécurité républicaines, les éco-gardes d'AMSHARTE et les pêcheurs artisans. La femelle adulte en ponte a été protégée contre toute tentative de braconnage. Pose officielle de la bague métallique BJ 2872 sur la nageoire antérieure gauche, contrôle de vitalité et libération réussie vers l'océan sous les acclamations des populations.",
    verifiedBy: "Police BPLP, Direction Exécutive (SONON Tchéhouéa) & CPI (Henri D. FATCHINA)",
    likes: 38,
    stakeholderCommentsCount: 7,
    extractedIntoReport: true
  },
  {
    id: "action-02",
    title: "Prise de constantes biométriques et baguage officiel BJ 2871 avant lâcher",
    date: "11 Septembre 2026",
    time: "13:31",
    location: "Plage de Togbin",
    category: "baguage_constante",
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    tagId: "BJ 2871",
    species: "Tortue Verte / Olivâtre",
    measurements: {
      lengthCarapaceCm: 74,
      widthCarapaceCm: 69,
      weightKg: 39
    },
    content: "Enregistrement rigoureux au registre d'observation de Togbin. Prise des constantes physiologiques, vérification de l'absence de blessures de filets ou de marques d'hameçons. Fixation de la bague BJ 2871 avec pince spéciale de marquage. Remise à l'eau sans encombre avec les éco-gardes.",
    verifiedBy: "Henri Doudédji FATCHINA (CPI)",
    likes: 29,
    stakeholderCommentsCount: 4,
    extractedIntoReport: true
  },
  {
    id: "action-03",
    title: "Enregistrement historique : Découverte du site des tortues de Togbin par la MdSC (M. Gabin AZOMAN)",
    date: "26 Août 2026",
    time: "18:30",
    location: "Écloserie et Site des Tortues, Togbin Fandji",
    category: "sauvetage_tortue",
    authorName: "SONON Tchéhouéa",
    authorRole: "Directeur Exécutif (DE)",
    content: "Visite officielle et découverte mémorable du site d'incubation et de sauvegarde des tortues de Togbin Fandji par la délégation de la Maison de la Société Civile (MdSC) conduite par M. Gabin AZOMAN. Constat de la rigueur du travail d'AMSHARTE, des 22 ans d'engagement depuis 2004, de l'implication des 33 membres et bénévoles, et de l'urgence de renforcer les moyens d'équipement (moto d'alerte nocturne, balances, rénovation des bacs).",
    verifiedBy: "M. Gabin AZOMAN (MdSC) & SONON Tchéhouéa (DE)",
    likes: 64,
    stakeholderCommentsCount: 12,
    extractedIntoReport: true
  },
  {
    id: "action-04",
    title: "Collecte de 128 œufs en ponte vulnérable et mise en incubation à l'écloserie rénovée",
    date: "08 Septembre 2026",
    time: "05:45",
    location: "Écloserie modèle de Togbin (Rénovée par AGL & Bénin Terminal)",
    category: "ecloserie_oeufs",
    authorName: "Équipe Éco-gardes & Chargée Environnement",
    authorRole: "Patrouilleurs bénévoles Togbin",
    measurements: {
      eggsCount: 128
    },
    content: "Ponte nocturne repérée à 4 km à l'Est sous risque imminent de submersion par les fortes marées et de prédation par les chiens errants. Transfert méticuleux des 128 œufs dans des seaux ventilés garnis de sable humide, puis enfouissement à profondeur réglementaire (60 cm) dans les compartiments sécurisés de l'écloserie sous enclos en bois.",
    verifiedBy: "Nestor K. SOSSOU & Éco-gardes",
    likes: 45,
    stakeholderCommentsCount: 5,
    extractedIntoReport: true
  },
  {
    id: "action-05",
    title: "Lâcher festif de 3 tortues adultes et nouveau-nés dans le ressac atlantique",
    date: "04 Septembre 2026",
    time: "17:20",
    location: "Rivage de Togbin Plage",
    category: "lacher_mer",
    authorName: "Nestor K. SOSSOU",
    authorRole: "Chargé du Programme Tortues Marines",
    content: "Moment intense de célébration communautaire et d'éco-sensibilisation. Trois tortues soignées après démaillage pacifique par les pêcheurs ont regagné l'océan, accompagnées par les chants traditionnels de sauvegarde entonnés par les femmes et les enfants de Togbin. Des cadeaux et encouragements ont été remis aux bénévoles éco-gardes.",
    hasVideo: true,
    videoCaption: "Vidéo du lâcher dans les rouleaux atlantiques au son du chant de protection « Toti ni ci pa, Toti so vo le »",
    verifiedBy: "CPI Henri D. FATCHINA & Chefs de Pêche",
    likes: 82,
    stakeholderCommentsCount: 9,
    extractedIntoReport: false
  },
  {
    id: "action-06",
    title: "Sensibilisation active des pêcheurs artisans et démaillage sans mise à mort",
    date: "01 Septembre 2026",
    time: "09:30",
    location: "Point de débarquement de pêche, Togbin Plage",
    category: "sensibilisation_pecheurs",
    authorName: "Éco-garde en gilet officiel AMSHARTE",
    authorRole: "Patrouilleur Sentinelle",
    content: "Séance d'échange direct sur la plage avec les capitaines de pirogues et les mareyeuses. Explication des démarches en cas de prise accidentelle dans les filets dormants : appel direct de la patrouille AMSHARTE, indemnisation forfaitaire pour la réparation des filets abîmés, et rappel de la période de repos biologique de juillet.",
    verifiedBy: "Chef de pêche Togbin & DE SONON Tchéhouéa",
    likes: 31,
    stakeholderCommentsCount: 3,
    extractedIntoReport: false
  },
  {
    id: "action-07",
    title: "Examen biométrique et autopsie d'une tortue échouée sans vie",
    date: "25 Août 2026",
    time: "11:00",
    location: "Bordure de plage de Togbin",
    category: "sauvetage_tortue",
    authorName: "Nestor K. SOSSOU & CPI FATCHINA",
    authorRole: "Équipe Scientifique AMSHARTE",
    content: "Constat d'échouage d'une tortue marine sans vie rejetée par la marée haute. Relevé métrique, inspection de la carapace et des poumons. Absence de blessure par hélice mais présence de fragments de filets en nylon. Données enregistrées pour le rapport annuel de mortalité destiné au Ministère du Cadre de Vie (MCVT).",
    verifiedBy: "Direction Exécutive & MCVT",
    likes: 19,
    stakeholderCommentsCount: 6,
    extractedIntoReport: true
  },
  {
    id: "action-08",
    title: "Initiative de salubrité compétitive « Ayi Dji Ni Min » / « Zogbodo Gan » (6ème édition)",
    date: "18 Août 2026",
    time: "08:00",
    location: "Les 3 quartiers de Togbin et front de mer",
    category: "salubrite_ayi_dji_ni_min",
    authorName: "Mme AKPODJI Philomène & DE SONON Tchéhouéa",
    authorRole: "Présidence du CA & Direction Exécutive",
    content: "Mobilisation générale pour la 6ème édition de « Zogbodo Gan » : concours du quartier le plus propre et du travailleur qui utilise au mieux les équipements de protection individuelle (QLPP 3T). L'objectif est d'étendre la propreté irréprochable de la plage de ponte aux quartiers environnants et habitations de pêcheurs.",
    verifiedBy: "Maire / Élus locaux & Conseil d'Administration AMSHARTE",
    likes: 54,
    stakeholderCommentsCount: 8,
    extractedIntoReport: false
  }
];

export const INITIAL_FORUM_THREADS: StakeholderForumThread[] = [
  {
    id: "thread-01",
    title: "Coopération BPLP - AMSHARTE : Protocole de patrouilles de nuit et besoin urgent d'une moto d'alerte",
    category: "securite_bplp",
    createdAt: "2026-09-10",
    authorName: "Officier BPLP & SONON Tchéhouéa",
    authorRole: "Brigade de Protection du Littoral & DE",
    authorOrg: "Police Républicaine / AMSHARTE",
    description: "Les braconniers opèrent de nuit entre 01h et 04h du matin sur les zones d'Avlékété et Togbin Fandji. Parfois, c'est la course poursuite de la BPLP avec les braconniers. Il est vital de doter l'équipe d'une moto tout-terrain pour intervenir en moins de 15 minutes sur les alertes de pontes.",
    status: "ouvert",
    priority: "urgente",
    comments: [
      {
        id: "c1-1",
        authorName: "Capitaine BPLP",
        authorRole: "Commandant d'unité littorale",
        organization: "Police Républicaine du Bénin",
        timestamp: "10 Septembre 2026 à 14h20",
        content: "Nos hommes sont mobilisés chaque nuit. La présence des éco-gardes en gilet jaune d'AMSHARTE facilite grandement l'identification des patrouilles légales. Nous soutenons la requête d'une moto pour les alertes.",
        isOfficialVisa: true
      },
      {
        id: "c1-2",
        authorName: "Henri Doudédji FATCHINA",
        authorRole: "CPI",
        organization: "ONG AMSHARTE",
        timestamp: "11 Septembre 2026 à 09:10",
        content: "Besoin chiffré dans notre tableau budgétaire : 1 200 000 FCFA pour une moto adaptée au sable côtier + forfaits carburant mensuels.",
        isOfficialVisa: false
      }
    ]
  },
  {
    id: "thread-02",
    title: "Consortiums & Mécénat : Rénovation de l'écloserie par AGL & Bénin Terminal et appui SOGEA SATOM",
    category: "financement_ptf",
    createdAt: "2026-09-02",
    authorName: "Sylvain D. AKPO",
    authorRole: "Chargé Mobilisation PTF",
    authorOrg: "AMSHARTE / Consortiums",
    description: "Point sur le fonctionnement des trois écloseries construites avec SOGEA SATOM dans le cadre du Consortium Nature Tropicale - AMSHARTE - Action Plus, et les récents travaux de rénovation de l'écloserie de Togbin par AGL & Bénin Terminal. Nécessité d'organiser un système durable de renouvellement de l'eau dans les bacs de transit.",
    status: "en_cours_resolution",
    priority: "haute",
    comments: [
      {
        id: "c2-1",
        authorName: "Représentant RSE AGL / Bénin Terminal",
        authorRole: "Partenaire Technique",
        organization: "AGL & Bénin Terminal",
        timestamp: "03 Septembre 2026 à 11h00",
        content: "Nous nous réjouissons des résultats visibles à Togbin. L'accueil des scolaires et touristes contribue à l'éducation environnementale de notre jeunesse.",
        isOfficialVisa: true
      },
      {
        id: "c2-2",
        authorName: "SONON Tchéhouéa",
        authorRole: "Directeur Exécutif",
        organization: "ONG AMSHARTE",
        timestamp: "04 Septembre 2026 à 16h45",
        content: "Merci infini à nos partenaires. Le renouvellement d'eau des bacs reste notre priorité logistique immédiate pour le bien-être des tortues en observation avant lâcher.",
        isOfficialVisa: false
      }
    ]
  },
  {
    id: "thread-03",
    title: "Accord avec les chefs de pêche : Réparation des filets déchirés et repos biologique de Juillet",
    category: "pecheurs_filets",
    createdAt: "2026-08-28",
    authorName: "Chef de pêche Togbin Plage",
    authorRole: "Délégué des pêcheurs artisans",
    authorOrg: "Comité des Pêcheurs de Togbin",
    description: "Les tortues prises accidentellement dans les filets maillants causent d'importantes déchirures. Les pêcheurs acceptent volontiers de remettre les tortues vivantes à AMSHARTE, mais ont besoin d'un appui d'urgence pour le fil de réparation et durant le repos biologique annuel de juillet.",
    status: "ouvert",
    priority: "haute",
    comments: [
      {
        id: "c3-1",
        authorName: "Henri Doudédji FATCHINA",
        authorRole: "CPI",
        organization: "ONG AMSHARTE",
        timestamp: "29 Août 2026 à 10:15",
        content: "Proposition actée : chaque remise de tortue avec bague donne lieu à la remise d'un kit de fil de réparation et d'une indemnité forfaitaire pour le temps de démaillage.",
        isOfficialVisa: true
      }
    ]
  },
  {
    id: "thread-04",
    title: "Partenariat officiel MCVT (Lettre N° 878/MCVT) et vulgarisation des Aires Marines Protégées (AMP)",
    category: "amp_politiques",
    createdAt: "2026-08-20",
    authorName: "Direction Générale MCVT & DE SONON Tchéhouéa",
    authorRole: "Ministère du Cadre de Vie & Direction AMSHARTE",
    authorOrg: "MCVT / AMSHARTE",
    description: "Suite à la reconnaissance officielle de partenariat (Lettre N° 878/MCVT/DC/CTR/SP-c du 07 Juillet 2026), organisation d'ateliers avec les élus communaux d'Abomey-Calavi et Ouidah pour vulgariser le décret du Conseil des Ministres du 5 Janvier 2022 créant les 1ères Aires Marines Protégées (AMP) au Bénin.",
    status: "ouvert",
    priority: "moyenne",
    comments: [
      {
        id: "c4-1",
        authorName: "Délégué Départemental MCVT",
        authorRole: "Représentant Étatique",
        organization: "Ministère du Cadre de Vie et des Transports",
        timestamp: "22 Août 2026 à 15h30",
        content: "AMSHARTE est un acteur clé de terrain reconnu par notre Ministère pour la concrétisation des objectifs nationaux d'AMP.",
        isOfficialVisa: true
      }
    ]
  }
];

export const INITIAL_OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: "doc-manuel-formation",
    title: "Manuel Officiel de Formation & Guide d'Utilisation du Portail Numérique AMSHARTE",
    category: "guide_terrain",
    referenceNumber: "MAN-FORM-AMSHARTE-2026-V1",
    issueDate: "2026-09-15",
    issuedBy: "Direction des Programmes (CPI) & Direction Exécutive (DE)",
    description: "Manuel pratique exhaustif destiné aux 33 membres d'AMSHARTE pour l'exploitation du portail numérique : procédures de soumission des fiches et rapports mensuels de tâches (Règle J+10), publication d'actions de terrain, gestion des alertes d'écloserie et administration du système.",
    downloadFileName: "AMSHARTE_Manuel_Formation_Portail_Numerique.pdf",
    contentSummary: [
      "Module 1 : Architecture du portail, identité officielle et coordonnées d'urgence sur le littoral.",
      "Module 2 : Publication dans le fil d'actualité et intégration des photos/vidéos de terrain.",
      "Module 3 : Procédure de soumission des fiches et rapports mensuels de tâches pour les 33 membres (Règle J+10).",
      "Module 4 : Gestion du guichet d'alerte d'urgence tortues marines et transfert sécurisé vers l'écloserie de Togbin.",
      "Module 5 : Espaces de travail réservés (DE, CA et CPI) et traçabilité des opérations.",
      "Module 6 : Passerelle Google Workspace ↔ Dolibarr et assistance rédactionnelle IA."
    ],
    keyTerms: ["Manuel de Formation", "Guide d'Utilisation", "Rapports J+10", "33 Membres", "Espace DE", "Alerte Tortue"],
    isFeatured: true
  },
  {
    id: "doc-ca-01",
    title: "Procès-Verbal de Session Ordinaire du Conseil d'Administration — Session Annuelle 2026",
    category: "juridique",
    referenceNumber: "PV-AMSHARTE-CA-2026-01",
    issueDate: "2026-02-10",
    issuedBy: "Conseil d'Administration AMSHARTE — Présidente Mme Philomène AKPODJI",
    description: "Délibérations souveraines du Conseil d'Administration portant approbation du rapport d'activités, quitus financier de gestion accordé à la Direction Exécutive, fixation des orientations stratégiques 2026-2028 et contrôle de régularité Loi N° 2025-19.",
    downloadFileName: "AMSHARTE_PV_Conseil_Administration_2026_01.pdf",
    contentSummary: [
      "Validation à l'unanimité du rapport moral de la Présidente Mme Philomène AKPODJI et quitus financier accordé au DE SONON Tchéhouéa.",
      "Fixation du cap prioritaire : extension de la nursery de Togbin Plage, sanctuarisation de 35 km de littoral et renforcement du réseau d'éco-gardes.",
      "Confirmation de la stricte conformité aux statuts et dépôt légal au greffe selon la Loi N° 2025-19 (MISP).",
      "Validation de l'adhésion au Consortium Nature Tropicale - AMSHARTE - Action Plus."
    ],
    keyTerms: ["Conseil d'Administration", "Mme Philomène AKPODJI", "Quitus Financier", "Loi 2025-19", "Délibérations"],
    isFeatured: true
  },
  {
    id: "doc-01",
    title: "Lettre de Reconnaissance & Partenariat Officiel MCVT",
    category: "reconnaissance_etat",
    referenceNumber: "N° 878/MCVT/DC/CTR/SP-c",
    issueDate: "2026-07-07",
    issuedBy: "Ministère du Cadre de Vie et des Transports (MCVT), République du Bénin",
    description: "Acte formel de reconnaissance de l'ONG AMSHARTE comme partenaire stratégique de l'État pour la conservation marine, la gestion de l'écloserie de Togbin et la préservation de la biodiversité littorale.",
    downloadFileName: "AMSHARTE_Partenariat_Officiel_MCVT_Lettre_878.pdf",
    contentSummary: [
      "Reconnaissance du rôle d'AMSHARTE dans la protection des tortues marines (Lepidochelys olivacea, Dermochelys coriacea).",
      "Coordination conjointe avec les services des Eaux, Forêts et Chasses et la Police Républicaine (BPLP).",
      "Appui institutionnel pour l'encadrement des pêcheurs artisans et la vulgarisation des Aires Marines Protégées (AMP)."
    ],
    keyTerms: ["Partenariat d'État", "AMP Décret 2022", "Togbin Plage", "Ministère du Cadre de Vie"],
    isFeatured: true
  },
  {
    id: "doc-02",
    title: "Attestation de Conformité Juridique — Loi 2025-19",
    category: "juridique",
    referenceNumber: "N° PSO1509-260421-nhdJTH",
    issueDate: "2026-04-21",
    issuedBy: "Ministère de l'Intérieur et de la Sécurité Publique (MISP), République du Bénin",
    description: "Certificat officiel de mise en conformité intégrale de l'ONG AMSHARTE avec le nouveau régime juridique régissant les ONG, associations et fondations (Loi N° 2025-19).",
    downloadFileName: "AMSHARTE_Attestation_Conformite_Loi_2025_19.pdf",
    contentSummary: [
      "Enregistrement au registre national biométrique des associations et ONG.",
      "Validation des statuts rénovés et de la composition des instances dirigeantes.",
      "Habilitation à recevoir des subventions publiques et coopérations internationales."
    ],
    keyTerms: ["Loi 2025-19", "MISP", "Conformité 22 ans", "Statut Légal"],
    isFeatured: true
  },
  {
    id: "doc-03",
    title: "Protocole Scientifique de Baguage & Relevés Biométriques (Série BJ)",
    category: "protocole_scientifique",
    referenceNumber: "PROT-AMSHARTE-BIO-2026-02",
    issueDate: "2026-08-15",
    issuedBy: "Conseil Scientifique & Équipe de Suivi Écologique AMSHARTE",
    description: "Directives opératoires normalisées pour la pose des bagues métalliques Inconel (Série BJ 2871, BJ 2872...), mesures CCL/CCW de la carapace et prélèvements de données.",
    downloadFileName: "AMSHARTE_Protocole_Baguage_Biometrie_Serie_BJ.pdf",
    contentSummary: [
      "Critères de pose de la bague sur la nageoire antérieure gauche ou droite au repos.",
      "Relevé de la longueur courbe de la carapace (CCL) et largeur (CCW) au ruban métallique.",
      "Fiche d'observation des cicatrices d'hélices de pirogues et marques de filets maillants."
    ],
    keyTerms: ["Bagues Inconel Série BJ", "Biométrie CCL/CCW", "Suivi Écologique", "Lépidochélyde"],
    isFeatured: false
  },
  {
    id: "doc-04",
    title: "Guide Pratique des Patrouilles Nocturnes & Co-Surveillance BPLP",
    category: "guide_terrain",
    referenceNumber: "GUIDE-PAT-2026-V3",
    issueDate: "2026-08-01",
    issuedBy: "Coordination de Sécurité AMSHARTE & Brigade de Protection du Littoral et des Plages (BPLP)",
    description: "Manuel opérationnel destiné aux éco-gardes et policiers pour la couverture du secteur de Togbin à Avlékété (21h00 - 05h30).",
    downloadFileName: "AMSHARTE_Guide_Patrouilles_Nocturnes_BPLP.pdf",
    contentSummary: [
      "Utilisation exclusive de lampes frontales à faisceau rouge pour ne pas désorienter les femelles.",
      "Procédures d'interpellation légale en cas de flagrant délit de braconnage d'œufs ou capture.",
      "Transmission radio VHF et canal WhatsApp d'alerte immédiate pour la logistique de sauvetage."
    ],
    keyTerms: ["Police BPLP", "Patrouilles de nuit", "Éclairage rouge", "Protection des nids"],
    isFeatured: false
  },
  {
    id: "doc-05",
    title: "Charte de Co-Gestion & d'Appui Mutuel avec les Collectifs de Pêcheurs",
    category: "partenariat",
    referenceNumber: "CONV-PECHE-TOGBIN-2026",
    issueDate: "2026-06-12",
    issuedBy: "Collectif des Pêcheurs Artisans de Togbin Fandji & Direction AMSHARTE",
    description: "Accord formalisant la remise des tortues prises accidentellement dans les filets en échange d'un appui d'urgence en fil de réparation et kits d'entretien.",
    downloadFileName: "AMSHARTE_Charte_Alliance_Pecheurs_Artisans.pdf",
    contentSummary: [
      "Protocole de démaillage sécurisé sans sectionner les membres des tortues.",
      "Barème d'attribution des pelotes de fil de réparation nylon en compensation du filet abîmé.",
      "Sensibilisation au respect du repos biologique annuel de juillet."
    ],
    keyTerms: ["Pêche artisanale", "Filets maillants", "Compensation fil", "Démaillage pacifique"],
    isFeatured: false
  }
];

export const INITIAL_AI_DRAFT_DOCUMENTS: AiDraftDocument[] = [
  {
    id: "ai-draft-01",
    rawPromptOrText: "Note d'information conjointe DGEC-AMSHARTE N° 019/2026 : Renforcement du dispositif d'alerte SMS et WhatsApp pour le signalement rapide des échouages de tortues marines et cétacés sur la côte Sud-Bénin (Secteur Togbin - Avlékété - Grand-Popo). Émise le 14 Septembre 2026 par la Direction Générale de l'Environnement et du Climat.",
    proposedDoc: {
      id: "doc-ai-01",
      title: "Circulaire Conjointe DGEC/AMSHARTE : Réseau d'Alerte Côtière d'Échouage",
      category: "reconnaissance_etat",
      referenceNumber: "N° 019/DGEC/MCVT/AMSHARTE/2026",
      issueDate: "2026-09-14",
      issuedBy: "Direction Générale de l'Environnement et du Climat (DGEC) & AMSHARTE",
      description: "Protocole opérationnel d'activation d'alerte immédiate par SMS/WhatsApp pour la sécurisation des mammifères marins et des tortues échouées sur le cordon littoral béninois.",
      downloadFileName: "Circulaire_Alerte_Echouage_DGEC_AMSHARTE_2026.pdf",
      contentSummary: [
        "Mise en place d'une ligne d'urgence 24h/24 interconnectée avec le centre de secours de Togbin Fandji.",
        "Obligation pour les vigies et pêcheurs de relayer les coordonnées GPS et l'état de l'animal.",
        "Prise en charge vétérinaire d'urgence par le pôle scientifique de l'ONG avant remise à l'eau."
      ],
      keyTerms: ["DGEC", "Alerte Échouage", "Tortues Marines", "Cordon Littoral", "Intervention Rapide"],
      isFeatured: true,
      version: "v1.0 (Proposé par IA)",
      lastUpdated: "2026-09-14",
      status: "en_revision"
    },
    aiConfidenceScore: 96,
    aiAnalysisNotes: "L'IA a extrait la référence DGEC, structuré 3 points d'action opérationnelle et préconisé le classement en 'Reconnaissance MCVT / État'. Visa requis par le Directeur Exécutif ou le CPI.",
    createdAt: "14 Septembre 2026 à 18:20",
    status: "en_attente_visa",
    preparedBy: "Assistant IA AMSHARTE v2.5 (Modèle Documentaire Bénin)"
  },
  {
    id: "ai-draft-02",
    rawPromptOrText: "Protocole d'accord tripartite de cogestion communautaire de la mangrove de Togbin entre l'Association des Femmes Transformatrices de Poisson, le Chef de Village de Togbin Fandji et l'ONG AMSHARTE pour interdire l'abattage des palétuviers rouges et promouvoir les foyers améliorés.",
    proposedDoc: {
      id: "doc-ai-02",
      title: "Accord Communautaire de Cogestion des Mangroves de Togbin Fandji",
      category: "partenariat",
      referenceNumber: "AMSHARTE/CONV-COMM/2026/04",
      issueDate: "2026-09-10",
      issuedBy: "Collectif des Femmes Transformatrices, Chefferie Traditionnelle & AMSHARTE",
      description: "Convention locale de préservation interdisant le déboisement des mangroves lagunaires et organisant la distribution de foyers économiques pour réduire la consommation de bois de feu.",
      downloadFileName: "Accord_Cogestion_Mangroves_Togbin_2026.pdf",
      contentSummary: [
        "Sanctuarisation de 25 hectares de palétuviers rouges (Rhizophora racemosa).",
        "Octroi de 45 foyers améliorés aux femmes transformatrices pour stopper la coupe lagunaire.",
        "Création d'une brigade villageoise mixte pour la surveillance diurne des rives du chenal."
      ],
      keyTerms: ["Mangroves", "Cogestion Communautaire", "Femmes Transformatrices", "Foyers Améliorés", "Togbin"],
      isFeatured: false,
      version: "v1.0 (Proposé par IA)",
      lastUpdated: "2026-09-10",
      status: "en_revision"
    },
    aiConfidenceScore: 94,
    aiAnalysisNotes: "Texte analysé avec extraction des clauses d'indemnisation et classification sous 'Conventions Partenaires'. En attente du visa du CPI.",
    createdAt: "10 Septembre 2026 à 11:45",
    status: "en_attente_visa",
    preparedBy: "Assistant IA AMSHARTE v2.5 (Modèle Documentaire Bénin)"
  }
];

export const INITIAL_GALLERY_ITEMS: GalleryMediaItem[] = [
  {
    id: "gal-01",
    title: "Lâcher d'émersion de 142 bébés tortues olivâtres à Togbin",
    category: "tortues",
    imageUrl: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1200&q=80",
    location: "Plage de Togbin Fandji (Devant l'écloserie)",
    date: "04 Septembre 2026",
    description: "Course vers l'océan Atlantique des nouveau-nés sous la garde bienveillante des éco-gardes et des jeunes écoliers de la communauté de Togbin.",
    photographer: "Service Communication AMSHARTE / Éco-garde Fandji",
    badgeTag: "Lepidochelys olivacea",
    gpsCoordinates: "6°21'04.9\"N 2°21'08.0\"E"
  },
  {
    id: "gal-02",
    title: "Patrouille nocturne conjointe avec la Police Républicaine (BPLP)",
    category: "patrouille",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    location: "Secteur côtier Togbin - Ouidah (km 12 à 18)",
    date: "28 Août 2026 - 02h15",
    description: "L'équipe de veille conjointe équipe-gardes AMSHARTE et agents de la Brigade de Protection du Littoral et des Plages (BPLP) lors de la sécurisation d'une femelle en ponte.",
    photographer: "Coordination Sécurité AMSHARTE",
    badgeTag: "Police BPLP - Sécurité Plage",
    gpsCoordinates: "6°20'58.2\"N 2°20'45.1\"E"
  },
  {
    id: "gal-03",
    title: "Baguage métallique officiel et mensurations biométriques (BJ 2872)",
    category: "tortues",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    location: "Poste de contrôle biologique de Togbin",
    date: "28 Août 2026",
    description: "Relevé de la longueur courbe de carapace (72,4 cm) et pose de la bague en Inconel BJ 2872 sur une femelle adulte secourue dans un filet de pêcheur.",
    photographer: "Équipe Biométrique & CPI Henri FATCHINA",
    badgeTag: "Bague BJ 2872",
    gpsCoordinates: "6°21'04.9\"N 2°21'08.0\"E"
  },
  {
    id: "gal-04",
    title: "Écloserie rénovée avec l'appui mécénat AGL & Bénin Terminal",
    category: "ecloserie",
    imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80",
    location: "Écloserie Centrale de Togbin Plage",
    date: "14 Août 2026",
    description: "Vue du sable tamisé et des couloirs de ponte numérotés permettant de mettre à l'abri des prédateurs et du braconnage plus de 80 pontes simultanées.",
    photographer: "AGL Communication & AMSHARTE",
    badgeTag: "Partenariat AGL / Bénin Terminal",
    gpsCoordinates: "6°21'05.1\"N 2°21'07.8\"E"
  },
  {
    id: "gal-05",
    title: "Plantation de propagules de palétuviers en zone lagunaire",
    category: "mangroves",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    location: "Lagune côtière de Togbin Daho",
    date: "22 Juillet 2026",
    description: "Restauration participative de la ceinture verte de mangrove (Rhizophora racemosa) pour freiner l'érosion des berges et recréer des nourriceries pour poissons.",
    photographer: "Chargée Environnement & Groupement Féminin",
    badgeTag: "Ceinture Verte Mangrove",
    gpsCoordinates: "6°21'42.0\"N 2°21'15.5\"E"
  },
  {
    id: "gal-06",
    title: "Concours éco-citoyen de salubrité Ayi Dji Ni Min",
    category: "communaute",
    imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=80",
    location: "Quartier Togbin Plage & Embarcadère",
    date: "10 Août 2026",
    description: "Mobilisation des femmes et jeunes riverains pour le ramassage des plastiques marins qui encombrent les plages de ponte, avec pesée et tri sélectif.",
    photographer: "Équipe Éco-citoyenneté AMSHARTE",
    badgeTag: "Ayi Dji Ni Min 2026",
    gpsCoordinates: "6°21'10.2\"N 2°21'12.0\"E"
  }
];

export const SEASONAL_CALENDAR_ITEMS: SeasonalCalendarItem[] = [
  {
    id: "cal-01",
    monthRange: "Septembre — Février",
    title: "Grande Saison de Ponte des Tortues Marines",
    category: "tortues",
    status: "en_cours",
    description: "Arrivée nocturne des femelles reproductrices (Lepidochelys olivacea, Dermochelys coriacea, Chelonia mydas) sur le rivage sableux pour creuser leurs nids.",
    fieldActions: [
      "Patrouilles nocturnes quotidiennes 21h - 05h avec la Police BPLP",
      "Translocation d'urgence des pontes menacées par la marée vers l'écloserie",
      "Baguage métallique (Série BJ) et relevé biométrique sans blessure"
    ],
    stakeholderAlert: "Vigilance maximale demandée aux pêcheurs : interdiction d'allumer de grands feux de plage ou d'émettre des lumières blanches directes sur le sable."
  },
  {
    id: "cal-02",
    monthRange: "Novembre — Avril",
    title: "Période des Éclosions & Lâchers en Océan",
    category: "tortues",
    status: "a_venir",
    description: "Émergence des nouveau-nés après 45 à 60 jours d'incubation sous le sable protecteur de l'écloserie de Togbin.",
    fieldActions: [
      "Surveillance biquotidienne des corbeilles d'éclosion",
      "Pesée échantillonnée et lâcher immédiat au crépuscule ou à l'aube",
      "Sensibilisation des écoles et touristes aux gestes éco-responsables"
    ],
    stakeholderAlert: "Protection contre les crabes fantômes, chiens errants et oiseaux prédateurs lors de la course vers le ressac."
  },
  {
    id: "cal-03",
    monthRange: "Juillet — Août",
    title: "Période de Repos Biologique de la Pêche Côtière",
    category: "peche",
    status: "passe",
    description: "Période de reproduction des espèces pélagiques et côtières instaurée pour la régénération de la ressource halieutique béninoise.",
    fieldActions: [
      "Distribution de filets et kits de réparation aux pêcheurs coopérants",
      "Sessions de formation sur les techniques de démaillage sécurisé des tortues",
      "Réparation des bacs de convalescence et de transit à Togbin"
    ],
    stakeholderAlert: "Période de précarité pour les familles de pêcheurs : nécessité d'un fonds de solidarité et d'activités génératrices alternatives."
  },
  {
    id: "cal-04",
    monthRange: "Mai — Octobre",
    title: "Campagne de Repiquage des Palétuviers & Mangroves",
    category: "mangroves",
    status: "en_cours",
    description: "Saison propice des pluies pour la mise en terre des propagules de Rhizophora et plants d'Avicennia dans les chenaux lagunaires dégradés.",
    fieldActions: [
      "Collecte de propagules mûres avec les associations féminines de Togbin Daho",
      "Entretien des pépinières villageoises sur pilotis",
      "Mise en terre de 2 500 plants par hectare cible"
    ],
    stakeholderAlert: "Sensibilisation contre la coupe du bois de palétuvier pour le fumage artisanal du poisson."
  },
  {
    id: "cal-05",
    monthRange: "Toute l'année (Point culminant : Août)",
    title: "Éco-Citoyenneté & Compétition Salubrité Ayi Dji Ni Min",
    category: "citoyennete",
    status: "en_cours",
    description: "Grand concours d'assainissement communautaire inter-quartiers pour éliminer les macro-déchets plastiques du littoral.",
    fieldActions: [
      "Pesée mensuelle des plastiques collectés par chaque quartier",
      "Remise de primes d'encouragement et matériel d'assainissement",
      "Valorisation et recyclage des déchets marins collectés"
    ],
    stakeholderAlert: "Zéro plastique en mer : préserver les tortues contre l'ingestion fatale de sacs plastiques confondus avec des méduses."
  }
];

export const INITIAL_EMERGENCY_ALERTS: EmergencyTurtleAlert[] = [
  {
    id: "alert-01",
    reporterName: "Michel HOUNDEKPON",
    reporterPhone: "(+229) 01 62 14 88 33",
    reporterType: "pecheur",
    location: "Togbin Plage (Près de l'embarcadère des pirogues)",
    gpsCoordinates: "6°21'03.8\"N 2°21'05.4\"E",
    date: "2026-09-12",
    time: "06:40",
    turtleCondition: "piegee_filet",
    estimatedSize: "grande_adulte",
    description: "Grosse tortue olivâtre prise dans un filet maillant de fond. Pas de coupure apparente mais épuisée. Conservée à l'ombre en attendant l'éco-garde.",
    status: "secourue_traitee"
  },
  {
    id: "alert-02",
    reporterName: "Sophie DOSSOU",
    reporterPhone: "(+229) 01 97 45 12 00",
    reporterType: "riverain",
    location: "Plage d'Avlékété (Limite Togbin)",
    gpsCoordinates: "6°20'45.0\"N 2°19'30.2\"E",
    date: "2026-09-10",
    time: "23:15",
    turtleCondition: "ponte_en_cours",
    estimatedSize: "grande_adulte",
    description: "Une tortue monte sur la dune et commence à creuser son nid à marée haute. Éclairage maintenu éteint.",
    status: "secourue_traitee"
  }
];

export const INITIAL_IMPACT_METRICS: ImpactMetricsState = {
  turtlesRescued: 142,
  nestsProtected: 87,
  hatchlingsReleased: 6140,
  plasticWasteKg: 3850,
  beachKmMonitored: 38,
  artisansSupported: 145,
  lastSyncDate: "2026-09-15 08:30:00",
  validatedByDE: true,
  visaReference: "VISA-DE-2026-09-OFFICIEL",
  nidsProtegesTotal: 87,
  bebesTortuesRelacheesTotal: 6140,
  mangrovesRestaureesHa: 24.5,
  ecoGardesActifs: 33,
  tortuesAdultesSauvees: 142,
  dechetsPlastiquesCollectesKg: 3850,
  patrouillesEffectuees: 312,
  lastSynchronizedAt: "Automatique • Synchronisé en direct",
  isAutomated: true
};

export const INITIAL_SOCIAL_CHANNELS: SocialNetworkChannel[] = [
  {
    id: "soc-wa",
    name: "Communauté WhatsApp Alertes Littoral",
    iconType: "whatsapp",
    url: "https://chat.whatsapp.com/AMSHARTE-Tortues-Alerte",
    description: "Canal d'alerte instantanée 24h/24 pour pontes, échouages et coordination des éco-gardes.",
    isPermanent: true,
    color: "#25D366",
    badgeLabel: "Actif 24/7"
  },
  {
    id: "soc-fb",
    name: "Page Facebook Officielle AMSHARTE",
    iconType: "facebook",
    url: "https://www.facebook.com/share/18GLuvttrH/",
    description: "Actualités publiques, sensibilisation citoyenne, reportages photos et vidéos de terrain.",
    isPermanent: true,
    color: "#1877F2",
    badgeLabel: "Officiel"
  },
  {
    id: "soc-yt",
    name: "Chaîne YouTube Reportages & Écloseries",
    iconType: "youtube",
    url: "https://www.youtube.com/@AMSHARTE-Conservation-Togbin",
    description: "Archives vidéo des émulsions nocturnes de nouveau-nés et immersions de patrouilles.",
    isPermanent: true,
    color: "#FF0000",
    badgeLabel: "Vidéothèque"
  },
  {
    id: "soc-li",
    name: "LinkedIn Institutionnel & PTF",
    iconType: "linkedin",
    url: "https://www.linkedin.com/company/ong-amsharte-benin/",
    description: "Partenariats institutionnels, rapports de conformité Loi 2025-19 et relations bailleurs.",
    isPermanent: true,
    color: "#0A66C2",
    badgeLabel: "Réseau Pro"
  }
];

export const INITIAL_LOGISTICAL_NEEDS: LogisticalNeedItem[] = [
  {
    id: "log-need-01",
    item: "Caisses de transport isothermes & Bacs de contention chéloniens",
    category: "sauvetage_tortues",
    quantityNeeded: 4,
    unit: "unités",
    urgency: "haute",
    requestedBy: "Paulin KPADONOU (Chef Patrouille)",
    collectionLocation: "Plage de Togbin Fandji (Secteur Est)",
    status: "approuve_cpi",
    dateReported: "2026-09-14",
    notes: "Indispensable pour évacuer les grosses tortues blessées ou affaiblies vers la station de repos sans choc thermique."
  },
  {
    id: "log-need-02",
    item: "Torches frontales rechargeables à faisceau Rouge (Infrarouge)",
    category: "securite_nocturne",
    quantityNeeded: 8,
    unit: "unités",
    urgency: "critique",
    requestedBy: "Gildas AHOUISSOU (Éco-garde)",
    collectionLocation: "Secteur Avlékété - Togbin Plage",
    status: "valide_de",
    dateReported: "2026-09-13",
    notes: "Éviter la lumière blanche qui aveugle les femelles en cours de montée et perturbe la ponte."
  },
  {
    id: "log-need-03",
    item: "Grillage galvanisé anti-prédateurs & Piquets numérotés pour nids",
    category: "ecloserie",
    quantityNeeded: 120,
    unit: "mètres linéaires",
    urgency: "haute",
    requestedBy: "Béatrice TOSSOU (Point Focal Écloserie)",
    collectionLocation: "Écloserie Centrale Togbin",
    status: "dote",
    dateReported: "2026-09-10",
    notes: "Protection des pontes contre les chiens errants et crabes fantômes."
  },
  {
    id: "log-need-04",
    item: "Balances suspendues électroniques 150 kg & Rubans biométriques",
    category: "sauvetage_tortues",
    quantityNeeded: 2,
    unit: "kits",
    urgency: "normale",
    requestedBy: "Dr. Marcelle AGBANGLA (Suivi Scientifique)",
    collectionLocation: "Station Biométrie Togbin",
    status: "approuve_cpi",
    dateReported: "2026-09-12",
    notes: "Pour le relevé précis de la longueur courbe de la carapace (LCC) et de la masse corporelle."
  },
  {
    id: "log-need-05",
    item: "Kits de salubrité Ayi Dji Ni Min (Balais artisanaux & Sacs biodégradables 100L)",
    category: "assainissement_plage",
    quantityNeeded: 50,
    unit: "kits",
    urgency: "haute",
    requestedBy: "Sosthène HOUNKPATIN (Responsable Hygiène & SST)",
    collectionLocation: "Plage des Pêcheurs Togbin Fandji",
    status: "demande",
    dateReported: "2026-09-15",
    notes: "Nettoyage immédiat post-collecte pour évacuer les débris plastiques dangereux pour les nouveau-nés."
  }
];

export const INITIAL_MEMBER_REPORTS: MemberTaskReport[] = [
  {
    id: "mrep-01",
    memberId: "exec-05",
    authorName: "Paulin KPADONOU",
    authorRole: "Chef d'Équipe Patrouille Littoral & Éco-gardes Togbin",
    dateSubmitted: "2026-09-14 23:10",
    title: "Mission nocturne Togbin Est : Sauvetage de 2 tortues olivâtres et transfert de 242 œufs",
    summary: "Patrouille pédestre nocturne de 14 km avec 4 éco-gardes. Localisation de deux montées de tortues olivâtres. Sécurisation complète des nids avec transfert en écloserie en raison de la montée de marée d'équinoxe.",
    tasksCompleted: [
      "Patrouille pédestre 20h00 - 04h30 sur 14 kilomètres",
      "Sécurisation et balisage de 2 nids de ponte",
      "Transfert de 242 œufs dans l'écloserie modèle de Togbin",
      "Sensibilisation nocturne de 8 pêcheurs au filet maillant"
    ],
    fieldMetrics: {
      tortuesObservees: 2,
      nidsProteges: 2,
      oeufsTransferes: 242,
      bebesRelaches: 142,
      dechetsCollectesKg: 45,
      personnesSensibilisees: 8
    },
    logisticalNeedsReported: [
      "Besoin de 2 caisses de transport isothermes supplémentaires",
      "Renouvellement des piles pour torches infrarouges"
    ],
    status: "integre_rapport_mensuel",
    cpiNotes: "Rapport clair et chiffres vérifiés. Données intégrées dans le rapport mensuel de Septembre J+10. — Henri D. FATCHINA",
    deVisaDate: "2026-09-15 08:00"
  },
  {
    id: "mrep-02",
    memberId: "exec-08",
    authorName: "Béatrice TOSSOU",
    authorRole: "Point Focal Écloserie & Sauvegarde des Nids",
    dateSubmitted: "2026-09-13 18:20",
    title: "Écloserie Togbin : Émergence réussie de 3 nids et taux d'éclosion de 92%",
    summary: "Suivi de la température des fosses d'incubation (29.2°C). Émergence coordonnée de 380 nouveaux-nés de tortues vertes et olivâtres. Contrôle sanitaire et réhydratation avant lâcher crépusculaire.",
    tasksCompleted: [
      "Relevé thermique tri-quotidien des 24 fosses actives",
      "Exhumation des coquilles pour calcul du taux de fécondité (92.4%)",
      "Lâcher coordonné de 380 nouveau-nés avec participation citoyenne encadrée"
    ],
    fieldMetrics: {
      tortuesObservees: 380,
      nidsProteges: 3,
      oeufsTransferes: 0,
      bebesRelaches: 380,
      dechetsCollectesKg: 15,
      personnesSensibilisees: 35
    },
    logisticalNeedsReported: [
      "Grillage anti-crabes à renouveler pour la travée C",
      "Sable marin lavé pour préparation de 10 nouvelles fosses"
    ],
    status: "transmis_cpi_de",
    cpiNotes: "En cours d'intégration dans la synthèse mensuelle. Excellent taux d'éclosion. — CPI"
  }
];

export const INITIAL_EXECUTIVE_MEMBERS: ExecutiveMember[] = [
  {
    id: "exec-01",
    name: "Henri Doudédji FATCHINA",
    role: "Chargé de Programmes par Intérim (CPI)",
    department: "Programmes, Planification & Suivi Évaluation",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    accessCode: "CPI-2026-PROG",
    password: "cpi",
    phone: "(+229) 01 98 37 10 52",
    mobile: "+2290198371052",
    whatsapp: "2290198371052",
    meetLink: "https://meet.google.com/ams-prog-cpi",
    email: "programmes@amsharte.org",
    isRegistered: true,
    canMaintainSite: true,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 96,
    submittedReportsCount: 14,
    assignedTasks: [
      {
        id: "task-cpi-1",
        title: "Consolider le rapport mensuel d'activité au plus tard le 10 du mois échu (J+10)",
        category: "rapport",
        dueDate: "2026-10-10",
        status: "en_cours",
        cahierDesChargesReference: "Art. 4 Cahier des Charges CPI"
      },
      {
        id: "task-cpi-2",
        title: "Superviser la synchronisation des données de terrain avec le Tableau de Bord Public",
        category: "terrain",
        dueDate: "2026-09-20",
        status: "termine",
        cahierDesChargesReference: "Art. 6 Transparence & Impact"
      },
      {
        id: "task-cpi-3",
        title: "Préparer l'ordre du jour de la réunion hebdomadaire Google Meet du lundi",
        category: "reunion",
        dueDate: "2026-09-21",
        status: "a_faire",
        cahierDesChargesReference: "Art. 2 Coordination Équipe"
      }
    ]
  },
  {
    id: "exec-02",
    name: "SONON Tchéhouéa",
    role: "Directeur Exécutif (DE)",
    department: "Direction Exécutive & Représentation Institutionnelle",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    accessCode: "DE-2026-AMSHARTE",
    password: "de",
    phone: "(+229) 01 95 35 08 62",
    mobile: "+2290195350862",
    whatsapp: "2290195350862",
    meetLink: "https://meet.google.com/ams-exec-dir",
    email: "direction@amsharte.org",
    isRegistered: true,
    canMaintainSite: true,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 98,
    submittedReportsCount: 18,
    assignedTasks: [
      {
        id: "task-de-1",
        title: "Apposer le visa officiel sur les rapports consolidés J+10 soumis par le CPI",
        category: "rapport",
        dueDate: "2026-10-12",
        status: "en_cours",
        cahierDesChargesReference: "Statuts AMSHARTE Art. 12"
      },
      {
        id: "task-de-2",
        title: "Validation des dotations d'équipements logistiques post-collectes de Togbin",
        category: "logistique",
        dueDate: "2026-09-25",
        status: "termine",
        cahierDesChargesReference: "Ordonnancement Dépenses"
      },
      {
        id: "task-de-3",
        title: "Audience avec le Ministère du Cadre de Vie & MCVT (Conformité Loi 2025-19)",
        category: "reunion",
        dueDate: "2026-09-28",
        status: "a_faire",
        cahierDesChargesReference: "Représentation Institutionnelle"
      }
    ]
  },
  {
    id: "exec-03",
    name: "Mme AKPODJI Philomène",
    role: "Présidente du Conseil d'Administration / Trésorière",
    department: "Gouvernance CA & Surveillance Financière",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    accessCode: "CA-2026-PRES",
    password: "ca",
    phone: "(+229) 01 66 03 29 13",
    mobile: "+2290166032913",
    whatsapp: "2290166032913",
    meetLink: "https://meet.google.com/ams-ca-pres",
    email: "ca@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 92,
    submittedReportsCount: 9,
    assignedTasks: [
      {
        id: "task-ca-1",
        title: "Contrôle trimestriel de concordance des pièces comptables Google Drive & Dolibarr",
        category: "rapport",
        dueDate: "2026-09-30",
        status: "en_cours",
        cahierDesChargesReference: "Surveillance Budgétaire"
      },
      {
        id: "task-ca-2",
        title: "Validation du compte d'emploi des fonds micro-projets FEM",
        category: "logistique",
        dueDate: "2026-10-05",
        status: "a_faire",
        cahierDesChargesReference: "Règlement Financier"
      }
    ]
  },
  {
    id: "exec-04",
    name: "Christian KOUDJRO",
    role: "Chargé de Communication, Visibilité & Médias",
    department: "Communication, Médias & Animation Réseaux Sociaux",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    accessCode: "COM-2026-MEDIAS",
    password: "com",
    phone: "(+229) 01 98 37 10 52",
    mobile: "+2290198371052",
    whatsapp: "2290198371052",
    meetLink: "https://meet.google.com/ams-com-medias",
    email: "communication@amsharte.org",
    isRegistered: true,
    canMaintainSite: true,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 94,
    submittedReportsCount: 16,
    assignedTasks: [
      {
        id: "task-com-1",
        title: "Modérer et publier 3 reportages de terrain (Photos & Vidéos) par semaine",
        category: "sensibilisation",
        dueDate: "2026-09-18",
        status: "termine",
        cahierDesChargesReference: "Cahier des Charges COM"
      },
      {
        id: "task-com-2",
        title: "Animer la Communauté WhatsApp et transformer les alertes en publications du Fil d'Actualité",
        category: "terrain",
        dueDate: "2026-09-22",
        status: "en_cours",
        cahierDesChargesReference: "Visibilité & Réseaux Sociaux"
      }
    ]
  },
  {
    id: "exec-05",
    name: "Paulin KPADONOU",
    role: "Chef de Patrouille Littoral & Éco-gardes Togbin",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-TOGBIN-2026",
    password: "eco",
    phone: "(+229) 01 97 45 66 12",
    mobile: "+2290197456612",
    whatsapp: "2290197456612",
    meetLink: "https://meet.google.com/ams-eco-patrouille",
    email: "patrouille@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "en_patrouille",
    performanceScore: 95,
    submittedReportsCount: 22,
    assignedTasks: [
      {
        id: "task-eco-1",
        title: "Assurer 5 patrouilles nocturnes par semaine entre 21h00 et 05h00 (Togbin Plage)",
        category: "terrain",
        dueDate: "2026-09-19",
        status: "en_cours",
        cahierDesChargesReference: "Protocole Patrouille N°1"
      },
      {
        id: "task-eco-2",
        title: "Transmettre au CPI et au DE le résumé hebdomadaire des pontes et nids transférés",
        category: "rapport",
        dueDate: "2026-09-21",
        status: "termine",
        cahierDesChargesReference: "Rapportage Terrain J+3"
      },
      {
        id: "task-eco-3",
        title: "Signaler les besoins en matériel logistique post-collecte (caisses, torches, pesons)",
        category: "logistique",
        dueDate: "2026-09-24",
        status: "a_faire",
        cahierDesChargesReference: "Maintenance Équipement"
      }
    ]
  },
  {
    id: "exec-06",
    name: "Dr. Marcelle AGBANGLA",
    role: "Responsable Suivi Scientifique & Vétérinaire Chéloniens",
    department: "Recherche, Biométrie & Soins de Faune Marine",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&auto=format&fit=crop&q=80",
    accessCode: "VET-2026-SCI",
    password: "vet",
    phone: "(+229) 01 96 11 24 88",
    mobile: "+2290196112488",
    whatsapp: "2290196112488",
    meetLink: "https://meet.google.com/ams-vet-sci",
    email: "scientifique@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 93,
    submittedReportsCount: 11,
    assignedTasks: [
      {
        id: "task-vet-1",
        title: "Bilan biométrique mensuel des pontes et pose de bagues d'identification chéloniennes",
        category: "terrain",
        dueDate: "2026-09-25",
        status: "en_cours",
        cahierDesChargesReference: "Protocole Scientifique FSS"
      },
      {
        id: "task-vet-2",
        title: "Rapport de nécropsie et causes de mortalité sur les cas d'échouages signalés",
        category: "rapport",
        dueDate: "2026-09-28",
        status: "a_faire",
        cahierDesChargesReference: "Veille Épidémiologique"
      }
    ]
  },
  {
    id: "exec-07",
    name: "Sosthène HOUNKPATIN",
    role: "Responsable Hygiène, Salubrité Côtière & SST",
    department: "Santé Sécurité au Travail & Hygiène Rurale Artisanal",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    accessCode: "SST-2026-HYG",
    password: "sst",
    phone: "(+229) 01 94 33 50 19",
    mobile: "+2290194335019",
    whatsapp: "2290194335019",
    meetLink: "https://meet.google.com/ams-sst-hyg",
    email: "hygiene.sst@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_mission",
    performanceScore: 89,
    submittedReportsCount: 13,
    assignedTasks: [
      {
        id: "task-sst-1",
        title: "Organiser l'opération mensuelle Ayi Dji Ni Min de salubrité avec les pêcheurs artisans",
        category: "sensibilisation",
        dueDate: "2026-09-22",
        status: "en_cours",
        cahierDesChargesReference: "Hygiène des Plages"
      },
      {
        id: "task-sst-2",
        title: "Distribution des kits de protection individuelle (EPI) aux travailleurs informels de Togbin",
        category: "logistique",
        dueDate: "2026-09-26",
        status: "termine",
        cahierDesChargesReference: "Sécurité Travailleur FAYOMI"
      }
    ]
  },
  {
    id: "exec-08",
    name: "Béatrice TOSSOU",
    role: "Point Focal Écloserie & Sauvegarde des Nids",
    department: "Écloserie & Incubation Modèle Togbin Fandji",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECLO-2026-TOG",
    password: "eclo",
    phone: "(+229) 01 97 88 40 12",
    mobile: "+2290197884012",
    whatsapp: "2290197884012",
    meetLink: "https://meet.google.com/ams-eclo-tossou",
    email: "ecloserie@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 97,
    submittedReportsCount: 19,
    assignedTasks: [
      {
        id: "task-eclo-1",
        title: "Suivi quotidien du micro-climat thermique et de l'humidité des fosses d'incubation",
        category: "terrain",
        dueDate: "2026-09-20",
        status: "termine",
        cahierDesChargesReference: "Cahier Écloserie Art. 2"
      },
      {
        id: "task-eclo-2",
        title: "Transmission des fiches de comptage d'œufs au CPI Henri D. FATCHINA",
        category: "rapport",
        dueDate: "2026-09-24",
        status: "en_cours",
        cahierDesChargesReference: "Transmission Données J+3"
      }
    ]
  },
  {
    id: "exec-09",
    name: "Gaspard DOSSOU-YOVO",
    role: "Responsable Logistique, Stocks & Équipements de Terrain",
    department: "Logistique, Approvisionnement & Matériel Post-Collectes",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
    accessCode: "LOG-2026-MAT",
    password: "log",
    phone: "(+229) 01 95 10 29 44",
    mobile: "+2290195102944",
    whatsapp: "2290195102944",
    meetLink: "https://meet.google.com/ams-log-mat",
    email: "logistique@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 91,
    submittedReportsCount: 12,
    assignedTasks: [
      {
        id: "task-log-1",
        title: "Inventaire et maintenance des matériels post-collectes (caisses, pesons, torches)",
        category: "logistique",
        dueDate: "2026-09-23",
        status: "en_cours",
        cahierDesChargesReference: "Gestion Parc Matériel"
      },
      {
        id: "task-log-2",
        title: "Soumettre au DE les devis d'achat pour le renouvellement des filets et balais",
        category: "rapport",
        dueDate: "2026-09-27",
        status: "a_faire",
        cahierDesChargesReference: "Approvisionnement"
      }
    ]
  },
  {
    id: "exec-10",
    name: "Michel HOUNDEKPON",
    role: "Délégué Communautaire & Représentant des Pêcheurs de Togbin",
    department: "Relations Communautaires & Sentinelles Pêcheurs",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accessCode: "PECH-2026-TOG",
    password: "pech",
    phone: "(+229) 01 62 14 88 33",
    mobile: "+2290162148833",
    whatsapp: "2290162148833",
    meetLink: "https://meet.google.com/ams-communaute-pech",
    email: "pecheurs.togbin@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 88,
    submittedReportsCount: 10,
    assignedTasks: [
      {
        id: "task-pech-1",
        title: "Sensibiliser les équipages de pirogues au relâcher immédiat des tortues capturées",
        category: "sensibilisation",
        dueDate: "2026-09-22",
        status: "en_cours",
        cahierDesChargesReference: "Charte Pêche Responsable"
      },
      {
        id: "task-pech-2",
        title: "Alerter le numéro d'urgence de l'ONG à chaque observation de tortue en difficulté",
        category: "terrain",
        dueDate: "2026-09-30",
        status: "termine",
        cahierDesChargesReference: "Sentinelles Marines"
      }
    ]
  },
  {
    id: "exec-11",
    name: "Gildas AHOUISSOU",
    role: "Sentinelle Éco-garde (Secteur Avlékété / Togbin Ouest)",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-AVLE-2026",
    password: "eco",
    phone: "(+229) 01 97 22 41 05",
    mobile: "+2290197224105",
    whatsapp: "2290197224105",
    meetLink: "https://meet.google.com/ams-eco-avlekete",
    email: "avlekete.garde@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 92,
    submittedReportsCount: 15,
    assignedTasks: [
      {
        id: "task-avle-1",
        title: "Patrouille nocturne biquotidienne secteur frontière Avlékété",
        category: "terrain",
        dueDate: "2026-09-21",
        status: "en_cours",
        cahierDesChargesReference: "Patrouilles Sectorielles"
      }
    ]
  },
  {
    id: "exec-12",
    name: "Prudence KPONOU",
    role: "Sentinelle Éco-garde (Secteur Togbin Est / Fandji)",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-FANDJI-2026",
    password: "eco",
    phone: "(+229) 01 98 12 33 77",
    mobile: "+2290198123377",
    whatsapp: "2290198123377",
    meetLink: "https://meet.google.com/ams-eco-fandji",
    email: "fandji.garde@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 94,
    submittedReportsCount: 17,
    assignedTasks: [
      {
        id: "task-fandji-1",
        title: "Surveillance de la zone de ponte principale de Togbin Fandji",
        category: "terrain",
        dueDate: "2026-09-20",
        status: "termine",
        cahierDesChargesReference: "Patrouilles Sectorielles"
      }
    ]
  },
  {
    id: "exec-13",
    name: "Nestor DOHOU",
    role: "Chef d'Équipe Patrouille Nocturne 2 (Secteur Plage Ouest)",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-OUEST-2026",
    password: "eco",
    phone: "(+229) 01 96 44 20 18",
    mobile: "+2290196442018",
    whatsapp: "2290196442018",
    meetLink: "https://meet.google.com/ams-eco-dohou",
    email: "nestor.dohou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 93,
    submittedReportsCount: 16,
    assignedTasks: [
      {
        id: "task-doh-1",
        title: "Relève nocturne 01h00 - 06h00 sur la zone de déferlement Ouest",
        category: "terrain",
        dueDate: "2026-09-21",
        status: "en_cours",
        cahierDesChargesReference: "Patrouilles Sectorielles"
      }
    ]
  },
  {
    id: "exec-14",
    name: "Marcellin KINNOU",
    role: "Sentinelle Éco-garde & Relais Piroguiers",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-PIROG-2026",
    password: "eco",
    phone: "(+229) 01 97 50 14 32",
    mobile: "+2290197501432",
    whatsapp: "2290197501432",
    meetLink: "https://meet.google.com/ams-eco-kinnou",
    email: "marcellin.kinnou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 90,
    submittedReportsCount: 12,
    assignedTasks: [
      {
        id: "task-kin-1",
        title: "Sensibilisation directe des capitaines de pirogues au départ en mer",
        category: "sensibilisation",
        dueDate: "2026-09-22",
        status: "termine",
        cahierDesChargesReference: "Alliance Pêcheurs"
      }
    ]
  },
  {
    id: "exec-15",
    name: "Colette ADJAHO",
    role: "Responsable Restauration des Mangroves & Pépinières Lagunaires",
    department: "Environnement, Mangroves & Écosystèmes Humides",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    accessCode: "MANG-2026-ADJ",
    password: "mang",
    phone: "(+229) 01 95 62 18 90",
    mobile: "+2290195621890",
    whatsapp: "2290195621890",
    meetLink: "https://meet.google.com/ams-mangroves-adj",
    email: "colette.adjaho@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 95,
    submittedReportsCount: 18,
    assignedTasks: [
      {
        id: "task-adj-1",
        title: "Superviser le repiquage de 1 200 propagules de palétuviers rouges à Togbin Daho",
        category: "terrain",
        dueDate: "2026-09-25",
        status: "en_cours",
        cahierDesChargesReference: "Ceinture Verte Mangrove"
      }
    ]
  },
  {
    id: "exec-16",
    name: "Vivien GBAGUIDI",
    role: "Éco-garde & Spécialiste Démaillage Sécurisé des Filets",
    department: "Surveillance Côtière & Sauvetage Faune",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-DEMAIL-2026",
    password: "eco",
    phone: "(+229) 01 94 88 12 40",
    mobile: "+2290194881240",
    whatsapp: "2290194881240",
    meetLink: "https://meet.google.com/ams-eco-gbaguidi",
    email: "vivien.gbaguidi@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_mission",
    performanceScore: 91,
    submittedReportsCount: 14,
    assignedTasks: [
      {
        id: "task-gba-1",
        title: "Intervention d'urgence sur les prises accidentelles de filets maillants",
        category: "terrain",
        dueDate: "2026-09-20",
        status: "termine",
        cahierDesChargesReference: "Protocole Sauvetage Filet"
      }
    ]
  },
  {
    id: "exec-17",
    name: "Justine HOUNGBO",
    role: "Responsable Mobilisation Féminine & Tri Plastique Ayi Dji Ni Min",
    department: "Salubrité, SST & Éco-Citoyenneté",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
    accessCode: "SST-AYI-2026",
    password: "sst",
    phone: "(+229) 01 97 19 82 05",
    mobile: "+2290197198205",
    whatsapp: "2290197198205",
    meetLink: "https://meet.google.com/ams-femmes-houngbo",
    email: "justine.houngbo@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 96,
    submittedReportsCount: 20,
    assignedTasks: [
      {
        id: "task-hou-1",
        title: "Pesée et enregistrement des sacs de macro-plastiques collectés à Togbin Plage",
        category: "logistique",
        dueDate: "2026-09-24",
        status: "en_cours",
        cahierDesChargesReference: "Concours Ayi Dji Ni Min"
      }
    ]
  },
  {
    id: "exec-18",
    name: "Innocent TOSSOU",
    role: "Éco-garde & Conducteur Moto-Patrouille Littorale",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-MOTO-2026",
    password: "eco",
    phone: "(+229) 01 96 33 55 77",
    mobile: "+2290196335577",
    whatsapp: "2290196335577",
    meetLink: "https://meet.google.com/ams-eco-moto",
    email: "innocent.tossou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 89,
    submittedReportsCount: 11,
    assignedTasks: [
      {
        id: "task-tos-1",
        title: "Liaison motorisée rapide entre le poste de Togbin et la limite d'Avlékété",
        category: "terrain",
        dueDate: "2026-09-21",
        status: "termine",
        cahierDesChargesReference: "Intervention Rapide"
      }
    ]
  },
  {
    id: "exec-19",
    name: "Félicien ZANNOU",
    role: "Éco-garde & Sentinelle Écloserie de Nuit",
    department: "Écloserie & Incubation Modèle Togbin Fandji",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECLO-NUIT-2026",
    password: "eclo",
    phone: "(+229) 01 98 04 22 61",
    mobile: "+2290198042261",
    whatsapp: "2290198042261",
    meetLink: "https://meet.google.com/ams-eclo-zannou",
    email: "felicien.zannou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 92,
    submittedReportsCount: 15,
    assignedTasks: [
      {
        id: "task-zan-1",
        title: "Garde nocturne de l'écloserie contre les prédateurs et braconniers",
        category: "terrain",
        dueDate: "2026-09-22",
        status: "en_cours",
        cahierDesChargesReference: "Sécurisation Travées Écloserie"
      }
    ]
  },
  {
    id: "exec-20",
    name: "Clarisse DOSSOU",
    role: "Assistante Comptable & Suivi Dolibarr / Justificatifs PTF",
    department: "Administration, Finances & Comptabilité Dolibarr",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    accessCode: "COMPTA-2026-DOS",
    password: "compta",
    phone: "(+229) 01 95 80 44 19",
    mobile: "+2290195804419",
    whatsapp: "2290195804419",
    meetLink: "https://meet.google.com/ams-compta-dossou",
    email: "clarisse.dossou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 94,
    submittedReportsCount: 13,
    assignedTasks: [
      {
        id: "task-cla-1",
        title: "Numérisation des factures de carburant et fiches de dotations fil de pêche",
        category: "rapport",
        dueDate: "2026-09-25",
        status: "en_cours",
        cahierDesChargesReference: "Contrôle Comptable Dolibarr"
      }
    ]
  },
  {
    id: "exec-21",
    name: "Sylvain AGOSSOU",
    role: "Animateur Éco-Citoyen & Éducation Environnementale (Écoles)",
    department: "Sensibilisation, Éducation & Jeunesse",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-ECOLE-2026",
    password: "anim",
    phone: "(+229) 01 97 73 11 88",
    mobile: "+2290197731188",
    whatsapp: "2290197731188",
    meetLink: "https://meet.google.com/ams-ecoles-agossou",
    email: "sylvain.agossou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 93,
    submittedReportsCount: 16,
    assignedTasks: [
      {
        id: "task-ago-1",
        title: "Animation de la classe verte à l'écloserie pour 45 écoliers de Togbin Fandji",
        category: "sensibilisation",
        dueDate: "2026-09-23",
        status: "termine",
        cahierDesChargesReference: "Éducation Environnementale"
      }
    ]
  },
  {
    id: "exec-22",
    name: "Mathias HOUNTO",
    role: "Éco-garde & Observateur Faune Côtière",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-FAUNE-2026",
    password: "eco",
    phone: "(+229) 01 96 15 39 42",
    mobile: "+2290196153942",
    whatsapp: "2290196153942",
    meetLink: "https://meet.google.com/ams-eco-hounto",
    email: "mathias.hounto@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 90,
    submittedReportsCount: 12,
    assignedTasks: [
      {
        id: "task-hnt-1",
        title: "Relevé des traces de montées de tortues luth et olivâtres sur le sable",
        category: "terrain",
        dueDate: "2026-09-21",
        status: "en_cours",
        cahierDesChargesReference: "Comptage Faunistique"
      }
    ]
  },
  {
    id: "exec-23",
    name: "Estelle KPETO",
    role: "Responsable Sensibilisation Marchés & Vendeuses de Poissons",
    department: "Sensibilisation & Relations Communautaires",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    accessCode: "SENSIB-MARCHE-2026",
    password: "sens",
    phone: "(+229) 01 94 52 70 81",
    mobile: "+2290194527081",
    whatsapp: "2290194527081",
    meetLink: "https://meet.google.com/ams-marches-kpeto",
    email: "estelle.kpeto@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 91,
    submittedReportsCount: 14,
    assignedTasks: [
      {
        id: "task-kpe-1",
        title: "Visite de plaidoyer auprès des vendeuses des marchés côtiers (interdiction vente viande tortue)",
        category: "sensibilisation",
        dueDate: "2026-09-24",
        status: "en_cours",
        cahierDesChargesReference: "Protection Espèces Intégrales"
      }
    ]
  },
  {
    id: "exec-24",
    name: "Romaric MENSAH",
    role: "Éco-garde & Sauvetage Cétacés / Chéloniens Échoués",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-SAUV-2026",
    password: "eco",
    phone: "(+229) 01 98 42 66 10",
    mobile: "+2290198426610",
    whatsapp: "2290198426610",
    meetLink: "https://meet.google.com/ams-eco-mensah",
    email: "romaric.mensah@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 92,
    submittedReportsCount: 15,
    assignedTasks: [
      {
        id: "task-men-1",
        title: "Coordination du protocole d'assistance en cas d'échouage sur le rivage",
        category: "terrain",
        dueDate: "2026-09-22",
        status: "termine",
        cahierDesChargesReference: "Urgence Échouage"
      }
    ]
  },
  {
    id: "exec-25",
    name: "Bernadette KOUHOU",
    role: "Pépiniériste Mangroves Togbin Daho",
    department: "Environnement, Mangroves & Écosystèmes Humides",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
    accessCode: "MANG-PEPIN-2026",
    password: "mang",
    phone: "(+229) 01 97 60 38 25",
    mobile: "+2290197603825",
    whatsapp: "2290197603825",
    meetLink: "https://meet.google.com/ams-pepiniere-kouhou",
    email: "bernadette.kouhou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 94,
    submittedReportsCount: 17,
    assignedTasks: [
      {
        id: "task-kou-1",
        title: "Arrosage et tri des jeunes plants de palétuviers en bacs d'acclimatation",
        category: "terrain",
        dueDate: "2026-09-20",
        status: "termine",
        cahierDesChargesReference: "Pépinières Pilotes"
      }
    ]
  },
  {
    id: "exec-26",
    name: "Dieudonné SOSSOU",
    role: "Éco-garde & Baliseur de Nids en Dune",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-BALIS-2026",
    password: "eco",
    phone: "(+229) 01 95 31 77 49",
    mobile: "+2290195317749",
    whatsapp: "2290195317749",
    meetLink: "https://meet.google.com/ams-eco-sossou",
    email: "dieudonne.sossou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 91,
    submittedReportsCount: 13,
    assignedTasks: [
      {
        id: "task-sos-1",
        title: "Pose de jalons fluorescents et enregistrement GPS des nids laissés in situ",
        category: "terrain",
        dueDate: "2026-09-23",
        status: "en_cours",
        cahierDesChargesReference: "Balisage Sécurisé"
      }
    ]
  },
  {
    id: "exec-27",
    name: "Pascaline HOUNDEGNON",
    role: "Chargée de Veille Sanitaire & Premiers Soins Faune Chélonienne",
    department: "Recherche, Biométrie & Soins de Faune Marine",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&auto=format&fit=crop&q=80",
    accessCode: "SOINS-2026-HOU",
    password: "soins",
    phone: "(+229) 01 96 89 50 12",
    mobile: "+2290196895012",
    whatsapp: "2290196895012",
    meetLink: "https://meet.google.com/ams-soins-houndegnon",
    email: "pascaline.houndegnon@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 95,
    submittedReportsCount: 18,
    assignedTasks: [
      {
        id: "task-hgn-1",
        title: "Désinfection des plaies dues aux hameçons et surveillance des bacs de réhydratation",
        category: "terrain",
        dueDate: "2026-09-22",
        status: "termine",
        cahierDesChargesReference: "Soins Vétérinaires Faune"
      }
    ]
  },
  {
    id: "exec-28",
    name: "Théodore AKONDE",
    role: "Éco-garde & Sentinelle Togbin Embarcadère",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-EMBARK-2026",
    password: "eco",
    phone: "(+229) 01 97 12 60 94",
    mobile: "+2290197126094",
    whatsapp: "2290197126094",
    meetLink: "https://meet.google.com/ams-eco-akonde",
    email: "theodore.akonde@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 89,
    submittedReportsCount: 10,
    assignedTasks: [
      {
        id: "task-ako-1",
        title: "Veille continue au niveau de l'embarcadère des pirogues de Togbin",
        category: "terrain",
        dueDate: "2026-09-21",
        status: "en_cours",
        cahierDesChargesReference: "Surveillance Embarcadère"
      }
    ]
  },
  {
    id: "exec-29",
    name: "Marguerite GOMEZ",
    role: "Animatrice Communautaire Jeunesse Littorale",
    department: "Sensibilisation & Mobilisation Citoyenne",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    accessCode: "JEUNESSE-2026-GOM",
    password: "jeun",
    phone: "(+229) 01 94 28 41 73",
    mobile: "+2290194284173",
    whatsapp: "2290194284173",
    meetLink: "https://meet.google.com/ams-jeunesse-gomez",
    email: "marguerite.gomez@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: true,
    status: "disponible",
    performanceScore: 92,
    submittedReportsCount: 13,
    assignedTasks: [
      {
        id: "task-gom-1",
        title: "Encadrement des bénévoles lors des lâchers publics de nouveau-nés au crépuscule",
        category: "sensibilisation",
        dueDate: "2026-09-24",
        status: "en_cours",
        cahierDesChargesReference: "Lâchers Pédagogiques"
      }
    ]
  },
  {
    id: "exec-30",
    name: "Bertrand YEHOUENOU",
    role: "Éco-garde & Opérateur Pesée et Tri Déchets Côtiers",
    department: "Salubrité, SST & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-TRI-2026",
    password: "eco",
    phone: "(+229) 01 98 67 30 55",
    mobile: "+2290198673055",
    whatsapp: "2290198673055",
    meetLink: "https://meet.google.com/ams-eco-yehouenou",
    email: "bertrand.yehouenou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 90,
    submittedReportsCount: 12,
    assignedTasks: [
      {
        id: "task-yeh-1",
        title: "Enregistrement sur peson mécanique des débris plastiques ramenés par les patrouilles",
        category: "logistique",
        dueDate: "2026-09-22",
        status: "termine",
        cahierDesChargesReference: "Pesée Salubrité"
      }
    ]
  },
  {
    id: "exec-31",
    name: "Antoinette KPADONOU",
    role: "Coordinatrice Collectes Plastiques Haut de Plage",
    department: "Salubrité, SST & Mobilisation Communautaire",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    accessCode: "SST-PLAST-2026",
    password: "sst",
    phone: "(+229) 01 95 72 88 16",
    mobile: "+2290195728816",
    whatsapp: "2290195728816",
    meetLink: "https://meet.google.com/ams-salubrite-antoinette",
    email: "antoinette.kpadonou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 94,
    submittedReportsCount: 16,
    assignedTasks: [
      {
        id: "task-akp-1",
        title: "Organisation du ramassage hebdomadaire sur la crête dunaire de Togbin Plage",
        category: "terrain",
        dueDate: "2026-09-23",
        status: "en_cours",
        cahierDesChargesReference: "Salubrité Dunaire"
      }
    ]
  },
  {
    id: "exec-32",
    name: "Julien HOUNSOU",
    role: "Éco-garde Sentinelle Limite Ouidah / Route des Pêches",
    department: "Surveillance Côtière & Éco-gardes",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECO-OUIDAH-2026",
    password: "eco",
    phone: "(+229) 01 96 20 44 91",
    mobile: "+2290196204491",
    whatsapp: "2290196204491",
    meetLink: "https://meet.google.com/ams-eco-hounsou",
    email: "julien.hounsou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "en_patrouille",
    performanceScore: 91,
    submittedReportsCount: 14,
    assignedTasks: [
      {
        id: "task-hns-1",
        title: "Surveillance conjointe du km 18 (jonction Route des Pêches vers Ouidah)",
        category: "terrain",
        dueDate: "2026-09-22",
        status: "termine",
        cahierDesChargesReference: "Patrouille Conjointe BPLP"
      }
    ]
  },
  {
    id: "exec-33",
    name: "Urbain ZINSOU",
    role: "Agent Technique Maintenance Écloserie & Bacs de Transit",
    department: "Écloserie & Incubation Modèle Togbin Fandji",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    accessCode: "ECLO-TECH-2026",
    password: "tech",
    phone: "(+229) 01 97 84 19 33",
    mobile: "+2290197841933",
    whatsapp: "2290197841933",
    meetLink: "https://meet.google.com/ams-eclo-zinsou",
    email: "urbain.zinsou@amsharte.org",
    isRegistered: true,
    canMaintainSite: false,
    canManageMedia: false,
    status: "disponible",
    performanceScore: 93,
    submittedReportsCount: 15,
    assignedTasks: [
      {
        id: "task-zin-1",
        title: "Réparation des toiles d'ombrage et désensablement des caniveaux d'évacuation d'eau",
        category: "logistique",
        dueDate: "2026-09-21",
        status: "termine",
        cahierDesChargesReference: "Maintenance Écloserie"
      }
    ]
  }
];

export const INITIAL_SITE_CONTACTS: SiteContactSettings = {
  emergencyPhone1: "(+229) 01 98 37 10 52",
  emergencyPhone2: "(+229) 01 95 35 08 62",
  emergencyPhone3: "(+229) 01 66 03 29 13",
  email: "amshart150504@yahoo.fr",
  whatsappAlertNumber: "(+229) 01 98 37 10 52",
  whatsappCommunityUrl: "https://chat.whatsapp.com/AMSHARTE-Tortues-Alerte",
  facebookPage: "https://www.facebook.com/share/18GLuvttrH/",
  googleMeetGeneralUrl: "https://meet.google.com/ams-general-togbin",
  headquarters: "Togbin Fandji, Commune d'Abomey-Calavi / Cotonou, République du Bénin",
  localMediaFolderHint: "C:\\Users\\USER\\Documents\\Amshart\\Réception\\Données de la File d'actualité"
};

export const INITIAL_MAINTENANCE_DELEGATION: SiteMaintenanceDelegation = {
  delegatedToCom: true,
  delegatedDate: "2026-09-01",
  delegatedBy: "Henri Doudédji FATCHINA (CPI)",
  delegatedPersonName: "Chargé de Communication, Visibilité & Médias",
  permissions: {
    manageMedia: true,
    manageNewsfeed: true,
    updateAlerts: true,
    editContacts: false
  }
};

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: "log-01",
    timestamp: "2026-09-15 08:30:12",
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    actionType: "connexion",
    details: "Ouverture de session dans l'Espace Exécutif AMSHARTE"
  },
  {
    id: "log-02",
    timestamp: "2026-09-14 22:45:00",
    authorName: "Paulin KPADONOU",
    authorRole: "Éco-garde Patrouilleur",
    actionType: "media_import",
    details: "Publication d'une alerte nocturne de sauvetage chélonien avec média associé (Togbin Plage Est)"
  },
  {
    id: "log-03",
    timestamp: "2026-09-14 09:15:33",
    authorName: "SONON Tchéhouéa",
    authorRole: "Directeur Exécutif (DE)",
    actionType: "validation_rapport",
    details: "Apposition du visa officiel du DE sur le rapport mensuel RAP-MENSUEL-0926"
  },
  {
    id: "log-04",
    timestamp: "2026-09-12 14:20:10",
    authorName: "Henri Doudédji FATCHINA",
    authorRole: "Chargé de Programmes par Intérim (CPI)",
    actionType: "delegation_com",
    details: "Délégation active de la maintenance des visuels au Chargé de Communication & Médias"
  }
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: "board-01",
    name: "Mme Philomène AKPODJI",
    role: "Présidente du Conseil d'Administration (PCA) & Trésorière Générale",
    title: "Présidente du Conseil d'Administration",
    college: "presidence_tresorerie",
    collegeLabel: "Collège Présidence & Trésorerie",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Juriste d'entreprise et gestionnaire chevronnée avec plus de 25 ans d'expérience dans la gouvernance des organisations de la société civile au Bénin et en Afrique de l'Ouest. Membre fondatrice historique de l'ONG AMSHARTE aux côtés de la Direction Exécutive, elle incarne l'autorité souveraine de l'organisation entre deux Assemblées Générales. Elle garantit l'alignement stratégique avec les statuts rénovés, supervise la rigueur des états financiers consolidés (Dolibarr & Google Drive) et veille à la stricte conformité avec la Loi N° 2025-19 régissant les ONG en République du Bénin. Elle assure la haute tutelle morale des programmes de conservation marine et de salubrité publique sur le littoral béninois.",
    responsibilities: [
      "Présidence des sessions ordinaires et extraordinaires du Conseil d'Administration",
      "Surveillance budgétaire suprême et certification des comptes d'emploi des fonds micro-projets (FEM, UE, FPA2)",
      "Octroi du quitus moral et financier à la Direction Exécutive et contrôle du mandat du CPI",
      "Garantie de conformité juridique auprès du Ministère de l'Intérieur (MISP) et du Ministère du Cadre de Vie (MCVT)",
      "Représentation morale souveraine auprès des bailleurs internationaux et partenaires techniques"
    ],
    qualifications: [
      "Master 2 en Droit des Affaires & Fiscalité des Organisations",
      "Certificat d'Expertise en Gouvernance des ONG & Conformité Réglementaire",
      "25+ ans d'expérience en gestion et audit d'organisations d'utilité publique"
    ],
    contactEmail: "ca@amsharte.org",
    contactPhone: "(+229) 01 66 03 29 13",
    npiNumber: "NPI-BJ-2025-0847291",
    isPresident: true
  },
  {
    id: "board-02",
    name: "M. Pamphile SOSSOU",
    role: "Secrétaire Général du Conseil d'Administration & Rapporteur",
    title: "Secrétaire Général du CA",
    college: "presidence_tresorerie",
    collegeLabel: "Collège Présidence & Trésorerie",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Administrateur civil et spécialiste du management des politiques publiques territoriales. Il assure le secrétariat juridique permanent du Conseil d'Administration, la régularité formelle des convocations, la transcription fidèle des procès-verbaux de délibération et la tenue du registre officiel des décisions statutaires. Il est le point focal pour le dépôt des actes administratifs auprès des autorités préfectorales et ministérielles.",
    responsibilities: [
      "Rédaction, authentification et conservation des Procès-Verbaux de délibération du Conseil",
      "Notification officielle des résolutions du CA à la Direction Exécutive et aux partenaires",
      "Tenue des registres statutaires d'immatriculation et d'adhésion prescrits par la Loi 2025-19",
      "Veille documentaire sur l'application des décisions prises en Assemblée Générale"
    ],
    qualifications: [
      "DESS en Administration Publique & Gestion des Projets de Développement",
      "Auditeur interne qualifié pour les associations d'intérêt public",
      "18 ans d'expérience en encadrement institutionnel d'OSC"
    ],
    contactEmail: "secretariat.ca@amsharte.org",
    contactPhone: "(+229) 01 97 14 28 50",
    npiNumber: "NPI-BJ-2025-0491823"
  },
  {
    id: "board-03",
    name: "Dr. Marcellin GBEGAN",
    role: "Administrateur - Président du Comité Scientifique & Environnemental",
    title: "Président du Comité Scientifique (CA)",
    college: "scientifique_environnement",
    collegeLabel: "Collège Scientifique & Environnemental",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Enseignant-chercheur en biologie marine et écologie littorale à l'Université d'Abomey-Calavi (UAC). Expert scientifique reconnu auprès du réseau ouest-africain WIDECAST pour la conservation des tortues marines, il préside le Comité Scientifique au sein du CA. Il valide les protocoles de relocalisation des pontes à l'écloserie de Togbin Plage, supervise les données biométriques et conseille l'ONG dans la vulgarisation des premières Aires Marines Protégées (AMP) créées par décret ministériel au Bénin.",
    responsibilities: [
      "Supervision et homologation scientifique des protocoles de baguage et suivi chélonien",
      "Revue méthodologique des programmes de restauration de mangroves et de lagunes côtières",
      "Liaison académique avec l'Université d'Abomey-Calavi et les centres de recherche océanographique",
      "Validation technique des rapports écologiques destinés aux bailleurs de fonds internationaux"
    ],
    qualifications: [
      "Doctorat (Ph.D.) en Biologie Marine & Gestion des Écosystèmes Aquatiques",
      "Membre expert du Groupe Spécialiste des Tortues Marines UICN / WIDECAST",
      "Auteur de plus de 20 publications scientifiques internationales"
    ],
    contactEmail: "scientifique@amsharte.org",
    contactPhone: "(+229) 01 61 88 45 92",
    npiNumber: "NPI-BJ-2025-0158304"
  },
  {
    id: "board-04",
    name: "Mme Béatrice TOSSOU",
    role: "Administratrice - Déléguée Genre, Éducation Environnementale & Solidarité Rurale",
    title: "Administratrice - Déléguée Genre & Éducation",
    college: "scientifique_environnement",
    collegeLabel: "Collège Scientifique & Environnemental",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    bio: "Sociologue du développement communautaire et militante active des droits des femmes en milieu rural et littoral. Au sein du Conseil d'Administration, elle pilote la stratégie d'intégration du genre et de renforcement des talents locaux. Elle coordonne les initiatives d'autonomisation des groupements de mareyeuses et de transformatrices de poisson à Togbin et Avlékété, promouvant le fumage écologique et l'accès à des micro-crédits solidaires.",
    responsibilities: [
      "Veille à l'égalité de genre et à l'inclusion sociale dans tous les projets de l'ONG",
      "Supervision des modules d'éducation environnementale dispensés dans les écoles primaires côtières",
      "Encadrement des activités génératrices de revenus (AGR) durables pour les femmes riveraines",
      "Évaluation de l'impact social et économique des projets d'assainissement villageois"
    ],
    qualifications: [
      "Master en Sociologie du Développement & Dynamiques Communautaires",
      "Spécialiste de l'Approche Genre & Développement (GED) pour les projets PNUD / FEM",
      "Formatrice certifiée en leadership féminin rural"
    ],
    contactEmail: "genre.education@amsharte.org",
    contactPhone: "(+229) 01 95 33 71 08",
    npiNumber: "NPI-BJ-2025-0774912"
  },
  {
    id: "board-05",
    name: "M. Barnabé AGBODJINOU",
    role: "Administrateur - Délégué des Collectivités Côtières & Pêcheurs Artisans",
    title: "Délégué des Collectivités Côtières (CA)",
    college: "communautaire_riverain",
    collegeLabel: "Collège Communautaire & Riverain",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    bio: "Représentant coutumier et figure respectée des communautés de pêcheurs de Togbin Fandji, Avlékété et Grand-Popo. Il assure la passerelle indispensable entre la gouvernance formelle de l'ONG et les réalités vécues par les populations côtières. Il a été déterminant dans l'adoption du pacte villageois d'arrêt de la consommation des œufs de tortues et dans la création du réseau d'alerte immédiate pour les chéloniens pris accidentellement dans les filets de pêche.",
    responsibilities: [
      "Porte-parole officiel des comités de pêcheurs artisans auprès du Conseil d'Administration",
      "Médiation communautaire et sensibilisation de proximité contre le braconnage des nids",
      "Mobilisation des pêcheurs pour l'utilisation des numéros d'urgence de sauvetage chélonien",
      "Surveillance du respect des zones coutumières et des accords de cogestion des lagunes"
    ],
    qualifications: [
      "Président honoraire de l'Union des Pêcheurs Artisans du Littoral Atlantique",
      "Médiateur communautaire traditionnel reconnu par les chefferies locales",
      "20 ans de collaboration avec les initiatives de conservation marine"
    ],
    contactEmail: "pecheurs.togbin@amsharte.org",
    contactPhone: "(+229) 01 96 42 15 88",
    npiNumber: "NPI-BJ-2025-0319205"
  },
  {
    id: "board-06",
    name: "M. Joseph KIKI",
    role: "Administrateur - Délégué de la Surveillance Territoriale & Réseau des Éco-gardes",
    title: "Délégué Réseau des Éco-gardes (CA)",
    college: "communautaire_riverain",
    collegeLabel: "Collège Communautaire & Riverain",
    mandatePeriod: "2024 - 2028 (Mandat de 4 ans renouvelable)",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    bio: "Pionnier des patrouilles nocturnes de surveillance de la plage de Togbin depuis 2004, il totalise plus de 20 ans d'engagement ininterrompu au service de la faune littorale. Élu administrateur au titre du collège des éco-gardes et volontaires, il veille à ce que les équipes de terrain disposent des moyens de protection adéquats (lampes torches inactiniques, forfaits d'intervention, trousses de premiers secours) et porte leurs recommandations opérationnelles au Conseil.",
    responsibilities: [
      "Représentation des intérêts des patrouilleurs nocturnes et éco-gardes auprès de la Présidence",
      "Supervision des protocoles de sécurité physique lors des rondes nocturnes sur le littoral",
      "Contrôle de conformité de l'aménagement de l'écloserie communautaire de Togbin Plage",
      "Participation à la commission logistique et d'octroi des forfaits bénévoles"
    ],
    qualifications: [
      "Brevet Fédéral d'Éco-garde Côtier & Secourisme d'Urgence",
      "Certifié en Techniques de Manipulation et Translocation des Nids Chéloniens",
      "Doyen d'expérience des patrouilles de Togbin Plage (22 ans de terrain)"
    ],
    contactEmail: "ecogardes.ca@amsharte.org",
    contactPhone: "(+229) 01 62 70 94 31",
    npiNumber: "NPI-BJ-2025-0604118"
  }
];


