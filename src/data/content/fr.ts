import type { Content } from './en';

/*
 * The French copy, in the same shape as `en.ts`. The app says "tu", so the site does too.
 */
export const fr: Content = {
  locale: 'fr',
  languageName: 'Français',
  switchTo: 'English',
  switchToShort: 'EN',

  skipToContent: 'Aller au contenu',

  nav: {
    label: 'Principale',
    footerLabel: 'Pied de page',
    support: 'Aide',
    privacy: 'Confidentialité',
    download: 'Télécharger',
  },

  footer: {
    byline: 'Habits, une petite app d’Arnaud Etienne.',
  },

  home: {
    title: 'Habits — Dix secondes par jour',
    description:
      'Un petit suivi d’habitudes tranquille. Coche ce que tu as tenu, referme l’app. Pas de compte, pas de serveur, pas de traçage. Pour iPhone et Android.',
    h1: 'Dix secondes par jour.',
    lede: 'Un petit suivi tranquille pour les quelques choses que tu veux continuer à faire. Coche ce que tu as tenu, referme l’app. Des statistiques calmes et honnêtes font le reste.',

    appStoreAlt: 'Télécharger dans l’App Store',
    apkKicker: 'Pour Android',
    apkLabel: 'Télécharger l’APK',

    heroImageAlt:
      'L’écran Aujourd’hui : trois habitudes cochées, chaque carte remplie de sa couleur, une encore ouverte.',

    why: {
      h2: 'Un rituel quotidien, pas un outil de productivité.',
      cards: [
        {
          title: 'Coche, puis referme.',
          body: 'Ouvre l’app, coche les habitudes que tu as tenues aujourd’hui, et c’est fini. Chaque tap remplit la carte de sa couleur.',
        },
        {
          title: 'Des statistiques honnêtes.',
          body: 'Série en cours, record, progression mois par mois et les jours qui coincent. Pas de badges, pas de coach, pas de pression.',
        },
        {
          title: 'Tout reste sur ton téléphone.',
          body: 'Pas de compte, pas de serveur, pas de traçage. Exporte un fichier quand tu veux une sauvegarde ou un nouveau téléphone.',
        },
      ],
    },

    screens: {
      h2: 'Trois écrans, rien de plus.',
      items: [
        {
          title: 'Aujourd’hui',
          caption: 'Coche ce que tu as tenu. Hier peut encore être modifié.',
          alt: 'Aujourd’hui : une bande de la semaine avec des points colorés et quatre cartes d’habitudes.',
        },
        {
          title: 'Statistiques',
          caption: 'Où tu en es sur chaque habitude, d’un coup d’œil.',
          alt: 'Statistiques : série, record et taux sur 30 jours pour chaque habitude.',
        },
        {
          title: 'Une habitude',
          caption: 'Est-ce que je progresse ? Quels jours coincent ? Des réponses en toutes lettres.',
          alt: 'Une habitude en détail : barres mensuelles, comparaison annuelle et jours les plus difficiles.',
        },
      ],
    },

    privacyBand: {
      h2: 'Pas de compte. Pas de serveur. Pas de traçage.',
      body: 'Tes habitudes sont enregistrées sur ton téléphone et nulle part ailleurs. Personne, pas même le développeur, ne peut les voir.',
      cta: 'Lire la politique de confidentialité',
    },

    android: {
      h2: 'Installer sur Android',
      intro:
        'Habits n’est pas sur Google Play. Tu l’installes directement depuis ce site, sous forme de fichier APK.',
      downloadLabel: (size: string) => `Télécharger l’APK · ${size} Mo`,
      checksumLabel: 'SHA-256 :',
      steps: [
        {
          leadHtml: '<strong>Télécharge l’APK</strong> sur ton téléphone Android.',
          detail: 'Ouvre cette page sur le téléphone lui-même et appuie sur le bouton.',
        },
        {
          leadHtml: '<strong>Autorise l’installation.</strong>',
          detail:
            'Android demande une fois l’autorisation de laisser ton navigateur installer des apps. Accepte pour ce fichier.',
        },
        {
          leadHtml: '<strong>Ouvre Habits.</strong>',
          detail:
            'Pour une nouvelle version, télécharge le nouvel APK et installe-le par-dessus l’ancien. Tes données restent.',
        },
      ],
    },
  },

  support: {
    title: 'Habits — Aide',
    description:
      'Aide pour Habits, le suivi d’habitudes quotidien : où sont tes données, importer une sauvegarde, les rappels, et l’installation sur Android.',
    h1: 'Aide',
    lede: 'Une question, un bug, une idée ? Écris-moi. Je réponds en général sous quelques jours.',
    emailLabel: 'E-mail',
    emailHint: 'Ou dans l’app : Réglages › Envoyer un commentaire.',
    writeEmail: 'Écrire un e-mail',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Où sont mes données ?',
        answerHtml:
          '<p>Uniquement sur ton téléphone. Il n’y a ni compte ni serveur.</p>' +
          '<p>Pour garder une sauvegarde ou changer de téléphone, utilise <strong>Réglages › Exporter les données</strong>, enregistre le fichier dans Fichiers ou iCloud Drive, puis importe-le sur le nouveau téléphone.</p>',
      },
      {
        q: 'Puis-je importer mon historique depuis une autre app ?',
        answerHtml:
          '<p>Oui, depuis un export de Habits ou une sauvegarde Daygraph. Passe par <strong>Réglages › Importer des données</strong>, puis choisis de le fusionner avec tes données actuelles ou de les remplacer.</p>',
      },
      {
        q: 'Je ne reçois pas le rappel quotidien.',
        answerHtml:
          '<p>Vérifie que les notifications sont autorisées pour Habits dans les réglages de ton téléphone. Le rappel est aussi sauté les jours où tu as déjà coché quelque chose.</p>',
      },
      {
        q: 'Comment l’installer sur Android ?',
        answerHtml:
          '<p>Habits n’est pas sur Google Play. Télécharge l’APK depuis la <a href="/fr/#android">page d’accueil</a> sur ton téléphone, autorise ton navigateur à l’installer, puis ouvre-le. Pour mettre à jour, installe le nouvel APK par-dessus l’ancien ; tes données restent.</p>',
      },
      {
        q: 'Est-ce que l’app collecte quelque chose ?',
        answerHtml:
          '<p>Non. Pas de statistiques d’usage, pas de publicité, pas de traceurs. Les détails sont dans la <a href="/fr/privacy/">politique de confidentialité</a>.</p>',
      },
    ],
  },

  privacy: {
    title: 'Habits — Politique de confidentialité',
    description:
      'Politique de confidentialité de Habits : pas de compte, pas de serveur, pas de statistiques d’usage, pas de publicité. Tes données restent sur ton téléphone.',
    h1: 'Politique de confidentialité',
    updated: 'Dernière mise à jour le 9 octobre 2026',
    short: {
      title: 'En bref : Habits ne collecte rien.',
      body: 'Pas de compte, pas de serveur, pas de statistiques d’usage, pas de publicité. Tes données restent sur ton téléphone, et le développeur n’y a pas accès.',
    },
    sections: [
      {
        h2: 'Ce qui est enregistré sur ton téléphone',
        bodyHtml:
          '<ul>' +
          '<li>Les noms, les couleurs et l’ordre de tes habitudes.</li>' +
          '<li>Les jours où tu as coché chacune d’elles.</li>' +
          '<li>Tes heures de rappel et tes réglages.</li>' +
          '</ul>' +
          '<p>Tout cela reste dans le stockage de l’app, sur ton appareil.</p>',
      },
      {
        h2: 'Ce qui quitte ton téléphone',
        bodyHtml:
          '<p>Uniquement ce que tu choisis d’envoyer.</p>' +
          '<ul>' +
          '<li><strong>Les exports.</strong> Le fichier d’export va là où tu l’enregistres ou l’envoies. Les règles de cet endroit s’appliquent ensuite.</li>' +
          '<li><strong>Les commentaires.</strong> « Envoyer un commentaire » ouvre ton app de mail. Ton adresse sert uniquement à te répondre.</li>' +
          '</ul>',
      },
      {
        h2: 'Rappels et imports',
        bodyHtml:
          '<p>Les rappels sont programmés sur ton appareil, sans aucun serveur. Les sauvegardes importées sont lues sur ton téléphone et ne sont jamais envoyées ailleurs.</p>',
      },
      {
        h2: 'Traçage',
        bodyHtml:
          '<p>Aucun. L’app ne contient ni traceurs, ni publicité, ni statistiques tierces.</p>',
      },
      {
        h2: 'Ce site web',
        bodyHtml:
          '<p>Ce site web — pas l’app — utilise Cloudflare Web Analytics pour compter les visites. Il ne pose aucun cookie et ne suit pas les visiteurs d’un site à l’autre.</p>',
      },
      {
        h2: 'Supprimer tes données',
        bodyHtml:
          '<p>Désinstaller l’app supprime ses données. Les sauvegardes de ton téléphone (iCloud, un ordinateur, ou ta sauvegarde Android) peuvent encore en contenir une copie.</p>',
      },
      {
        h2: 'Enfants',
        bodyHtml:
          '<p>Habits ne s’adresse pas aux enfants, et ne collecte de données auprès de personne.</p>',
      },
      {
        h2: 'Modifications et contact',
        bodyHtml:
          '<p>Si cette politique change, la nouvelle version sera publiée ici avec une nouvelle date. Questions : <a href="mailto:hello@arn0.be">hello@arn0.be</a>.</p>',
      },
    ],
  },
};
