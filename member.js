function skillsMember(){
    var member = document.getElementById("member");
    var memberSkill = document.getElementById("memberSkill");
    var memberSkillValue = document.getElementById("memberSkillValue");
    memberSkill.innerHTML = member.value;
    memberSkillValue.value = member.value;
}