import * as React from "react";
import { Bot } from "../bot";


export type ButtonProps = {
    visibility: boolean;
    toggleVisibility: () => void;
    onAgree: (response: string) => void;
    onDeny: (response: string) => void;
    response: string;
  };
  
  export const HideShowButton = (props: ButtonProps) => {
    React.useEffect(() => {

      const handleResponse = (response: string) => {
        if (response === "yes") {
          props.onAgree(props.response);
        } else if (response === "no") {
          props.onDeny(props.response);
        }
      }
  
      window.addEventListener("keydown", (event) => {
        if (event.key === "y") {
          handleResponse("yes");
        } else if (event.key === "n") {
          handleResponse("no");
        }
      });
  
      return () => {
        window.removeEventListener("keydown", (event) => {
          if (event.key === "y") {
            handleResponse("yes");
          } else if (event.key === "n") {
            handleResponse("no");
          }
        });
      }
    }, [props.onAgree, props.onDeny, props.response]);
  
    if (!props.visibility) {
      return null;
    }
    return (
      <div>
        <button
          className="text-white p-4 m-2 bg-lime-600 box-border rounded-xl"
          onClick={() => props.onAgree(props.response)}
        >
          Agree
        </button>
        <button
          className="text-white p-4 m-2 bg-red-600 box-border rounded-xl"
          onClick={() => props.onDeny(props.response)}
        >
          Deny
        </button>
        
      </div>
    );
  };




   //  the old version of this component
// export type ButtonProps = {
//     visibility: boolean;
//     toggleVisibility: () => void;
//     onAgree: () => string;
//     onDeny: () => string;
//   };
  
//   export const HideShowButton = (props: ButtonProps) => {
//     if (!props.visibility) {
//       return null;
//     }
//     return (
//       <div>
//         <button
//           className="text-white p-4 m-2 bg-lime-600 box-border rounded-xl"
//           onClick={props.onAgree}
//         >
//           Agree
//         </button>
//         <button
//           className="text-white p-4 m-2 bg-red-600 box-border rounded-xl"
//           onClick={props.onDeny}
//         >
//           Deny
//         </button>
//       </div>
//     );
//   };
  