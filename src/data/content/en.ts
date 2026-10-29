/*
 * All the English copy. `fr.ts` holds the same shape, so a section added here has to be translated
 * before the project type-checks. Fields ending in `Html` are rendered with `set:html` and may
 * contain links and <strong>; everything else is plain text.
 */
import type { Locale } from '../site';

export const en = {
  locale: 'en' as Locale,
  /** Shown in the other language’s switch button, and as this page’s own `lang`. */
  languageName: 'English',
  switchTo: 'Français',
  switchToShort: 'FR',

  skipToContent: 'Skip to content',

  nav: {
    label: 'Main',
    footerLabel: 'Footer',
    support: 'Support',
    privacy: 'Privacy',
    download: 'Download',
  },

  footer: {
    byline: 'Habits, a small app by Arnaud Etienne.',
  },

  home: {
    title: 'Habits — Ten seconds a day',
    description:
      'A small, quiet habit tracker. Tap what you kept, close the app. No account, no server, no tracking. For iPhone and Android.',
    h1: 'Ten seconds a day.',
    lede: 'A small, quiet tracker for the few things you want to keep doing. Tap what you kept, close the app. Calm, honest statistics do the rest.',

    appStoreAlt: 'Download on the App Store',
    apkKicker: 'For Android',
    apkLabel: 'Download APK',
    /** The line under the two download buttons; `howToInstall` is the link at its end. */
    apkNote: (version: string, size: string, min: string) =>
      `Android APK · version ${version} · ${size} MB · Android ${min} or later.`,
    howToInstall: 'How to install',

    heroImageAlt:
      'The Today screen: three habits ticked, each card filled with its colour, one still open.',

    why: {
      h2: 'An evening ritual, not a productivity tool.',
      cards: [
        {
          title: 'Tap, then close.',
          body: 'Open the app, tap the habits you kept today, and you’re done. Each tap fills the card with its colour.',
        },
        {
          title: 'Honest statistics.',
          body: 'Current streak, record, month-by-month progress and the days that are harder. No badges, no coach, no pressure.',
        },
        {
          title: 'Stays on your phone.',
          body: 'No account, no server, no tracking. Export a file whenever you want a backup or a new phone.',
        },
      ],
    },

    screens: {
      h2: 'Three screens, nothing more.',
      items: [
        {
          title: 'Today',
          caption: 'Tick what you kept. Yesterday can still be changed.',
          alt: 'Today: a week strip with coloured dots and four habit cards.',
        },
        {
          title: 'Statistics',
          caption: 'Where you stand on every habit, at a glance.',
          alt: 'Statistics: streak, record and 30-day rate for each habit.',
        },
        {
          title: 'One habit',
          caption: 'Am I improving? Which days are hard? Plain answers.',
          alt: 'One habit in detail: monthly bars, yearly comparison and hardest weekdays.',
        },
      ],
    },

    privacyBand: {
      h2: 'No account. No server. No tracking.',
      body: 'Your habits are stored on your phone and nowhere else. Nobody, not even the developer, can see them.',
      cta: 'Read the privacy policy',
    },

    android: {
      h2: 'Installing on Android',
      intro: 'Habits isn’t on Google Play. You install it directly from this site, as an APK file.',
      downloadLabel: (size: string) => `Download APK · ${size} MB`,
      checksumLabel: 'SHA-256:',
      steps: [
        {
          leadHtml: '<strong>Download the APK</strong> on your Android phone.',
          detail: 'Open this page on the phone itself and tap the button.',
        },
        {
          leadHtml: '<strong>Allow the install.</strong>',
          detail: 'Android asks once to let your browser install apps. Accept for this file.',
        },
        {
          leadHtml: '<strong>Open Habits.</strong>',
          detail:
            'For a new version, download the new APK and install it over the old one. Your data stays.',
        },
      ],
    },
  },

  support: {
    title: 'Habits — Support',
    description:
      'Help with Habits, the evening habit tracker: where your data lives, importing a backup, reminders, and installing on Android.',
    h1: 'Support',
    lede: 'A question, a bug, an idea? Write to me. I usually reply within a few days.',
    emailLabel: 'Email',
    emailHint: 'Or in the app: Settings › Send feedback.',
    writeEmail: 'Write an email',
    faqTitle: 'Frequent questions',
    faq: [
      {
        q: 'Where is my data?',
        answerHtml:
          '<p>Only on your phone. There’s no account and no server.</p>' +
          '<p>To keep a backup or move to a new phone, use <strong>Settings › Export data</strong>, save the file in Files or iCloud Drive, then import it on the new phone.</p>',
      },
      {
        q: 'Can I import my history from another app?',
        answerHtml:
          '<p>Yes, from a Habits export or a Daygraph backup. Use <strong>Settings › Import data</strong>, then choose whether to merge it with your current data or replace it.</p>',
      },
      {
        q: 'I don’t get the evening reminder.',
        answerHtml:
          '<p>Check that notifications are allowed for Habits in your phone’s settings. The reminder is also skipped on days when you’ve already ticked something.</p>',
      },
      {
        q: 'How do I install it on Android?',
        answerHtml:
          '<p>Habits isn’t on Google Play. Download the APK from the <a href="/#android">home page</a> on your phone, allow your browser to install it, then open it. To update, install the new APK over the old one; your data stays.</p>',
      },
      {
        q: 'Does the app collect anything?',
        answerHtml:
          '<p>No. No analytics, no ads, no trackers. The details are in the <a href="/privacy/">privacy policy</a>.</p>',
      },
    ],
  },

  privacy: {
    title: 'Habits — Privacy policy',
    description:
      'Privacy policy of Habits: no account, no server, no analytics, no advertising. Your data stays on your phone.',
    h1: 'Privacy policy',
    updated: 'Last updated 9 October 2026',
    short: {
      title: 'In short: Habits collects nothing.',
      body: 'No account, no server, no analytics, no advertising. Your data stays on your phone, and the developer has no access to it.',
    },
    sections: [
      {
        h2: 'What is stored on your phone',
        bodyHtml:
          '<ul>' +
          '<li>The names, colours and order of your habits.</li>' +
          '<li>The days you ticked each one.</li>' +
          '<li>Your reminder times and settings.</li>' +
          '</ul>' +
          '<p>All of it stays in the app’s storage on your device.</p>',
      },
      {
        h2: 'What leaves your phone',
        bodyHtml:
          '<p>Only what you choose to send.</p>' +
          '<ul>' +
          '<li><strong>Exports.</strong> The export file goes wherever you save or send it. The rules of that place then apply.</li>' +
          '<li><strong>Feedback.</strong> “Send feedback” opens your email app. Your address is used only to reply to you.</li>' +
          '</ul>',
      },
      {
        h2: 'Reminders and imports',
        bodyHtml:
          '<p>Reminders are scheduled on your device, without any server. Imported backups are read on your phone and never uploaded.</p>',
      },
      {
        h2: 'Tracking',
        bodyHtml: '<p>None. The app contains no trackers, no ads and no third-party analytics.</p>',
      },
      {
        h2: 'This website',
        bodyHtml:
          '<p>This website — not the app — uses Cloudflare Web Analytics to count visits. It sets no cookies and does not track visitors across sites.</p>',
      },
      {
        h2: 'Deleting your data',
        bodyHtml:
          '<p>Uninstalling the app deletes its data. Backups of your phone (iCloud, a computer, or your Android backup) may still hold a copy.</p>',
      },
      {
        h2: 'Children',
        bodyHtml: '<p>Habits isn’t directed at children, and it collects no data from anyone.</p>',
      },
      {
        h2: 'Changes and contact',
        bodyHtml:
          '<p>If this policy changes, the new version will be posted here with a new date. Questions: <a href="mailto:hello@arn0.be">hello@arn0.be</a>.</p>',
      },
    ],
  },
};

export type Content = typeof en;
