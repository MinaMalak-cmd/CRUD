const  getSkills =(skills)=>{
    let pos1 = skills.indexOf(",");          
    var pos2 = skills.indexOf(",", pos1 + 1);
    console.log(pos1,skills.slice(0,pos2+1))
    let skillsNo = (skills.match(/,/g) || []).length;
    if(skillsNo<=1)
    return [skills.replace(","," || "),false];
    else{
        return [`${skills.slice(0,pos2).replace(","," || ")}...`,true];
      }
}
export default  getSkills;