import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({ 
  resources: {
    fr: { 
      translation: {
        cookies: 'Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur le site, vous acceptez notre utilisation des cookies.',
        agreeCookies: 'J\'accepte',
        home: 'Accueil' ,
        login: 'Connexion',
        about: 'A Propos',
        travel: 'Parcours',
        project: 'Projets',
        paiement: 'Paiement',
        settings: 'Paramètres',
        contact: 'Contacter',
        users: 'Utilisateurs',
        connexion: 'Connexion',
        registration: 'Création',
        hello: 'Bonjour je suis un',
        backend: 'Back-End',
        developer: 'Développeur',
        firstp: 'Bonjour à tous et bienvenue sur mon premier site en React.',
        technology: 'Technologies',
        aboutMe: 'À Propos de Moi',
        story: 'Une Histoire de Travail Acharné et de Persévérance',
        passionateComputer: 'Passionné d\'informatique depuis plus de 10 ans maintenant, je me suis lancé dans le monde de la programmation web en solo. En tant qu\'autodidacte, j\'ai acquis mes compétences en suivant des cours en ligne et en explorant par moi-même les dernières technologies. Ma formation initiale dans le domaine des réseaux informatiques (RIMS = Réseaux Informatiques Mobilité et Sécurité) m\'a fourni une base solide pour comprendre les tenants et aboutissants de l\'informatique. Je m\'épanouis en réalisant divers sites web et en écrivant du code, ce qui me permet de rester constamment en contact avec différents langages de programmation tels que HTML, Javascript, PHP, CSS, REACT JS.',
        passionateComputer2 : 'Mon approche autodidacte et ma soif d\'apprentissage me poussent à me former de manière autonome, en suivant des cours en ligne et en me tenant au courant des dernières mises à jour technologiques. Grâce à mon esprit rapide et ma facilité de compréhension, je suis capable d\'interpréter rapidement les besoins de mes clients et de mettre en place des solutions innovantes. Mon objectif est de rester à la pointe de la technologie et de fournir des solutions efficaces, tout en continuant à élargir mes connaissances pour répondre aux défis de demain.',
        realisation: 'Je réalise quelque sites ou quelques codes afin de pouvoir garder la main sur certains Langages de programmation (HTML, Javascript, PHP, CSS, REACT JS), afin de ne pas être en retard sur les dernières technologies et dernières mises à jour. Ayant un esprit rapide et une facilité de compréhension, cela me permet de pouvoir interpréter et mettre en place assez facilement et rapidement ce que l\'on me demande.',
        informationCV: 'Voici un aperçu de mon profil, avec mes différentes expériences et formations que j\'ai pu suivre. N\'hésitez pas à me contacter si vous souhaitez plus d\'informations.',
        downloadCV: 'Télécharger le CV',
        myServices: 'Mes Services',
        infoBack: 'Le développeur back-end est le cerveau invisible derrière les applications et les sites web que nous utilisons au quotidien. En se concentrant sur la logique et la fonctionnalité qui se cachent sous la surface, ce professionnel de la programmation crée et maintient les serveurs, les bases de données et les algorithmes qui permettent aux systèmes de fonctionner en douceur. En utilisant des langages de programmation tels que Python, Java, Ruby ou PHP, le développeur back-end conçoit les structures qui permettent le traitement des données, la gestion des utilisateurs et la communication avec le front-end.',
        infoTechno: 'En tant que développeur confirmé, je maîtrise à la fois WordPress et React, deux piliers essentiels du développement web. Avec WordPress, je crée des sites web dynamiques et conviviaux en utilisant des thèmes et des plugins personnalisés pour répondre aux besoins uniques de chaque projet. De plus, grâce à ma maîtrise de React, je suis en mesure de concevoir des interfaces utilisateur interactives et réactives, offrant ainsi une expérience en ligne fluide et captivante. Mon expertise dans ces deux langages me permet de fusionner le côté fonctionnel de WordPress avec la puissance de React, créant ainsi des expériences web attrayantes et efficaces pour les utilisateurs.',
        infoGestion: 'En tant que professionnel ayant atteint un niveau confirmé dans la gestion de Git et Docker, je possède une expertise solide dans le domaine du développement et du déploiement de logiciels. Avec Git, je gère efficacement les versions du code source, facilitant ainsi la collaboration au sein d\'équipes et le suivi des modifications. Grâce à ma maîtrise de Docker, je suis en mesure de créer, déployer et gérer des environnements d\'application isolés, assurant ainsi une portabilité et une stabilité optimales lors du déploiement sur différentes plateformes. Mon expérience dans l\'utilisation de Docker me permet d\'orchestrer des processus complexes tout en simplifiant la gestion des infrastructures.',
        portfolio: 'Mon Portfolio',
        contactMe: 'Me Contacter',
        submit: 'Envoyer',
        headerDev: 'Développons votre',
        headerProject: 'Projet',
        headerTogether: ' ensemble !',
        headerDevBack: 'Développeur Back-End',
        description: 'Description',
        whoami: 'Qui suis-je ?',
        descriptionFirst: 'Passionné par le développement Backend, je fusionne la puissance de la technologie avec la créativité du code pour créer des expériences en ligne exceptionnelles. Ma boîte à outils inclut une gamme de technologies, allant de React pour construire des interfaces utilisateur dynamiques, à PHP pour créer des bases de données robustes et des logiques serveur complexes. Je jongle avec Javascript, HTML et CSS pour donner vie à mes idées, en créant des sites Web fluides et esthétiquement plaisants.',
        seeMore: 'En savoir plus',
        whatido: 'Que fais-je ?',
        descriptionSecond: 'Un développeur back-end spécialisé en PHP, WordPress et ReactJS est responsable de la création et de la gestion de la logique serveur, des bases de données, des fonctionnalités personnalisées, de la sécurité et de l\'intégration des données pour des applications web robustes et interactives.',
        name: 'Nom',
        labelName: 'Indiquez votre nom',
        firstName: 'Prénom',
        labelFirstname: 'Indiquez votre prénom',
        mail: 'Adresse Mail',
        labelMail: 'Indiquez votre adresse mail',
        labelMessage: 'Indiquez votre message',
        sendMessage: 'Envoyez votre message',
        tmaIfsSingapore: 'TMA IFS Singapour',
        firstPartIfs: 'En tant que Développeur Wordpress, j\'ai eu l\'opportunité exceptionnelle de travailler sur le site IFS de Singapour, qui repose sur la plateforme WordPress. Cette expérience a été à la fois gratifiante et stimulante, car elle m\'a permis de jouer un rôle essentiel dans le maintien en bon état et le développement continu de cette application web cruciale.',
        secondPartIfs: 'La TMA, ou Tierce Maintenance Applicative, est une discipline clé de la gestion des systèmes informatiques. Elle consiste à assurer le suivi, la maintenance, la correction de bogues, et l\'évolution des applications existantes, généralement développées par une tierce partie. Cela signifie que les entreprises peuvent se concentrer sur leur cœur de métier tout en laissant des experts comme moi s\'occuper de la gestion technique de leurs applications.',
        thirdPartIfs: 'Sur le site IFS de Singapour, mon rôle en TMA a impliqué plusieurs aspects passionnants. Tout d\'abord, j\'ai été responsable de la maintenance applicative, ce qui signifiait que je devais veiller à ce que le site fonctionne de manière optimale en tout temps. Cela incluait la surveillance constante des performances, la résolution rapide des problèmes et la garantie de la disponibilité continue du site pour les utilisateurs.',
        fourthPartIfs: 'En outre, j\'ai également été chargé de la mise à jour des plugins. WordPress est une plateforme flexible qui s\'appuie sur de nombreux plugins pour étendre ses fonctionnalités. Garder ces plugins à jour est essentiel pour garantir la sécurité et la stabilité du site. J\'ai travaillé sur la planification et la mise en œuvre de ces mises à jour, en m\'assurant qu\'elles ne perturbaient pas les fonctionnalités existantes.',
        fifthPartIfs: 'Enfin, j\'ai également eu l\'occasion de contribuer activement à l\'amélioration du site. Que ce soit en proposant des améliorations fonctionnelles, en optimisant les performances ou en intégrant de nouvelles fonctionnalités en réponse aux besoins des utilisateurs, ma contribution a été un élément crucial pour maintenir le site IFS de Singapour à jour et compétitif sur le marché.',
        calfVersionMVP: ' CALF Version MVP',
        firstPartMVP: 'La transition vers une société plus respectueuse de l\'environnement est devenue une priorité majeure de notre époque. Dans ce contexte, le site CALF (Calculateur d\'Analyse de Logement et de Facturation) s\'est révélé être un outil précieux pour les utilisateurs soucieux de réduire leur empreinte écologique. Grâce à des simulateurs sophistiqués intégrés au site, les propriétaires peuvent désormais réaliser des bilans énergétiques détaillés de leurs habitations.',
        secondMvp: 'Le choix de WordPress comme plateforme de base a été judicieux, permettant une gestion efficace du contenu tout en offrant une grande flexibilité en termes de développement. En collaborant avec l\'équipe du site CALF, j\'ai pu concevoir des simulateurs interactifs et intuitifs qui guident les utilisateurs à travers un processus d\'analyse énergétique approfondie.',
        thirdMVP: 'Le développement HTML a permis de créer une structure solide pour les simulateurs, garantissant une expérience utilisateur fluide. Les feuilles de style CSS ont ensuite été utilisées pour concevoir une interface conviviale, assurant une navigation intuitive et une présentation visuellement attrayante des informations.',
        fourthMVP:'L\'intégration de PHP a été cruciale pour rendre les simulateurs interactifs et dynamiques. Les utilisateurs peuvent maintenant entrer des données spécifiques à leur domicile, telles que la superficie, le type de chauffage, l\'isolation, etc., et obtenir des résultats instantanés concernant leur consommation d\'énergie, leurs émissions de gaz à effet de serre, ainsi que des recommandations pour des améliorations énergétiques.',
        fifthMVP:'Ce projet illustre parfaitement comment la technologie peut être utilisée pour sensibiliser les individus à leur impact environnemental tout en leur fournissant des moyens pratiques pour agir. Grâce à l\'expertise en développement, le site CALF est maintenant un outil inestimable pour aider les propriétaires à prendre des décisions éclairées en matière d\'efficacité énergétique, contribuant ainsi à la réduction des émissions de carbone et à la préservation de notre planète.',
        calfVersionV1: 'CALF Version V1',
        firstPartV1:'La transition vers une économie et une société plus respectueuses de l\'environnement n\'a jamais été aussi cruciale. C\'est dans ce contexte que CALFV1 (Crédit Agricole Leasing & Factoring) est né, une évolution audacieuse du site précédent CALF, conçue pour accueillir à la fois les particuliers et les entreprises soucieux de participer activement à la transition énergétique.',
        secondPartV1:'La décision de repenser la structure du site afin d\'accueillir à la fois les particuliers et les entreprises a été un choix stratégique avisé. Le site CALFV1 offre maintenant des fonctionnalités spécifiques à chaque public, tout en restant convivial et accessible. Les particuliers peuvent toujours effectuer des bilans énergétiques détaillés pour leurs logements, tandis que les entreprises peuvent analyser et améliorer leur empreinte écologique, en utilisant des outils spécialement adaptés à leurs besoins.',
        thirdPartV1:'L\'utilisation des champs ACF a permis de personnaliser chaque aspect du site, offrant ainsi une expérience utilisateur sur mesure. Les utilisateurs peuvent désormais entrer des informations spécifiques, telles que les données de leur entreprise ou les détails de leur logement, pour obtenir des résultats précis et pertinents. Cette personnalisation va au-delà des simples formulaires, permettant aux utilisateurs de créer des profils personnalisés pour un suivi continu de leurs progrès en matière d\'efficacité énergétique.',
        fourthPartV1:'Les blocs Gutenberg ACF réutilisables ont été utilisés pour créer une interface utilisateur cohérente et e sthétiquement plaisante. Les utilisateurs peuvent naviguer facilement à travers les différentes parties du site, accédant rapidement aux informations pertinentes pour leurs besoins spécifiques. Cette transformation a permis de repenser entièrement la structure du site CALF, en utilisant des outils de développement avancés tels que les champs ACF (Advanced Custom Fields) et les blocs Gutenberg ACF réutilisables. Cette approche a permis de créer une plateforme web unique, adaptable aux besoins variés des utilisateurs, qu\'ils soient propriétaires, gestionnaires d\'entreprise ou défenseurs de l\'environnement.',
        engieTitle: 'Projet ENGIE (Maps des Stations)',
        firstPartEngie: 'La transition vers la mobilité électrique est l\'une des révolutions les plus passionnantes du secteur de l\'énergie, et le projet ENGIE a joué un rôle clé dans cette transformation. Ce projet a donné naissance à un système de cartographie novateur qui permet aux utilisateurs de localiser facilement les bornes de recharge pour véhicules électriques et de planifier leurs trajets en conséquence.',
        secondPartEngie: 'L\'un des défis majeurs de ce projet était de créer une expérience utilisateur transparente tout en intégrant des informations complexes provenant de sources diverses. Pour résoudre ce défi, j\'ai du mettre en œuvre une approche ingénieuse en utilisant deux API essentielles.',
        thirdPartEngie: 'L\'API Google Maps a été le pilier de la solution de cartographie. Elle a permis de créer une interface interactive, conviviale et visuellement attrayante. Les utilisateurs peuvent facilement zoomer, faire glisser la carte et interagir avec différents marqueurs pour localiser les bornes de recharge les plus proches. De plus, l\'API Google Maps a été utilisée pour calculer les distances entre les points, aidant ainsi les utilisateurs à planifier leur trajet en fonction de l\'autonomie de leur véhicule électrique.',
        fourthPartEngie: 'L\'API Chargetrip, de son côté, a fourni des informations essentielles sur les véhicules électriques, les types de prises et les bornes de recharge. Cette API a permis de créer une base de données complète, actualisée en temps réel, qui garantit que les utilisateurs ont accès aux informations les plus récentes et les plus précises pour planifier leurs déplacements en toute',
        fifthPartEngie: 'L\'intégration harmonieuse de ces deux API a permis de créer un système de cartographie complet qui révolutionne la manière dont les conducteurs de véhicules électriques planifient leurs déplacements. Les utilisateurs peuvent désormais localiser rapidement des bornes de recharge compatibles avec leur véhicule, calculer la distance jusqu\'à leur destination et choisir le meilleur itinéraire en fonction des points de recharge disponibles.',
        creditCard: 'Carte de Crédit',
        dashboard: 'Tableau de Bord',
        countries: 'Pays',
        pokedex: 'Pokedex',
        carousel: 'Carousel',
        todolist: 'To Do List',
        cookingRecipe: 'Recette',
        seeMyCode: 'Voir mon Code',
        cancel: 'Annuler',
        add: 'Ajouter',
        toUpdate: 'Mettre à jour',
        addRecipe: 'Ajouter une recette',
        cookingTime: 'Temps de cuisson (minutes)',
        preparationTime: 'Temps de préparation (minutes)',
        delete: 'Supprimer',
        displayRecipes: 'Affichage Des Différentes Recettes',
        searchPokemon: 'Rechercher un Pokemon',
        titleSearchPokemon : 'Veuillez sélectionner un Pokemon',
        speciesPokemon: 'Espèce du Pokemon',
        typePokemon: 'Type du Pokemon',
        healthPokemon: 'Santé du Pokemon',
        attackPower: 'Point d\'Attaque du Pokemon',
        defensePower: 'Point de Défense du Pokemon',
        myWork: 'Mon Travail',
        firstPartDevBack: 'Le métier de back-end consiste à créer la magie qui se produit lorsque vous appuyez sur un bouton ou entrez une URL. Les développeurs back-end sont les architectes invisibles qui conçoivent les bases de données, construisent les serveurs et écrivent le code complexe qui permet aux utilisateurs de profiter pleinement d\'une expérience en ligne sans accroc.',
        secondPartDevBack: 'Ils veillent à ce que les données soient stockées en toute sécurité, à ce que les transactions en ligne se déroulent sans problème et à ce que les informations soient disponibles lorsque vous en avez besoin. Ils s\'assurent également que tout fonctionne rapidement et efficacement, tout comme les machinistes s\'assurent que les décors se déplacent en douceur.',
        thirdPartDevBack: 'En fin de compte, le métier de back-end est la clé pour offrir une expérience utilisateur exceptionnelle. C\'est l\'art de rendre les choses invisibles, de sorte que les utilisateurs puissent se concentrer sur ce qui compte vraiment : le spectacle lui-même.',
        devWordpress: 'Développeur Wordpress',
        firstPartDevWordpress: 'Le développeur WordPress est le maître d\'œuvre qui conçoit et personnalise des sites Web en utilisant la plateforme WordPress. Ils sont responsables de l\'apparence du site, de ses fonctionnalités et de sa convivialité. C\'est comme un designer d\'intérieur pour le monde virtuel.',
        secondPartDevWordpress: 'Ils sélectionnent les thèmes, choisissent les couleurs et les polices, et organisent le contenu de manière à ce qu\'il soit facile à naviguer. Ils s\'assurent que le site est adapté aux mobiles, rapide à charger et qu\'il offre une expérience utilisateur exceptionnelle.',
        thirdPartDevWordpress: 'De plus, les développeurs WordPress sont des experts en résolution de problèmes. Comme des artisans, ils peaufinent les détails techniques, s\'assurent que le site fonctionne sans accroc et veillent à ce que tout soit à jour et sécurisé, un peu comme un propriétaire de magasin s\'assure que tout est en ordre.',
        fourthPartDevWordpress: 'En fin de compte, le métier de développeur WordPress consiste à transformer des idées en réalité en ligne, en créant des espaces virtuels où la créativité peut prospérer et où les visiteurs se sentent chez eux. C\'est un métier qui marie la technologie et l\'art pour créer des sites Web mémorables et fonctionnels.',
        devPHP: 'Développeur PHP',
        firstPartDevPhp: 'Imaginez un développeur PHP comme un architecte de l\'infrastructure invisible du web. Leur métier consiste à créer des bases solides pour les sites Web et les applications en utilisant le langage de programmation PHP. C\'est un peu comme construire la structure d\'un bâtiment avant d\'y ajouter les détails et la décoration.',
        secondPartDevPhp: 'Les développeurs PHP sont des maîtres dans l\'art de la logique et de la programmation. Ils écrivent du code qui permet aux sites Web de fonctionner de manière transparente, de traiter les données, d\'interagir avec les bases de données et de répondre aux demandes des utilisateurs. Ils sont les artisans derrière les coulisses, veillant à ce que tout fonctionne comme prévu.',
        thridPartDevPhp: 'En travaillant sur des projets, les développeurs PHP collaborent souvent avec des concepteurs et des développeurs front-end pour donner vie à des idées. Ils assurent la sécurité des sites Web, la rapidité de leur chargement et leur évolutivité, tout comme un ingénieur s\'assure de la solidité d\'une structure.',
        devPhpReact: 'Développeur ReactJS / PHP pour Wordpress Gutenberg',
        firstPartPhpReact: 'Un développeur PHP/ReactJS pour WordPress Gutenberg est un artiste du web qui maîtrise l\'intégration de technologies avancées pour transformer l\'expérience WordPress en quelque chose de vraiment remarquable. Ils sont un peu comme les maîtres d\'œuvre de la fusion entre la puissance de PHP, la souplesse de ReactJS et la facilité d\'utilisation de Gutenberg, le nouvel éditeur de contenu de WordPress.',
        secondPartPhpReact: 'Ces développeurs sont des maîtres dans l\'art de l\'interaction utilisateur. Ils utilisent ReactJS pour créer des composants interactifs et dynamiques qui s\'intègrent parfaitement à WordPress. Cela signifie qu\'ils peuvent faire en sorte que l\'édition de contenu sur WordPress soit plus fluide, plus visuelle et plus intuitive.',
        thirdPartPhpReact: 'Ils sont également des magiciens de la personnalisation. Ils prennent les éléments de base de WordPress et les transforment en expériences uniques et sur mesure. Cela peut inclure la création de blocs personnalisés pour Gutenberg, l\'optimisation des performances, et l\'assurance que tout fonctionne parfaitement ensemble.',
        fourthPartPhpReact: 'En fin de compte, le métier de développeur PHP/ReactJS pour WordPress Gutenberg consiste à repousser les limites de ce qui est possible avec WordPress. Ils combinent la puissance des technologies modernes avec la simplicité de WordPress pour créer des sites Web qui se démarquent et offrent une expérience utilisateur exceptionnelle. C\'est comme être à la fois l\'architecte et le chef d\'orchestre d\'une symphonie web.',
        training: 'Mes Formations',
      }  
    } ,
    en: { 
      translation: {
        cookies: 'This site uses cookies to improve your experience. Continuing to navigate on the site, you accept our use of cookies.',
        agreeCookies: 'I agree',
        home: 'Home',
        login: 'Login',
        about: 'About',
        travel: 'Travel',
        project: 'Projects',
        paiement: 'Payment',
        settings: 'Settings',
        contact: 'Contact',
        users: 'Users',
        connexion: 'Login',
        registration: 'Registration',
        hello: 'Hello, I am',
        backend: 'Back-End',
        developer: 'Developer',
        firstp: 'Welcome to my first site on React.',
        technology: 'Technologies',
        aboutMe: 'About Me',
        story: 'A Story of Travail Acharné and of Persuasion',
        passionateComputer: 'Passionate about IT for over 10 years now, I launched into the world of web programming alone. As a self-taught person, I acquired my skills by taking online courses and exploring the latest technologies on my own. My initial training in the field of computer networks (RIMS = Mobility and Security Computer Networks) provided me with a solid foundation for understanding the ins and outs of IT. I thrive by creating various websites and writing code, which allows me to constantly stay in touch with different programming languages such as HTML, Javascript, PHP, CSS, REACT JS.',
        passionateComputer2: 'My self-taught approach and thirst for learning push me to train independently, taking online courses and keeping up to date with the latest technological updates.Thanks to my quick thinking and ease of understanding, I am able to quickly interpret the needs of my clients and implement innovative solutions. My goal is to stay at the forefront of technology and provide effective solutions, while continuing to expand my knowledge to meet tomorrow\'s challenges.',
        realisation: 'I realize some sites or some codes in order to be able to keep control of certain programming languages (HTML, Javascript, PHP, CSS, REACT JS), in order not to be late on the latest technologies and latest updates. Having a quick mind and an ease of understanding, this allows me to be able to interpret and put in place quite easily and quickly what I am asked to do.',
        informationCV: 'Here is an overview of my profile, with my different experiences and training that I have been able to follow. Do not hesitate to contact me if you want more information.',
        downloadCV: 'CV Download',
        myServices: 'My Services',
        infoBack: 'The back-end developer is the invisible behind the applications and websites that we use at the quotidian. In concentrating on the logic and the functionalities that are hidden under the surface, this professional of the web programming creates and maintains the servers, the databases and the algorithms that allow the systems to work in rapidity. In using programming languages such as Python, Java, Ruby or PHP, the back-end developer creates the structures that allow the data to be processed',
        infoTechno: 'As a developer confirmed, I developed both WordPress and React, two main pillars of the development web. With WordPress, I create dynamic websites and interactive web pages using custom themes and plugins that respond to unique needs of each project. Plus, with my knowledge of React, I am in charge of building interactive interfaces for the user and the front-end, providing a fluid and captivating experience for the users.',
        infoGestion: 'As a professionnel who has achieved a level in the management of Git and Docker, I have an expertise solid in the domain of the development and deployment of software. With Git, I manage efficiently the versions of the code source, facilitating a convenient collaboration among teams and the follow-up of modifications. With Docker, I am in charge of creating, deploying and managing isolated environments of applications, assuring a portability and a stable performance during the deployment on',
        portfolio: 'My Portfolio',
        contactMe: 'Contact Me',
        submit: 'Submit',
        headerDev: 'Let\'s develop your',
        headerProject: 'Project',
        headerTogether: 'together !',
        headerDevBack: 'Back-End Developer',
        description: 'Description',
        whoami: 'Who am I ?',
        descriptionFirst: 'Passionate about Backend development, I merge the power of technology with the creativity of code to create exceptional online experiences. My toolkit includes a range of technologies, from React to build dynamic user interfaces, PHP to create robust databases and complex server logic. I juggle with Javascript, HTML and CSS to give bring my ideas to life, creating fluid and aesthetically pleasing websites.',
        seeMore: 'See More',
        whatido: 'What i do ?',
        descriptionSecond:'A back-end developer specializing in PHP, WordPress and ReactJS is responsible for creating and managing server logic, databases, custom features, security and data integration for robust web applications and interactive',
        name: 'Name',
        labelName: 'Indicate your name',
        firstName: 'First Name',
        labelFirstname: 'Indicate your first name',
        mail: 'Email Address',
        labelMail: 'Indicate your email address',
        labelMessage: 'Indicate your message',
        sendMessage: 'Send your message',
        tmaIfsSingapore: 'TMA IFS Singapore',
        firstPartIfs: 'As a Wordpress Developer, I had the exceptional opportunity to work on the IFS site of Singapore, which is based on the WordPress platform. This experience was both rewarding and stimulating, because it allowed me to play an essential role in maintaining good condition and developing continuous operation of this crucial web application.',
        secondPartIfs: 'TMA, or Third Party Application Maintenance, is a key discipline in IT systems management. It consists of ensuring the monitoring, maintenance, bug correction, and evolution of applications xisting, generally developed by a third party. This means that businesses can concentrate on their core business while letting experts like me take care of technical management of their applications.',
        thirdPartIfs: 'At the IFS Singapore site, my role in TMA involved several exciting aspects. First of all, I was responsible for application maintenance, which meant that I had to ensure that the site functions optimally at all times. This included constant performance monitoring, resolving issues quickly and ensuring continued availability of the site to users.',
        fourthPartIfs: 'Additionally, I was also responsible for updating plugins. WordPress is a flexible platform that relies on numerous plugins to extend its functionality. Keeping these plugins up to date is essential to guarantee the security and stability of the site. I worked on the planning and implementation of these updates, ensuring that they did not disrupt existing functionality.',
        fifthPartIfs: 'Finally, I also had the opportunity to actively contribute to improving the site. Whether in proposing functional improvements, optimizing performance or integrating new features in response to user needs, my contribution was a crucial element for keep the Singapore IFS site up to date and competitive in the market.',
        calfVersionMVP: 'CALF MVP Version',
        firstPartMVP: 'The transition to a more environmentally friendly society has become a major priority of our time. In this context, the CALF site (Housing Analysis and Billing Calculator) has proven to be a valuable tool for users keen to reduce their ecological footprint. Thanks to sophisticated simulators integrated into the site, owners can now carry out detailed energy assessments of their homes.',
        secondMvp: 'The choice of WordPress as a base platform was wise, allowing efficient content management while offering great flexibility in terms of development. By collaborating with the CALF site team, I was able to design interactive and intuitive simulators that guide users through an in-depth energy analysis process.',
        thirdMVP: 'HTML development helped create a solid structure for the simulators, ensuring a smooth user experience. CSS stylesheets were then used to design a user-friendly interface, ensuring intuitive navigation and a visually appealing presentation of information.',
        fourthMVP:'The integration of PHP was crucial to making the simulators interactive and dynamic. Users can now enter data specific to their home, such as square footage, heating type, insulation, etc., and get instant results regarding their energy consumption, greenhouse gas emissions, as well as recommendations for energy improvements.',
        fifthMVP:'This project perfectly illustrates how technology can be used to raise awareness of their environmental impact while providing them with practical means to take action. With development expertise, the CALF site is now an invaluable tool to help homeowners make informed energy efficiency decisions, helping to reduce carbon emissions and preserve our planet.',
        calfVersionV1: 'CALF V1 Version',
        firstPartV1:'The transition to a more environmentally friendly economy and society has never been more crucial. It is in this context that CALFV1 (Crédit Agricole Leasing & Factoring) was born, a bold evolution of the previous CALF site, designed to welcome both individuals and companies wishing to actively participate in the energy transition.',
        secondPartV1:'The decision to rethink the structure of the site in order to accommodate both individuals and businesses was a wise strategic choice. The CALFV1 site now offers specific features for each audience, while remaining user-friendly and accessible. Individuals can still carry out detailed energy assessments for their homes, while businesses can analyze and improve their ecological footprint, using tools specially adapted to their needs.',
        thirdPartV1:'Using ACF fields allowed every aspect of the site to be personalized, providing a tailored user experience. Users can now enter specific information, such as their business data or accommodation details, to get accurate and relevant results. This personalization goes beyond simple forms, allowing users to create personalized profiles for continuous monitoring of their energy efficiency progress.',
        fourthPartV1:'Reusable Gutenberg ACF blocks were used to create a consistent and aesthetically pleasing user interface. Users can easily navigate through different parts of the site, quickly accessing information relevant to their specific needs. This transformation made it possible to completely rethink the structure of the CALF site, using advanced development tools such as ACF fields (Advanced Custom Fields) and reusable Gutenberg ACF blocks. This approach made it possible to create a unique web platform, adaptable to the varied needs of users, whether they are owners, business managers or environmental defenders.',
        engieTitle:'ENGIE Project (Stations Maps)',
        firstPartEngie: 'The transition to electric mobility is one of the most exciting revolutions in the energy sector, and the ENGIE project has played a key role in this transformation. This project resulted in an innovative mapping system that allows users to easily locate electric vehicle charging stations and plan their journeys accordingly.',
        secondPartEngie: 'One of the major challenges of this project was creating a seamless user experience while integrating complex information from diverse sources. To solve this challenge, I had to implement an ingenious approach using two essential APIs.',
        thirdPartEngie: 'The Google Maps API was the backbone of the mapping solution. It made it possible to create an interactive, user-friendly and visually attractive interface. Users can easily zoom, drag the map and interact with different markers to locate the nearest charging stations. Additionally, the Google Maps API was used to calculate distances between points, helping users plan their journey based on the range of their electric vehicle.',
        fourthPartEngie: 'The Chargetrip API, for its part, provided essential information on electric vehicles, plug types and charging stations. This API has created a comprehensive, real-time database that ensures users have access to the latest and most accurate information to plan their trips with confidence.',
        fifthPartEngie: 'The seamless integration of these two APIs has created a comprehensive mapping system that revolutionizes the way electric vehicle drivers plan their trips. Users can now quickly locate charging stations compatible with their vehicle, calculate the distance to their destination and choose the best route based on available charging points.',
        creditCard: 'CreditCard',
        dashboard: 'Dashboard',
        countries: 'Countries',
        pokedex: 'Pokedex',
        carousel: 'Slider',
        todolist: 'To Do List',
        cookingRecipe: 'Cooking Recipe',
        seeMyCode: 'See My Code',
        cancel: 'Cancel',
        add: 'Add',
        toUpdate: 'To Update',
        addRecipe: 'Add Recipe',
        cookingTime: 'Cooking Time (minutes)',
        preparationTime: 'Preparation Time (minutes)',
        delete: 'Delete',
        displayRecipes: 'Displaying Different Recipes',
        searchPokemon: 'Search Pokemon',
        titleSearchPokemon: 'Please select a Pokemon',
        speciesPokemon: 'Pokemon Species',
        typePokemon: 'Pokemon Type',
        healthPokemon: 'Health Pokemon',
        attackPower: 'Attack Power Pokemon',
        defensePower: 'Defense Power Pokemon',
        myWork: 'My Work',
        firstPartDevBack: 'Le métier de back-end consiste à créer la magie qui se produit lorsque vous appuyez sur un bouton ou entrez une URL. Les développeurs back-end sont les architectes invisibles qui conçoivent les bases de données, construisent les serveurs et écrivent le code complexe qui permet aux utilisateurs de profiter pleinement d\'une expérience en ligne sans accroc.',
        secondPartDevBack: 'Ils veillent à ce que les données soient stockées en toute sécurité, à ce que les transactions en ligne se déroulent sans problème et à ce que les informations soient disponibles lorsque vous en avez besoin. Ils s\'assurent également que tout fonctionne rapidement et efficacement, tout comme les machinistes s\'assurent que les décors se déplacent en douceur.',
        thirdPartDevBack: 'En fin de compte, le métier de back-end est la clé pour offrir une expérience utilisateur exceptionnelle. C\'est l\'art de rendre les choses invisibles, de sorte que les utilisateurs puissent se concentrer sur ce qui compte vraiment : le spectacle lui-même.',
        devWordpress: 'Wordpress Developper',
        firstPartDevWordpress: 'The WordPress developer is the prime contractor who designs and customizes websites using the WordPress platform. They are responsible for the appearance of the site, its functionality and its usability. It\'s like an interior designer for the virtual world.',
        secondPartDevWordpress: 'They select themes, choose colors and fonts, and organize content so that it is easy to navigate. They make sure the site is mobile-friendly, fast to load, and provides a great user experience exceptional.',
        thirdPartDevWordpress: 'Additionally, WordPress developers are expert problem solvers. Like craftsmen, they refine the details technical, ensure that the site runs smoothly and ensure that everything is up to date and secure, a bit like a Shop owner makes sure everything is in order.',
        fourthPartDevWordpress: 'Ultimately, the job of a WordPress developer is about turning ideas into reality online, creating spaces virtual spaces where creativity can flourish and visitors feel at home. It is a profession that combines technology and the art of creating memorable and functional websites.',
        devPHP: 'PHP Developper',
        training: 'My Lessons',
      }
    }
  } ,
  lng: 'fr',
  fallbackLng: 'fr'
});

export default i18next;
