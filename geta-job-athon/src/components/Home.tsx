import "../App.css";
import TwitchStream from "./TwitchStream";
import Donate from "./Donate";

function Home() {
  return (
    <div className='home'>
      <section>
        <TwitchStream />
        <div className="card">
          <p className="who">
            My name is Jerry Vrabel and I am hosting a streaming event on January 30th in the hopes of raising visibility of my skills, and talents in the goal of finding gainful employment. A bit of digital buskering, if you will.
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="what">
            What is this about: A streaming event to feature live performances from TBD artists with a live studio audience. There will be games, segments and fun fun fun.
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="where">
            Where: Hosted at the Forwardslash Development Studio located in Rogers Park Chicago
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="when">
            Starts: January 30th, 4pm - til donation goals raised
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="">
            Please Donate
          </p>
          <Donate />
        </div>
      </section>
    </div>
  );
}

export default Home;
