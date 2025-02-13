import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [

  {
    title: 'Garage Method',
    href: 'https://www.ibm.com/garage/method',
  },
  {
    title: 'IBM Cloud',
    href: 'https://www.ibm.com/cloud',
  },
  {
    title: 'Github Org',
    href: 'https://github.com/ibm-garage-cloud',
  }



];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
