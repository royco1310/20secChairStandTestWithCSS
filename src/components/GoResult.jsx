import React, { useState } from "react";

export const GoResult = (props) => {
  return (
    <>
      <button className="button" onClick={props.handleClickResult}>
        RESULT
      </button>
    </>
  );
};

export const Result = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClickCopy = () => {
    const div = document.querySelector("#divId");
    const range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setIsCopied(true);
  };
  return (
    <>
      <div id="divId">
        <h2>Here is the result!</h2>
        <p id="testperson">
          Testperson
          <br />
          Gender {props.selectedOptionGender} <br />
          Age group {props.selectedOption}.
        </p>
        <p>Number of stands is {props.count}.</p>
        {props.count < 14 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "60-64" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 13 &&
          props.count < 20 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "60-64" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 19 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "60-64" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 12 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "65-69" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 11 &&
          props.count < 19 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "65-69" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 18 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "65-69" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 12 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "70-74" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 11 &&
          props.count < 18 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "70-74" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 17 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "70-74" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 11 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "75-79" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 10 &&
          props.count < 18 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "75-79" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 17 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "75-79" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 10 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "80-84" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 9 &&
          props.count < 16 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "80-84" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 15 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "80-84" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 8 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "85-89" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 7 &&
          props.count < 15 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "85-89" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 14 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "85-89" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 7 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "90-94" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 6 &&
          props.count < 13 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "90-94" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 12 &&
          props.selectedOptionGender === "Male" &&
          props.selectedOption === "90-94" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 12 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "60-64" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 11 &&
          props.count < 28 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "60-64" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 17 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "60-64" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 11 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "65-69" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 10 &&
          props.count < 17 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "65-69" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 16 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "65-69" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 10 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "70-74" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 9 &&
          props.count < 16 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "70-74" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 15 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "70-74" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 10 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "75-79" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 9 &&
          props.count < 16 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "75-79" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 15 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "75-79" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 9 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "80-84" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 8 &&
          props.count < 15 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "80-84" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 14 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "80-84" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 8 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "85-89" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 7 &&
          props.count < 14 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "85-89" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 13 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "85-89" && (
            <p>This number is above average at this age group.</p>
          )}

        {props.count < 4 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "90-94" && (
            <p>
              This number is below average at this age group and indicats a high
              risk for falls.
            </p>
          )}
        {props.count > 3 &&
          props.count < 12 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "90-94" && (
            <p>This number is average at this age group.</p>
          )}
        {props.count > 11 &&
          props.selectedOptionGender === "Female" &&
          props.selectedOption === "90-94" && (
            <p>This number is above average at this age group.</p>
          )}
      </div>
      <button className="button" onClick={handleClickCopy}>
        SAVE RESULT
      </button>
      {isCopied && <p>Text copied to clipboard!</p>}
    </>
  );
};
