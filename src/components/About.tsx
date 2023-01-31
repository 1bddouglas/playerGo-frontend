import "./About.css";
import screenshot from "../assets/PG-screenshot.png";

const About = () => {
  return (
    <div className="About">
      <h2>About Our App</h2>
      <p>
        Welcome to Player Go, an application designed with board games and those
        who play them in mind. Almost all board games you might be interested in
        have their own rules for deciding who goes first, but with repeated
        sessions of the same game you and your friends may become tired of using
        that same, boring rule. Player Go provides an alternative to selecting a
        first player.
      </p>
      <p>
        For each hour of each day of the week, Player Go displays a rule which
        is taken from a large collection. These rules are consistent from week
        to week (i.e. every Wednesday at 6 P.M., you’ll find the same result).
        For those looking to shake things up even more, Player Go includes an
        option to randomly pick a rule from any of those in the weekly
        collection. Additionally, users of the app can submit their own rules to
        be reviewed by the developers, as well as see suggestions given by other
        users for even more variety.
      </p>
      <div className="history-div">
        <p>
          Player Go was started by John during his time at college, when he and
          his board game-loving friends found the player choice rules in their
          games were growing stale. He sought to remedy this, and so set about
          creating a grid from which a new rule for selection could be taken
          based on the hour and day of the week. Player Go turned out to be a
          hit amongst John’s friends, and was used for years to come.
          Eventually, Joe, a good friend of John and a web developer, decided to
          make an online version of Player Go with a randomizing option to add
          more variety. Throughout its life, Player Go has not only helped bring
          some variety to the setup stages of many board game sessions, but also
          served to spark interesting and often comical discussions as players
          try to figure out who best fits a newly picked rule.
        </p>
        <div className="PG2-div">
          <img src={screenshot} alt="Player Go 2.0" />
          <p>Player Go v2.0</p>
        </div>
      </div>
      <p>
        It is this series of events that lead to the app you are seeing right
        now. As friends of John and Joe, we decided to take Player Go and spruce
        it up from its very minimalist functionality. We hope that Player Go
        helps bring extra fun to your games the same way it has for us over all
        these years.
      </p>
    </div>
  );
};

export default About;
