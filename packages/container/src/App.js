import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);

export default () => {
  return (
    <div>
      <h1>Container App</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
