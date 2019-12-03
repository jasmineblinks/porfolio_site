import {ContentfulClientApi, createClient} from 'contentful';
import moment from 'moment';

export class BlogApi {

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }
  async fetchBlogEntries() {
    return await this.client
      .getEntries({
        content_type: "blogPost" // only fetch blog post entry
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const blogPosts = entries.items.map(entry => this.convertPost(entry));
          return blogPosts;
        }
        return [];
      });
  }
  
  async fetchBlogById(id) {
    return await this.client.getEntry(id).then(entry => {
      if (entry) {
        const post = this.convertPost(entry);
        return post;
      }
      return null;
    });
  }
  convertImage = (rawImage) => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well here
        description: rawImage.description,
        title: rawImage.title,
      };
    }
    return null;
  };
  
  convertAuthor = (rawAuthor) => {
    if (rawAuthor) {
      return {
        name: rawAuthor.name,
        phone: rawAuthor.phone,
        shortBio: rawAuthor.shortBio,
        title: rawAuthor.title,
        email: rawAuthor.email,
        company: rawAuthor.company,
        twitter: rawAuthor.twitter,
        facebook: rawAuthor.facebook,
        github: rawAuthor.github,
      };
    }
    return null;
  };
  
  convertPost = (rawData) => {
    const rawPost = rawData.fields;
    const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    return {
      id: rawData.sys.id,
      body: rawPost.body,
      description: rawPost.description,
      publishedDate: moment(rawPost.publishedDate).format('DD MMM YYYY'),
      slug: rawPost.slug,
      tags: rawPost.tags,
      title: rawPost.title,
      heroImage: this.convertImage(rawHeroImage),
      author: this.convertAuthor(rawAuthor),
    };
  };
}
