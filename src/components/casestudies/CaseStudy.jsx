import './casestudies.css'
import RisingStar from '../../assets/work/risingstar.png'

const CaseStudy = ({ items }) => {
  return (
    <div>
      <div>
      {/* Rising star */}
      <h2>{items.title}</h2>
      <p>{items.description}</p>
      <a href={items.siteLink} target="_blank" rel="noopener noreferrer">
        Visit Site
      </a>
      <a href={items.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
        <p>this is the case study component</p>
        <a href=""></a>
      </div>
    </div>
  );
};

export default CaseStudy;
