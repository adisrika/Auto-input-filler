// ==UserScript== 
// @name		autofiller	
// @namespace	adi.sriku366@gmail.com
// @description	script that autofills to provided value in the script
// @include		https://mail.google.com/*
// ==/UserScript== 
var all_inputs = document.getElementsByTagName('input');

if(all_inputs.length != 0)
{
	var len = all_inputs.length;
	for(i=0;i<len;i++)
	{
		if(all_inputs[i].name == 'Email')
		{
			all_inputs[i].value = 'adi.sriku366'
		}
	}
}
