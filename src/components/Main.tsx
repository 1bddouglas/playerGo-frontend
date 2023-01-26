import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Main.css";

const Main = () => {
  const currentDate = new Date();
  const hoursValue = currentDate.getHours();
  const dayValue = currentDate.getDay();
  const { user } = useContext(AuthContext);
  const adminID = process.env.REACT_APP_AUTH_UID || "";

  const [randomRule, setRandomRule] = useState("");
  const [hiddenMessage, setHiddenMessage] = useState(false);

  // day number to string name
  const dayOfTheWeekConversion = () => {
    if (dayValue === 0) {
      return "Sunday";
    } else if (dayValue === 1) {
      return "Monday";
    } else if (dayValue === 2) {
      return "Tuesday";
    } else if (dayValue === 3) {
      return "Wednesday";
    } else if (dayValue === 4) {
      return "Thursday";
    } else if (dayValue === 5) {
      return "Friday";
    } else if (dayValue === 6) {
      return "Saturday";
    }
  };
  // time number into AM/PM
  const hourConversion = () => {
    if (hoursValue < 12) {
      return `${hoursValue} A.M.`;
    } else if (hoursValue > 12) {
      return `${hoursValue - 12} P.M.`;
    } else {
      return `${hoursValue} P.M.`;
    }
  };
  const sundayArray = [
    "Most Recently Drove ",
    "Most Recently Ate at a Restaurant ",
    "Most Facebook Friends ",
    "Age Closest to a Prime Number ",
    "Lightest Player ",
    "Most Recently Rode a Bike ",
    "Longest Hair ",
    "Most Recently Been Out of State ",
    "Least Countries Visited ",
    "Each Player Choose a Number, 1-6: Lowest Unique ",
    "Most Recently Called Someone ",
    "Most Recently Watched TV ",
    "Last to Arrive at Current Location ",
    "Closest to Last Games’ Winner ",
    "Wearing Most Purple ",
    "Most Past Cars ",
    "Least Cousins ",
    "Longest Since Winning ",
    "Lowest First Digit of Phone Number ",
    "Longest Since Going Inside ",
    "Wearing Most Blue ",
    "Most Recently Rode on a MotorCycle ",
    "Most Recently Had Class ",
    "Most Recently Microwaved Food",
  ];

  const mondayArray = [
    "Draw Cards: High Card",
    "Most Zippers on Clothes",
    "Thirstiest Player",
    "Player Who has Studied the Most Languages",
    "Most Recently Ate Sandwich",
    "Most Recently Watched a Movie",
    "Assign Each Player a Component: Randomly Draw",
    "Most Recently in a Dentists' Office",
    "Roll Two Die: Furthest from Seven",
    "Best Eye Sight",
    "Shortest Arms",
    "Roll Two Die: Closest to Four",
    "Oldest Player",
    "Most Recently Skipped a Meal",
    "Most Recent Haircut",
    "Likes chocolate the least",
    "Read the Bible the longest ago",
    "Most Recently Wore a Hat",
    "First to Arrive at Current Location",
    "Most Recently Rode on a Boat",
    "Smallest Shoe Size",
    "Most Recently Ate Nuts",
    "Went to Bed Earliest Last Night",
    "Most Cousins on Dad's Side",
  ];

  const tuesdayArray = [
    "Most Buttons on Clothes ",
    "Draw Cards, Low Card ",
    "Most Recently had a Bagel ",
    "Most Facial Hair ",
    "Most Pockets ",
    "Most Recently Played a Sport ",
    "Most Recently Attended the Cinema ",
    "Got an Oil Change Longest Ago",
    "Most Recently Observed a Sunrise",
    "Told their Mother they Love Her Longest Ago",
    "Most People In Family ",
    "Furthest from Home ",
    "Most Recently Had Phone Die ",
    "Youngest ",
    "Most Recently Had Pork ",
    "Person Reading this Rule ",
    "Most Recently Wore a Suit ",
    "Most Recently Prayed ",
    "Most Recently Flew in an Airplane ",
    "Wearing Most Orange ",
    "Most Recently Bitten by a Bug ",
    "Went to Bed Latest Last Night ",
    "Most Recently Bought Something ",
    "Woke up Latest",
  ];

  const wednesdayArray = [
    "Most Recently on an Island ",
    "Most Recently Visited their High School ",
    "Roll Two Die: High Roll ",
    "Shortest Middle Name ",
    "Most States Visited ",
    "Most Recently Entered a Hospital ",
    "Loser of Last Game ",
    "Most Recently Watched a Movie (Cinema) ",
    "Most Money on Hand ",
    "Hungriest Player ",
    "Nearest to Home ",
    "Most Recently Played an Instrument ",
    "Longest Arms ",
    "Roll One Dice: High Roll ",
    "Most Vowels in Name ",
    "Most Recently Wore a Costume ",
    "Wearing Most Red ",
    "Most Recently Wore a Tie ",
    "Wearing Most Yellow ",
    "Least Money Over Zero ",
    "Most Siblings ",
    "Each Player Choose Number 1-6: Highest Unique ",
    "Woke Up Earliest ",
    "Most Recently Sold Something",
  ];

  const thursdayArray = [
    "Player Whose Father has the Shortest Name ",
    "Most Recently Had Soup ",
    "Longest Middle Name ",
    "Roll Two Die: Low Roll ",
    "Most Recently Had Salad ",
    "Most Countries Visited ",
    "Most Recently Bled ",
    "Least Money on Hand ",
    "Most Recently Had Cheese ",
    "Last Birthday ",
    "Person with Most Coins ",
    "Guess Time: Closest Wins ",
    "Fewest People in Family ",
    "Most Recently on a Date ",
    "Roll Two Die: Closest to Eleven ",
    "Least Vowels in Name ",
    "Player to the Right of Previous Winner ",
    "Wearing Most Green ",
    "Least Past Jobs ",
    "Least Siblings ",
    "Player with the Last Turn of Previous Game ",
    "Highest First Digit of Phone Number ",
    "Most Recently Took a Photo ",
    "Larges Shoe Sizes",
  ];

  const fridayArray = [
    "Most Recently Used Bathroom ",
    "Shortest First Name ",
    "Most Recently Had Steak ",
    "Most Recently Swam ",
    "Tallest Player ",
    "Follow Official Rule of Last Game Played ",
    "Heaviest Player ",
    "Roll One Dice: Low Roll ",
    "Next Birthday ",
    "Most Recently Took Medicine ",
    "Owner Goes First ",
    "Fewest Pets over Zero ",
    "Wearing Most Brown ",
    "Most Recently Read a Book ",
    "Most Recently Sick ",
    "Longest Since Starting ",
    "Longest Name ",
    "Most Past and Current Jobs ",
    "Most Cousins ",
    "Same as Last Game ",
    "Highest Last Digit of Phone Number ",
    "Most Recently Posted on a Social Network ",
    "Wearing Least White ",
    "Most Recently Visited a Library",
  ];

  const saturdayArray = [
    "Longest First Name ",
    "Most Recently Showered ",
    "Player whos Mother has the Shortest Maiden Name ",
    "Most Recently Had Chicken ",
    "Age Closest to Multiple of Six ",
    "Shortest Player ",
    "Most Recently Been out of Country ",
    "Shortest Hair ",
    "Person With Least Coins Over Zero ",
    "Least States Visited ",
    "Most Recently Changed Clothes ",
    "Players Choice ",
    "Most Pets ",
    "Wearing Least Gray ",
    "Most Recently Ate a Burger ",
    "Boldest Goes First ",
    "Least Past and Current Cars ",
    "Shortest Name ",
    "Player to the Left to of Previous Winner ",
    "Lowest Last Digit of Phone Number ",
    "Most Recently Outside ",
    "Wearing Least Black ",
    "Most Recently Visited a Bank ",
    "Most Recently Had Work",
  ];

  // array to hold the entire week of arrays
  const mainArray = [
    sundayArray,
    mondayArray,
    tuesdayArray,
    wednesdayArray,
    thursdayArray,
    fridayArray,
    saturdayArray,
  ];

  //create a function to select an instruction based on day and time
  const instructionSelector = () => {
    let instruction = "";
    mainArray.forEach((array) => {
      if (mainArray.indexOf(array) === dayValue) {
        instruction = array[hoursValue];
      }
    });
    return instruction;
  };

  // concatonate our arrays into one larger array for random selection
  const weekdayArray = sundayArray.concat(
    mondayArray,
    tuesdayArray,
    wednesdayArray,
    thursdayArray,
    fridayArray,
    saturdayArray
  );

  // function to generate random instructions
  const randomizeInstruction = () => {
    setRandomRule(
      weekdayArray[Math.floor(Math.random() * weekdayArray.length)]
    );
    console.log(randomRule);
  };

  const signInHandler = () => {
    signInWithGoogle();
  };

  console.log(user);

  useEffect(() => {
    if (user?.uid !== adminID && user) {
      setHiddenMessage(true);
      setTimeout(() => {
        setHiddenMessage(false);
        signOut();
      }, 2500);
    }
  }, [user]);

  return (
    <div className="Main">
      <p className="time">
        The time is {hourConversion()} on {dayOfTheWeekConversion()}
      </p>
      <div className="border-div">
        <div className="instructions-div">
          <h3>Player-Go-First Instructions:</h3>
          <p className="instructions">{instructionSelector()}</p>
        </div>
      </div>
      <div className="border-div">
        <div className="random-instructions">
          <button className="random-button" onClick={randomizeInstruction}>
            Choose a random rule
          </button>
          <p className="random-rule">{randomRule}</p>
        </div>
      </div>
      <div className="create-div">
        <h3>Create Your Own Rule!</h3>
        <Link className="link" to={"/user-rules"}>
          User Rules
        </Link>
      </div>

      {user?.uid === adminID && (
        <Link className="link" to={"/submissions"}>
          Manage Submissions
        </Link>
      )}

      {/* Developer sign-in button */}
      <button className="sign-in" onClick={signInHandler}></button>

      {/* Cheeky non-adin message */}
      {hiddenMessage && (
        <div className="hidden-msg">
          <p>
            Hey, you found our sneaky admin sign-in button! Congrats! Go away
            now!
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
