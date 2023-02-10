import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "deck.", // Types 'One'
        3000, // Waits 1s
        "patio.", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "staircase.", // Types 'Three' without deleting 'Two'
        3000, // Waits 2s
        "interior.", // Types 'Three' without deleting 'Two'
        3000,
        "big project.", // Types 'Three' without deleting 'Two'
        3000,
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};
export default Typewriter;
