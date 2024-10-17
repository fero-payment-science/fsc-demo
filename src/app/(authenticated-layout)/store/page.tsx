import BrowserModule from "./_components/browser-module";
import StepTextContainer from "./_components/step-text-container";

export default function StorePage(){
    return (
      <div className="w-full h-full grow flex items-center justify-evenly">
        <BrowserModule>
          <h1>STORE</h1>
        </BrowserModule>
        <StepTextContainer />
      </div>
    );
}
