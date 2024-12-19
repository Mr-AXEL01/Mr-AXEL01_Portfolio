import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backTtechnologies } from "../constants"; 
import { frontendTechnologies } from "../constants"; 
import { devopsAndToolsTechnologies } from "../constants"; 

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {backTtechnologies.map((backTechnology) => (
        <div className="w-28 h-28" key={backTechnology.name}>
          <BallCanvas icon={backTechnology.icon} />
        </div>
      ))}

      {frontendTechnologies.map((frontTechnology) => (
        <div className="w-28 h-28" key={frontTechnology.name}>
          <BallCanvas icon={frontTechnology.icon} />
        </div>
      ))}

      {devopsAndToolsTechnologies.map((devopsAndToolTechnology) => (
        <div className="w-28 h-28" key={devopsAndToolTechnology.name}>
          <BallCanvas icon={devopsAndToolTechnology.icon} />
        </div>
      ))}
      
    </div>
  )
}

export default SectionWrapper(Tech, "techs")