jQuery(document).ready(function(){
	jQuery('a.hc_rse_more_info').click(function(event){
		//if the link with the id:  upcoming_more_39  is clicked then show
		//the table cell with id:  rse_extra_info_upcoming_39
		event.preventDefault();
		var idmatch = /(daterange|past|upcoming|all)(-reverse)?_more_(\d+)/g;
		var matches = idmatch.exec(jQuery(this).attr('id'));
		var infoID = "";

		if(matches[2] == undefined){ //no reverse option
    		infoID = 'td#hc_rse_extra_info_' + matches[1] + '_' + matches[3];
    	}else{
    		infoID = 'td#hc_rse_extra_info_' + matches[1] + matches[2] + '_' + matches[3];
    	}

		if(jQuery(infoID).hasClass('hidden')){
			jQuery(this).text(objectL10n.HideInfo);
	    }else{
			jQuery(this).text(objectL10n.MoreInfo);
		}

		jQuery(infoID).toggleClass('hidden');
	});
});
