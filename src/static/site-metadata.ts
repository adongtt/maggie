interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "Maggie's Running Page",
  siteUrl: 'https://adongtt.github.io/running',
  logo: 'https://www.custombaseballgloves.com/static/images/maggie.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/running/',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/running/',
    },
  ],
};

export default data;
