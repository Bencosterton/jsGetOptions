// Save the bellow script as a bookmark to access the function //


//wget for a certain file type. loading the js into a page will ask for a file by type, then download all files with that type in a directory //

javascript:!function(){var t=prompt("Enter filetype to download (format: .mp3)");if(null!==t)for(var e=document.querySelectorAll('[href$="'+t+'"]'),o=0;o<e.length;o++)e[o].setAttribute("download",""),e[o].click();else alert("No format")}();

//load images files as thumbnails in any directory //

javascript:(function(){function I(u){var t=u.split('.'),e=t[t.length-1].toLowerCase();return {gif:1,jpg:1,jpeg:1,png:1,mng:1}[e]}function hE(s){return s.replace(/&/g,'&amp;').replace(/>/g,'>').replace(/</g,'<').replace(/"/g,'&quot;');}var q,h,i,z=open().document;z.write('<p>Images linked to by '+hE(location.href)+':</p><hr>');for(i=0;q=document.links[i];++i){h=q.href;if(h&&I(h))z.write('<p>'+q.innerHTML+' ('+hE(h)+')<br><img src="'+hE(h)+'">');}z.close();})()


//load images in a gallery as thumnails in any directory //

javascript:var sHTML="<html><head><title>gallery</title><body><center><table border=0>";var y=0;for(x=0;x<document.links.length;x++){a=document.links[x].href; if (a.match(/jpe|jpeg|jpg|bmp|tiff|tif|bmp|gif|png/i)){sHTML+='<td style="border-style:solid;border-width:1px"><a target="_new" href="'+a+'"><img border="0" width="100" src="'+a+'"></a></td>'; if (!((x+1)%5)) sHTML+="</tr><tr>"}};this.innerHTML=sHTML+"</table></center></body></html>";

