import React from "react";
import Project from "../Project";

function Portfolio(props) {
  return (
    <section>
      <div className="flex-row">
        <Project
          image={require("../../assets/gallery/Pregame.gif")}
          title="Pregame"
          appLink="https://tbellenger.github.io/playlist/"
          repoLink="https://github.com/webgeekbear/playlist"
        ></Project>
        <Project
          image={require("../../assets/gallery/emergency-center-usage.gif")}
          title="Emergency Center"
          appLink="https://emergency-center.herokuapp.com/"
          repoLink="https://github.com/webgeekbear/Emergency-Center"
        ></Project>
        <Project
        image={require("../../assets/gallery/screenshot-property-help-desk.png")}
        title="The help desk for property managers"
        appLink="https://rg-the-help-desk.herokuapp.com/"
        repoLink="https://github.com/webgeekbear/the-help-desk"
      ></Project>
        <Project
          image={require("../../assets/gallery/taskinator.png")}
          title="Taskinator"
          appLink="https://webgeekbear.github.io/taskinator/"
          repoLink="https://github.com/webgeekbear/taskinator"
        ></Project>
        <Project
          image={require("../../assets/gallery/weather-dashboard.png")}
          title="Weather dashboard"
          appLink="https://webgeekbear.github.io/weather-dashboard/"
          repoLink="https://github.com/webgeekbear/weather-dashboard"
        ></Project>
        <Project
          image={require("../../assets/gallery/taskmaster-pro.png")}
          title="Taskmaster Pro"
          appLink="https://webgeekbear.github.io/taskmaster-pro/"
          repoLink="https://github.com/webgeekbear/taskmaster-pro"
        ></Project>
        <Project
          image={require("../../assets/gallery/scheduler.png")}
          title="Scheduler"
          appLink="https://webgeekbear.github.io/scheduler/"
          repoLink="https://github.com/webgeekbear/scheduler"
        ></Project>
      </div>
    </section>
  );
}

export default Portfolio;