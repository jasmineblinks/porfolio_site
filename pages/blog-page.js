import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import BlogApi from "../services/blog";
const BlogBox = (props) => {

  return <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
}
export default class BlogPage extends React.Component {
  static async getInitialProps() {

    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
  }
  renderBlogList = entries =>
    entries.map((entry, i) => {
      return (
        <BlogBox
          key={i}
          id={entry.id}
          slug={entry.slug}
          imageUrl={entry.heroImage.imageUrl}
          title={entry.title}
          author={entry.author.name}
          description={entry.description}
          tags={entry.tags}
        />
      );
    });

  render() {
    const { entries } = this.props;
    return (
      <Layout>
        <h1>Blog</h1>
        <div className="row mt-3">
          {entries.length > 0 && this.renderBlogList(entries)}
        </div>
      </Layout>
    );
  }
  render() {

    return <Layout title="Blog-page">
      <h1>Blog page</h1>
      <div className="card">
        <div>
          <img src="/static/com.jpeg" width="300px" height="100px" />
          <Link href="https://www.facebook.com/pueneh.faithkb">
            <a>My Experience With Zeit</a>
          </Link>
        </div>
        <div>
          <img src="/static/com.jpeg" width="300px" height="100px" />
          <Link href="https://www.facebook.com/pueneh.faithkb">
            <a>How to build static site using Next.js</a>
          </Link>
        </div>
        <div>
          <img src="/static/com.jpeg" width="300px" height="100px" />
          <Link href="https://www.facebook.com/pueneh.faithkb">
            <a>My Experience With Zeit</a>
          </Link>
        </div>
        <div>
          <img src="/static/com.jpeg" width="300px" height="100px" />
          <Link href="https://www.facebook.com/pueneh.faithkb">
            <a>My Experience With Zeit</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
      * {
        margin: 0px;
        padding: 0px;
      }

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-family: BlinkMacSystemFont;
        background: linear-gradient(
            rgba(232, 104, 93, 0.6),
            rgba(232, 104, 93, 0.5)
          ),
          url("/static/lap.jpg");
        background-repeat: no repeat;
        height: 100px;
        color: #fff;
      }

      .card {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 20px;
        margin-left: 20px;
        margin-top: 50px;
        min-height: calc(100vh - 40px);
      }

      @media only screen and (min-width: 335px) and (max-width: 959px) {
        h1 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          min-height: calc(100vh - 40px);
          justify-content: center;
          align-items: center;
        }
        .card img {
          width: 360px;
          height: 100px;
        }
      }
    `}</style>
    </Layout>
  }
}


