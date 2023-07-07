// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 */
export default function GenericLinkTemplate(manifest: Manifest) {
  manifest.addTemplate({
    name: 'generic-link-template',
    fields: [
        { name: 'linkTitle', type: CommonFieldTypes.SingleLineText },
        { name: 'link', type: CommonFieldTypes.GeneralLink },
    ],
  });
}