import Layout from "../components/layout";

const About = () => (
  <Layout title="About-page">
    <div className="about-head">
      <h1>About</h1>
    </div>

    <div className="about-text">
      <img src="/static/me.jpg" width="250px" />
      <p>
        Faith Pueneh is a front-end developer, she enjoys problem-solving, and
        loves creating dynamic and beautiful web applications. As a Front-End
        Developer with knowledge of UI/UX, Faith has been saddled with the
        responsibility of implementing visual and interactive elements that
        users engage with through their web browser when using a web
        application. Faith is an advocate for women in tech, a volunteer-lead at
        the women who code front-end community plus team member of facebook
        developers circle,port harcourt.
      </p>
    </div>
    <style jsx>{`
      * {
        margin: 0px;
        padding: 0px;
      }
      .about-head {
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
        background-repeat: no-repeat;
        height: 100px;
        color: #fff;
      }

      .about-text {
        color: #000;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media only screen and (min-width: 335px) and (max-width: 959px) {
        .about-head {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-text img {
          float: right;
          width: 150px;
          margin-right: 10px;
          // display: block;
          // margin: 0 auto 30px;
        }
        .about-text {
          font-size: 16px;
          font-family: sans serif;
          text-align: left;
        }
      }
      // @media (max-width: 600px) {
      //   .about-text img {
      //     float: none;
      //     display: block;
      //     margin: 0 auto 30px;
      //   }
      // }
    `}</style>
  </Layout>
);

export default About;
