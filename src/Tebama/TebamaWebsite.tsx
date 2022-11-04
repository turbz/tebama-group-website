import TebamaHeader from "./components/TebamaHeader/TebamaHeader";
import TebamaBanner from "./components/TebamaBanner/TebamaBanner";
import TebamaFooter from "./components/TebamaFooter/TebamaFooter";

import "./TebamaWebsite.css";
import TebamaServices from "./components/TebamaServices/TebamaServices";
import AboutTebama from "./components/AboutTebama/AboutTebama";
import TebamaContact from "./components/TebamaContact/TebamaContact";
import TebamaTeam from "./components/TebamaTeam/TebamaTeam";
import TebamaPartners from "./components/TebamaPartners/TebamaPartners";

export default function TebamaWebsite() {
  return (
    <div className="Tebama-Website">
      <TebamaHeader />
      <TebamaBanner />
      <AboutTebama />
      <TebamaServices />
      <TebamaTeam />
      <TebamaContact />
      <TebamaPartners />
      <TebamaFooter />
    </div>
  );
}
