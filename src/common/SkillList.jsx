// SkillList component displays an icon and a skill name
function SkillList({ src, skill }) {
  return (
    <span>
      {/* Icon image for the skill */}
      <img src={src} alt="Checkmark icon" />
      {/* Skill name */}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
