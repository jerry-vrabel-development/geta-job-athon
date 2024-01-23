import "../App.css";
import TwitchStream from "./TwitchStream";
import Donate from "./Donate";

function Home() {
  return (
    <div className='home'>
      <TwitchStream />
<section>
      <div className="card-container">
        <div className="card">
            <div className="card-title">The Who</div>
            <div className="card-content">
              <p className="text-content">
                The who is I, Jerry Vrabel.  I am a 55 year old web application programmer. I live with my dog, Bash in the Chicago neighborhood of Rogers Park.
              </p>
            </div>
        </div>
        
        <div className="card">
            <div className="card-title">The What</div>
            <div className="card-content">
            <p className="text-content">
              A streaming event on January 30th in the hopes of raising visibility of my skills and talents in the goal of finding gainful employment. A bit of digital buskering, if you will. A streaming event to feature live performances from TBD artists with a live studio audience. There will be games, segments and fun fun fun.
              </p>
              </div>
        </div>

        <div className="card">
            <div className="card-title">The Where</div>
            <div className="card-content">
            <p className="text-content">
            The Where: Hosted at the Forwardslash Development Studio located in Rogers Park Chicago. Streamed live around the world on Twitch and possibly YouTube. That's TBD.
              </p>
              </div>
        </div>

        <div className="card">
            <div className="card-title">The When</div>
            <div className="card-content">
          <p className="text-content">
            The When: Starts: January 30th, 4pm - til donation goals raised
              </p>
              </div>
        </div>

        <div className="card">
            <div className="card-title">The Why</div>
            <div className="card-content">
              <p className="text-content">I am in need... Great need.
                Out of work for over a year. I've sent out 100's of resumes. I am making All efforts, but now I'm behind in all bills.
                Help me stop the imminent disconnections and eviction.
                Donation or opportunities, please help.</p>
              </div>
        </div>

        </div>
      </section>
      <Donate />
    </div>
  );
}

export default Home;
