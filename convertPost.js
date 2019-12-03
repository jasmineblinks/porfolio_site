export const convertPost = (rawData) => {
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
      metaTitle: rawPost.metaTitle,
      metaDescription: rawPost.metaDescription,
      metaImage: rawPost.metaImage
        ? rawPost.metaImage.fields.file.url.replace('//', 'http://')
        : '',
    };
  };