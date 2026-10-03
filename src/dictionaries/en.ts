export const en = {
  metadata: {
    title: "Dogether — Shared plans, gently",
    description:
      "A local-first iPhone and iPad app for shared plans and tasks. Works offline, syncs through iCloud when you invite someone. No account, no developer server.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    privacy: "Privacy",
    support: "Support",
    download: "Download",
  },
  hero: {
    eyebrow: "Local-first · iCloud when you invite someone",
    title: "Shared plans,",
    accent: "gently.",
    body: "Groceries, trips, moving day, study weeks — keep a plan in one calm place instead of scattered messages. Works offline. Syncs through iCloud.",
    download: "App Store",
    downloadNote: "Coming soon",
    how: "How it works",
    chips: ["No account", "Private iCloud sharing", "Works offline"],
  },
  features: {
    kicker: "What it does",
    title: "One list. The people who need it.",
    items: [
      {
        title: "Plans and tasks",
        body: "Start from a template or a blank list. Check things off as they get done.",
      },
      {
        title: "Share when you want",
        body: "A plan stays on your device until you invite someone. Sharing uses iCloud, not a Dogether account.",
      },
      {
        title: "Home Screen widget",
        body: "See what is happening now without opening the app.",
      },
      {
        title: "Reminders that stay local",
        body: "Notifications are scheduled on the device. There is no push server behind them.",
      },
    ],
  },
  how: {
    kicker: "How it works",
    title: "Invite someone. That is the whole setup.",
    steps: [
      { n: "01", title: "Make a plan", body: "Pick a template or start empty. Add tasks." },
      { n: "02", title: "Share the link", body: "iCloud creates a private share. The other person accepts it in Dogether." },
      { n: "03", title: "Keep going offline", body: "Edits save on the device and catch up when iCloud is available again." },
    ],
  },
  gallery: {
    kicker: "Screens",
    title: "Screenshots",
    note: "App screenshots will go here. This frame is a placeholder.",
    caption: "Placeholder",
  },
  download: {
    title: "On the App Store soon",
    body: "The listing is not live yet. The download button is a placeholder until the App Store URL exists.",
    button: "Download on the App Store",
  },
  footer: {
    blurb:
      "A local-first app for shared plans and tasks. Works offline, syncs through iCloud when you invite someone.",
    product: "Product",
    support: "Support",
    privacy: "Privacy Policy",
    supportLink: "Support",
    copyright: "© 2026 Dogether",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated October 2, 2026",
    sections: [
      {
        h: "Who this covers",
        p: "This policy describes the Dogether iOS and iPadOS app and this website. Dogether does not operate its own account system or content server.",
      },
      {
        h: "What stays on your devices",
        p: "Plans, tasks, and related settings are stored on your device. When you share a plan, Apple iCloud (CloudKit) stores and syncs that shared data in your iCloud account and the accounts of people you invite. Dogether does not receive a copy of that content on a developer server.",
      },
      {
        h: "What we do not collect",
        p: "The app does not include analytics, advertising, or tracking SDKs. It does not ask you to create a Dogether account. We do not sell personal information.",
      },
      {
        h: "Notifications",
        p: "Reminders are scheduled locally. The app does not use a remote push service to read your plans.",
      },
      {
        h: "Your choices",
        p: "You can view and delete plans in the app. You can stop sharing from the plan. Removing the app deletes the on-device copy; iCloud data follows Apple’s iCloud controls for your account.",
      },
      {
        h: "This website",
        p: "These pages are static. They do not set analytics cookies and do not ask you to sign in.",
      },
      {
        h: "Contact",
        p: "Questions about this policy: use the Support page.",
      },
    ],
  },
  support: {
    title: "Support",
    intro: "Dogether is a local-first shared list. Most issues are about sharing or sync, not an account.",
    items: [
      {
        h: "No login",
        p: "There is no Dogether account. Sharing uses the Apple ID already signed into iCloud on the device.",
      },
      {
        h: "A share did not arrive",
        p: "Both people need Dogether installed and iCloud signed in. Open the invitation on the device that should join the plan.",
      },
      {
        h: "Offline",
        p: "You can keep editing without a network. Changes sync when that device can reach iCloud again.",
      },
      {
        h: "Privacy questions",
        p: "Read the Privacy Policy. It is the same page linked from the app.",
      },
    ],
    contact: "App Store link is not live yet. For now, product questions can go through the developer’s GitHub: mammut001/dogether.",
  },
};

export type Dictionary = typeof en;
