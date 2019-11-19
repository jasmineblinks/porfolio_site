
import Layout from '../components/layout';

const About = () => (
  <Layout title="About-page">
    <div className="about-head">
    <h1>About</h1>
    </div>
    
    
    <div className="about-text">
      <img src="/static/me.jpg" width="250px" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
        nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Praesent gravida a diam ut faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed sed nibh a ipsum sagittis finibus ac in magna. Curabitur id mauris quis nulla commodo
        tristique.
      </p>
      <p>
        Nunc eu mi et justo sodales vehicula. Vestibulum velit erat, tincidunt sed tortor id, viverra egestas felis.
        Cras in ullamcorper ex. Etiam diam lacus, interdum sed rhoncus vel, ultricies ut nisi. Nam ut orci at ante
        auctor mollis. Phasellus eget augue ac nibh vestibulum pellentesque. Nulla enim augue, placerat id malesuada at,
        maximus sed tortor.
      </p>
    </div>
    <style jsx>{`
    *{
      margin : 0px;
       padding: 0px;
    }
     .about-head{
      display: flex;
      justify-content: center;
        align-items: center;
      margin:auto;
       font-family:BlinkMacSystemFont;
      background: linear-gradient(
        rgba(232, 104, 93, 0.60),
        rgba(232, 104, 93, 0.50) 
      
      ), url("/static/lap.jpg");
      background-repeat:no-repeat;
      height:100px;
      color:#fff;
      

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
      @media only screen and (min-width: 335px) and (max-width: 959px){
        .about-head{
          display: flex;
      justify-content: center;
        align-items: center;
        }
        .about-text img {
              float: right;
              width:150px;
              margin-right:10px;
              // display: block;
              // margin: 0 auto 30px;
            }
            .about-text{
              font-size:16px;
              font-family:sans serif;
              text-align:left;
             
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