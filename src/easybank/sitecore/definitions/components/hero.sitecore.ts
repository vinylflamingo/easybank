import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Hero component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function Hero(manifest: Manifest) {
  manifest.addComponent({
    name: 'Hero',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
