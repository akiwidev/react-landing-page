import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Ubermensch revaluation against mountains free merciful strong chaos virtues law enlightenment chaos hope intentions. Strong evil aversion god decieve free mountains pinnacle transvaluation faith ocean derive contradict. Against justice pinnacle.",
  },
  {
    title: "Become the tended active",
    text: "Sea oneself dead sea society. Gains faith christianity burying hope zarathustra depths love ideal. Ideal zarathustra contradict ideal pious zarathustra joy burying will battle philosophy madness sea. Burying gains snare.",
  },
  {
    title: "Message or am nothing",
    text: "Value war horror aversion eternal-return salvation ultimate transvaluation christian dead pious spirit grandeur. Transvaluation deceptions battle pinnacle grandeur hatred hope. Strong battle joy play pinnacle disgust oneself ultimate. Deceptions spirit.",
  },
  {
    title: "Really boy law country",
    text: "War hope sexuality disgust snare noble merciful convictions decrepit snare burying good mountains law. Gains derive against depths dead horror insofar christianity oneself. Joy dead society value strong gains god.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and You Just Need To Realize It. Step into the
          Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
