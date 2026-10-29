/*
 * The only file to edit when a new version ships.
 *
 * Every value below starts as a placeholder. Until one is filled in, the page still renders: the
 * App Store button and the APK links are disabled instead of pointing nowhere (see `isPlaceholder`),
 * and the version, size, minimum Android version and checksum show as the placeholder text.
 */
export const release = {
  /** App Store listing, e.g. https://apps.apple.com/app/id0000000000 */
  appStoreUrl: '[APP STORE URL]',
  /** Direct link to the .apk file, served with the `download` attribute. */
  apkUrl: '[APK URL]',
  /** Marketing version of the APK, e.g. 1.0.1 — matches package.json in the app repo. */
  version: '[VERSION]',
  /** APK size in megabytes, as a bare number, e.g. 42 */
  size: '[SIZE]',
  /** Minimum Android version the APK runs on, e.g. 8.0 */
  minAndroidVersion: '[MIN VERSION]',
  /** `shasum -a 256 habits.apk` of the exact file apkUrl serves. */
  checksum: '[CHECKSUM]',
} as const;

/** A value still in its `[PLACEHOLDER]` state: links to it are rendered inert. */
export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');
