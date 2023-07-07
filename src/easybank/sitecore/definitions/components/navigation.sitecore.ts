import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the navigation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function navigation(manifest: Manifest) {
  manifest.addComponent({
    name: 'Navigation',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'logo', type: CommonFieldTypes.Image },
      { name: 'links', type: CommonFieldTypes.ContentList },
      { name: 'requestLink', type: CommonFieldTypes.GeneralLink },
      { name: 'requestLinkTitle', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
