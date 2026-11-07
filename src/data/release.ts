/*
 * The only file to edit when a new version ships.
 *
 * Bump `version`, then copy the size and checksum from the GitHub release notes that
 * .github/workflows/release.yml prints. `apkUrl` follows from `version` on its own.
 *
 * A value left in its `[PLACEHOLDER]` state still renders: the button it belongs to is disabled
 * instead of linking nowhere, and the text shows the placeholder.
 */
const APP_REPO = 'https://github.com/NelsonEU/habits';

export const release = {
  /** App Store listing, e.g. https://apps.apple.com/app/id0000000000 */
  appStoreUrl: 'https://apps.apple.com/app/id6821026409',
  /** The APK's version — the `vX.Y.Z` tag that built it, and `version` in the app's package.json. */
  version: '1.0.1',
  /** APK size in whole megabytes, as a bare number. */
  size: '61',
  /** Minimum Android version the APK runs on. minSdkVersion 24 is Android 7.0. */
  minAndroidVersion: '7.0',
  /** SHA-256 of the exact file `apkUrl` serves. */
  checksum: '1076fc9f3e270b1f29eaae55b009f0dd72f985bfefd181ee348572c11c71b479',
} as const;

/** A value still in its `[PLACEHOLDER]` state: links to it are rendered inert. */
export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');

/*
 * Pinned to `version`, not `releases/latest/download/habits.apk`. The size and checksum above
 * describe one exact file, and a `latest` link would start serving a different APK the moment a
 * new tag ships — leaving a checksum on the page that doesn't match what visitors downloaded,
 * which reads as tampering rather than as staleness.
 */
export const apkUrl = isPlaceholder(release.version)
  ? release.version
  : `${APP_REPO}/releases/download/v${release.version}/habits.apk`;
