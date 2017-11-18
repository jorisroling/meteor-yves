import lyves from 'yves/dist/yves.js'
yves = lyves;
var yvesHtml=yves.inspector({maxLength:-1,functions:false,html:true,colors:true});
var counter=0;

Template.registerHelper('yves', function(obj,hostPattern,absolute) 
{
	if (hostPattern && typeof hostPattern=='string' && hostPattern.length && !new RegExp(hostPattern).test(window.location.hostname)) return '';
	if (typeof hostPattern=='boolean' && !hostPattern) return '';
	counter++;
	var result='&nbsp;<i class="fa fa-eye" style="color:red;z-index:99999" onClick="$(\'.yves_'+counter+'\').toggle();return false;"></i><div class="yves_'+counter+'" style="display:none;clear:both;"></div><div class="yves_'+counter+'" style="display:none">'+yvesHtml(obj)+'</div>';
	if ((typeof absolute=='boolean' && absolute) || (typeof absolute=='string' && absolute=='absolute')) result='<div style="position:absolute;z-index:999999">'+result+'</div>';
	return result;
});

