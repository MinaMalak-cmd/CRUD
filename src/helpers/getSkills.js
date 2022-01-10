const  getSkills =(skills)=>{
    let skillsNo = (skills.match(/,/g) || []).length;
    let pos1 = skills.indexOf(",");          
    var pos2 = skills.indexOf(",", pos1 + 1);
    if(skillsNo<=1)
      return [skills.replace(","," || "),false];
    return [`${skills.slice(0,pos2).replace(","," || ")}...`,true];
}
export default  getSkills;